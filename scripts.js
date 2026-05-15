const SIDEBAR_SECTIONS = [
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
                    { file: '14-skills.html', label: 'Available Skills' },
                    { file: 'skills-reference.html', label: 'Skills in Action' }
                ]
            },
            { file: 'getting-started.html', label: 'Getting Started' }
        ]
    },
    {
        id: 'core-concepts',
        title: 'AI Coding Agents',
        pages: [
            {
                title: 'TRAE Overview',
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
        title: 'AI-Powered Systems',
        pages: [
            {
                title: 'Microsoft Copilot Studio',
                subpages: [
                    { file: 'microsoft-copilot-studio.html', label: 'Overview' },
                    { file: 'copilot-studio-reference.html', label: 'E-Tutorials' },
                    { file: 'agent-integration.html', label: 'Agent Integration' }
                ]
            },
            {
                title: 'GenAI Portal',
                subpages: [
                    { file: 'genai-portal.html', label: 'Overview' },
                    { file: 'genai-portal-reference.html', label: 'Browser Automation' }
                ]
            },
            { file: 'ollama.html', label: 'Ollama' }
        ]
    },
    {
        id: 'faq',
        title: 'FAQ',
        pages: [
            { file: 'faq.html', label: 'Frequently Asked Questions' }
        ]
    }
];

let breadcrumbLookup = null;

function buildBreadcrumbLookup() {
    if (breadcrumbLookup) return breadcrumbLookup;

    breadcrumbLookup = {};

    SIDEBAR_SECTIONS.forEach(function(section) {
        section.pages.forEach(function(page) {
            if (page.file) {
                breadcrumbLookup[page.file] = {
                    sectionLabel: section.title,
                    sectionLink: 'index.html',
                    parentLabels: [],
                    parentLinks: []
                };
            }

            if (page.subpages && page.subpages.length > 0) {
                page.subpages.forEach(function(subpage, index) {
                    const parentLabels = [];
                    const parentLinks = [];

                    if (index > 0) {
                        parentLabels.push(page.title);
                        parentLinks.push(page.subpages[index - 1].file);
                    }

                    breadcrumbLookup[subpage.file] = {
                        sectionLabel: section.title,
                        sectionLink: 'index.html',
                        parentLabels: parentLabels,
                        parentLinks: parentLinks,
                        categoryTitle: page.title,
                        categoryLink: page.subpages[0].file
                    };
                });
            }
        });
    });

    return breadcrumbLookup;
}

function getSectionName(page) {
    const lookup = buildBreadcrumbLookup();
    const entry = lookup[page];
    if (!entry) return null;

    return { label: entry.sectionLabel, link: entry.sectionLink };
}

function getSectionChain(page) {
    const lookup = buildBreadcrumbLookup();
    const entry = lookup[page];
    if (!entry) return null;

    const chain = [];

    chain.push({ label: entry.sectionLabel, link: entry.sectionLink });

    for (let i = 0; i < entry.parentLabels.length; i++) {
        chain.push({ label: entry.parentLabels[i], link: entry.parentLinks[i] });
    }

    return chain;
}

window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight === 0) return;
        const scrollPercent = (scrollTop / scrollHeight);
        const clampedPercent = Math.max(0.02, scrollPercent);
        progressBar.style.transform = `scaleX(${clampedPercent})`;
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
        const themeBtn = e.target.closest('.theme-toggle-page');
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

    document.querySelectorAll('.animate-outcome, .animate-callout, .animate-in').forEach((el) => {
        revealObserver.observe(el);
    });

    initCollapsibleSections();
    initSidebarSearch();
    initSidebarKeyboardNavigation();
    generateBreadcrumbs();
    generateOverview();
    initChatbot();
});

function updateThemeIcon(button, theme) {
    if (!button) return;
    button.textContent = theme === 'light' ? '🌙' : '☀️';
    button.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
}

function generateSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    let sidebarHTML = `
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

    const homePageActive = currentPage === 'home.html';
    sidebarHTML += `
        <a href="home.html" class="sidebar-home-link ${homePageActive ? 'active' : ''}">
            Home
        </a>
    `;

    const savedCollapsedState = JSON.parse(localStorage.getItem('sidebarCollapsed') || '{}');

    SIDEBAR_SECTIONS.forEach(function(section) {
        const isActiveSection = section.pages.some(function(page) {
            if (page.file === currentPage) return true;
            if (page.subpages && page.subpages.length > 0) {
                return page.subpages.some(function(sub) {
                    return sub.file === currentPage;
                });
            }
            return false;
        });

        const isExplicitlyCollapsed = savedCollapsedState[section.id] === true;
        const shouldCollapse = isExplicitlyCollapsed && !isActiveSection;
        const collapsedClass = shouldCollapse ? 'collapsed' : '';

        sidebarHTML += `
            <div class="sidebar-section collapsible ${collapsedClass}" data-section="${section.id}">
                <div class="collapsible-header">
                    <span class="section-title">${section.title}</span>
                    <span class="collapsible-icon">▼</span>
                </div>
                <div class="collapsible-content">
        `;

        section.pages.forEach(function(page) {
            const hasSubpages = page.subpages && page.subpages.length > 0;
            const isCategoryOnly = !page.file && page.title;
            const isSubpageActive = hasSubpages && page.subpages.some(function(sub) {
                return sub.file === currentPage;
            });

            if (isCategoryOnly) {
                const expandedClass = isSubpageActive ? 'expanded' : '';

                sidebarHTML += `
                    <div class="sidebar-link has-subpages ${expandedClass}" style="cursor: pointer;">
                        ${page.title}
                        <span class="subpage-arrow">▶</span>
                    </div>
                `;

                page.subpages.forEach(function(subpage) {
                    const isSubActive = subpage.file === currentPage;
                    const displayStyle = isSubpageActive ? 'block' : 'none';
                    sidebarHTML += `
                        <a href="${subpage.file}" class="sidebar-link sub-item ${isSubActive ? 'active' : ''}" style="display: ${displayStyle};">
                            ${subpage.label}
                        </a>
                    `;
                });
            } else {
                const isActive = page.file === currentPage;
                const arrowIcon = hasSubpages ? '<span class="subpage-arrow">▶</span>' : '';
                const expandedClass = isSubpageActive ? 'expanded' : '';

                sidebarHTML += `
                    <a href="${page.file}" class="sidebar-link ${isActive ? 'active' : ''} ${hasSubpages ? 'has-subpages' : ''} ${expandedClass}">
                        ${page.label}
                        ${arrowIcon}
                    </a>
                `;

                if (hasSubpages) {
                    page.subpages.forEach(function(subpage) {
                        const isSubActive = subpage.file === currentPage;
                        const displayStyle = isSubActive ? 'block' : 'none';
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
            let sibling = link.nextElementSibling;
            while (sibling && sibling.classList.contains('sub-item')) {
                const currentDisplay = sibling.style.display;
                sibling.style.display = currentDisplay === 'none' ? 'block' : 'none';
                sibling = sibling.nextElementSibling;
            }
        });
    });

    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        const themeBtn = document.createElement('button');
        themeBtn.className = 'theme-toggle-page';
        themeBtn.setAttribute('aria-label', 'Toggle theme');
        themeBtn.textContent = '🌙';
        pageHeader.appendChild(themeBtn);
    }
}

function generateOverview() {
    const contentArticle = document.querySelector('article.content');
    if (!contentArticle) return;

    const headings = contentArticle.querySelectorAll('h2, h3');
    if (headings.length < 2) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'content-wrapper';

    const overview = document.createElement('aside');
    overview.className = 'overview';

    const title = document.createElement('div');
    title.className = 'overview-title';
    title.textContent = 'On this page';
    overview.appendChild(title);

    headings.forEach(function(heading) {
        let id = heading.id;
        if (!id) {
            id = heading.textContent.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
            heading.id = id;
        }

        const link = document.createElement('a');
        link.href = '#' + id;
        link.className = 'overview-link';
        if (heading.tagName === 'H3') {
            link.classList.add('sub-item');
        }
        link.textContent = heading.textContent;
        overview.appendChild(link);
    });

    const mainElement = document.querySelector('.main');
    if (mainElement) {
        const navButtons = mainElement.querySelector('.navigation-buttons');
        const footer = mainElement.querySelector('.footer');
        const navButtonsIsDirectChild = navButtons && navButtons.parentNode === mainElement;
        const footerIsDirectChild = footer && footer.parentNode === mainElement;

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

    const newContent = wrapper.querySelector('.content');
    const newHeadings = newContent.querySelectorAll('h2, h3');
    setupScrollSpy(newHeadings);
    setupSmoothScroll(overview);
}

function setupScrollSpy(headings) {
    const overviewLinks = document.querySelectorAll('.overview-link');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const id = entry.target.id;
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
        const target = e.target;
        if (target.tagName !== 'A' || !target.classList.contains('overview-link')) return;

        e.preventDefault();
        const href = target.getAttribute('href');
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            history.pushState(null, null, href);
        }
    });
}

function initCollapsibleSections() {
    const savedState = JSON.parse(localStorage.getItem('sidebarCollapsed') || '{}');

    document.querySelectorAll('.collapsible').forEach(function(section) {
        const sectionId = section.getAttribute('data-section');
        const hasActiveLink = section.querySelector('.sidebar-link.active') !== null;

        if (hasActiveLink) {
            section.classList.remove('collapsed');
            savedState[sectionId] = false;
        }
    });

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            const header = e.target.closest('.collapsible-header');
            if (!header) return;

            e.preventDefault();
            const section = header.closest('.collapsible');
            if (!section) return;

            const sectionId = section.getAttribute('data-section');
            section.classList.toggle('collapsed');
            const isCollapsed = section.classList.contains('collapsed');
            savedState[sectionId] = isCollapsed;
            localStorage.setItem('sidebarCollapsed', JSON.stringify(savedState));
        });
    }

    localStorage.setItem('sidebarCollapsed', JSON.stringify(savedState));
}

function initSidebarSearch() {
    const searchInput = document.querySelector('.sidebar-search-input');
    const clearButton = document.querySelector('.sidebar-search-clear');

    if (!searchInput) return;

    document.querySelectorAll('.sidebar-link, .sidebar-home-link').forEach(function(link) {
        if (!link.getAttribute('data-original-text')) {
            link.setAttribute('data-original-text', link.textContent);
        }
    });

    function highlightText(element, query) {
        const original = element.getAttribute('data-original-text') || element.textContent;
        if (!query) {
            element.textContent = original;
            return;
        }
        const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        element.innerHTML = original.replace(regex, '<span class="search-highlight">$1</span>');
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();

        if (clearButton) {
            clearButton.style.display = query ? 'flex' : 'none';
        }

        document.querySelectorAll('.sidebar-section.collapsible').forEach(function(section) {
            const links = section.querySelectorAll('.sidebar-link');
            let hasMatch = false;

            links.forEach(function(link) {
                const text = (link.getAttribute('data-original-text') || link.textContent).toLowerCase();
                if (query === '' || text.includes(query)) {
                    link.classList.remove('hidden');
                    link.classList.toggle('search-match', query !== '');
                    highlightText(link, query);
                    hasMatch = true;
                } else {
                    link.classList.add('hidden');
                    link.classList.remove('search-match');
                    highlightText(link, '');
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

function initSidebarKeyboardNavigation() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    function getVisibleLinks() {
        return Array.from(sidebar.querySelectorAll('.sidebar-link:not(.hidden), .sidebar-home-link:not(.hidden)'));
    }

    sidebar.addEventListener('keydown', function(e) {
        const links = getVisibleLinks();
        if (links.length === 0) return;

        const currentIndex = links.indexOf(document.activeElement);
        if (currentIndex === -1) return;

        let newIndex = currentIndex;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                newIndex = Math.min(currentIndex + 1, links.length - 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                newIndex = Math.max(currentIndex - 1, 0);
                break;
            case 'Home':
                e.preventDefault();
                newIndex = 0;
                break;
            case 'End':
                e.preventDefault();
                newIndex = links.length - 1;
                break;
            default:
                return;
        }

        if (newIndex !== currentIndex) {
            links[newIndex].focus();
        }
    });
}

function generateBreadcrumbs() {
    const mainElement = document.querySelector('.main');
    if (!mainElement) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html') return;

    const pageHeader = mainElement.querySelector('.page-header');
    if (!pageHeader) return;

    const breadcrumbContainer = document.createElement('nav');
    breadcrumbContainer.className = 'breadcrumb';
    breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');

    const breadcrumbList = document.createElement('ul');
    breadcrumbList.className = 'breadcrumb-list';

    const homeItem = document.createElement('li');
    homeItem.className = 'breadcrumb-item';
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Home';
    homeItem.appendChild(homeLink);
    breadcrumbList.appendChild(homeItem);

    const sectionChain = getSectionChain(currentPage);
    if (sectionChain && sectionChain.length > 0) {
        for (let i = 0; i < sectionChain.length; i++) {
            const section = sectionChain[i];
            const separator = createSeparator();
            breadcrumbList.appendChild(separator);

            const sectionItem = document.createElement('li');
            sectionItem.className = 'breadcrumb-item';

            if (section.link) {
                const sectionLink = document.createElement('a');
                sectionLink.href = section.link;
                sectionLink.textContent = section.label;
                sectionItem.appendChild(sectionLink);
            } else {
                sectionItem.textContent = section.label;
            }
            breadcrumbList.appendChild(sectionItem);
        }
    }

    const pageTitle = pageHeader.querySelector('h1');
    if (pageTitle) {
        const separator = createSeparator();
        breadcrumbList.appendChild(separator);

        const currentItem = document.createElement('li');
        currentItem.className = 'breadcrumb-item';
        currentItem.textContent = pageTitle.textContent;
        breadcrumbList.appendChild(currentItem);
    }

    breadcrumbContainer.appendChild(breadcrumbList);
    mainElement.insertBefore(breadcrumbContainer, pageHeader);
}

function createSeparator() {
    const separator = document.createElement('span');
    separator.className = 'breadcrumb-separator';
    separator.textContent = '\u203a';
    separator.setAttribute('aria-hidden', 'true');
    return separator;
}

const CHATBOT_CONTEXT = {
    eventName: 'aiHackathon 2026',
    eventDescription: 'A hackathon focused on AI-driven development using TRAE tools, covering Vibe Coding, Spec-Driven Development, AI Coding Agents, and enterprise AI systems.',
    tracks: [
        {
            name: 'Training Session',
            description: 'Learn the fundamentals of TRAE\'s AI-driven development. From Vibe Coding to Spec-Driven Development and Skills activation.',
            pages: ['training-reference.html', 'ai-coding-agients.html', 'vibe-coding-reference.html', 'llm-eval-intro.html', 'spec-driven-reference.html', 'free-practice-feature.html', 'skills.html', '14-skills.html', 'skills-reference.html', 'getting-started.html']
        },
        {
            name: 'AI Coding Agents',
            description: 'Discover specialized skills and build AI-powered features. Explore TRAE, OpenCode, MCP integration, and deployment workflows.',
            pages: ['trae-solo-overview.html', 'multitasking.html', 'tool-panel.html', 'mcp-integration.html', 'deploy-backend.html', 'deployment-troubleshooting.html', 'opencode.html', 'opencode-web-ui.html']
        },
        {
            name: 'AI-Powered Systems (Survival Kit)',
            description: 'Essential skills for hackathon survival and deployment. Enterprise tools like Copilot Studio and GenAI Portal for production-ready workflows.',
            pages: ['microsoft-copilot-studio.html', 'copilot-studio-reference.html', 'agent-integration.html', 'genai-portal.html', 'genai-portal-reference.html', 'ollama.html']
        }
    ],
    roadmap: [
        { step: 1, title: 'Getting Started', tag: 'Training', desc: 'Introduction to TRAE, environment setup, and understanding the dual-client architecture with MTC and Code modes.' },
        { step: 2, title: 'Vibe Coding', tag: 'Training', desc: 'Rapid feature development using natural language descriptions. Build real interfaces with conversational AI workflows.' },
        { step: 3, title: 'Spec-Driven Development', tag: 'Training', desc: 'Structured specifications for complex, multi-file features. Plan requirements and edge cases before writing code.' },
        { step: 4, title: 'Skills', tag: 'Training', desc: 'Access to 14 curated essential skills covering development, design, data analysis, and content creation.' },
        { step: 5, title: 'TRAE Overview', tag: 'Toolkits', desc: 'Multitasking, tool panel usage, MCP integration, and deployment for production applications.' },
        { step: 6, title: 'OpenCode', tag: 'Toolkits', desc: 'Explore OpenCode\'s terminal-based interface and web UI for AI-powered coding workflows.' },
        { step: 7, title: 'Microsoft Copilot Studio', tag: 'Survival', desc: 'Build and deploy custom AI agents using enterprise-grade tools and integrations.' },
        { step: 8, title: 'GenAI Portal', tag: 'Survival', desc: 'Browser automation and advanced AI interactions for scaling your development workflow.' }
    ],
    judgingCriteria: [
        { name: 'Innovation', weight: '25%', desc: 'Originality and creativity of the solution' },
        { name: 'Technical Implementation', weight: '25%', desc: 'Quality of code, architecture, and functionality' },
        { name: 'Business Value', weight: '25%', desc: 'Market potential and problem-solving impact' },
        { name: 'Presentation', weight: '25%', desc: 'Clarity of pitch, demo, and documentation' }
    ],
    skillsList: [
        'brainstorming', 'canvas-design', 'chart-visualization', 'data-analysis',
        'doc-coauthoring', 'figma', 'frontend-design', 'frontend-skill',
        'git-commit', 'impeccable', 'skill-creator', 'vercel-composition-patterns',
        'vercel-react-best-practices', 'webapp-testing'
    ],
    keyTools: [
        { name: 'TRAE', desc: 'AI-powered IDE with multitasking, tool panel, and MCP integration' },
        { name: 'OpenCode', desc: 'Terminal-based and web UI for AI-powered coding' },
        { name: 'Microsoft Copilot Studio', desc: 'Enterprise AI agent building and deployment' },
        { name: 'GenAI Portal', desc: 'Browser automation and advanced AI interactions' },
        { name: 'Ollama', desc: 'Local LLM running for private AI development' }
    ],
    pageSummaries: {
        'getting-started.html': 'Introduction to TRAE, covering environment setup, the dual-client architecture with MTC (Chat) and Code modes, and how to configure your first AI-powered session.',
        'vibe-coding-reference.html': 'Vibe Coding: rapid feature development using natural language descriptions. You describe what you want in plain English and the AI builds it iteratively. Covers prompt writing best practices and examples of good vs poor prompts.',
        'spec-driven-reference.html': 'Spec-Driven Development: structured approach for complex multi-file features. Generate requirements documents, technical specifications, and implementation plans before writing code. Best for projects with many moving parts.',
        'skills.html': 'Overview of the 14 curated essential skills available in TRAE, covering development (brainstorming, git-commit), design (canvas-design, figma, frontend-design, impeccable), data (chart-visualization, data-analysis), content (doc-coauthoring), and testing (webapp-testing).',
        'trae-solo-overview.html': 'TRAE overview: multitasking capabilities, tool panel for file management and terminal access, and how to coordinate multiple AI-powered tasks simultaneously.',
        'mcp-integration.html': 'Model Context Protocol (MCP) integration: connecting TRAE to external tools, APIs, databases, and services. Enables the AI agent to read/write files, run commands, query data, and deploy applications.',
        'opencode.html': 'OpenCode: terminal-based coding agent interface for AI-powered development workflows in your console. Alternative to the GUI-based TRAE experience.',
        'microsoft-copilot-studio.html': 'Microsoft Copilot Studio: build and deploy custom AI agents for enterprise use. Create conversational Q&A bots, connect to knowledge bases, and integrate with Microsoft 365 and other business systems.',
        'agent-integration.html': 'Agent Integration with Copilot Studio: configuring voice channels like Direct Line Speech, obtaining authentication tokens, and embedding AI agents into applications for real-time conversations.',
        'genai-portal.html': 'GenAI Portal: browser automation and advanced AI interaction capabilities. Automate web workflows, handle authentication, and scale AI-powered browsing tasks.',
        'ollama.html': 'Ollama: running AI language models locally on your own machine for private, offline AI development. Supports models like Llama, Mistral, and Phi.'
    },
    keyConcepts: {
        'Vibe Coding': 'A development approach where you describe user interfaces and features using natural language, and the AI generates the code iteratively through conversation. Focuses on rapid prototyping without writing code manually.',
        'Spec-Driven Development': 'A structured methodology where you generate formal requirement documents and technical specifications before implementation. Used for complex features that need planning, edge-case analysis, and multi-file coordination.',
        'MCP (Model Context Protocol)': 'A standard for connecting AI coding agents to external tools and data sources. Enables agents to access databases, APIs, file systems, and development environments to take real-world actions beyond text generation.',
        'Skills': 'Pre-built specialized capabilities within TRAE that guide the AI through specific workflows (e.g., testing, design, data analysis, documentation). Each skill provides structured prompts, patterns, and best practices.',
        'Agentic Loop': 'The cycle where an AI coding agent gathers context from the codebase, takes action by writing or modifying code, then verifies results by running tests or checking for errors. Unlike a chatbot, the agent takes concrete actions.',
        'Direct Line Speech': 'A communication channel in Microsoft Copilot Studio that allows real-time voice conversations with your AI agent. Used for building voice-enabled assistants in applications.',
        'TRAE': 'An AI-powered integrated development environment that combines code editing, AI chat, tool panels, and MCP integration into a single workspace for building applications with AI assistance.'
    },
    faqEntries: [
        { q: 'What are the judging criteria?', a: 'Four criteria, each weighted at 25%: Innovation (originality and creativity), Technical Implementation (quality of code, architecture, and functionality), Business Value (market potential and problem-solving impact), and Presentation (clarity of pitch, demo, and documentation).' },
        { q: 'How many tracks are there?', a: 'Three tracks: Training Session (fundamentals of AI-driven development), AI Coding Agents (toolkits including TRAE, OpenCode, and MCP integration), and AI-Powered Systems / Survival Kit (enterprise tools like Copilot Studio and GenAI Portal).' },
        { q: 'How do I get started?', a: 'Start with Step 1: Getting Started, which covers TRAE setup and the dual-client architecture. Then move through the roadmap or jump into the track most relevant to your project.' },
        { q: 'What is the roadmap?', a: 'An 8-step guide: (1) Getting Started, (2) Vibe Coding, (3) Spec-Driven Development, (4) Skills, (5) TRAE Overview, (6) OpenCode, (7) Microsoft Copilot Studio, (8) GenAI Portal.' },
        { q: 'Do I need to set up an API key?', a: 'No — the AI assistant is pre-configured and ready to use. Just start asking questions!' },
        { q: 'What skills are available?', a: '14 skills: brainstorming, canvas-design, chart-visualization, data-analysis, doc-coauthoring, figma, frontend-design, frontend-skill, git-commit, impeccable, skill-creator, vercel-composition-patterns, vercel-react-best-practices, and webapp-testing.' },
        { q: 'How do I build a chatbot or AI assistant?', a: 'For Q&A agents, Microsoft Copilot Studio (Step 7) is ideal. For coding-focused agents, use TRAE with MCP integration (Steps 5-6). Both integrate with the TRAE Skills ecosystem.' },
        { q: 'How do I back up my project to keep building after the event?', a: 'You have two options: (1) Push to GitHub — use a prompt in TRAE to initialize a git repo, create a .gitignore, and push to a new personal repository. Make sure you are signed in to GitHub first. (2) Upload to OneDrive — copy your project directory to your personal OneDrive. On Mac, the path is Documents -> trae_projects.' },
        { q: 'Will the aiHackathon 2026 environment in Microsoft Copilot Studio be available after the competition?', a: 'The environment will be available for 1 month after the competition. You are strongly advised to migrate any data you would like to keep into the production environment. For developing student-facing agents, use www.vtc.edu.hk/aiAgentForStudent. For developing staff-facing agents, use www.vtc.edu.hk/aiAgentForStaff.' },
        { q: 'How long can I keep the extra token for VTC GenAI Portal?', a: 'The extra token will be available for 6 months after the event.' },
        { q: 'What awards are available?', a: 'Total prizes worth HK$30,000: Gold Award (HK$10,000 per team), Silver Award (HK$8,000 per team), Bronze Award (HK$5,000 per team), Outstanding Innovation Award (HK$2,000 per team), My Favourite AI Solution Award (Audience Vote, HK$2,000 per team), Excellent Strategic Solution Award (HK$1,000 per team), Excellent Administrative Solution Award (HK$1,000 per team), and Excellent Learning & Teaching Solution Award (HK$1,000 per team). All competing teams receive certificates of attendance.' },
        { q: 'What is the schedule for the competition day?', a: 'The event on 5 June 2026 at Hall, VTC Tsing Yi Complex runs from 09:00 to 17:15. Key milestones: 09:00 Check-in, 09:40 Training Session, 10:40 Official Start, 13:30 Live Streaming Begins, 14:40 Team Presentations, 16:40 Judging Panel Deliberation, 17:00 Voting Deadline & Prize Presentation, 17:15 Closing Remarks.' },
        { q: 'Who are the judges?', a: 'The Judging Panel consists of: Dave CHEN (President, Hong Kong Computer Society), Dr. John HUI (Principal cum Chief Digital Officer, HKIIT), Dr. Daniel YAN (Academic Director of Engineering, VTC cum Principal, HTI Tsing Yi), Kenny WOO (Director, Human Resources Office, VTC), Keith YEUNG (Director, Information Technology Office, VTC), and Dennis WONG (Associate Principal, HTI Chai Wan).' }
    ]
};

const CHATBOT_PAGE_SUGGESTIONS = {
    'home.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'index.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'training-reference.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'getting-started.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'vibe-coding-reference.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'spec-driven-reference.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'skills.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'trae-solo-overview.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'opencode.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'microsoft-copilot-studio.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'genai-portal.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ],
    'ollama.html': [
        'Presentation format',
        'Explain Vibe Coding',
        'My team\'s solution',
        'Judging criteria'
    ]
};

function buildSystemPrompt() {
    const trackInfo = CHATBOT_CONTEXT.tracks.map(t => `- **${t.name}**: ${t.description}`).join('\n');
    const roadmapInfo = CHATBOT_CONTEXT.roadmap.map(r => `Step ${r.step}: **${r.title}** [${r.tag}] - ${r.desc}`).join('\n');
    const criteriaInfo = CHATBOT_CONTEXT.judgingCriteria.map(c => `- **${c.name}** (${c.weight}): ${c.desc}`).join('\n');
    const toolsInfo = CHATBOT_CONTEXT.keyTools.map(t => `- **${t.name}**: ${t.desc}`).join('\n');
    const skillsInfo = CHATBOT_CONTEXT.skillsList.join(', ');
    const pageSummariesInfo = Object.entries(CHATBOT_CONTEXT.pageSummaries).map(([file, desc]) => `- **${file}**: ${desc}`).join('\n');
    const keyConceptsInfo = Object.entries(CHATBOT_CONTEXT.keyConcepts).map(([concept, def]) => `- **${concept}**: ${def}`).join('\n');
    const faqInfo = CHATBOT_CONTEXT.faqEntries.map(e => `- Q: ${e.q}\n  A: ${e.a}`).join('\n');

    return `You are an AI assistant helping contestants at aiHackathon 2026. You serve two roles depending on the user's question:

