---
layout: post
title: 一个小技巧，轻松解决长字幕问题
date: 2024-10-12
categories: blog
tags: [AI,字幕]
description: 
keywords: AI,LLM,subtitle,transcript,speech to text, ASR,转录,字幕,语音转文本
---


# 引子

首先我们来看一个看似无用的常识：

> 一个人正常速度下每分钟可以朗读200-300字（中文）；如果是英文，速度也差不多，大概在200个单词左右，换算一下，平均朗读一个单词耗时0.3秒。
> 

这个看似无用的常识，能发挥什么作用呢？

# 起因

最近我开发了一个YouTube视频字幕转录的web应用，底层的技术很简单，就是通过AI语音模型，将一段音频转录为文字，然后转为字幕文件。

转录时时间粒度一般选择segment，输出的结果是一段一段的，通常来说，一小段应该是一个句子，下面是一个例子，start 和end分表表示这句话的开始和结束时间，text是这段时间内说的话。

```json
{"id": 0,
  "start": 0,
  "end": 6.1,
  "text": " Have you heard the term Zuck-a-saunce?",
  ...
}
```

但是，转录中经常会遇到这样的问题，一个segment包含了很长的一个时间跨度，对应的文字会非常长，例如：
<pre>
```json
{"id": 0,
  "start": 286,
  "end": 297,
  "text": "I actually think the main thing that people are going to do, especially because it's open source, is use it as a teacher to train smaller models that they use in different applications.",
  ...
}
```
</pre>


如果这段话以字幕的形式展示在视频播放器中，会是这样的：

![long sentence display as subtitle](/img/long_subtitle_video.png)

甚至有时候一段很长的segment对应的字幕，会把整个屏幕铺满。

# 思路

对于上面遇到的问题，首先想到的是，能不能通过某种方式把这个长句子进行拆分，分割为多个短句，然后将这多个短句的时间对应上就可以了。

不错的思路！

但是问题来了，总不能手动来做吧，AI时代，能用机器解决的问题，一定不要靠体力来解决！

首先，长句拆分为短句，这个事情很简单，LLM可以轻松完成。那么问题就只剩一个了，怎么把拆分后的短句与音频时间匹配上。同样的，这个问题也可以求助AI.

<details>
  <summary>claude：如何计算拆分后的短句对应的时长 - 初次尝试</summary>

<p>我：这是一个字幕文件中的一行，由于句子太长，我想拆分为多句，但是要保证时间戳正确，有什么办法吗：</p>

<p>45 00:02:22,267 --> 00:02:37,215 It just so surreal to see of course the response You know this is something that Cynthia and I lived every single day The brilliant Cynthia Areva Cynthia Areva So good And you know it was ours for so long</p>

<p>AI：为了拆分这个长句子并保持正确的时间戳，我们可以使用一种称为"时间插值"的方法。这种方法会根据原始时间段的长度，为每个新的分割句子分配一个相应的时间段。以下是具体步骤：</p>

1. 计算原始时间段的总长度  
2. 将句子分割成多个较短的句子  
3. 根据每个新句子的长度，按比例分配时间

<p>让我为您演示这个过程：</p>

<pre><code>
import datetime

def split_subtitle(subtitle, splits):
    # 解析开始和结束时间
    start_time = datetime.datetime.strptime(subtitle[1].split(' --> ')[0], '%H:%M:%S,%f')
    end_time = datetime.datetime.strptime(subtitle[1].split(' --> ')[1], '%H:%M:%S,%f')

    # 计算总时长（以毫秒为单位）
    total_duration = (end_time - start_time).total_seconds() * 1000

    # 计算每个字符的时长
    total_chars = sum(len(s.strip()) for s in splits)
    ms_per_char = total_duration / total_chars

    new_subtitles = []
    current_time = start_time

    for i, split in enumerate(splits):
        split_duration = len(split.strip()) * ms_per_char
        split_end_time = current_time + datetime.timedelta(milliseconds=split_duration)

        new_subtitle = [
            str(subtitle[0] + i),  # 新的字幕编号
            f"{current_time.strftime('%H:%M:%S,%f')[:-3]} --> {split_end_time.strftime('%H:%M:%S,%f')[:-3]}",
            split.strip()
        ]

        new_subtitles.append(new_subtitle)
        current_time = split_end_time

    return new_subtitles
</code></pre>
</details>


    

