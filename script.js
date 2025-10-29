// Main JavaScript file for CityLife Real Estate
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeScrollAnimations();
    initializePropertyFilters();
    initializeContactForm();
    initializeCounters();
    initializeImageLazyLoading();
    initializeSearchFunctionality();
    initializeSmoothScrolling();
    initializeTooltips();
    initializePreloader();
});

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger counter animation if element has counter class
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Add reveal class to elements that should animate
    const animateElements = document.querySelectorAll(`
        .property-card,
        .service-card,
        .testimonial-card,
        .stats-item,
        .team-member,
        .process-step
    `);
    
    animateElements.forEach(el => {
        el.classList.add('reveal');
    });
}

// Property Filters
function initializePropertyFilters() {
    const locationFilter = document.querySelector('select[data-filter="location"]');
    const typeFilter = document.querySelector('select[data-filter="type"]');
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    
    if (locationFilter) {
        locationFilter.addEventListener('change', filterProperties);
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', filterProperties);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterProperties, 300));
    }
}

function filterProperties() {
    const properties = document.querySelectorAll('.property-card');
    const locationValue = document.querySelector('select[data-filter="location"]')?.value || '';
    const typeValue = document.querySelector('select[data-filter="type"]')?.value || '';
    const searchValue = document.querySelector('input[placeholder*="Search"]')?.value.toLowerCase() || '';
    
    properties.forEach(property => {
        const location = property.dataset.location || '';
        const type = property.dataset.type || '';
        const title = property.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = property.querySelector('p')?.textContent.toLowerCase() || '';
        
        const matchesLocation = !locationValue || locationValue === 'all' || location.includes(locationValue);
        const matchesType = !typeValue || typeValue === 'all' || type.includes(typeValue);
        const matchesSearch = !searchValue || title.includes(searchValue) || description.includes(searchValue);
        
        if (matchesLocation && matchesType && matchesSearch) {
            property.style.display = 'block';
            property.classList.add('animate-fadeInUp');
        } else {
            property.style.display = 'none';
        }
    });
}

// Contact Form Handler
function initializeContactForm() {
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    });
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate form
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    
    // Simulate form submission
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        
        // Show success message
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form
        form.reset();
    }, 2000);
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name || field.id;
    
    // Remove existing error
    clearFieldError({ target: field });
    
    // Validate based on field type
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
    } else if (fieldType === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    } else if (fieldType === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number.';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('border-red-500');
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error text-red-500 text-sm mt-1';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('border-red-500');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Counters Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        counter.dataset.target = counter.textContent;
        counter.textContent = '0';
    });
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current).toLocaleString();
        
        // Add + or % suffix if needed
        if (element.classList.contains('percentage')) {
            element.textContent += '%';
        } else if (element.classList.contains('plus')) {
            element.textContent += '+';
        }
    }, 16);
}

// Image Lazy Loading
function initializeImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// Search Functionality
function initializeSearchFunctionality() {
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="search" i]');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', debounce(performSearch, 300));
    });
}

function performSearch(e) {
    const query = e.target.value.toLowerCase();
    const searchableElements = document.querySelectorAll('[data-searchable]');
    
    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        const isVisible = text.includes(query);
        
        element.style.display = isVisible ? 'block' : 'none';
        
        if (isVisible) {
            highlightSearchTerms(element, query);
        }
    });
}

