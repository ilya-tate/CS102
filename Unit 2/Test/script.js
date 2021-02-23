$(function() {
    $body = $('.body');

    function rgb() {
        return`rgb(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)})`
    }
    // $body.css('background-color', rgb);

    setInterval(() => {
        $body.css('background-color', rgb)
    }, 3000);
});

function rng(min, max) {
    return Math.floor(Math.random() * max) + min;
}