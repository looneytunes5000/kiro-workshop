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
    generateSidebar();
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

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(document.querySelector('.theme-toggle-page'), savedTheme);
    } else if (!systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon(document.querySelector('.theme-toggle-page'), 'light');
    }

    document.addEventListener('click', function(e) {
        var themeBtn = e.target.closest('.theme-toggle-page');
        if (!themeBtn) return;
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeBtn, newTheme);
    });

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

function generateSidebar() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    var sidebarHTML = `
        <div class="sidebar-header">
            <div class="logo">
                <img src="img/aiHackathon logo.png" alt="VTC aiHackathon 2026" class="logo-image">
            </div>
        </div>
        <div class="sidebar-search">
            <input type="text" class="sidebar-search-input" placeholder="Search pages... (Ctrl+K)" aria-label="Search pages">
            <button class="sidebar-search-clear" aria-label="Clear search" style="display: none;">✕</button>
        </div>
        <div class="sidebar-nav">
    `;

    var sections = [
        {
            id: 'training-session',
            title: 'Training Session',
            pages: [
                { file: 'training-reference.html', label: 'Overview' },
                { file: 'ai-coding-agents.html', label: 'AI Coding Agents' },
                {
                    title: 'Vibe Coding',
                    subpages: [
                        { file: 'vibe-coding-reference.html', label: 'Vibe Coding Basics' },
                        { file: 'llm-eval-intro.html', label: 'Demo: Integrating a Local LLM' }
                    ]
                },
                {
                    title: 'Spec-Driven Development',
                    subpages: [
                        { file: 'spec-driven-reference.html', label: 'SDD Basics' },
                        { file: 'free-practice-feature.html', label: 'Demo: Free Practice Feature' }
                    ]
                },
                {
                    title: 'Skills',
                    subpages: [
                        { file: 'skills.html', label: 'Skills Basics' },
                        { file: 'skills-reference.html', label: 'Skills in Action' }
                    ]
                },
                { file: 'getting-started.html', label: 'Getting Started' }
            ]
        },
        {
            id: 'core-concepts',
            title: 'Agents Toolkits',
            pages: [
                {
                    title: 'TRAE IDE',
                    subpages: [
                        { file: 'trae-solo-overview.html', label: 'Overview' },
                        { file: 'multitasking.html', label: 'Multitasking' },
                        { file: 'tool-panel.html', label: 'Tool Panel' },
                        { file: 'mcp-integration.html', label: 'MCP Integration' },
                        { file: 'deploy-backend.html', label: 'Deployment' },
                        { file: 'deployment-troubleshooting.html', label: 'Deployment Troubleshooting' }
                    ]
                },
                {
                    title: 'OpenCode',
                    subpages: [
                        { file: 'opencode.html', label: 'OpenCode Overview' },
                        { file: 'opencode-web-ui.html', label: 'OpenCode Web UI' }
                    ]
                }
            ]
        },
        {
            id: 'survival-kit',
            title: 'Survival Kit',
            pages: [
                {
                    title: 'Microsoft Copilot Studio',
                    subpages: [
                        { file: 'microsoft-copilot-studio.html', label: 'Overview' },
                        { file: 'copilot-studio-reference.html', label: 'E-Tutorials' }
                    ]
                },
                {
                    title: 'GenAI Portal',
                    subpages: [
                        { file: 'genai-portal.html', label: 'Overview' },
                        { file: 'genai-portal-reference.html', label: 'Reference' }
                    ]
                }
            ]
        },
        {
            id: 'wrap-up',
            title: 'Wrap Up',
            pages: [
                { file: 'wrapping-up.html', label: 'Wrapping Up' }
            ]
        }
    ];

    sections.forEach(function(section) {
        var isActiveSection = section.pages.some(function(page) {
            if (page.file === currentPage) return true;
            if (page.subpages && page.subpages.length > 0) {
                return page.subpages.some(function(sub) {
                    return sub.file === currentPage;
                });
            }
            return false;
        });

        sidebarHTML += `
            <div class="sidebar-section collapsible ${isActiveSection ? '' : 'collapsed'}" data-section="${section.id}">
                <div class="collapsible-header">
                    <span class="section-title">${section.title}</span>
                    <span class="collapsible-icon">▼</span>
                </div>
                <div class="collapsible-content">
        `;

        section.pages.forEach(function(page) {
            var hasSubpages = page.subpages && page.subpages.length > 0;
            var isCategoryOnly = !page.file && page.title;
            var isSubpageActive = hasSubpages && page.subpages.some(function(sub) {
                return sub.file === currentPage;
            });

            if (isCategoryOnly) {
                var expandedClass = isSubpageActive ? 'expanded' : '';

                sidebarHTML += `
                    <div class="sidebar-link has-subpages ${expandedClass}" style="cursor: pointer;">
                        ${page.title}
                        <span class="subpage-arrow">▶</span>
                    </div>
                `;

                page.subpages.forEach(function(subpage) {
                    var isSubActive = subpage.file === currentPage;
                    var displayStyle = isSubpageActive ? 'block' : 'none';
                    sidebarHTML += `
                        <a href="${subpage.file}" class="sidebar-link sub-item ${isSubActive ? 'active' : ''}" style="display: ${displayStyle};">
                            ${subpage.label}
                        </a>
                    `;
                });
            } else {
                var isActive = page.file === currentPage;
                var arrowIcon = hasSubpages ? '<span class="subpage-arrow">▶</span>' : '';
                var expandedClass = isSubpageActive ? 'expanded' : '';

                sidebarHTML += `
                    <a href="${page.file}" class="sidebar-link ${isActive ? 'active' : ''} ${hasSubpages ? 'has-subpages' : ''} ${expandedClass}">
                        ${page.label}
                        ${arrowIcon}
                    </a>
                `;

                if (hasSubpages) {
                    page.subpages.forEach(function(subpage) {
                        var isSubActive = subpage.file === currentPage;
                        var displayStyle = isSubActive ? 'block' : 'none';
                        sidebarHTML += `
                            <a href="${subpage.file}" class="sidebar-link sub-item ${isSubActive ? 'active' : ''}" style="display: ${displayStyle};">
                                ${subpage.label}
                            </a>
                        `;
                    });
                }
            }
        });

        sidebarHTML += `
                </div>
            </div>
        `;
    });

    sidebarHTML += `
        </div>
    `;

    sidebar.innerHTML = sidebarHTML;

    document.querySelectorAll('.sidebar-link.has-subpages:not(a)').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            link.classList.toggle('expanded');
            var sibling = link.nextElementSibling;
            while (sibling && sibling.classList.contains('sub-item')) {
                var currentDisplay = sibling.style.display;
                sibling.style.display = currentDisplay === 'none' ? 'block' : 'none';
                sibling = sibling.nextElementSibling;
            }
        });
    });

    var pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        var themeBtn = document.createElement('button');
        themeBtn.className = 'theme-toggle-page';
        themeBtn.setAttribute('aria-label', 'Toggle theme');
        themeBtn.textContent = '🌙';
        pageHeader.appendChild(themeBtn);
    }
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
        var hasActiveLink = section.querySelector('.sidebar-link.active') !== null;

        if (savedState[sectionId] === true) {
            section.classList.add('collapsed');
        }

        if (section.querySelector('.sidebar-link.active')) {
            section.classList.remove('collapsed');
            savedState[sectionId] = false;
        }
    });

    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            var header = e.target.closest('.collapsible-header');
            if (!header) return;

            e.preventDefault();
            var section = header.closest('.collapsible');
            if (!section) return;

            var sectionId = section.getAttribute('data-section');
            section.classList.toggle('collapsed');
            var isCollapsed = section.classList.contains('collapsed');
            savedState[sectionId] = isCollapsed;
            localStorage.setItem('sidebarCollapsed', JSON.stringify(savedState));
        });
    }

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

    var sectionChain = getSectionChain(currentPage);
    if (sectionChain && sectionChain.length > 0) {
        for (var i = 0; i < sectionChain.length; i++) {
            var section = sectionChain[i];
            var separator = createSeparator();
            breadcrumbList.appendChild(separator);

            var sectionItem = document.createElement('li');
            sectionItem.className = 'breadcrumb-item';

            if (section.link) {
                var sectionLink = document.createElement('a');
                sectionLink.href = section.link;
                sectionLink.textContent = section.label;
                sectionItem.appendChild(sectionLink);
            } else {
                sectionItem.textContent = section.label;
            }
            breadcrumbList.appendChild(sectionItem);
        }
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
        'training-reference.html': { label: 'AI Hackathon Training Reference', link: 'index.html' },
        'ai-coding-agents.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'vibe-coding-reference.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'spec-driven-reference.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'trae-solo-reference.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'introduction.html': { label: 'Getting Started', link: 'index.html' },
        'start-workshop.html': { label: 'Getting Started', link: 'index.html' },
        'get-started.html': { label: 'Getting Started', link: 'index.html' },
        'desktop-client.html': { label: 'Getting Started', link: 'index.html' },
        'setup-account.html': { label: 'Getting Started', link: 'index.html' },
        'trae-solo-overview.html': { label: 'Core Concepts', link: 'index.html' },
        'multitasking.html': { label: 'Core Concepts', link: 'index.html' },
        'dual-modes.html': { label: 'Core Concepts', link: 'index.html' },
        'tool-panel.html': { label: 'Core Concepts', link: 'index.html' },
        'deploy-backend.html': { label: 'Core Concepts', link: 'index.html' },
        'vibe-coding.html': { label: 'Hands-on Exercises', link: 'vibe-coding-reference.html' },
        'llm-eval-intro.html': { label: 'Vibe Coding', link: 'vibe-coding.html' },
        'deployment-troubleshooting.html': { label: 'Agents Toolkits', link: 'index.html' },
        'mcp-integration.html': { label: 'Agents Toolkits', link: 'index.html' },
        'opencode.html': { label: 'Agents Toolkits', link: 'index.html' },
        'opencode-web-ui.html': { label: 'Agents Toolkits', link: 'index.html' },
        'microsoft-copilot-studio.html': { label: 'Survival Kit', link: 'index.html' },
        'copilot-studio-reference.html': { label: 'Survival Kit', link: 'index.html' },
        'genai-portal.html': { label: 'Survival Kit', link: 'index.html' },
        'genai-portal-reference.html': { label: 'Survival Kit', link: 'index.html' },
        'wrapping-up.html': { label: 'Wrap Up', link: 'index.html' }
    };

    return sectionMap[page] || null;
}