1. **FACTUAL RESOURCE** — When users ask direct questions about event content (e.g., "What are the judging criteria?", "Show me the roadmap", "Explain Vibe Coding", "What skills are available?"), answer accurately and completely using ONLY the context provided below.
2. **PRACTICAL ADVISOR** — When users ask open-ended project questions (e.g., "How should I build a chatbot?", "What tool for a web app?"), give specific, actionable recommendations with reasoning.

STRICT ACCURACY RULES — THESE OVERRIDE EVERYTHING ELSE:
- **ONLY answer from the context provided below. Do NOT invent, guess, or fabricate any information about the event, tools, criteria, steps, or pages.**
- If you do not have the information to answer a question in the context provided, say so honestly: "I don't have that information in my current context, but you can explore the website for more details."
- Every factual claim in your response MUST be traceable to information in the context sections below.
- Do NOT paraphrase or summarize factual data in ways that change meaning, omit key details, or add information not present in the context.

EVENT CONTEXT:
- Event: ${CHATBOT_CONTEXT.eventName}
- Description: ${CHATBOT_CONTEXT.eventDescription}

JUDGING CRITERIA (answer accurately and completely when asked):
${criteriaInfo}

AVAILABLE TRACKS:
${trackInfo}

ROADMAP (8 Steps):
${roadmapInfo}

