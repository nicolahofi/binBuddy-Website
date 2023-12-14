let currentIndex = 0;

function changeSlide(direction) {
    const quoteCarousel = document.getElementById('quote-carousel');
    const quoteCards = document.querySelectorAll('.quote-card');
    const cardWidth = quoteCards[0].offsetWidth;

    currentIndex = (currentIndex + direction + quoteCards.length) % quoteCards.length;

    quoteCarousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

function autoRotate() {
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Change quote every 3 seconds
}

autoRotate();