function highlightSearchTerms(element, query) {
    if (!query) return;
    
    const text = element.textContent;
    const regex = new RegExp(`(${query})`, 'gi');
    const highlightedText = text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    
    element.innerHTML = highlightedText;
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// Tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const element = e.target;
    const tooltipText = element.dataset.tooltip;
    
    if (!tooltipText) return;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip absolute bg-black text-white text-sm px-2 py-1 rounded shadow-lg z-50';
    tooltip.textContent = tooltipText;
    tooltip.id = 'active-tooltip';
    
    document.body.appendChild(tooltip);
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('active-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Preloader
function initializePreloader() {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm transform translate-x-full transition-transform duration-300`;
    
    // Set color based on type
    switch (type) {
        case 'success':
            notification.classList.add('bg-green-500', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-500', 'text-black');
            break;
        default:
            notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-xl">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function formatCurrency(amount, currency = 'KES') {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Property Gallery Functions
function openPropertyGallery(propertyId) {
    // Implementation for property image gallery
    console.log('Opening gallery for property:', propertyId);
}

function closePropertyGallery() {
    const gallery = document.querySelector('.property-gallery-modal');
    if (gallery) {
        gallery.classList.add('opacity-0');
        setTimeout(() => {
            gallery.remove();
        }, 300);
    }
}

// Map Integration Functions
function initializeMap(containerId, lat, lng, zoom = 12) {
    // Placeholder for map initialization
    console.log('Initializing map:', { containerId, lat, lng, zoom });
}

// Property Comparison Functions
function addToComparison(propertyId) {
    const comparison = JSON.parse(localStorage.getItem('propertyComparison') || '[]');
    
    if (!comparison.includes(propertyId)) {
        comparison.push(propertyId);
        localStorage.setItem('propertyComparison', JSON.stringify(comparison));
        
        showNotification('Property added to comparison', 'success');
        updateComparisonCounter();
    } else {
        showNotification('Property already in comparison', 'info');
    }
}

function removeFromComparison(propertyId) {
    let comparison = JSON.parse(localStorage.getItem('propertyComparison') || '[]');
    comparison = comparison.filter(id => id !== propertyId);
    
    localStorage.setItem('propertyComparison', JSON.stringify(comparison));
    showNotification('Property removed from comparison', 'success');
    updateComparisonCounter();
}

function updateComparisonCounter() {
    const comparison = JSON.parse(localStorage.getItem('propertyComparison') || '[]');
    const counter = document.querySelector('.comparison-counter');
    
    if (counter) {
        counter.textContent = comparison.length;
        counter.style.display = comparison.length > 0 ? 'block' : 'none';
    }
}

// Initialize comparison counter on load
document.addEventListener('DOMContentLoaded', updateComparisonCounter);

// Property Favorites Functions
function toggleFavorite(propertyId) {
    const favorites = JSON.parse(localStorage.getItem('propertyFavorites') || '[]');
    const index = favorites.indexOf(propertyId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Property removed from favorites', 'info');
    } else {
        favorites.push(propertyId);
        showNotification('Property added to favorites', 'success');
    }
    
    localStorage.setItem('propertyFavorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('propertyFavorites') || '[]');
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(btn => {
        const propertyId = btn.dataset.propertyId;
        if (favorites.includes(propertyId)) {
            btn.classList.add('active', 'text-red-500');
        } else {
            btn.classList.remove('active', 'text-red-500');
        }
    });
}

// Initialize favorites on load
document.addEventListener('DOMContentLoaded', updateFavoriteButtons);

// Newsletter subscription function
function subscribeToNewsletter() {
    const emailInput = document.getElementById('newsletter-signup');
    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification('Please enter your email address', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('Thank you for subscribing! You will receive our latest updates and exclusive offers.', 'success');
    emailInput.value = '';
}

// Enhanced format number function for statistics
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// Hero search functionality
function performHeroSearch() {
    const location = document.getElementById('hero-location')?.value || '';
    const type = document.getElementById('hero-type')?.value || '';
    
    // Create URL with search parameters
    let url = 'properties.html';
    const params = new URLSearchParams();
    
    if (location) params.append('location', location);
    if (type) params.append('type', type);
    
    if (params.toString()) {
        url += '?' + params.toString();
    }
    
    // Navigate to properties page with search parameters
    window.location.href = url;
}

// Export functions for global use
window.CityLifeRealEstate = {
    filterProperties,
    showNotification,
    openPropertyGallery,
    closePropertyGallery,
    addToComparison,
    removeFromComparison,
    toggleFavorite,
    formatCurrency,
    formatDate,
    subscribeToNewsletter,
    formatNumber,
    performHeroSearch
};