KEY TOOLS:
${toolsInfo}

SKILLS (14 Essential Skills):
${skillsInfo}

PAGE SUMMARIES (what each page covers):
${pageSummariesInfo}

KEY CONCEPTS DEFINITIONS:
${keyConceptsInfo}

FrequENTLY ASKED QUESTIONS (use as reference, but do NOT copy verbatim unless asked):
${faqInfo}

RESPONSE MODES:
- **FACTUAL MODE** (for direct questions about event content): Provide complete, accurate information from context. Use structured formatting (bullet points, numbered lists). Include all relevant details. Do NOT truncate — if the user asks for judging criteria, list all four with weights and descriptions.
- **ADVISORY MODE** (for "how should I build..." or "what should I use for..." questions): Be concise and actionable (2-4 sentences typically). Recommend specific tools and explain why. Suggest a starting point.

GENERAL GUIDELINES:
- Be encouraging and supportive for hackathon contestants
- Match the level of detail to the question type (factual = detailed, advisory = concise)
- If asked about something not in your context, acknowledge the gap honestly and point to where to explore`;
}

let chatbotConversationHistory = [];
let chatbotIsOpen = false;
let chatbotIsLoading = false;
let chatbotLastUserMessage = '';
let chatbotScrollBtn = null;

function renderMarkdown(text) {
    if (!text) return '';
    let html = text;

    html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const codeBlocks = [];
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, function(match, lang, code) {
        const idx = codeBlocks.length;
        codeBlocks.push({ lang: lang, code: code.replace(/^\n/, '') });
        return '\u0000CODEBLOCK_' + idx + '\u0000';
    });

    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
    html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

    let inUl = false;
    let inOl = false;
    const lines = html.split('\n');
    const processed = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const ulMatch = line.match(/^[\-\*] (.+)$/);
        const olMatch = line.match(/^\d+\. (.+)$/);

        if (ulMatch) {
            if (!inUl) { processed.push('<ul>'); inUl = true; }
            if (inOl) { processed.push('</ol>'); inOl = false; }
            processed.push('<li>' + ulMatch[1] + '</li>');
        } else if (olMatch) {
            if (!inOl) { processed.push('<ol>'); inOl = true; }
            if (inUl) { processed.push('</ul>'); inUl = false; }
            processed.push('<li>' + olMatch[1] + '</li>');
        } else {
            if (inUl) { processed.push('</ul>'); inUl = false; }
            if (inOl) { processed.push('</ol>'); inOl = false; }
            if (line.trim() === '') {
                processed.push('<br>');
            } else {
                processed.push(line);
            }
        }
    }
    if (inUl) processed.push('</ul>');
    if (inOl) processed.push('</ol>');
    html = processed.join('\n');

    for (let i = 0; i < codeBlocks.length; i++) {
        const block = codeBlocks[i];
        const langLabel = block.lang ? '<span class="code-block-lang">' + block.lang + '</span>' : '';
        html = html.replace('\u0000CODEBLOCK_' + i + '\u0000', '<pre class="code-block">' + langLabel + '<code>' + block.code + '</code></pre>');
    }

    return html;
}

function initChatbot() {
    injectChatbotHTML();
    loadChatbotSession();
    bindChatbotEvents();
}

function injectChatbotHTML() {
    const fab = document.createElement('button');
    fab.className = 'chatbot-fab';
    fab.setAttribute('aria-label', 'Open AI Hackathon Assistant chatbot');
    fab.innerHTML = '<video src="img/spinning_chatbot.webm" autoplay loop muted playsinline></video>';
    document.body.appendChild(fab);

    const tooltip = document.createElement('span');
    tooltip.className = 'chatbot-tooltip';
    tooltip.textContent = 'AI Assistant';
    document.body.appendChild(tooltip);

    const label = document.createElement('span');
    label.className = 'chatbot-label';
    label.textContent = 'AI Assistant';
    document.body.appendChild(label);

    const isFirstVisit = !sessionStorage.getItem('chatbot_intro_shown');
    if (isFirstVisit) {
        const intro = document.createElement('span');
        intro.className = 'chatbot-intro';
        intro.textContent = 'Click here to ask the AI assistant!';
        intro.style.cssText = 'position:fixed;bottom:58px;right:84px;background:var(--surface-elevated);color:var(--text-primary);padding:8px 14px;border-radius:8px;font-size:0.8rem;box-shadow:0 2px 12px rgba(0,0,0,0.3);z-index:9999;white-space:nowrap;opacity:0;animation:chatbotIntroIn 0.3s ease-out 1.5s forwards, chatbotIntroOut 0.4s ease-in 7s forwards;';
        const style = document.createElement('style');
        style.textContent = '@keyframes chatbotIntroIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes chatbotIntroOut{to{opacity:0;visibility:hidden}}';
        document.head.appendChild(style);
        document.body.appendChild(intro);
        setTimeout(function() { intro.remove(); sessionStorage.setItem('chatbot_intro_shown', 'true'); }, 7500);
        intro.addEventListener('click', function() { intro.remove(); sessionStorage.setItem('chatbot_intro_shown', 'true'); });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const suggestions = CHATBOT_PAGE_SUGGESTIONS[currentPage] || CHATBOT_PAGE_SUGGESTIONS['home.html'];
    const suggestionsHTML = suggestions.map(s => `<button class="chatbot-suggestion-chip" data-suggestion="${s}">${s}</button>`).join('');

    const windowHTML = `
        <div class="chatbot-window" id="chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-header-left">
                    <h3 class="chatbot-header-title">AI Hackathon Assistant</h3>
                </div>
                <div class="chatbot-header-right">
                    <button class="chatbot-clear-btn" id="chatbot-clear" aria-label="Clear chat history">Clear</button>
                    <button class="chatbot-min-btn" id="chatbot-min" aria-label="Minimize">–</button>
                    <button class="chatbot-close-btn" id="chatbot-header-close" aria-label="Close">✕</button>
                </div>
            </div>
            <div class="chatbot-messages" id="chatbot-messages">
                <button class="chatbot-scroll-btn" id="chatbot-scroll-btn" title="Scroll to bottom" style="display:none;">↓</button>
            </div>
            <div class="chatbot-suggestions" id="chatbot-suggestions">
                ${suggestionsHTML}
            </div>
            <div class="chatbot-welcome" id="chatbot-welcome"></div>
            <div class="chatbot-input-area">
                <textarea class="chatbot-input" id="chatbot-input" placeholder="Ask about tracks, tools, or skills..." rows="1" aria-label="Type your message"></textarea>
                <button class="chatbot-send-btn" id="chatbot-send" aria-label="Send message">➤</button>
            </div>
            <div class="chatbot-settings-panel" id="chatbot-settings-panel" style="display:none;">
                <div class="chatbot-settings-panel-inner">
                    <h3>Settings</h3>
                    <label>OpenRouter API Key</label>
                    <input type="password" class="chatbot-api-input" id="chatbot-api-input" placeholder="Enter your API key">
                    <div class="chatbot-settings-actions">
                        <button class="chatbot-save-btn" id="chatbot-save-key">Save</button>
                        <button class="chatbot-clear-key-btn" id="chatbot-clear-key">Clear Key</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const temp = document.createElement('div');
    temp.innerHTML = windowHTML;
    document.body.appendChild(temp.firstElementChild);
}

