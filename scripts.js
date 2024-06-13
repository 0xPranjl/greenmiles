// script.js
document.addEventListener('DOMContentLoaded', function() {
   
    var animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './cycle1.json' // Replace with the path to your animation file
    });

    var animationContainer1 = document.getElementById('lottie-animation-track');

    var animation = lottie.loadAnimation({
        container: animationContainer1,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './cycle2.json' // Replace with the path to your animation file
    });

    var animationContainer2 = document.getElementById('lottie-animation-coin');

    var animation = lottie.loadAnimation({
        container: animationContainer2,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './coin.json' // Replace with the path to your animation file
    });

    var animationContainer3 = document.getElementById('lottie-animation-green');

    var animation = lottie.loadAnimation({
        container: animationContainer3,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './green.json' // Replace with the path to your animation file
    });

    var animationContainer4 = document.getElementById('lottie-animation-skale');

    var animation = lottie.loadAnimation({
        container: animationContainer4,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './skale.json' // Replace with the path to your animation file
    });
});
