window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            if (backdrop) {
                backdrop.classList.toggle('active');
            }
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', function() {
            sidebar.classList.remove('open');
            backdrop.classList.remove('active');
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            if (backdrop) {
                backdrop.classList.remove('active');
            }
        }
    });

    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(themeToggle, savedTheme);
    } else if (!systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon(themeToggle, 'light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(themeToggle, newTheme);
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes(currentPage)) {
        visitedPages.push(currentPage);
        localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }

    document.querySelectorAll('.sidebar-link').forEach(function(link) {
        const href = link.getAttribute('href');
        if (href && visitedPages.includes(href)) {
            link.classList.add('visited');
        }
    });

    const pageHeaders = document.querySelectorAll('.page-header');
    pageHeaders.forEach((header) => {
        header.addEventListener('mousemove', (e) => {
            const rect = header.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            header.style.setProperty('--glow-x', `${x}%`);
            header.style.setProperty('--glow-y', `${y}%`);
        });
    });



    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-outcome, .animate-callout').forEach((el) => {
        revealObserver.observe(el);
    });

    initCollapsibleSections();
    initSidebarSearch();
    generateBreadcrumbs();
    generateOverview();
});

function updateThemeIcon(button, theme) {
    if (!button) return;
    button.textContent = theme === 'light' ? '🌙' : '☀️';
    button.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
}

function generateOverview() {
    var contentArticle = document.querySelector('article.content');
    if (!contentArticle) return;

    var headings = contentArticle.querySelectorAll('h2, h3');
    if (headings.length < 2) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'content-wrapper';

    var overview = document.createElement('aside');
    overview.className = 'overview';

    var title = document.createElement('div');
    title.className = 'overview-title';
    title.textContent = 'On this page';
    overview.appendChild(title);

    headings.forEach(function(heading) {
        var id = heading.id;
        if (!id) {
            id = heading.textContent.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
            heading.id = id;
        }

        var link = document.createElement('a');
        link.href = '#' + id;
        link.className = 'overview-link';
        if (heading.tagName === 'H3') {
            link.classList.add('sub-item');
        }
        link.textContent = heading.textContent;
        overview.appendChild(link);
    });

    var mainElement = document.querySelector('.main');
    if (mainElement) {
        var navButtons = mainElement.querySelector('.navigation-buttons');
        var footer = mainElement.querySelector('.footer');
        var navButtonsIsDirectChild = navButtons && navButtons.parentNode === mainElement;
        var footerIsDirectChild = footer && footer.parentNode === mainElement;

        wrapper.appendChild(contentArticle.cloneNode(true));
        wrapper.appendChild(overview);

        contentArticle.remove();

        if (navButtonsIsDirectChild) {
            mainElement.insertBefore(wrapper, navButtons);
        } else if (footerIsDirectChild) {
            mainElement.insertBefore(wrapper, footer);
        } else {
            mainElement.appendChild(wrapper);
        }
    }

    var newContent = wrapper.querySelector('.content');
    var newHeadings = newContent.querySelectorAll('h2, h3');
    setupScrollSpy(newHeadings);
    setupSmoothScroll(overview);
}

function setupScrollSpy(headings) {
    var overviewLinks = document.querySelectorAll('.overview-link');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var id = entry.target.id;
                overviewLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -75% 0px',
        threshold: 0
    });

    headings.forEach(function(heading) {
        observer.observe(heading);
    });
}

function setupSmoothScroll(overview) {
    overview.addEventListener('click', function(e) {
        var target = e.target;
        if (target.tagName !== 'A' || !target.classList.contains('overview-link')) return;

        e.preventDefault();
        var href = target.getAttribute('href');
        var targetElement = document.querySelector(href);

        if (targetElement) {
            var headerOffset = 80;
            var elementPosition = targetElement.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            history.pushState(null, null, href);
        }
    });
}

function initCollapsibleSections() {
    var savedState = JSON.parse(localStorage.getItem('sidebarCollapsed') || '{}');
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.collapsible-header').forEach(function(header) {
        var section = header.closest('.collapsible');
        var sectionId = section.getAttribute('data-section');

        if (savedState[sectionId] === true) {
            section.classList.add('collapsed');
        }

        if (section.querySelector('.sidebar-link.active')) {
            section.classList.remove('collapsed');
            savedState[sectionId] = false;
        }

        header.addEventListener('click', function() {
            section.classList.toggle('collapsed');
            var isCollapsed = section.classList.contains('collapsed');
            savedState[sectionId] = isCollapsed;
            localStorage.setItem('sidebarCollapsed', JSON.stringify(savedState));
        });
    });

    localStorage.setItem('sidebarCollapsed', JSON.stringify(savedState));
}