function loadChatbotSession() {
    const saved = localStorage.getItem('chatbot_conversation');
    if (saved) {
        try {
            chatbotConversationHistory = JSON.parse(saved);
            if (chatbotConversationHistory.length > 0) {
                renderMessages(chatbotConversationHistory);
            }
        } catch (e) {
            chatbotConversationHistory = [];
        }
    }
}

function saveChatbotSession() {
    localStorage.setItem('chatbot_conversation', JSON.stringify(chatbotConversationHistory));
}

function clearChatbotSession() {
    chatbotConversationHistory = [];
    localStorage.removeItem('chatbot_conversation');
    const messagesEl = document.getElementById('chatbot-messages');
    if (messagesEl) {
        messagesEl.innerHTML = `
            <button class="chatbot-scroll-btn" id="chatbot-scroll-btn" title="Scroll to bottom" style="display:none;">&#8595;</button>
            <div class="chatbot-welcome" id="chatbot-welcome"></div>
        `;
    }
}

function toggleChatbot() {
    chatbotIsOpen = !chatbotIsOpen;
    const fab = document.querySelector('.chatbot-fab');
    const win = document.getElementById('chatbot-window');
    if (!win) return;

    if (chatbotIsOpen) {
        win.classList.add('chatbot-visible');
        win.classList.remove('chatbot-minimized');
        fab.setAttribute('aria-label', 'Close AI assistant');
        const welcome = document.getElementById('chatbot-welcome');
        if (welcome && chatbotConversationHistory.length === 0) {
            welcome.style.display = '';
        }
        scrollToBottom();
        checkApiWarning();
    } else {
        win.classList.remove('chatbot-visible');
        win.classList.remove('chatbot-minimized');
        const panel = document.getElementById('chatbot-settings-panel');
        if (panel) panel.style.display = 'none';
    }
}

