// Navigation Component for CityLife Real Estate
class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <!-- Logo -->
                        <div class="flex items-center">
                            <div class="flex items-center space-x-3">
                                <div class="flex items-center">
                                    <img src="logo.png" alt="CityLife Real Estate" class="h-10 w-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="hidden w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                                        <span class="text-black font-bold text-xl">CL</span>
                                    </div>
                                </div>
                                <div>
                                    <h1 class="text-xl font-playfair font-bold text-black">CityLife</h1>
                                    <p class="text-xs text-gray-600">Real Estate Ltd</p>
                                </div>
                            </div>
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="index.html" class="nav-link text-gray-700 hover:text-gold-600 font-medium transition duration-300">Home</a>
                            <a href="about.html" class="nav-link text-gray-700 hover:text-gold-600 font-medium transition duration-300">About</a>
                            <a href="services.html" class="nav-link text-gray-700 hover:text-gold-600 font-medium transition duration-300">Services</a>
                            <a href="properties.html" class="nav-link text-gray-700 hover:text-gold-600 font-medium transition duration-300">Properties</a>
                            <a href="contact.html" class="nav-link text-gray-700 hover:text-gold-600 font-medium transition duration-300">Contact</a>
                        </div>

                        <!-- CTA Button -->
                        <div class="hidden md:flex items-center space-x-4">
                            <a href="tel:+254722892232" class="text-gold-600 hover:text-gold-700 transition duration-300">
                                <i data-feather="phone" class="w-5 h-5"></i>
                            </a>
                            <a href="mailto:info@cityliferealestate.co.ke" class="text-gold-600 hover:text-gold-700 transition duration-300">
                                <i data-feather="mail" class="w-5 h-5"></i>
                            </a>
                            <a href="#contact" class="btn-primary bg-gold-500 hover:bg-gold-600 text-black font-semibold px-4 py-2 rounded transition duration-300">
                                Get Quote
                            </a>
                        </div>

                        <!-- Mobile Menu Button -->
                        <div class="md:hidden flex items-center space-x-3 mobile-contact-buttons">
                            <!-- Mobile Email & Call Buttons -->
                            <a href="tel:+254722892232" class="bg-gold-500 text-black p-2 rounded-full hover:bg-gold-600 transition duration-300">
                                <i data-feather="phone" class="w-4 h-4"></i>
                            </a>
                            <a href="mailto:info@cityliferealestate.co.ke" class="bg-gold-500 text-black p-2 rounded-full hover:bg-gold-600 transition duration-300">
                                <i data-feather="mail" class="w-4 h-4"></i>
                            </a>
                            <button id="mobile-menu-toggle" class="text-gray-700 hover:text-gold-600 focus:outline-none">
                                <i data-feather="menu" class="w-6 h-6"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Navigation Menu -->
                    <div id="mobile-menu" class="mobile-menu md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform -translate-x-full transition-transform duration-300">
                        <div class="flex flex-col h-full">
                            <!-- Mobile Header -->
                            <div class="flex justify-between items-center p-4 border-b">
                                <div class="flex items-center space-x-3">
                                    <div class="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                                        <span class="text-black font-bold">CL</span>
                                    </div>
                                    <div>
                                        <h1 class="text-lg font-playfair font-bold text-black">CityLife</h1>
                                        <p class="text-xs text-gray-600">Real Estate Ltd</p>
                                    </div>
                                </div>
                                <button id="mobile-menu-close" class="text-gray-700 hover:text-gold-600">
                                    <i data-feather="x" class="w-6 h-6"></i>
                                </button>
                            </div>

                            <!-- Mobile Navigation Links -->
                            <div class="flex-1 py-6">
                                <div class="space-y-1">
                                    <a href="index.html" class="mobile-nav-link block px-6 py-4 text-gray-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition duration-300">
                                        <div class="flex items-center space-x-3">
                                            <i data-feather="home" class="w-5 h-5"></i>
                                            <span>Home</span>
                                        </div>
                                    </a>
                                    <a href="about.html" class="mobile-nav-link block px-6 py-4 text-gray-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition duration-300">
                                        <div class="flex items-center space-x-3">
                                            <i data-feather="info" class="w-5 h-5"></i>
                                            <span>About</span>
                                        </div>
                                    </a>
                                    <a href="services.html" class="mobile-nav-link block px-6 py-4 text-gray-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition duration-300">
                                        <div class="flex items-center space-x-3">
                                            <i data-feather="briefcase" class="w-5 h-5"></i>
                                            <span>Services</span>
                                        </div>
                                    </a>
                                    <a href="properties.html" class="mobile-nav-link block px-6 py-4 text-gray-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition duration-300">
                                        <div class="flex items-center space-x-3">
                                            <i data-feather="building" class="w-5 h-5"></i>
                                            <span>Properties</span>
                                        </div>
                                    </a>
                                    <a href="contact.html" class="mobile-nav-link block px-6 py-4 text-gray-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition duration-300">
                                        <div class="flex items-center space-x-3">
                                            <i data-feather="phone" class="w-5 h-5"></i>
                                            <span>Contact</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <!-- Mobile Contact Info -->
                            <div class="border-t p-6">
                                <div class="space-y-4">
                                    <div class="flex items-center space-x-3">
                                        <i data-feather="phone" class="w-5 h-5 text-gold-600"></i>
                                        <a href="tel:+254722892232" class="text-gray-700">+254 722 892232</a>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <i data-feather="mail" class="w-5 h-5 text-gold-600"></i>
                                        <a href="mailto:info@cityliferealestate.co.ke" class="text-gray-700">info@cityliferealestate.co.ke</a>
                                    </div>
                                    <a href="#contact" class="block w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 px-4 rounded text-center transition duration-300">
                                        Get Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
        
        this.initializeNavigation();
    }

    initializeNavigation() {
        // Mobile menu toggle functionality
        const mobileMenuToggle = this.querySelector('#mobile-menu-toggle');
        const mobileMenu = this.querySelector('#mobile-menu');
        const mobileMenuClose = this.querySelector('#mobile-menu-close');
        const mobileNavLinks = this.querySelectorAll('.mobile-nav-link');

        // Open mobile menu
        mobileMenuToggle?.addEventListener('click', () => {
            mobileMenu?.classList.remove('-translate-x-full');
            mobileMenu?.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        });

        // Close mobile menu
        const closeMobileMenu = () => {
            mobileMenu?.classList.add('-translate-x-full');
            mobileMenu?.classList.remove('translate-x-0');
            document.body.style.overflow = 'auto';
        };

        mobileMenuClose?.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu when clicking outside
        mobileMenu?.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Highlight active navigation link
        this.highlightActiveLink();

        // Smooth scrolling for anchor links
        this.initializeSmoothScrolling();

        // Navbar scroll effect
        this.initializeScrollEffect();
    }

    highlightActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = this.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active', 'text-gold-600');
            }
        });
    }

    initializeSmoothScrolling() {
        const anchorLinks = this.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = this.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initializeScrollEffect() {
        let lastScrollTop = 0;
        const navbar = this.querySelector('nav');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                navbar?.classList.add('shadow-lg');
            } else {
                navbar?.classList.remove('shadow-lg');
            }
            
            // Hide navbar when scrolling down, show when scrolling up
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar?.style.setProperty('transform', 'translateY(-100%)');
            } else {
                navbar?.style.setProperty('transform', 'translateY(0)');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Register the custom element
customElements.define('custom-navbar', CustomNavbar);

// Initialize Feather icons after navbar is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});