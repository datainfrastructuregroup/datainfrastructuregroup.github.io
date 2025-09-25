---
layout: layouts/page.njk
pageHeader: Research Team
lead: 
---
<section class="mb-5">
  <div class="row g-4 align-items-start">
    <div class="col-md-3">
      <img src="/assets/img/Stevens-headshot.JPG" alt="Principal Investigator headshot" class="img-fluid rounded">
    </div>
    <div class="col-md-9">
      <h2 class="h4">Nikko Stevens</h2>
      <p>
        Nikko Stevens is a critical technology researcher, open source software engineer, and community organizer. Stevens studies the ways that data infrastructures--data models, databases, data structures--can reinforce existing social inequality, and, crucially, how we can use data infrastructures to co-create worlds we wish to build. Prior to taking a PhD in Science and Technology Studies, Stevens was a technical architect of web properties for billion-dollar corporations like Coca-Cola, Sony, and Instagram. As a community organizer, Stevens's work in the Drupal community earned them the Aaron Winborn Award and recognitions by Red Hat and The Linux Foundation. At Smith, they are an <a href="https://www.smith.edu/people/nikko-stevens">assistant professor of Statistical and Data Sciences</a> with former appointments at MIT and Dartmouth. Their current book project, <i>Abolitionist Engineering</i >, connects data infrastructure, software engineering, and movements for social transformation.
      </p>
      <div class="mt-3">
        <p class="mb-2">
          <strong>Contact:</strong> <a href="mailto:nstevens@smith.edu">nstevens@smith.edu</a>
        </p>
        <div class="d-flex flex-wrap gap-3 social-links">
          <a href="https://nikkostevens.com" class="text-decoration-none" target="_blank" rel="noopener" aria-label="Personal Website">
            <i class="bi bi-globe me-1" aria-hidden="true"></i>Website
          </a>
          <a href="https://github.com/drnikko" class="text-decoration-none" target="_blank" rel="noopener" aria-label="GitHub Profile">
            <i class="bi bi-github me-1" aria-hidden="true"></i>GitHub
          </a>
          <a href="https://bsky.app/profile/drnikko.bsky.social" class="text-decoration-none" target="_blank" rel="noopener" aria-label="Bluesky Profile">
            <i class="bi bi-cloud me-1" aria-hidden="true"></i>Bluesky
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<section>
  <h2 class="h4 mb-3">Student Affiliates</h2>
  <div class="row g-4">
    {% for s in affiliates %}
    <div class="col-md-6 col-lg-4">
      <div class="d-flex align-items-start">
        <div class="flex-shrink-0 me-3">
          <img src="{{ s.photo }}" alt="Headshot of {{ s.name }}" class="rounded" style="width: 80px; height: 80px; object-fit: cover;">
        </div>
        <div class="flex-grow-1">
          <h3 class="h6 mb-1">{{ s.name }}</h3>
          <p class="text-secondary small mb-1">{{ s.years }}{% if s.active %} · <span class="badge text-bg-success">Active</span>{% endif %}</p>
          <p class="small mb-0">{{ s.bio }}</p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
