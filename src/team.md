---
layout: layouts/page.njk
pageHeader: Research Team
lead: Meet the PI and our undergraduate affiliates.
---
<section class="mb-5">
  <div class="row g-4 align-items-start">
    <div class="col-md-3">
      <img src="/assets/img/pi.jpg" alt="Principal Investigator headshot" class="img-fluid rounded">
    </div>
    <div class="col-md-9">
      <h2 class="h4">Name Surname</h2>
      <p>
        Short professional biography goes here. Education, research areas, and achievements. This is placeholder text; replace with actual content.
      </p>
      <p>
        <strong>Contact:</strong> <a href="mailto:pi@example.edu">pi@example.edu</a>
      </p>
      <h3 class="h5 mt-4">Selected Publications</h3>
      <ul>
        <li>Publication 1 (Year). <em>Venue</em>.</li>
        <li>Publication 2 (Year). <em>Venue</em>.</li>
      </ul>
      <p class="mt-3">
        <a class="btn btn-outline-primary" href="/assets/cv/pi-cv.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-text me-2" aria-hidden="true"></i>Download CV</a>
      </p>
    </div>
  </div>
</section>

<section>
  <h2 class="h4 mb-3">Student Affiliates</h2>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
    {% for s in affiliates %}
    <div class="col">
      <div class="card h-100 shadow-sm">
        <img src="{{ s.photo }}" class="card-img-top" alt="Headshot of {{ s.name }}">
        <div class="card-body">
          <h3 class="h5 card-title mb-1">{{ s.name }}</h3>
          <p class="text-secondary mb-2">{{ s.years }}{% if s.active %} · <span class="badge text-bg-success">Active</span>{% endif %}</p>
          <p class="card-text">{{ s.bio }}</p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