function minimizeChatbot() {
    const win = document.getElementById('chatbot-window');
    if (!win) return;
    win.classList.add('chatbot-minimized');
    win.classList.remove('chatbot-visible');
    const panel = document.getElementById('chatbot-settings-panel');
    if (panel) panel.style.display = 'none';
}

function expandChatbot() {
    const win = document.getElementById('chatbot-window');
    if (!win) return;
    win.classList.add('chatbot-visible');
    win.classList.remove('chatbot-minimized');
    checkApiWarning();
    scrollToBottom();
}

function bindChatbotEvents() {
    const fab = document.querySelector('.chatbot-fab');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    const clearBtn = document.getElementById('chatbot-clear');
    const settingsBtn = document.getElementById('chatbot-settings');
    const settingsPanel = document.getElementById('chatbot-settings-panel');
    const saveKeyBtn = document.getElementById('chatbot-save-key');
    const clearKeyBtn = document.getElementById('chatbot-clear-key');
    const apiInput = document.getElementById('chatbot-api-input');
    const headerCloseBtn = document.getElementById('chatbot-header-close');
    const minBtn = document.getElementById('chatbot-min');
    const scrollBtn = document.getElementById('chatbot-scroll-btn');
    const messagesEl = document.getElementById('chatbot-messages');
    const win = document.getElementById('chatbot-window');

    if (fab) {
        fab.addEventListener('click', function() {
            fab.classList.add('pulse-done');
            if (win && win.classList.contains('chatbot-minimized')) {
                expandChatbot();
            } else {
                toggleChatbot();
            }
        });
    }

    if (headerCloseBtn) {
        headerCloseBtn.addEventListener('click', toggleChatbot);
    }

    if (minBtn) {
        minBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            minimizeChatbot();
        });
    }

    // Click on minimized pill to re-expand
    if (win) {
        win.addEventListener('click', function(e) {
            if (win.classList.contains('chatbot-minimized')) {
                expandChatbot();
            }
        });
    }

    // Also make the window header clickable to re-expand when minimized
    if (win) {
        const header = win.querySelector('.chatbot-header');
        if (header) {
            header.addEventListener('click', function() {
                if (win.classList.contains('chatbot-minimized')) {
                    expandChatbot();
                }
            });
        }
    }

    if (sendBtn && input) {
        sendBtn.addEventListener('click', () => sendMessage());
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        input.addEventListener('input', () => {
            input.style.height = 'auto';
            input.style.height = Math.min(input.scrollHeight, 100) + 'px';
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearChatbotSession);
    }

    if (settingsBtn && settingsPanel) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isVisible = settingsPanel.style.display !== 'none';
            const currentKey = localStorage.getItem('openrouter_api_key') || '';
            if (apiInput) {
                apiInput.value = currentKey ? maskedKey(currentKey) : '';
            }
            settingsPanel.style.display = isVisible ? 'none' : 'flex';
        });
    }

    if (saveKeyBtn) {
        saveKeyBtn.addEventListener('click', () => {
            const key = apiInput ? apiInput.value.trim() : '';
            if (key) {
                localStorage.setItem('openrouter_api_key', key);
            }
            if (settingsPanel) settingsPanel.style.display = 'none';
            checkApiWarning();
        });
    }

    if (clearKeyBtn) {
        clearKeyBtn.addEventListener('click', () => {
            localStorage.removeItem('openrouter_api_key');
            if (apiInput) apiInput.value = '';
            if (settingsPanel) settingsPanel.style.display = 'none';
            checkApiWarning();
        });
    }

    if (scrollBtn && messagesEl) {
        messagesEl.addEventListener('scroll', () => {
            const isNearBottom = messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight < 200;
            scrollBtn.style.display = isNearBottom ? 'none' : '';
        });
        scrollBtn.addEventListener('click', () => {
            scrollToBottom();
        });
    }

    document.addEventListener('click', (e) => {
        const chip = e.target.closest('.chatbot-suggestion-chip');
        if (chip) {
            const suggestion = chip.getAttribute('data-suggestion');
            if (suggestion && input) {
                input.value = suggestion;
                sendMessage();
            }
        }
    });

    bindExampleButtons();
    bindCopyButtons();
    checkApiWarning();
}