AI 提供了一个思路，根据句子长度，按比例分配时间，只不过AI提供的按比例，是按照字符数的占比来分配时间。例如原句子总共100个字符，时长10秒钟，拆分的一个句子有10个字符，那么对应的时长就是1秒钟。

思路不错，但是太粗暴，还是需要加上人类的常识。对于英文，朗读一段话的时长通常取决于单词数，以及单词的发音，不同单词的发音不同，时长也不同，因此最准确的按比例分配，应该是按照音标分配。

但是我们可以退而求其次，按照单词来分配：假设原文共100个单词，拆分后的一句话有10个单词，那么对应的时长应该是1秒。这种方式有一个前提假设：对比多个句子，每个句子中每个单词的平均朗读时间是相同的。关于这个假设，后面有验证说明。

<details>

<summary>
claude：按照单词 进行按比例分配时长
</summary>

    我：实际上计算时长是不是应该根据单词，而不是字符，因为英语主要看发音，另外标点符号肯定不需要计算时长的。有没有根据句子总时长，计算拆分句子时长的方法
    
    AI：您提出了一个很好的观点。确实，对于英语字幕，基于单词而不是字符来计算时长更为合理，因为英语的发音时长主要取决于单词数量而不是字符数。同时，忽略标点符号也是正确的做法。我们可以修改脚本来实现这一点。
    
    ```python
    import datetime
    import re
    
    def split_subtitle(subtitle, splits):
        # 解析开始和结束时间
        start_time = datetime.datetime.strptime(subtitle[1].split(' --> ')[0], '%H:%M:%S,%f')
        end_time = datetime.datetime.strptime(subtitle[1].split(' --> ')[1], '%H:%M:%S,%f')
        
        # 计算总时长（以毫秒为单位）
        total_duration = (end_time - start_time).total_seconds() * 1000
        
        # 计算总单词数（忽略标点符号）
        total_words = sum(len(re.findall(r'\w+', s)) for s in splits)
        
        # 计算每个单词的平均时长
        ms_per_word = total_duration / total_words
        
        new_subtitles = []
        current_time = start_time
        
        for i, split in enumerate(splits):
            # 计算当前分割中的单词数
            word_count = len(re.findall(r'\w+', split))
            split_duration = word_count * ms_per_word
            split_end_time = current_time + datetime.timedelta(milliseconds=split_duration)
            
            new_subtitle = [
                str(int(subtitle[0]) + i),  # 新的字幕编号
                f"{current_time.strftime('%H:%M:%S,%f')[:-3]} --> {split_end_time.strftime('%H:%M:%S,%f')[:-3]}",
                split.strip()
            ]
            
            new_subtitles.append(new_subtitle)
            current_time = split_end_time
        
        return new_subtitles
    
    # 示例使用
    original_subtitle = [
        "45",
        "00:02:22,267 --> 00:02:37,215",
        "It just so surreal to see of course the response You know this is something that Cynthia and I lived every single day The brilliant Cynthia Areva Cynthia Areva So good And you know it was ours for so long"
    ]
    
    splits = [
        "It just so surreal to see of course the response.",
        "You know this is something that Cynthia and I lived every single day.",
        "The brilliant Cynthia Areva Cynthia Areva So good.",
        "And you know it was ours for so long."
    ]
    
    result = split_subtitle(original_subtitle, splits)
    
    for subtitle in result:
        print("\n".join(subtitle))
        print()
    
    ```
    
    这个改进后的脚本采用了基于单词数量而不是字符数来计算时长的方法。以下是主要的改进：
    
    1. 使用正则表达式 `re.findall(r'\w+', s)` 来计算每个句子中的单词数，这样可以忽略标点符号。
    
    2. 计算总单词数和每个单词的平均时长，而不是字符数。
    
    3. 对每个拆分的句子，根据其包含的单词数来分配时长。
    
    使用这个更新后的脚本，输出结果可能会更接近实际的发音时长：
    
    ```
    45
    00:02:22,267 --> 00:02:26,102
    It just so surreal to see of course the response.
    
    46
    00:02:26,102 --> 00:02:31,772
    You know this is something that Cynthia and I lived every single day.
    
    47
    00:02:31,772 --> 00:02:34,641
    The brilliant Cynthia Areva Cynthia Areva So good.
    
    48
    00:02:34,641 --> 00:02:37,215
    And you know it was ours for so long.
    ```
    
    这种方法的优点是：
    
    1. 更准确地反映了英语发音的特点，因为它基于单词数而不是字符数。
    2. 忽略了标点符号，这些在发音中通常不占用时间。
    3. 保持了原始字幕的总时长不变。
    
    然而，这种方法仍然有一些局限性：
    
    1. 它假设所有单词的发音时长相同，而实际上有些单词比其他单词更长或更短。
    2. 它没有考虑到停顿、强调或语速变化等因素。
    
    如果您需要更精确的结果，可能需要更复杂的算法，例如考虑音节数、常见单词的平均发音时长等因素。但对于大多数情况，这个改进的方法应该已经能提供相当准确的结果了。
    
    您可以根据需要进一步调整 `splits` 列表中的句子划分。如果您想要尝试使用这个脚本或有任何其他问题，请随时告诉我。
  
