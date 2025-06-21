 // Mobile sidebar toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileSidebar = document.getElementById('mobile-sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');
        const sidebarClose = document.getElementById('sidebar-close');
        const sidebar = document.querySelector('#mobile-sidebar .sidebar');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileSidebar.classList.remove('hidden');
            setTimeout(() => {
                sidebarOverlay.classList.add('animate-fade-in');
                sidebar.classList.remove('translate-x-full');
            }, 10);
        });
        
        const closeSidebar = () => {
            sidebar.classList.add('translate-x-full');
            sidebarOverlay.classList.remove('animate-fade-in');
            setTimeout(() => {
                mobileSidebar.classList.add('hidden');
            }, 300);
        };
        
        sidebarClose.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);
        
        // Accordion functionality for mobile sidebar
        const accordionToggles = document.querySelectorAll('.accordion-toggle');
        accordionToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const icon = toggle.querySelector('i');
                
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.classList.replace('ri-arrow-down-s-line', 'ri-arrow-up-s-line');
                } else {
                    content.classList.add('hidden');
                    icon.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line');
                }
            });
        });
        
       //  dark/light mode script
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved preference or system preference
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Add keyboard accessibility
themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
    }
});
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close sidebar if open
                    if (!mobileSidebar.classList.contains('hidden')) {
                        closeSidebar();
                    }
                }
            });
        });
        
        // Navbar scroll effect
        const header = document.querySelector('header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('shadow-md');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('-translate-y-full')) {
                // Scroll down
                header.classList.add('-translate-y-full');
                header.classList.remove('shadow-md');
            } else if (currentScroll < lastScroll && header.classList.contains('-translate-y-full')) {
                // Scroll up
                header.classList.remove('-translate-y-full');
                header.classList.add('shadow-md');
            }
            
            lastScroll = currentScroll;
        });