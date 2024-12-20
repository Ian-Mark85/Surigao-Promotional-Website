
function showSidebar() {
    document.querySelector('.sidebar').style.transform = 'translateX(0)';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.transform = 'translateX(100%)';
}

// Initialize the sidebar hidden state
document.querySelector('.sidebar').style.transform = 'translateX(100%)';







document.addEventListener("DOMContentLoaded", () => {
    const featuresSection = document.getElementById("features");

    function handleScroll() {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            featuresSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });

    
});






document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1 // 10% of the element should be visible
    };

    const elementsToAnimate = document.querySelectorAll('.spot-card'); // Adjust selector if needed

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('appear');
                entry.target.classList.add('hidden');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden'); // Initially hide elements
        observer.observe(el);
    });
});
     