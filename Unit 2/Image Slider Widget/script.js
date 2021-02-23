'use strict';


// $(function() {
//     // Settings for slider
//     let width = 720;
//     let animationSpeed = 2000;
//     let pause = 2500; // 2000 + 500 delay

//     // Cache DOM elements
//     let $slideContainer = $('.slides');
//     let $slides = $('.slide');

//     let interval;
//     let currentSlide = 1;

//     // Create a function that will start the slider
//     function startSlider() {
//         interval = setInterval(function() {
//             // Animating the slide container will cause the action in the function to happen every delay
//             $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
//                 currentSlide++;
//                 if (currentSlide == $slides.length) {
//                     currentSlide = 1;
//                     $slideContainer.css('margin-left', 0);
//                 }
//             });
//         }, pause);
//     }

//     function pauseSlider() {
//         clearInterval(interval);
//     }

//     startSlider();

//     $slideContainer
//         .on('mouseenter', pauseSlider)
//         .on('mouseleave', startSlider);
// });

// $(function () {
//     let $body = $('.body');

//     function rgb() {
//         return `rgb(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)})`
//     }
//     // $body.css('background-color', rgb);

//     setInterval(() => {
//         $body.css('background-color', rgb)
//     }, 3000);
// });

// function rng(min, max) {
//     return Math.floor(Math.random() * max) + min;
// }


$(function () {
    let $imgContainer = $('.img-container');
    let interval;
    let running;

    function startInterval() {
        interval = setInterval(() => {
            $imgContainer.append('<img class="img" src="https://tinemettejespersen.files.wordpress.com/2012/03/ffftextthisisanimage.gif"></img>');
        }, 1000);
        running = true;
    }
    startInterval();

    function toggleInterval() {
        if (running == true) {
            clearInterval(interval);
            running = false;
        } else {
            startInterval();
        }
    }

    $imgContainer.on('click', toggleInterval);
});