function initSidebarSearch() {
    var searchInput = document.querySelector('.sidebar-search-input');
    var clearButton = document.querySelector('.sidebar-search-clear');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        var query = this.value.toLowerCase().trim();

        if (clearButton) {
            clearButton.style.display = query ? 'flex' : 'none';
        }

        document.querySelectorAll('.sidebar-section.collapsible').forEach(function(section) {
            var links = section.querySelectorAll('.sidebar-link');
            var hasMatch = false;

            links.forEach(function(link) {
                var text = link.textContent.toLowerCase();
                if (query === '' || text.includes(query)) {
                    link.classList.remove('hidden');
                    link.classList.toggle('search-match', query !== '');
                    hasMatch = true;
                } else {
                    link.classList.add('hidden');
                    link.classList.remove('search-match');
                }
            });

            section.classList.toggle('hidden', !hasMatch && query !== '');

            if (query !== '' && hasMatch) {
                section.classList.remove('collapsed');
            }
        });
    });

    if (clearButton) {
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
        });
    }

    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
}

function generateBreadcrumbs() {
    var mainElement = document.querySelector('.main');
    if (!mainElement) return;

    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html') return;

    var pageHeader = mainElement.querySelector('.page-header');
    if (!pageHeader) return;

    var breadcrumbContainer = document.createElement('nav');
    breadcrumbContainer.className = 'breadcrumb';
    breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');

    var breadcrumbList = document.createElement('ul');
    breadcrumbList.className = 'breadcrumb-list';

    var homeItem = document.createElement('li');
    homeItem.className = 'breadcrumb-item';
    var homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Home';
    homeItem.appendChild(homeLink);
    breadcrumbList.appendChild(homeItem);

    var sectionName = getSectionName(currentPage);
    if (sectionName) {
        var separator = createSeparator();
        breadcrumbList.appendChild(separator);

        var sectionItem = document.createElement('li');
        sectionItem.className = 'breadcrumb-item';

        if (sectionName.link) {
            var sectionLink = document.createElement('a');
            sectionLink.href = sectionName.link;
            sectionLink.textContent = sectionName.label;
            sectionItem.appendChild(sectionLink);
        } else {
            sectionItem.textContent = sectionName.label;
        }
        breadcrumbList.appendChild(sectionItem);
    }

    var pageTitle = pageHeader.querySelector('h1');
    if (pageTitle) {
        var separator = createSeparator();
        breadcrumbList.appendChild(separator);

        var currentItem = document.createElement('li');
        currentItem.className = 'breadcrumb-item';
        currentItem.textContent = pageTitle.textContent;
        breadcrumbList.appendChild(currentItem);
    }

    breadcrumbContainer.appendChild(breadcrumbList);
    mainElement.insertBefore(breadcrumbContainer, pageHeader);
}

function getSectionName(page) {
    var sectionMap = {
        'introduction.html': { label: 'Getting Started', link: 'index.html' },
        'start-workshop.html': { label: 'Getting Started', link: 'index.html' },
        'get-started.html': { label: 'Getting Started', link: 'index.html' },
        'desktop-client.html': { label: 'Getting Started', link: 'index.html' },
        'setup-account.html': { label: 'Getting Started', link: 'index.html' },
        'trae-solo-overview.html': { label: 'Core Concepts', link: 'index.html' },
        'dual-clients.html': { label: 'Core Concepts', link: 'index.html' },
        'dual-modes.html': { label: 'Core Concepts', link: 'index.html' },
        'cloud-agent.html': { label: 'Core Concepts', link: 'index.html' },
        'understanding-application.html': { label: 'Core Concepts', link: 'index.html' },
        'deploy-backend.html': { label: 'Core Concepts', link: 'index.html' },
        'steering.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'generate-steering.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'vibe-coding.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'cancel-button.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'spec-driven.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'practice-mode-feature.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'deployment-troubleshooting.html': { label: 'Hands-on Exercises', link: 'index.html' },
        'agent-hooks.html': { label: 'Advanced Topics', link: 'index.html' },
        'hook-configuration.html': { label: 'Advanced Topics', link: 'index.html' },
        'hook-examples.html': { label: 'Advanced Topics', link: 'index.html' },
        'mcp-integration.html': { label: 'Advanced Topics', link: 'index.html' },
        'advanced-steering.html': { label: 'Advanced Topics', link: 'index.html' },
        'sub-agents.html': { label: 'Advanced Topics', link: 'index.html' },
        'context-engineering.html': { label: 'Advanced Topics', link: 'index.html' },
        'resource-cleanup.html': { label: 'Wrap Up', link: 'index.html' },
        'wrapping-up.html': { label: 'Wrap Up', link: 'index.html' },
        'opencode-web-ui.html': { label: 'Hackathon Toolkit', link: 'index.html' }
    };

    return sectionMap[page] || null;
}

function createSeparator() {
    var separator = document.createElement('span');
    separator.className = 'breadcrumb-separator';
    separator.textContent = '›';
    separator.setAttribute('aria-hidden', 'true');
    return separator;
}
