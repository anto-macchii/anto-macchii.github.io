function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}
window.onload = () => showSection('about');

function toggleContacts() {
  const contactList = document.getElementById('contact-list');
  contactList.classList.toggle('show');
}