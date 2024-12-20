document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tour-card');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateCards = () => {
        cards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add('animate');
            } else {
                card.classList.remove('animate');
            }
        });
    };

    window.addEventListener('scroll', animateCards);
    animateCards(); // Trigger the function initially to catch elements already in view
});
