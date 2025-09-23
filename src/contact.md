---
layout: layouts/page.njk
permalink: "/contact/"
pageHeader: Get Involved
lead: Send us a message. We typically reply within a few business days.
---
<form action="https://formspree.io/f/your-id-here" method="POST" class="needs-validation" novalidate>
  <div class="row g-3">
    <div class="col-md-6">
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" name="name" class="form-control" required>
      <div class="invalid-feedback">Please enter your name.</div>
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" name="email" class="form-control" required>
      <div class="invalid-feedback">Please enter a valid email.</div>
    </div>
    <div class="col-12">
      <label for="subject" class="form-label">Subject</label>
      <input type="text" id="subject" name="subject" class="form-control" required>
      <div class="invalid-feedback">Please enter a subject.</div>
    </div>
    <div class="col-12">
      <label for="message" class="form-label">Message</label>
      <textarea id="message" name="message" class="form-control" rows="6" required></textarea>
      <div class="invalid-feedback">Please enter a message.</div>
    </div>

    <!-- Honeypot field -->
    <div class="d-none">
      <label>Do not fill this out</label>
      <input type="text" name="_honey" tabindex="-1" autocomplete="off">
    </div>

    <div class="col-12">
      <button type="submit" class="btn btn-primary">Send</button>
    </div>
  </div>
</form>

<script>
(function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
</script>
