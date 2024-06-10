document.addEventListener('DOMContentLoaded', function() {
    const starBg = document.querySelector('.star_bg');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the animate class and trigger reflow to restart the animation
                starBg.classList.remove('animate');
                void starBg.offsetWidth; // Trigger reflow to restart the animation
                starBg.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(starBg);
});