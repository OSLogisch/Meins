var formular = document.getElementById('inForm');

formular.addEventListener('submit', function(event) {
  event.preventDefault();
  let input = document.getElementById('input').value;
  document.getElementById('output').textContent = input
});

