// Footer Component for CityLife Real Estate
class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="bg-black text-white">
                <!-- Main Footer Content -->
                <div class="container mx-auto px-4 py-16">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Company Info -->
                        <div class="lg:col-span-1">
                            <div class="flex items-center space-x-3 mb-6">
                                <div class="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                                    <span class="text-black font-bold text-xl">CL</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-playfair font-bold text-white">CityLife</h3>
                                    <p class="text-gold-300 text-sm">Real Estate Ltd</p>
                                </div>
                            </div>
                            <p class="text-gray-300 mb-6 leading-relaxed">
                                Your trusted partner in property management and sales across Kenya since 2012. 
                                Building dreams, managing investments, creating value.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="bg-gray-800 hover:bg-gold-500 text-white hover:text-black p-3 rounded-full transition duration-300">
                                    <i data-feather="facebook" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="bg-gray-800 hover:bg-gold-500 text-white hover:text-black p-3 rounded-full transition duration-300">
                                    <i data-feather="twitter" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="bg-gray-800 hover:bg-gold-500 text-white hover:text-black p-3 rounded-full transition duration-300">
                                    <i data-feather="linkedin" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="bg-gray-800 hover:bg-gold-500 text-white hover:text-black p-3 rounded-full transition duration-300">
                                    <i data-feather="instagram" class="w-5 h-5"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h4 class="text-lg font-bold mb-6 text-gold-300">Quick Links</h4>
                            <ul class="space-y-3">
                                <li>
                                    <a href="index.html" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="properties.html" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Services -->
                        <div>
                            <h4 class="text-lg font-bold mb-6 text-gold-300">Our Services</h4>
                            <ul class="space-y-3">
                                <li>
                                    <a href="services.html#project-management" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Project Management
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html#property-management" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Property Management
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html#real-estate-agency" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Real Estate Agency
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html#consultation" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Investment Consultation
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html#valuation" class="text-gray-300 hover:text-gold-300 transition duration-300 flex items-center">
                                        <i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>
                                        Property Valuation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h4 class="text-lg font-bold mb-6 text-gold-300">Contact Info</h4>
                            <div class="space-y-4">
                                <div class="flex items-start space-x-3">
                                    <div class="bg-gold-500 p-2 rounded-full mt-1">
                                        <i data-feather="map-pin" class="w-4 h-4 text-black"></i>
                                    </div>
                                    <div>
                                        <p class="text-white font-medium">Address</p>
                                        <p class="text-gray-300 text-sm">CityLife Real Estate Ltd<br>Nairobi 00200, Kenya</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start space-x-3">
                                    <div class="bg-gold-500 p-2 rounded-full mt-1">
                                        <i data-feather="phone" class="w-4 h-4 text-black"></i>
                                    </div>
                                    <div>
                                        <p class="text-white font-medium">Phone</p>
                                        <a href="tel:+254722892232" class="text-gray-300 hover:text-gold-300 transition duration-300 text-sm">+254 722 892232</a>
                                    </div>
                                </div>
                                
                                <div class="flex items-start space-x-3">
                                    <div class="bg-gold-500 p-2 rounded-full mt-1">
                                        <i data-feather="mail" class="w-4 h-4 text-black"></i>
                                    </div>
                                    <div>
                                        <p class="text-white font-medium">Email</p>
                                        <a href="mailto:info@cityliferealestate.co.ke" class="text-gray-300 hover:text-gold-300 transition duration-300 text-sm">info@cityliferealestate.co.ke</a>
                                    </div>
                                </div>
                                
                                <div class="flex items-start space-x-3">
                                    <div class="bg-gold-500 p-2 rounded-full mt-1">
                                        <i data-feather="clock" class="w-4 h-4 text-black"></i>
                                    </div>
                                    <div>
                                        <p class="text-white font-medium">Business Hours</p>
                                        <p class="text-gray-300 text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Newsletter Section -->
                <div class="border-t border-gray-800">
                    <div class="container mx-auto px-4 py-8">
                        <div class="flex flex-col md:flex-row items-center justify-between">
                            <div class="mb-6 md:mb-0">
                                <h4 class="text-lg font-bold text-white mb-2">Stay Updated</h4>
                                <p class="text-gray-300">Subscribe to our newsletter for the latest property updates and market insights.</p>
                            </div>
                            <div class="flex w-full md:w-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    class="flex-1 md:w-80 px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    id="newsletter-email"
                                >
                                <button 
                                    type="button"
                                    class="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-6 py-3 rounded-r-lg transition duration-300"
                                    onclick="subscribeNewsletter()"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Footer -->
                <div class="border-t border-gray-800">
                    <div class="container mx-auto px-4 py-6">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <div class="mb-4 md:mb-0">
                                <p class="text-gray-400 text-sm">
                                    © 2025 CityLife Real Estate Ltd. All rights reserved.
                                </p>
                            </div>
                            <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                                <div class="flex space-x-6">
                                    <a href="#" class="text-gray-400 hover:text-gold-300 text-sm transition duration-300">Privacy Policy</a>
                                    <a href="#" class="text-gray-400 hover:text-gold-300 text-sm transition duration-300">Terms of Service</a>
                                    <a href="#" class="text-gray-400 hover:text-gold-300 text-sm transition duration-300">Cookie Policy</a>
                                </div>
                                <div class="flex items-center text-gray-400 text-sm">
                                    <span class="mr-2">Designed by</span>
                                    <span class="text-gold-300 font-medium">Andrew Blessing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Back to Top Button -->
                <button 
                    id="back-to-top" 
                    class="fixed bottom-20 right-6 bg-gold-500 hover:bg-gold-600 text-black p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 z-40"
                    onclick="scrollToTop()"
                >
                    <i data-feather="chevron-up" class="w-6 h-6"></i>
                </button>
            </footer>
        `;
        
        this.initializeFooter();
    }

    initializeFooter() {
        this.initializeBackToTop();
        this.initializeCurrentYear();
        this.initializeNewsletterForm();
    }

    initializeBackToTop() {
        const backToTopButton = this.querySelector('#back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton?.classList.remove('opacity-0', 'invisible');
                backToTopButton?.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton?.classList.add('opacity-0', 'invisible');
                backToTopButton?.classList.remove('opacity-100', 'visible');
            }
        });
    }

    initializeCurrentYear() {
        // Update year automatically
        const currentYear = new Date().getFullYear();
        const yearElement = this.querySelector('.copyright-year');
        if (yearElement) {
            yearElement.textContent = currentYear.toString();
        }
    }

    initializeNewsletterForm() {
        const newsletterInput = this.querySelector('#newsletter-email');
        
        newsletterInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                window.subscribeNewsletter();
            }
        });
    }
}

// Global functions for footer functionality
window.scrollToTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

window.subscribeNewsletter = function() {
    const emailInput = document.querySelector('#newsletter-email');
    const email = emailInput?.value;
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate newsletter subscription
    alert('Thank you for subscribing to our newsletter! You will receive the latest property updates and market insights.');
    emailInput.value = '';
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Register the custom element
customElements.define('custom-footer', CustomFooter);

// Initialize Feather icons after footer is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});