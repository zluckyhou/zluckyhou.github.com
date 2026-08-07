---
layout: editorial-page
title: "公司观察"
description: "从财报、产品和关键经营指标出发，理解一家公司的真实增长。"
kicker: "Company Intelligence / Archive"
permalink: /company-research/
---

{% assign research_posts = site.categories['company-research'] %}
<div class="editorial-archive editorial-archive--companies">
    {% for post in research_posts %}
    <article class="archive-entry">
        <a href="{{ post.url | prepend: site.baseurl }}">
            <div class="archive-entry__meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
                <span>{{ post.company | default: post.tags.first }}</span>
                {% if post.period %}<span>{{ post.period }}</span>{% endif %}
            </div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
            {% if post.metric %}<strong class="archive-entry__metric">{{ post.metric }}</strong>{% endif %}
        </a>
    </article>
    {% endfor %}
</div>
