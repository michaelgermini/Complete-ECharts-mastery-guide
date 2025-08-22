// Script to add ECharts Guide navigation menu to all pages
// This script can be run to automatically add the menu to existing pages

function addEChartsMenu() {
    // Check if navigation already exists
    if (document.querySelector('.echarts-nav')) {
        console.log('ECharts navigation already exists, skipping...');
        return;
    }
    
    // Get the current page path to determine relative paths
    const currentPath = window.location.pathname;
    const isInChapters = currentPath.includes('/chapters/');
    const isInProjects = currentPath.includes('/projects/');
    const isRoot = !isInChapters && !isInProjects;
    
    // Determine the base path for assets
    const basePath = isRoot ? '' : '../';
    
    // Create the navigation HTML
    const navHTML = `
    <!-- ECharts Guide Navigation -->
    <nav class="echarts-nav">
        <div class="echarts-nav-container">
            <a href="${basePath}index.html" class="echarts-nav-brand">📊 ECharts Guide</a>
            <ul class="echarts-nav-menu">
                <li><a href="${basePath}index.html">Home</a></li>
                <li class="echarts-dropdown">
                    <a href="#">📚 Chapters</a>
                    <div class="echarts-dropdown-content">
                        <a href="${basePath}chapters/chapter1-introduction.html">Chapter 1: Introduction</a>
                        <a href="${basePath}chapters/chapter2-core-concepts.html">Chapter 2: Core Concepts</a>
                        <a href="${basePath}chapters/chapter3-line-area.html">Chapter 3: Line & Area Charts</a>
                        <a href="${basePath}chapters/chapter4-bar-column.html">Chapter 4: Bar & Column Charts</a>
                        <a href="${basePath}chapters/chapter5-pie-donut.html">Chapter 5: Pie & Donut Charts</a>
                        <a href="${basePath}chapters/chapter6-scatter-bubble.html">Chapter 6: Scatter & Bubble Charts</a>
                        <a href="${basePath}chapters/chapter7-radar-gauge.html">Chapter 7: Radar & Gauge Charts</a>
                    </div>
                </li>
                <li class="echarts-dropdown">
                    <a href="#">🏗️ Projects</a>
                    <div class="echarts-dropdown-content">
                        <a href="${basePath}projects/business-dashboard.html">Business Analytics</a>
                        <a href="${basePath}projects/iot-monitoring.html">IoT Monitoring</a>
                        <a href="${basePath}projects/sales-analytics.html">Sales Analytics</a>
                        <a href="${basePath}projects/financial-dashboard.html">Financial Dashboard</a>
                        <a href="${basePath}projects/healthcare-analytics.html">Healthcare Analytics</a>
                        <a href="${basePath}projects/energy-monitoring.html">Energy Monitoring</a>
                    </div>
                </li>
                <li><a href="${basePath}README.md">Documentation</a></li>
                <li><a href="https://github.com/michaelgermini/Complete-ECharts-mastery-guide" target="_blank">GitHub</a></li>
            </ul>
            <button class="echarts-mobile-menu-toggle">☰</button>
        </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div class="echarts-mobile-menu">
        <ul>
            <li><a href="${basePath}index.html">Home</a></li>
            <li><a href="${basePath}chapters/chapter1-introduction.html">Chapter 1: Introduction</a></li>
            <li><a href="${basePath}chapters/chapter2-core-concepts.html">Chapter 2: Core Concepts</a></li>
            <li><a href="${basePath}chapters/chapter3-line-area.html">Chapter 3: Line & Area Charts</a></li>
            <li><a href="${basePath}chapters/chapter4-bar-column.html">Chapter 4: Bar & Column Charts</a></li>
            <li><a href="${basePath}chapters/chapter5-pie-donut.html">Chapter 5: Pie & Donut Charts</a></li>
            <li><a href="${basePath}chapters/chapter6-scatter-bubble.html">Chapter 6: Scatter & Bubble Charts</a></li>
            <li><a href="${basePath}chapters/chapter7-radar-gauge.html">Chapter 7: Radar & Gauge Charts</a></li>
            <li><a href="${basePath}projects/business-dashboard.html">Business Analytics</a></li>
            <li><a href="${basePath}projects/iot-monitoring.html">IoT Monitoring</a></li>
            <li><a href="${basePath}projects/sales-analytics.html">Sales Analytics</a></li>
            <li><a href="${basePath}projects/financial-dashboard.html">Financial Dashboard</a></li>
            <li><a href="${basePath}projects/healthcare-analytics.html">Healthcare Analytics</a></li>
            <li><a href="${basePath}projects/energy-monitoring.html">Energy Monitoring</a></li>
            <li><a href="${basePath}README.md">Documentation</a></li>
            <li><a href="https://github.com/michaelgermini/Complete-ECharts-mastery-guide" target="_blank">GitHub</a></li>
        </ul>
    </div>
    `;
    
    // Add the navigation to the beginning of the body
    const body = document.body;
    body.insertAdjacentHTML('afterbegin', navHTML);
    
    console.log('ECharts navigation added successfully');
    
    // Add the menu CSS link to the head if it doesn't exist
    if (!document.querySelector('link[href*="menu.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${basePath}assets/css/menu.css`;
        document.head.appendChild(link);
        console.log('Menu CSS added:', link.href);
    } else {
        console.log('Menu CSS already exists');
    }
    
    // Add the menu JavaScript if it doesn't exist
    if (!document.querySelector('script[src*="menu.js"]')) {
        const script = document.createElement('script');
        script.src = `${basePath}assets/js/menu.js`;
        document.head.appendChild(script);
        console.log('Menu JS added:', script.src);
    } else {
        console.log('Menu JS already exists');
    }
}

// Function to add menu CSS link to head
function addMenuCSS() {
    const currentPath = window.location.pathname;
    const isInChapters = currentPath.includes('/chapters/');
    const isInProjects = currentPath.includes('/projects/');
    const basePath = isInChapters || isInProjects ? '../' : '';
    
    if (!document.querySelector('link[href*="menu.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${basePath}assets/css/menu.css`;
        document.head.appendChild(link);
    }
}

// Auto-add menu CSS when script loads
addMenuCSS();

// Auto-add the complete menu when script loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('add-menu.js: DOMContentLoaded event fired');
    addEChartsMenu();
});

// Also try to add menu immediately if DOM is already loaded
if (document.readyState === 'loading') {
    console.log('add-menu.js: DOM still loading, waiting for DOMContentLoaded');
} else {
    console.log('add-menu.js: DOM already loaded, adding menu immediately');
    addEChartsMenu();
}