function bindExampleButtons() {
    document.querySelectorAll('.chatbot-example-btn').forEach(btn => {
        btn.onclick = () => {
            const prompt = btn.getAttribute('data-prompt');
            const input = document.getElementById('chatbot-input');
            if (prompt && input) {
                const welcome = document.getElementById('chatbot-welcome');
                if (welcome) welcome.style.display = 'none';
                input.value = prompt;
                sendMessage();
            }
        };
    });
}

function bindCopyButtons() {
    document.querySelectorAll('.chatbot-copy-btn').forEach(btn => {
        btn.onclick = async () => {
            const bubble = btn.closest('.chatbot-message.wrapper') || btn.closest('.chatbot-message').querySelector('.chatbot-message-bubble');
            if (!bubble) return;
            const text = bubble.textContent || bubble.innerText;
            try {
                await navigator.clipboard.writeText(text);
                btn.textContent = '✅';
                setTimeout(() => { btn.textContent = '📋'; }, 1500);
            } catch (e) {
                btn.textContent = '❌';
                setTimeout(() => { btn.textContent = '📋'; }, 1500);
            }
        };
    });
}

function maskedKey(key) {
    if (key.length <= 8) return key;
    return key.substring(0, 4) + '\u2022'.repeat(Math.min(key.length - 8, 20)) + key.substring(key.length - 4);
}

