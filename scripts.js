// script.js
document.addEventListener('DOMContentLoaded', function() {
    var animationContainer = document.getElementById('lottie-animation');

    var animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './cycle1.json' // Replace with the path to your animation file
    });
});
