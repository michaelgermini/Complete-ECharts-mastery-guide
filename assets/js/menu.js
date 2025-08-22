// ECharts Guide Navigation Menu JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.echarts-mobile-menu-toggle');
    const mobileMenu = document.querySelector('.echarts-mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!event.target.closest('.echarts-nav') && !event.target.closest('.echarts-mobile-menu')) {
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Highlight current page in navigation
    highlightCurrentPage();
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
});

// Function to highlight current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.echarts-nav-menu a, .echarts-mobile-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Remove any existing active class
        link.classList.remove('active');
        
        // Check if this link matches the current page
        if (linkPath === currentPath || 
            (currentPath.includes('chapter') && linkPath.includes('chapter')) ||
            (currentPath.includes('projects') && linkPath.includes('projects'))) {
            link.classList.add('active');
        }
        
        // Special case for index page
        if (currentPath === '/' || currentPath.endsWith('index.html')) {
            if (linkPath === 'index.html' || linkPath === '/') {
                link.classList.add('active');
            }
        }
    });
}

// Function to setup smooth scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to handle dropdown menu positioning
function handleDropdownPositioning() {
    const dropdowns = document.querySelectorAll('.echarts-dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.echarts-dropdown-content');
        
        if (dropdownContent) {
            dropdown.addEventListener('mouseenter', function() {
                const rect = dropdownContent.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                
                // Check if dropdown goes off the right edge
                if (rect.right > viewportWidth) {
                    dropdownContent.style.left = 'auto';
                    dropdownContent.style.right = '0';
                }
            });
        }
    });
}

// Initialize dropdown positioning
document.addEventListener('DOMContentLoaded', handleDropdownPositioning);

// Handle window resize
window.addEventListener('resize', function() {
    handleDropdownPositioning();
    
    // Close mobile menu on resize
    const mobileMenu = document.querySelector('.echarts-mobile-menu');
    if (mobileMenu && window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
    }
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.echarts-nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});
