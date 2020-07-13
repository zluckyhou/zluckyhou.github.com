#!/usr/bin/env python
# coding: utf-8

# In[2]:


import datetime
import pandas as pd
import tushare as ts
import sys
import requests


# In[3]:


# tushare_token = sys.argv[1]
tushare_token = 'c0641675f20fa1b0c0787235e132a60a1242a89bdf953952773d71e5'
ts.set_token(tushare_token)

pro = ts.pro_api(tushare_token)


# ## 定义股票价格四线预警类

# In[17]:


class stock_alert(object):
    def __init__(self,stock_code):
        self.stock_code = stock_code
        self.today = datetime.datetime.today().date()
    
    # 获取实时数据
    def get_real_info(self):
        df_real = ts.get_realtime_quotes(self.stock_code.split('.')[0])
        df_real['price'] = df_real['price'].astype(float)
        df_real['pre_close'] = df_real['pre_close'].astype(float)
        real_info = df_real.iloc[0].to_dict()
        real_info['return'] = (real_info['price'] - real_info['pre_close'])/real_info['pre_close']
        df_real['date'] = pd.to_datetime(df_real['date'])
        df_real['date_week'] = df_real['date'].apply(lambda x:x + datetime.timedelta(4 - x.weekday()))
        data_real = df_real[['date','date_week','price']]
        data_real.columns = ['date','date_week','close']
        return real_info,data_real
    
    # 获取历史数据
    def get_history_info(self):
        real_info,data_real = self.get_real_info()
        
        start_date = (self.today+datetime.timedelta(-500)).strftime('%Y%m%d')
        end_date = ''.join(real_info['date'].split('-'))
        df = ts.pro_bar(ts_code=self.stock_code, adj='qfq', start_date=start_date, end_date=end_date,ma=[5, 20, 50])
        df['date'] = df['trade_date'].apply(lambda x:datetime.datetime.strptime(x,'%Y%m%d'))
        # 添加当周周五，计算周均线
        df['date_week'] = df['date'].apply(lambda x:x + datetime.timedelta(4 - x.weekday()))
        data_history = df.sort_values(by=['date'],ascending=False).loc[1:][['date','date_week','close']]
        return data_history
    
    # 合并实时数据与历史数据
    def merge_data(self):
        real_info,data_real = self.get_real_info()
        data_history = self.get_history_info()
        data = pd.concat([data_real,data_history])
        return data
    
    # 计算5日、21日、60日、5周线、21周线、60周线
    def calc_ma(self):
        data = self.merge_data()
        data['ma5'] = data['close'][::-1].rolling(5).mean()[::-1]
        data['ma21'] = data['close'][::-1].rolling(21).mean()[::-1]
        data['ma60'] = data['close'][::-1].rolling(60).mean()[::-1]
        ma21_week = data.groupby('date_week')['close'].first().rolling(21).mean().to_frame(name = 'ma21_week').reset_index()
        ma60_week = data.groupby('date_week')['close'].first().rolling(60).mean().to_frame(name = 'ma60_week').reset_index()
        data_21week = pd.merge(data,ma21_week,on='date_week')
        data_60week = pd.merge(data_21week,ma60_week)
        return data_60week
    
    # 输出最新价及4线
    def print_info(self):
        data_60week = self.calc_ma()
        real_info,data_real = self.get_real_info()
        ma_info = data_60week.iloc[0].to_dict()
        ma_ls = [ma_info['ma21'],ma_info['ma60'],ma_info['ma21_week'],ma_info['ma60_week']]
        flag_ls = [float(real_info['price']) >= i for i in ma_ls]
        price_dis = sum([(real_info['price']-i)/i for i in ma_ls])/4
        ma_content = '|'.join([f'`{x:.2f}`' if y else f'{x:.2f}' for (x,y) in list(zip(ma_ls,flag_ls))])
