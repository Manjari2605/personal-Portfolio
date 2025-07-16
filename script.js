function showSection(sectionId) {
  var sections = document.getElementsByClassName('section-content');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  var show = document.getElementById(sectionId);
  if (show) show.style.display = '';
}

showSection('home');

function openGithub() {
  window.open('https://github.com/Manjari2605', '_blank');
}

function openLinkedIn() {
  window.open('https://linkedin.com/in/manjari-kalisetty27', '_blank');
}
function openQuiz() {
  window.open('https://github.com/Manjari2605/quiz_reactjs.git', '_blank');
}
function openCineGo() {
  window.open('https://github.com/Manjari2605/CineGo-Movie-Booking-System.git', '_blank');
}
function sendMail() {
  window.location.href = 'mailto:kalisettymanjari2605@gmail.com';
}
const contacts = [
  { icon: 'bi-envelope-fill text-success', label: 'Email', value: 'kalisettymanjari2605@gmail.com' },
  { icon: 'bi-github text-dark', label: 'GitHub', value: 'github.com/Manjari2605' },
  { icon: 'bi-linkedin text-primary', label: 'LinkedIn', value: 'linkedin.com/in/manjari-kalisetty27' }
];
const contactList = document.getElementById('contactList');
if (contactList) {
  contactList.innerHTML = contacts.map(c => `
    <div class="contact-item mb-3 p-3 bg-white rounded shadow-sm d-flex align-items-center">
      <div class="contact-icon me-3"><i class="bi ${c.icon} fs-4"></i></div>
      <div><div class="fw-bold">${c.label}</div><div class="text-muted">${c.value}</div></div>
    </div>
  `).join('');
}
const skills = [
  {
    icon: 'bi-code-slash', bg: 'linear-gradient(135deg, #2196f3, #21cbf3)', title: 'Programming Languages', items: ['Python', 'C++']
  },
  {
    icon: 'bi-globe', bg: 'linear-gradient(135deg, #8e2de2, #4a00e0)', title: 'Web Technologies', items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'ReactJS', 'Bootstrap']
  },
  {
    icon: 'bi-database', bg: 'linear-gradient(135deg, #11998e, #38ef7d)', title: 'Database & Tools', items: ['MySQL', 'GitHub', 'VS Code', 'XAMPP/WAMP', 'Google Colab', 'Jupyter Notebook']
  }
];
const skillsList = document.getElementById('skillsList');
if (skillsList) {
  skillsList.innerHTML = skills.map(s => `
    <div class="col-md-3 col-sm-6">
      <div class="skills-card p-4 h-100 text-center">
        <div class="skills-icon mb-3" style="background: ${s.bg};"><i class="bi ${s.icon}"></i></div>
        <div class="fw-bold mb-2 skills-title">${s.title}</div>
        ${s.items.map(i => `<div class="skills-pill">${i}</div>`).join('')}
      </div>
    </div>
  `).join('');
}