</details>


# 实现

按照这个思路，我们分两步走：

1. 对于超过一定长度的文本，让AI进行拆分，把长句拆分为多个短句，实现这一步只需要一个prompt；
        
2. 根据拆分后的短句单词数，计算每个短句的时长，然后匹配到对应的时间，这一步之需要一段python代码就可以实现。

经过上述两步，我们可以把长句子拆分为多个短句，并且能够正确对其文字与时间戳，下面是一个例子：

原来的转录结果：

```markdown
66
00:04:46,062 --> 00:04:54,842
I actually think the main thing that people are going to do, especially because it's open source, is use it as a teacher to train smaller models that they use in different applications.
```

处理后的结果：

```markdown
105
00:04:46,382 --> 00:04:48,622
I actually think the main thing that people are gonna do,

106
00:04:48,622 --> 00:04:52,042
especially because it's open source, is use it as a teacher

107
00:04:52,042 --> 00:04:55,442
to train smaller models that they use in different applications.
```


<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; gap: 20px;">
    <img src="/img/subtitle_lang_sentence_to_short.png" alt="split long subtitle sentence to short sentences" style="width: calc(33.33% - 14px); height: auto;">
    <img src="/img/subtitle_lang_sentence_to_short2.png" alt="split long subtitle sentence to short sentences" style="width: calc(33.33% - 14px); height: auto;">
    <img src="/img/subtitle_lang_sentence_to_short3.png" alt="split long subtitle sentence to short sentences" style="width: calc(33.33% - 14px); height: auto;">
</div>


# 附录

## 验证假设

关于开头提到的朗读一个单词的平均时间，这里做了一些统计：随机抽取了74条句子，生成音频，然后计算音频的时长。

在统计时，对句子的长度进行了分组，1-5个单词的句子为sort，5-12为medium，12个单词以上为long。

可以发现，对于超过5个单词的句子，朗读一个单词的平均时间为0.3秒，相对于short组，medium和long这两个分组的数值非常接近。这是因为稍长一点的句子，虽然可能句子中每个单词的朗读时间区别很大，但是整个句子会把均值拉平，这个数据也支撑了使用句子中的单词数来按比例分配时间的做法。

```
Statistical Analysis:
--------------------------------------------------

Duration per word statistics:
count    74.000000
mean      0.323791
std       0.060297
min       0.230400
25%       0.285750
50%       0.315714
75%       0.347400
max       0.588000
Name: duration_per_word, dtype: float64

Average duration per word by sentence length category:
length_category
short     0.361567
medium    0.304849
long      0.307741
Name: duration_per_word, dtype: float64
```


![Duration per word statistics](/img/word_duration_stats.png)

## 另一个小技巧 - 通知策略

做产品经常关注的一件事是，如何让用户持续使用我的产品，产品中最常用的一种功能是通知，通过通知将用户找回。

在设计通知策略时，根据用户的使用习惯来设计通知频率，可以有各种复杂的策略。

但是，有一个简单却非常有效的策略 —— 在用户安装产品后的24小时后进行通知。

这个策略是经过无数次实验得出的，但是仔细一想却很符合直觉，而且基于一个很合理的假设：如果你昨天下午6点有时间，那么大概率今天下午3点也有时间。

简单粗暴，但很有效！

这不是我说的，是Duolingo创始人Luis Von Ahn说的！

<iframe width="800" height="450" src="https://www.youtube.com/watch?v=P6FORpg0KVo&ab_channel=TED" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
