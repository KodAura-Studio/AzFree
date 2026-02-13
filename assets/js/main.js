document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            // Small animation delay if needed, or rely on CSS transitions if implemented
        });
    }

    if (mobileMenuCloseBtn && mobileMenu) {
        mobileMenuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // --- Search Logic ---
    const searchInput = document.querySelector('input[type="text"]');
    const searchableItems = document.querySelectorAll('.group.bg-white, .group.bg-surface-dark'); // Targeting the cards

    // Quick shortcut '/' to focus search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput?.focus();
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();

            // If we are on a listing page (has searchable items)
            if (searchableItems.length > 0) {
                searchableItems.forEach(item => {
                    const text = item.innerText.toLowerCase();
                    if (text.includes(query)) {
                        item.parentElement.style.display = ''; // Reset display (assuming grid wrapper is parent, wait no, item is the card)
                        // Actually the item is the card, but it's inside a grid. Hiding it works.
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            } else {
                // If on homepage, maybe just highlight or do nothing for now
                // Future: Redirect to a search page
            }
        });
    }
    // --- Wiki Mobile Menu Logic ---
    const wikiMenuBtn = document.getElementById('wiki-menu-btn');
    const wikiMenu = document.getElementById('wiki-menu');
    const wikiMenuCloseBtn = document.getElementById('wiki-menu-close');

    if (wikiMenuBtn && wikiMenu) {
        wikiMenuBtn.addEventListener('click', () => {
            wikiMenu.classList.remove('hidden');
        });
    }

    if (wikiMenuCloseBtn && wikiMenu) {
        wikiMenuCloseBtn.addEventListener('click', () => {
            wikiMenu.classList.add('hidden');
        });
    }

    if (wikiMenu) {
        wikiMenu.addEventListener('click', (e) => {
            if (e.target === wikiMenu) {
                wikiMenu.classList.add('hidden');
            }
        });
    }
});
