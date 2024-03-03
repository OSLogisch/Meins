let datum = new Date()
const url = 'https://lgh.today/plan/2024-03-01:2'; 

// Fetch Request
fetch(url)
  .then(response => response.text())
  .then(html => {
    document.body.innerHTML = html;
  });
