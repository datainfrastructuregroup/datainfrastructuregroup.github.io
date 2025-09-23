---
layout: layouts/page.njk
pageHeader: Blog / News
pagination:
  data: collections.posts
  size: 10
  alias: posts
permalink: "/blog/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
---
<div class="d-flex justify-content-between align-items-center mb-3">
  <p class="mb-0 text-secondary">Latest updates from our research group</p>
  <a href="/feed.xml" class="btn btn-outline-secondary btn-sm" title="Subscribe to RSS feed">
    <i class="bi bi-rss me-1" aria-hidden="true"></i>RSS Feed
  </a>
</div>
<div class="list-group">
{% for post in posts %}
  <a class="list-group-item list-group-item-action" href="{{ post.url }}">
    <div class="d-flex w-100 justify-content-between">
      <h2 class="h5 mb-1"><i class="bi {{ site.icons[post.data.category] or 'bi-file-text' }} me-2" aria-hidden="true"></i>{{ post.data.title }}</h2>
      <small class="text-secondary">{{ post.date | date("MMM d, yyyy") }}</small>
    </div>
    {% if post.data.excerpt %}<p class="mb-1 text-secondary">{{ post.data.excerpt }}</p>{% endif %}
  </a>
{% endfor %}
</div>

<nav class="mt-4" aria-label="Pagination">
  <ul class="pagination">
    {% if pagination.href.previous %}
    <li class="page-item"><a class="page-link" href="{{ pagination.href.previous }}">Previous</a></li>
    {% endif %}
    {% for pageEntry in pagination.pages %}
    <li class="page-item {% if loop.index0 == pagination.pageNumber %}active{% endif %}">
      <a class="page-link" href="{{ pagination.hrefs[ loop.index0 ] }}">{{ loop.index }}</a>
    </li>
    {% endfor %}
    {% if pagination.href.next %}
    <li class="page-item"><a class="page-link" href="{{ pagination.href.next }}">Next</a></li>
    {% endif %}
  </ul>
</nav>
