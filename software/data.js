const softwareData = [
    // Windows
    {
        id: "mas",
        title: "Microsoft Activation Scripts (MAS)",
        url: "https://massgrave.dev/",
        icon: "/assets/img/software/mas.png",
        category: "activator",
        badges: [
            { text: "Open Source", type: "opensource" },
            { text: "Safe", type: "official" },
            { text: "Essential", type: "official" }
        ],
        description: "Windows və Office üçün ən təhlükəsiz, açıq mənbəli aktivator. HWID, Ohook və KMS38 dəstəyi."
    },
    {
        id: "heukms",
        title: "HEU KMS Activator",
        url: "https://github.com/zbezj/HEU_KMS_Activator",
        icon: "/assets/img/software/heukms.png",
        category: "activator",
        badges: [
            { text: "Community", type: "community" },
            { text: "Full Suite", type: "official" }
        ],
        description: "Çoxfunksiyalı aktivasiya aləti. Office və Windows-un bütün versiyaları üçün."
    },
    {
        id: "idm",
        title: "Internet Download Manager (IDM)",
        url: "https://www.internetdownloadmanager.com/",
        icon: "/assets/img/software/idm.png",
        category: "windows",
        badges: [
            { text: "Fast", type: "official" }
        ],
        description: "Yükləmə sürətini 5 dəfəyə qədər artıran, dünyanın ən populyar yükləmə meneceri."
    },
    {
        id: "sevenzip",
        title: "7-Zip",
        url: "https://www.7-zip.org/",
        icon: "/assets/img/software/7zip.png",
        category: "windows",
        badges: [
            { text: "Open Source", type: "opensource" }
        ],
        description: "Yüksək sıxılma dərəcəsinə malik pulsuz və açıq mənbəli fayl arxivatoru."
    },
    {
        id: "portableapps",
        title: "PortableApps",
        url: "https://portableapps.com/",
        icon: "/assets/img/software/portableapps.ico",
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
        icon: "/assets/img/software/ninite.png",
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
        icon: "/assets/img/software/homebrew.svg",
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
        icon: "/assets/img/software/objectivesee.png",
        category: "mac",
        badges: [
            { text: "Security", type: "opensource" }
        ],
        description: "Mac üçün pulsuz, açıq mənbəli təhlükəsizlik alətləri (LuLu, KnockKnock)."
    },
    {
        id: "macupdater",
        title: "MacUpdater",
        url: "https://www.corecode.io/macupdater/",
        icon: "/assets/img/software/macupdater.png",
        category: "mac",
        badges: [
            { text: "Essential", type: "official" }
        ],
        description: "Mac-dakı bütün proqramları avtomatik izləyin və yeniləyin."
    },

    // Linux
    {
        id: "flathub",
        title: "Flathub",
        url: "https://flathub.org/",
        icon: "/assets/img/software/flathub.svg",
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
        icon: "/assets/img/software/snapstore.png",
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
        icon: "/assets/img/software/aur.svg",
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
        icon: "/assets/img/software/fdroid.svg",
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
        icon: "/assets/img/software/mobilism.png",
        category: "android",
        badges: [
            { text: "Community", type: "community" }
        ],
        description: "Android tətbiqləri və kitablar üçün ən böyük forum."
    },
    {
        id: "revanced",
        title: "ReVanced",
        url: "https://revanced.app/",
        icon: "/assets/img/software/revanced.png",
        category: "android",
        badges: [
            { text: "Essential", type: "opensource" },
            { text: "No Ads", type: "official" }
        ],
        description: "YouTube və digər tətbiqlər üçün reklam bloklayıcı və əlavə funksiyalar."
    },

    // Privacy Tools (New Category)
    {
        id: "ublock",
        title: "uBlock Origin",
        url: "https://github.com/gorhill/uBlock",
        icon: "/assets/img/software/ublock.svg",
        category: "privacy",
        badges: [
            { text: "Essential", type: "official" },
            { text: "Open Source", type: "opensource" }
        ],
        description: "Ən effektiv və yüngül reklam bloklayıcısı. Təhlükəsizlik üçün mütləqdir."
    },
    {
        id: "vlc",
        title: "VLC Media Player",
        url: "https://www.videolan.org/",
        icon: "/assets/img/software/vlc.png",
        category: "windows",
        badges: [
            { text: "Open Source", type: "opensource" }
        ],
        description: "Hər növ media faylını oxuda bilən, dünyanın ən məşhur pulsuz media pleyeri."
    },
    {
        id: "qbittorrent",
        title: "qBittorrent",
        url: "https://www.qbittorrent.org/",
        icon: "/assets/img/software/qbittorrent.svg",
        category: "windows",
        badges: [
            { text: "Open Source", type: "opensource" },
            { text: "Ad-free", type: "official" }
        ],
        description: "uTorrent-ə ən yaxşı, açıq mənbəli və reklamsız alternativ. Təhlükəsiz torrent yükləmə."
    },
    {
        id: "privacybadger",
        title: "Privacy Badger",
        url: "https://privacybadger.org/",
        icon: "/assets/img/software/privacybadger_new.png",
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
        icon: "/assets/img/software/bitwarden.svg",
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
        icon: "/assets/img/software/rutracker.png",
        category: "linux", // Also fits universal, but listed in linux/windows usually
        badges: [
            { text: "Tracker", type: "community" },
            { text: "VPN", type: "warning" }
        ],
        description: "Windows, Mac və Linux üçün nadir tapılan resurslar. (VPN tələb olunur)"
    }
];
