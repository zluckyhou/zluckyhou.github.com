#!/usr/bin/env ruby
# frozen_string_literal: true

require "date"
require "fileutils"
require "json"
require "optparse"

TITLE_PATTERN = /^\*\*AI Frontier Daily \| (\d{4})\.(\d{2})\.(\d{2})\*\*$/.freeze
ENTRY_PATTERN = /^(\d+)\/(\d+)\s+(.+)$/.freeze
DEEP_DIVE_PATTERN = /^\*\*▸\s+(.+?)\*\*$/.freeze
COVER_PATTERN = /^<!--\s*cover:\s*(.+?)\s*-->$/.freeze

options = {
  output_dir: File.expand_path("../_posts", __dir__),
  force: false
}

OptionParser.new do |parser|
  parser.banner = "Usage: ruby scripts/import_ai_frontier_daily.rb REPORT_PATH [options]"
  parser.on("--output-dir DIRECTORY", "Write the generated Jekyll post to DIRECTORY") do |directory|
    options[:output_dir] = File.expand_path(directory)
  end
  parser.on("--force", "Overwrite an existing post") do
    options[:force] = true
  end
end.parse!

report_path = ARGV.shift
abort "Missing REPORT_PATH" unless report_path
abort "Report not found: #{report_path}" unless File.file?(report_path)

report = File.read(report_path, encoding: "UTF-8")
lines = report.lines(chomp: true)

title_match = lines.map { |line| line.match(TITLE_PATTERN) }.compact.first
abort "Could not find an AI Frontier Daily title" unless title_match

report_date = Date.new(title_match[1].to_i, title_match[2].to_i, title_match[3].to_i)
entries = lines.map { |line| line.match(ENTRY_PATTERN) }.compact
abort "Could not find any numbered daily entries" if entries.empty?

headline = entries.first[3]
issue_count = entries.map { |entry| entry[2].to_i }.max
deep_dive_count = lines.count { |line| line.match?(DEEP_DIVE_PATTERN) }
cover_url = lines.map { |line| line.match(COVER_PATTERN)&.[](1) }.compact.first
handles = lines.filter_map { |line| line.match(%r{\Ahttps?://x\.com/([^/]+)/})&.[](1) }.uniq
signals = handles.first(8).join(" · ")

first_entry_index = lines.index { |line| line.match?(ENTRY_PATTERN) }
summary_lines = lines[(first_entry_index + 1)..].take_while do |line|
  !line.empty? && !line.start_with?("http://", "https://")
end
summary = summary_lines.join(" ")
reading_time = [(report.gsub(/\s+/, "").length / 500.0).ceil, 1].max

body_lines = lines.map do |line|
  next if line.match?(COVER_PATTERN) || line.match?(TITLE_PATTERN)

  if (entry = line.match(ENTRY_PATTERN))
    "## #{entry[1]}/#{entry[2]} #{entry[3]}"
  elsif line == "📎 **Deep Dive 附录**"
    "## Deep Dive 附录"
  elsif (deep_dive = line.match(DEEP_DIVE_PATTERN))
    "### #{deep_dive[1]}"
  elsif line.start_with?("→ http://", "→ https://")
    url = line.delete_prefix("→ ")
    "[查看原文](#{url})"
  elsif (tweet = line.match(%r{\Ahttps?://x\.com/([^/]+)/}))
    "- [查看 @#{tweet[1]} 原始推文](#{line})"
  else
    line
  end
end.compact

front_matter = [
  "---",
  "layout: daily",
  "title: #{"AI Frontier Daily | #{report_date.strftime('%Y.%m.%d')}".to_json}",
  "headline: #{headline.to_json}",
  "date: #{report_date} 09:07:00 +0800",
  "permalink: /ai-daily/#{report_date.strftime('%Y/%m/%d')}/",
  "categories: [ai-daily]",
  "tags: [AI-Frontier, Daily]",
  "description: #{summary.to_json}",
  "summary: #{summary.to_json}",
  "issue_count: #{issue_count}",
  "deep_dive_count: #{deep_dive_count}",
  "reading_time: #{reading_time}",
  ("cover: #{cover_url.to_json}" if cover_url),
  ("signals: #{signals.to_json}" unless signals.empty?),
  "header-img: img/dark_yellow_400.png",
  "---",
  ""
].compact

FileUtils.mkdir_p(options[:output_dir])
output_path = File.join(options[:output_dir], "#{report_date}-ai-frontier-daily.md")
abort "Post already exists: #{output_path} (use --force to replace it)" if File.exist?(output_path) && !options[:force]

File.write(output_path, (front_matter + body_lines).join("\n") + "\n", encoding: "UTF-8")
puts output_path
