const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.page-view');
const currentPage = document.getElementById('currentPage');
const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function showView(name) {
  const valid = ['dashboard', 'schedule', 'grades', 'announcements', 'profile'];
  if (!valid.includes(name)) return;
  views.forEach(view => view.classList.toggle('active', view.id === `${name}View`));
  navItems.forEach(item => item.classList.toggle('active', item.dataset.view === name));
  currentPage.textContent = name === 'profile' ? 'Student Profile' :
    name === 'schedule' ? 'Class Schedule' :
    name.charAt(0).toUpperCase() + name.slice(1);
  sidebar.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navItems.forEach(item => item.addEventListener('click', () => showView(item.dataset.view)));
document.querySelectorAll('[data-goto]').forEach(button =>
  button.addEventListener('click', () => showView(button.dataset.goto))
);
document.getElementById('menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('notificationButton').addEventListener('click', () =>
  showToast('You are all caught up on notifications.')
);
document.getElementById('helpButton').addEventListener('click', () =>
  showToast('Help center demo — contact the campus support office.')
);
document.querySelector('.date-pill')?.addEventListener('click', () =>
  showToast('You are viewing Fall Semester 2026.')
);
document.querySelector('.more-button')?.addEventListener('click', () =>
  showToast('You are viewing the latest campus announcements.')
);
