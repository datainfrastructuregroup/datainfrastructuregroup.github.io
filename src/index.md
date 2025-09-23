---
layout: layouts/page.njk
pageHeader: Data Infrastructure Group – DIG
lead: Academic research on data infrastructure, systems, and society.
---
<section class="hero py-4">
  <div class="row align-items-center g-4">
    <div class="col-md-8">
      <p class="lead fs-4 fw-bold text-primary mb-4">
        We are an interdisciplinary research group that uses computational and humanistic methods to study and practice restorative and transformative data science.
      </p>
      <p>
        Browse recent updates below or visit the Blog for more.
      </p>
    </div>
    <div class="col-md-4">
      <div class="p-3 border rounded-3 bg-light">
        <h2 class="h5"><i class="bi bi-bell me-2" aria-hidden="true"></i>Recent</h2>
        <ul class="list-unstyled mb-0">
          {% for post in collections.posts | slice(0,3) %}
          <li class="mb-2">
            <a class="text-decoration-none" href="{{ post.url }}">
              <i class="bi {{ site.icons[post.data.category] or 'bi-file-text' }} me-2" aria-hidden="true"></i>{{ post.data.title }}
            </a>
            <span class="text-secondary ms-2">· {{ post.date | date("MMM d, yyyy") }}</span>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
