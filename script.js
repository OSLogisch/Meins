// URL der Seite von der wir den Body laden wollen
const url = 'https://lgh.today/plan/2024-03-01:2'; 

// Fetch Request
fetch(url)
  .then(response => response.text())
  .then(html => {
    // Den geholten HTML Code in unseren Body einfügen 
    document.body.innerHTML = html;
  });
