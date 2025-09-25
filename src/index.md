---
layout: layouts/page.njk
pageHeader: Data Infrastructure Group
lead: 
---
<section class="hero py-4">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="text-center mb-5">
        <p class="lead fs-4 fw-bold text-primary mb-4">
          We are an interdisciplinary research group that uses <i>computational</i> and <i>humanistic</i> methods to study and practice restorative and transformative data science.
        </p>
      </div>
      
      <div class="mb-4">
        <h2 class="h4 text-center mb-4"><i class="bi bi-diagram-3 me-2" aria-hidden="true"></i>Active Projects</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {%- for project in collections.projects -%}
            {%- if project.data.status == 'active' -%}
          <div class="col">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                {%- if project.data.tags -%}
                <div class="d-flex flex-wrap gap-1 mb-2">
                  {%- for tag in project.data.tags -%}
                  <span class="badge text-bg-secondary">
                    <i class="bi {{ site.projectTags[tag] or 'bi-tag' }} me-1" aria-hidden="true"></i>{{ tag }}
                  </span>
                  {%- endfor -%}
                </div>
                {%- endif -%}
                <h3 class="h6 card-title">
                  <a href="{{ project.url }}" class="text-decoration-none stretched-link">{{ project.data.title }}</a>
                </h3>
                {%- if project.data.excerpt -%}
                <p class="card-text small text-secondary">{{ project.data.excerpt }}</p>
                {%- endif -%}
              </div>
            </div>
          </div>
            {%- endif -%}
          {%- endfor -%}
        </div>
      </div>
      
      <!-- <div class="text-center">
        <a href="/projects/" class="btn btn-primary">View All Projects</a>
      </div> -->
    </div>
  </div>
</section>
