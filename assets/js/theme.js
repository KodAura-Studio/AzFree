// Theme Management
(function () {
    const THEME_KEY = 'azfree-theme';
    const DARK_CLASS = 'dark';

    // Get saved theme or default to dark
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || 'dark';
    }

    // Apply theme immediately (before DOM loads to prevent flash)
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
        }
    }

    // Initialize theme on page load
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);

    // Wait for DOM to add event listeners
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');

        // Update icon based on current theme
        function updateIcon() {
            const currentTheme = getSavedTheme();
            if (themeIcon) {
                themeIcon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
            }
        }

        updateIcon();

        // Toggle theme on button click
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = getSavedTheme();
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                localStorage.setItem(THEME_KEY, newTheme);
                applyTheme(newTheme);
                updateIcon();
            });
        }
    });
})();
