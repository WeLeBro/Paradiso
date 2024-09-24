const carousel = document.getElementById('carousel');
const items = Array.from(carousel.children);
const itemWidth = 257; // Width of one item (same as in CSS)

// Clone the first and last items
const firstItem = items[0].cloneNode(true);
const lastItem = items[items.length - 1].cloneNode(true);

// Add clones to the beginning and end
carousel.appendChild(firstItem);
carousel.insertBefore(lastItem, items[0]);

// Set the initial scroll position to the first real item
carousel.scrollLeft = itemWidth;

// Function to disable and enable smooth scrolling
function toggleSmoothScroll(enable) {
    if (enable) {
        carousel.style.scrollBehavior = 'smooth';
    } else {
        carousel.style.scrollBehavior = 'auto'; // Disables smooth scrolling
    }
}

// Add a scroll listener to handle the infinite loop effect
carousel.addEventListener('scroll', () => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // If the user scrolls to the fake first item, jump to the real last item
    if (carousel.scrollLeft <= 0) {
        toggleSmoothScroll(false); // Disable smooth scrolling
        carousel.scrollLeft = carousel.scrollWidth - (2 * itemWidth); // Jump to real last item instantly
        toggleSmoothScroll(true);  // Re-enable smooth scrolling
    }

    // If the user scrolls to the fake last item, jump to the real first item
    if (carousel.scrollLeft >= maxScrollLeft) {
        toggleSmoothScroll(false); // Disable smooth scrolling
        carousel.scrollLeft = itemWidth; // Jump to real first item instantly
        toggleSmoothScroll(true);  // Re-enable smooth scrolling
    }
});