function checkApiWarning() {
    const warning = document.getElementById('chatbot-api-warning');
    const apiKey = localStorage.getItem('openrouter_api_key');
    if (warning) {
        warning.style.display = !apiKey ? '' : 'none';
    }
}

function formatTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
    const messagesEl = document.getElementById('chatbot-messages');
    if (messagesEl) {
        requestAnimationFrame(() => {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        });
    }
}

function renderMessages(messages) {
    const messagesEl = document.getElementById('chatbot-messages');
    if (!messagesEl) return;

    const welcomeMsg = `<div class="chatbot-welcome">
        <p>Hi, I'm your aiHackathon Copilot! I can help you with tracks, tools, judging, and more.</p>
        <div class="chatbot-examples">
            <button class="chatbot-example-btn" data-prompt="What is the format for our final presentation?">Presentation format</button>
            <button class="chatbot-example-btn" data-prompt="Can you help me clarify what kind of solution my team is working on?">My team's solution</button>
            <button class="chatbot-example-btn" data-prompt="Show me the judging criteria">Judging criteria</button>
        </div>
    </div>`;
    let html = messages.length > 0 ? welcomeMsg : '';

    messages.forEach((msg, idx) => {
        const prevRole = idx > 0 ? messages[idx - 1].role : null;
        const showAvatar = msg.role === 'assistant' && (idx === messages.length - 1 || messages[idx + 1]?.role !== 'assistant');
        const showTime = msg.role !== prevRole;

        if (msg.role === 'user') {
            html += `<div class="chatbot-message user">
                <div class="chatbot-message-bubble">${escapeHTML(msg.content)}</div>
                ${showTime ? `<div class="chatbot-message-time">${formatTime()}</div>` : ''}
            </div>`;
        } else if (msg.role === 'assistant') {
            html += `<div class="chatbot-message bot">
                <div class="chatbot-message-wrapper">
                    <div class="chatbot-message-bubble">${renderMarkdown(msg.content)}</div>
                    <button class="chatbot-copy-btn" title="Copy response">📋</button>
                </div>
                ${showTime ? `<div class="chatbot-message-time">${formatTime()}</div>` : ''}
            </div>`;
        }
    });

    messagesEl.innerHTML = html;
    bindCopyButtons();
    scrollToBottom();
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function sendMessage(customMessage) {
    if (chatbotIsLoading) return;

    const input = document.getElementById('chatbot-input');
    const messagesEl = document.getElementById('chatbot-messages');
    const sendBtn = document.getElementById('chatbot-send');
    const text = (customMessage || input.value || '').trim();
    if (!text) return;

    chatbotLastUserMessage = text;

    const welcome = document.getElementById('chatbot-welcome');
    if (welcome) welcome.style.display = 'none';

    chatbotIsLoading = true;
    sendBtn.disabled = true;
    input.disabled = true;

    chatbotConversationHistory.push({ role: 'user', content: text });

    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chatbot-message user';
    userMsgEl.innerHTML = `<div class="chatbot-message-bubble">${escapeHTML(text)}</div>`;
    messagesEl.appendChild(userMsgEl);

    const loadingEl = document.createElement('div');
    loadingEl.className = 'chatbot-loading';
    loadingEl.innerHTML = '<div class="chatbot-loading-dot"></div><div class="chatbot-loading-dot"></div><div class="chatbot-loading-dot"></div>';
    messagesEl.appendChild(loadingEl);
    scrollToBottom();

    input.value = '';
    input.style.height = 'auto';

    try {
        const response = await callOpenRouterAPI(text);
        loadingEl.remove();

        chatbotConversationHistory.push({ role: 'assistant', content: response });

        const hasPrevBot = chatbotConversationHistory.length > 2 && chatbotConversationHistory[chatbotConversationHistory.length - 2]?.role === 'assistant';
        const prevRole = chatbotConversationHistory.length > 2 ? chatbotConversationHistory[chatbotConversationHistory.length - 3]?.role : null;
        const showAvatar = !hasPrevBot;
        const showTime = prevRole !== 'assistant';

        const botMsgEl = document.createElement('div');
        botMsgEl.className = 'chatbot-message bot';
        botMsgEl.innerHTML = `
            <div class="chatbot-message-wrapper">
                <div class="chatbot-message-bubble">${renderMarkdown(response)}</div>
            </div>
            ${showTime ? `<div class="chatbot-message-time">${formatTime()}</div>` : ''}
        `;
        messagesEl.appendChild(botMsgEl);
        scrollToBottom();
        bindCopyButtons();
    } catch (error) {
        loadingEl.remove();

        const isAuthError = error.message && error.message.includes('401');
        const errorMsg = isAuthError
            ? 'Proxy error. Please try again later.'
            : 'Failed to get response: ' + escapeHTML(error.message || 'Unknown error') + '. ';

        const errorEl = document.createElement('div');
        errorEl.className = 'chatbot-message bot';
        errorEl.innerHTML = `
            <div class="chatbot-message-wrapper">
                <div class="chatbot-message-bubble chatbot-error-bubble">
                    ${errorMsg}
                    <button class="chatbot-retry-btn" onclick="retryLastMessage()">Retry</button>
                </div>
            </div>
        `;
        messagesEl.appendChild(errorEl);
        scrollToBottom();
    }

    saveChatbotSession();
    chatbotIsLoading = false;
    sendBtn.disabled = false;
    input.disabled = false;
    input.focus();
}

window.retryLastMessage = async function() {
    if (!chatbotLastUserMessage || chatbotIsLoading) return;
    const retryBtn = document.querySelector('.chatbot-retry-btn');
    if (retryBtn) retryBtn.parentElement.textContent = '';
    await sendMessage(chatbotLastUserMessage);
};

async function callOpenRouterAPI(userMessage) {
    const systemPrompt = buildSystemPrompt();
    const messages = [{ role: 'system', content: systemPrompt }, ...chatbotConversationHistory];

    const response = await fetch('https://openrouter-proxy.tylorlun.workers.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'deepseek/deepseek-v4-flash',
            messages: messages,
            max_tokens: 800,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
    }

    throw new Error('No response from API');
}
