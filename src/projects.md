---
layout: layouts/page.njk
pageHeader: Projects
lead: Our current research projects span computational and qualitative approaches to data infrastructure.
---
<div class="row g-4">
  {% for project in projects %}
  <div class="col-md-6 col-lg-4">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <div class="d-flex flex-wrap gap-1 mb-2">
          {% for tag in project.tags %}
          <span class="badge text-bg-secondary">
            <i class="bi {{ site.projectTags[tag] or 'bi-tag' }} me-1" aria-hidden="true"></i>{{ tag }}
          </span>
          {% endfor %}
        </div>
        <h2 class="h5 card-title">
          <a href="/projects/{{ project.id }}/" class="text-decoration-none stretched-link">{{ project.title }}</a>
        </h2>
        <p class="card-text text-secondary mb-2">{{ project.year }}</p>
        <p class="card-text">{{ project.excerpt }}</p>
        {% if project.status == 'active' %}
        <span class="badge text-bg-success">Active</span>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<div class="mt-5">
  <h2 class="h4">Project Tags</h2>
  <p class="text-secondary">Our projects are categorized using the following tags:</p>
  <div class="d-flex flex-wrap gap-2">
    {% for tag, icon in site.projectTags %}
    <span class="badge text-bg-light text-dark border">
      <i class="bi {{ icon }} me-1" aria-hidden="true"></i>{{ tag }}
    </span>
    {% endfor %}
  </div>
</div>
