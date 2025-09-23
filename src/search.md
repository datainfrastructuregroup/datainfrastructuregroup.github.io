---
layout: layouts/page.njk
pageHeader: Search
lead: Find posts and affiliates by keyword.
---
<div class="mb-3">
  <label for="q" class="form-label">Search</label>
  <input id="q" class="form-control" type="search" placeholder="Type keywords..." autocomplete="off">
</div>
<ul id="results" class="list-group"></ul>

<script>
(async function(){
  const res = await fetch('/search.json');
  const index = await res.json();
  const fuse = new Fuse(index, { keys: ['title','text','category','name'], threshold: 0.4 });
  const input = document.getElementById('q');
  const resultsEl = document.getElementById('results');
  function render(items){
    resultsEl.innerHTML = '';
    if(items.length === 0){
      return;
    }
    for(const it of items){
      const li = document.createElement('li');
      li.className = 'list-group-item';
      const icon = it.item.icon ? `<i class="bi ${it.item.icon} me-2" aria-hidden="true"></i>` : '';
      li.innerHTML = `${icon}<a class="text-decoration-none" href="${it.item.url}">${it.item.title || it.item.name}</a>` + (it.item.date ? `<span class="text-secondary ms-2">· ${new Date(it.item.date).toLocaleDateString()}</span>` : '');
      resultsEl.appendChild(li);
    }
  }
  input.addEventListener('input', () => {
    const q = input.value.trim();
    if(!q){ resultsEl.innerHTML=''; return; }
    const out = fuse.search(q).slice(0, 20);
    render(out);
  });
})();
</script>
