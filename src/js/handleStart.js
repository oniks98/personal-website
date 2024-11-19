function handleStart() {
  const page = document.querySelector('.App');
  if (page) {
    page.classList.add('animate_content');
  } else {
    console.error('.App section not found');
  }

  const theme = document.querySelector('#switch').checked ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', theme);

  const toggleMain = document.querySelector('#toggle-main');
  if (toggleMain) {
    toggleMain.checked = theme === 'dark';
  } else {
    console.error('#toggle-main not found');
  }

  setTimeout(() => {
    if (page) {
      page.style.display = 'none';
    } else {
      console.error('.App section not found');
    }
  }, 1000);

  const contentSections = [
    'header-container',
    'hero-container',
    'about-container',
    'tech-container',
    'projects-container',
    'benefits-container',
    'questions-container',
    'reviews-container',
    'collaboration-container',
    'footer-container',
    'to-top-container',
  ];

  contentSections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = 'block';
    } else {
      console.error(`Element with ID ${id} not found`);
    }
  });
}

document.querySelector('.start-btn').addEventListener('click', handleStart);

document.querySelector('#toggle-main').addEventListener('change', () => {
  const isDarkMode = document.querySelector('#toggle-main').checked;
  const theme = isDarkMode ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
});
