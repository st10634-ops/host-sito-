// Evidenzia automaticamente la pagina attiva nella navbar
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');

  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

// Inserisce automaticamente l'anno corrente nel footer
const yearSpan = document.getElementById('annoCorrente');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
