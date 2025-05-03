// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Change burger icon
    if (navLinks.classList.contains('nav-active')) {
        burger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        burger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Country Selector Functionality
const countryCards = document.querySelectorAll('.country-card');
countryCards.forEach(card => {
    card.addEventListener('click', () => {
        const country = card.textContent.trim();
        if (country !== "More...") {
            alert(`Loading health information for ${country}`);
            // In a real implementation, this would redirect to country-specific page
        } else {
            alert('Showing all African countries');
        }
    });
});

// Search Functionality (basic)
const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-bar input').value;
    if (searchTerm.trim() !== '') {
        alert(`Searching for: ${searchTerm}`);
        // In a real implementation, this would search your content
    }
});

// Simulate loading for demo purposes
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mama Africa website loaded');
});
