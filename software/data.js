const softwareData = [
    // Windows
    {
        id: "mas",
        title: "Massgrave (MAS)",
        url: "https://massgrave.dev/",
        icon: "https://avatars.githubusercontent.com/u/108619633?s=200&v=4",
        category: "windows",
        badges: [
            { text: "Open Source", type: "opensource" },
            { text: "Safe", type: "official" }
        ],
        description: "Windows və Office üçün ən təhlükəsiz, açıq mənbəli aktivator."
    },
    {
        id: "portableapps",
        title: "PortableApps",
        url: "https://portableapps.com/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/PortableApps.com_logo.svg/1024px-PortableApps.com_logo.svg.png",
        category: "windows",
        badges: [
            { text: "Official", type: "official" }
        ],
        description: "Quraşdırılma tələb etməyən, USB-dən işləyən pulsuz proqramlar."
    },
    {
        id: "ninite",
        title: "Ninite",
        url: "https://ninite.com/",
        icon: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ninite.com&size=128",
        category: "windows",
        badges: [
            { text: "Official", type: "official" }
        ],
        description: "Populyar proqramları tək kliklə, reklamsız quraşdırın və yeniləyin."
    },

    // macOS
    {
        id: "homebrew",
        title: "Homebrew",
        url: "https://brew.sh/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Homebrew_logo.svg/1024px-Homebrew_logo.svg.png",
        category: "mac",
        badges: [
            { text: "Official", type: "official" },
            { text: "Essential", type: "opensource" }
        ],
        description: "macOS üçün çatışmayan paket meneceri. Minlərlə pulsuz alət."
    },
    {
        id: "objectivesee",
        title: "Objective-See",
        url: "https://objective-see.org/tools.html",
        icon: "https://avatars.githubusercontent.com/u/14466224?s=200&v=4",
        category: "mac",
        badges: [
            { text: "Security", type: "opensource" }
        ],
        description: "Mac üçün pulsuz, açıq mənbəli təhlükəsizlik alətləri (LuLu, KnockKnock)."
    },

    // Linux
    {
        id: "flathub",
        title: "Flathub",
        url: "https://flathub.org/",
        icon: "https://dl.flathub.org/assets/logo-black.svg",
        category: "linux",
        badges: [
            { text: "Official", type: "official" }
        ],
        description: "Linux üçün minlərlə pulsuz tətbiq (Flatpak). Əsas tətbiq mağazası."
    },
    {
        id: "snapcraft",
        title: "Snap Store",
        url: "https://snapcraft.io/store",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Snapcraft-logo-bird.svg/1024px-Snapcraft-logo-bird.svg.png",
        category: "linux",
        badges: [
            { text: "Official", type: "official" }
        ],
        description: "Canonical tərəfindən dəstəklənən rəsmi Linux tətbiq paketi."
    },
    {
        id: "aur",
        title: "AUR (Arch User Repository)",
        url: "https://aur.archlinux.org/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png",
        category: "linux",
        badges: [
            { text: "Community", type: "community" },
            { text: "Huge Library", type: "opensource" }
        ],
        description: "Arch Linux istifadəçiləri üçün icma tərəfindən idarə olunan nəhəng repozitoriya."
    },

    // Android
    {
        id: "fdroid",
        title: "F-Droid",
        url: "https://f-droid.org/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/F-Droid_logo.svg/1024px-F-Droid_logo.svg.png",
        category: "android",
        badges: [
            { text: "Open Source", type: "opensource" },
            { text: "Safe", type: "official" }
        ],
        description: "Android üçün azad və açıq mənbəli (FOSS) tətbiqlər kataloqu."
    },
    {
        id: "mobilism",
        title: "Mobilism",
        url: "https://mobilism.org/",
        icon: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mobilism.org&size=128",
        category: "android",
        badges: [
            { text: "Community", type: "community" }
        ],
        description: "Android tətbiqləri və kitablar üçün ən böyük forum."
    },

    // Privacy Tools (New Category)
    {
        id: "ublock",
        title: "uBlock Origin",
        url: "https://github.com/gorhill/uBlock",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/UBlock_Origin.svg/1024px-UBlock_Origin.svg.png",
        category: "privacy",
        badges: [
            { text: "Essential", type: "official" },
            { text: "Open Source", type: "opensource" }
        ],
        description: "Ən effektiv və yüngül reklam bloklayıcısı. Təhlükəsizlik üçün mütləqdir."
    },
    {
        id: "privacybadger",
        title: "Privacy Badger",
        url: "https://privacybadger.org/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/PrivacyBadgerLogo.svg/1024px-PrivacyBadgerLogo.svg.png",
        category: "privacy",
        badges: [
            { text: "EFF", type: "official" },
            { text: "Tracker Blocker", type: "community" }
        ],
        description: "Gizli izləyiciləri (trackers) avtomatik bloklayan ağıllı alət."
    },
    {
        id: "bitwarden",
        title: "Bitwarden",
        url: "https://bitwarden.com/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bitwarden_logo_vertical.svg/1024px-Bitwarden_logo_vertical.svg.png",
        category: "privacy",
        badges: [
            { text: "Password Manager", type: "official" },
            { text: "Open Source", type: "opensource" }
        ],
        description: "Bütün cihazlarınız üçün təhlükəsiz və pulsuz şifrə idarəçisi."
    },

    // Universal / Other
    {
        id: "rutracker",
        title: "Rutracker",
        url: "https://rutracker.org/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rutracker.org_logo.svg/1024px-Rutracker.org_logo.svg.png",
        category: "linux", // Also fits universal, but listed in linux/windows usually
        badges: [
            { text: "Tracker", type: "community" },
            { text: "VPN", type: "warning" }
        ],
        description: "Windows, Mac və Linux üçün nadir tapılan resurslar. (VPN tələb olunur)"
    }
];