#         mark_ls = ['最新价在此上方' if flag  else '最新价在此下方' for flag in flag_ls]
#         print_info = f'''{real_info["time"]}|{real_info["name"]}({real_info["code"]})|{real_info["price"]}|处于{sum(flag_ls)}线上方|<font color={mark_ls[0]}>{ma_info["ma21"]:.2f}</font>|<font color={mark_ls[1]}>{ma_info["ma60"]:.2f}</font>|<font color={mark_ls[2]}>{ma_info["ma21_week"]:.2f}</font>|<font color={mark_ls[3]}>{ma_info["ma60_week"]:.2f}</font>'''
        print_info = f'{real_info["time"]}|{real_info["name"]}|{real_info["code"]}|`{real_info["price"]}`|{real_info["return"]:.2%}|处`{sum(flag_ls)}`线上方|{price_dis:.2%}|{ma_content}'
#         print_info = f'{real_info["time"]}, {real_info["name"]}({real_info["code"]}), 最新价{real_info["price"]}, 处于{sum(flag_ls)}线上方\n\n21日线|60日线|21周线|60周线\n---|---|---|---\n{ma_info["ma21"]:.2f}|{ma_info["ma60"]:.2f}|{ma_info["ma21_week"]:.2f}|{ma_info["ma60_week"]:.2f}'
        ma_nums = sum(flag_ls)
        return print_info
        


# # 写入blog

# In[4]:


# wechatkey = sys.argv[2]


# In[5]:


# def wechatMsg(msg,wechatkey):
# #     env_dist = os.environ
#     # key1 = env_dist.get('wechat_key1')  # John
#     # key2 = env_dist.get('wechat_key2') # Shin
#     # keys = [key1,key2]
#     params = {'text':'股价4线提示','desp':f'<font color=red>红色</font>表示处于最新价下方，<font color=green>绿色</font>表示处于最新价上方\n\n{msg}'}
#     url = f'http://sc.ftqq.com/{wechatkey}.send'
#     requests.get(url,params = params)


# In[14]:


mystocks = ['300136.SZ','300618.SZ','300496.SZ','603019.SH','603611.SH','600446.SH','603799.SH','300348.SZ','300377.SZ']

msg_ls = []
for stock in mystocks:
    mystock = stock_alert(stock)
    print_info = mystock.print_info()
    msg_ls.append(print_info)


# In[15]:


header = '时间|名称|代码|最新价|涨跌幅|位置|距离|21日线|60日线|21周线|60周线\n---|---|---|---|---|---|---|---|---'

table = header + '\n' + '\n'.join(msg_ls)


# In[16]:


print(table)


# In[114]:


blog_title = '''
---
layout: post
title: 股价四线法则实时数据
date: 2020-5-10
categories: blog
tags: [python,stock]
description: stock index alert
---
'''


# In[115]:


blog_paragraph = '''
本文根据雪球大v[古泉](https://xueqiu.com/u/7148646888)的[古泉四线法则](https://xueqiu.com/7148646888/130498192)，计算了自己的一些自选股当前所处位置，用于持续追踪验证，帮助自己进行判断。

**说明**：下表中4线对应取值为`红色`表示最新价处于对应指标上方，属正面
'''


# In[116]:


blog_tile = '''
```
古泉4线法则的精髓如下。抓住21日线、60日线、21周线及60周线等四条线，外加21月线，任何一只股票上涨都要穿过这四条线，任何一只股票要想爆雷也要先下穿过这四条线：

+ 当股价爬上四条线中的两条可以少量建仓

+ 爬上四条线中的三条可以加大仓位

+ 爬上四条线中的四条可以全仓

任何一只大牛，其股价都会坚守在21月线上方，不会轻易跌破21月线；相反，每跌破四条线中一条就减一些仓位：

+ 21周线可做为多空分水岭及警戒线，股价在21周线及60周线下方就要十分慎重，多看少做

+ 跌破全部四条线就要大幅减仓，甚至清仓，一旦跌破21月线，清仓观望
```
'''


# In[102]:


blog = f'{blog_title}\n{blog_paragraph}\n{table}\n{blog_tile}'.strip()


# In[104]:


path = './_posts/'


# In[105]:


blog_name = '2020-5-10-股价四线法则实时数据.md'


# In[106]:


with open(path + blog_name,'w') as f:
    f.write(blog)