function getSectionChain(page) {
    var nestedChains = {
        'llm-eval-intro.html': [
            { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
            { label: 'Vibe Coding', link: 'vibe-coding.html' }
        ]
    };

    if (nestedChains[page]) {
        return nestedChains[page];
    }

    var sectionMap = {
        'training-reference.html': { label: 'AI Hackathon Training Reference', link: 'index.html' },
        'ai-coding-agents.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'vibe-coding-reference.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'spec-driven-reference.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'trae-solo-reference.html': { label: 'AI Hackathon Training Reference', link: 'training-reference.html' },
        'introduction.html': { label: 'Getting Started', link: 'index.html' },
        'start-workshop.html': { label: 'Getting Started', link: 'index.html' },
        'get-started.html': { label: 'Getting Started', link: 'index.html' },
        'desktop-client.html': { label: 'Getting Started', link: 'index.html' },
        'setup-account.html': { label: 'Getting Started', link: 'index.html' },
        'trae-solo-overview.html': { label: 'Core Concepts', link: 'index.html' },
        'multitasking.html': { label: 'Core Concepts', link: 'index.html' },
        'dual-modes.html': { label: 'Core Concepts', link: 'index.html' },
        'tool-panel.html': { label: 'Core Concepts', link: 'index.html' },
        'deploy-backend.html': { label: 'Core Concepts', link: 'index.html' },
        'deployment-troubleshooting.html': { label: 'Agents Toolkits', link: 'index.html' },
        'mcp-integration.html': { label: 'Agents Toolkits', link: 'index.html' },
        'opencode.html': { label: 'Agents Toolkits', link: 'index.html' },
        'opencode-web-ui.html': { label: 'Agents Toolkits', link: 'index.html' },
        'microsoft-copilot-studio.html': { label: 'Survival Kit', link: 'index.html' },
        'copilot-studio-reference.html': { label: 'Survival Kit', link: 'index.html' },
        'genai-portal.html': { label: 'Survival Kit', link: 'index.html' },
        'genai-portal-reference.html': { label: 'Survival Kit', link: 'index.html' },
        'wrapping-up.html': { label: 'Wrap Up', link: 'index.html' }
    };

    var current = sectionMap[page];
    if (!current) return null;

    return [{ label: current.label, link: current.link }];
}

function createSeparator() {
    var separator = document.createElement('span');
    separator.className = 'breadcrumb-separator';
    separator.textContent = '›';
    separator.setAttribute('aria-hidden', 'true');
    return separator;
}
