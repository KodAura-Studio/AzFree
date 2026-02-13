// Global Search System using Fuse.js
document.addEventListener('DOMContentLoaded', () => {
    // Search data - will be populated from all pages
    const searchData = [
        // Gaming
        { title: 'FitGirl Repacks', category: 'Oyunlar', description: 'Ən məşhur repack saytı', url: '/gaming#fitgirl', tags: ['oyun', 'repack', 'yükləmə'] },
        { title: 'SteamUnlocked', category: 'Oyunlar', description: 'Pulsuz Steam oyunları', url: '/gaming#steamunlocked', tags: ['oyun', 'steam', 'pulsuz'] },

        // Movies
        { title: 'YTS', category: 'Filmlər', description: 'Yüksək keyfiyyətli film torrentləri', url: '/movies#yts', tags: ['film', 'torrent', 'hd'] },
        { title: '1337x', category: 'Filmlər', description: 'Ümumi torrent izləyici', url: '/movies#1337x', tags: ['film', 'torrent', 'serial'] },

        // Software
        { title: 'Ninite', category: 'Proqramlar', description: 'Toplu proqram quraşdırıcı', url: '/software#ninite', tags: ['proqram', 'quraşdırma', 'windows'] },

        // Education
        { title: 'Khan Academy', category: 'Təhsil', description: 'Pulsuz onlayn kurslar', url: '/education#khan', tags: ['təhsil', 'kurs', 'pulsuz'] },

        // Pages
        { title: 'Başlanğıc Rəhbəri', category: 'Səhifə', description: 'Təhlükəsizlik və istifadə qaydaları', url: '/guide', tags: ['rəhbər', 'təhlükəsizlik', 'vpn'] },
        { title: 'Blog', category: 'Səhifə', description: 'Texnologiya və təhlükəsizlik məqalələri', url: '/blog', tags: ['məqalə', 'xəbər', 'rəhbər'] },
        { title: 'FAQ / Sual-Cavab', category: 'Səhifə', description: 'Tez-tez verilən suallar', url: '/faq', tags: ['sual', 'cavab', 'yardım'] },
        { title: 'Töhfə Ver', category: 'Səhifə', description: 'Layihəyə töhfə vermək', url: '/contribute', tags: ['töhfə', 'kömək'] },
        { title: 'Məxfilik', category: 'Səhifə', description: 'Məxfilik siyasəti', url: '/privacy', tags: ['məxfilik', 'siyasət'] },

        // Blog Posts
        { title: 'VPN Nədir?', category: 'Blog', description: 'VPN texnologiyası və təhlükəsizlik', url: '/blog/vpn-nedir/', tags: ['vpn', 'təhlükəsizlik', 'məxfilik'] },
        { title: 'Torrent Necə İşləyir?', category: 'Blog', description: 'Torrent və P2P rəhbəri', url: '/blog/torrent-rehber/', tags: ['torrent', 'p2p', 'yükləmə'] },
        { title: 'Zərərli Reklamlardan Qorunma', category: 'Blog', description: 'Adblock və brauzer təhlükəsizliyi', url: '/blog/adblock-qurulumu/', tags: ['adblock', 'reklam', 'təhlükəsizlik'] }
    ];

    // Initialize Fuse.js for fuzzy search
    const fuseOptions = {
        keys: ['title', 'description', 'tags', 'category'],
        threshold: 0.3,
        includeScore: true
    };

    const fuse = new Fuse(searchData, fuseOptions);

    // Global search components
    const globalSearchInput = document.getElementById('global-search-input');
    const globalSearchResults = document.getElementById('global-search-results');
    const globalSearchOverlay = document.getElementById('global-search-overlay');

    if (globalSearchInput) {
        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            // Open with Ctrl+K or '/' (if not in input)
            if (((e.ctrlKey || e.metaKey) && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
                e.preventDefault();
                window.openGlobalSearch();
            }
            // Close with Escape
            if (e.key === 'Escape' && globalSearchOverlay && !globalSearchOverlay.classList.contains('hidden')) {
                window.closeGlobalSearch();
            }
        });

        // Search input handler
        globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();

            if (query.length < 2) {
                globalSearchResults.innerHTML = '<p class="text-slate-400 text-sm p-4">Ən azı 2 hərf daxil edin...</p>';
                return;
            }

            const results = fuse.search(query);

            if (results.length === 0) {
                globalSearchResults.innerHTML = '<p class="text-slate-400 text-sm p-4">Heç bir nəticə tapılmadı.</p>';
                return;
            }

            // Display results
            globalSearchResults.innerHTML = results.slice(0, 8).map(result => {
                const item = result.item;
                return `
                    <a href="${item.url}" class="block p-4 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-gray-200 dark:border-white/10 last:border-0">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex-grow">
                                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">${item.title}</h4>
                                <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">${item.description}</p>
                                <span class="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">${item.category}</span>
                            </div>
                            <span class="material-icons-round text-slate-400 text-sm">arrow_forward</span>
                        </div>
                    </a>
                `;
            }).join('');
        });
    }

    // Open/Close functions
    window.openGlobalSearch = function () {
        if (globalSearchOverlay) {
            globalSearchOverlay.classList.remove('hidden');
            globalSearchInput?.focus();
        }
    };

    window.closeGlobalSearch = function () {
        if (globalSearchOverlay) {
            globalSearchOverlay.classList.add('hidden');
            globalSearchInput.value = '';
            globalSearchResults.innerHTML = '<p class="text-slate-400 text-sm p-4">Axtarış üçün yazmağa başlayın...</p>';
        }
    };

    // Close on overlay click
    if (globalSearchOverlay) {
        globalSearchOverlay.addEventListener('click', (e) => {
            if (e.target === globalSearchOverlay) {
                window.closeGlobalSearch();
            }
        });
    }
});
