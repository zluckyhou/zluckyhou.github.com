#!/usr/bin/env python3
"""Send a Telegram notification for blog posts newly added in this push.

Runs inside GitHub Actions. Reads TG_BOT_TOKEN / TG_CHAT_ID from env.
On workflow_dispatch it sends a test message instead.
"""

import html
import json
import os
import re
import subprocess
import sys
import urllib.request

SITE_URL = "https://zluckyhou.github.io"

CATEGORY_NAMES = {
    "ai-daily": "AI 日报",
    "reddit": "Reddit 精选",
    "company-research": "公司观察",
    "ideas": "文章",
}

POST_FILENAME = re.compile(r"^_posts/(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.(md|markdown)$")


def send_message(text):
    token = os.environ["TG_BOT_TOKEN"]
    chat_id = os.environ["TG_CHAT_ID"]
    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
        "disable_web_page_preview": False,
    }).encode()
    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        body = json.loads(resp.read())
    if not body.get("ok"):
        raise RuntimeError(f"Telegram API error: {body}")
    print("Telegram message sent.")


def added_post_files(before, after):
    if not before or set(before) == {"0"}:
        rev_range = [f"{after}~1", after]
    else:
        rev_range = [before, after]
    out = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=A", *rev_range, "--", "_posts"],
        capture_output=True, text=True, check=True,
    ).stdout
    return [line for line in out.splitlines() if POST_FILENAME.match(line)]


def front_matter(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    m = re.match(r"^---\n(.*?)\n---", content, re.S)
    fields = {}
    if m:
        for line in m.group(1).splitlines():
            kv = re.match(r"^(\w[\w-]*):\s*(.+?)\s*$", line)
            if kv:
                fields[kv.group(1)] = kv.group(2).strip().strip('"').strip("'")
    return fields


def post_url(path):
    m = POST_FILENAME.match(path)
    year, month, day, slug = m.group(1), int(m.group(2)), int(m.group(3)), m.group(4)
    return f"{SITE_URL}/blog/{year}/{month:02d}/{day:02d}/{slug}/"


def category_label(fields):
    cats = fields.get("categories", "")
    for key, name in CATEGORY_NAMES.items():
        if key in cats:
            return name
    return "文章"


def main():
    if os.environ.get("EVENT_NAME") == "workflow_dispatch":
        send_message("✅ <b>Freedom Hunter</b>\n博客 Telegram 推送已接通（Actions 手动测试）。")
        return

    files = added_post_files(os.environ.get("BEFORE", ""), os.environ.get("AFTER", "HEAD"))
    if not files:
        print("No new posts in this push; nothing to send.")
        return

    lines = ["📮 <b>博客更新</b>", ""]
    for path in files:
        fields = front_matter(path)
        title = fields.get("headline") or fields.get("title") or os.path.basename(path)
        lines.append(
            f"• <a href=\"{post_url(path)}\">{html.escape(title)}</a>（{category_label(fields)}）"
        )
    send_message("\n".join(lines))


if __name__ == "__main__":
    sys.exit(main())
