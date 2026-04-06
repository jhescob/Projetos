const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function setTheme(theme) {
    const isLight = theme === 'light';
    body.classList.toggle('light-mode', isLight);
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    themeToggle.title = isLight ? 'Ativar modo escuro' : 'Ativar modo claro';
    localStorage.setItem('theme', theme);
}

setTheme(initialTheme);

themeToggle.addEventListener('click', () => {
    const nextTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    setTheme(nextTheme);
});

const profileLinks = document.querySelectorAll('.profile a');

profileLinks.forEach(link => {
    link.addEventListener('click', () => {
        const profile = link.closest('.profile');
        if (!profile) return;

        const nameElement = profile.querySelector('p');
        const imageElement = profile.querySelector('img');

        if (nameElement && imageElement) {
            localStorage.setItem('perfilAtivoNome', nameElement.textContent.trim());
            localStorage.setItem('perfilAtivoImagem', imageElement.src);
        }
    });
});
