'use strict';

testing.addEventListener('click', function () {
    console.log(main.class)
    if(main.classList.contains("theme-1")) {
        main.classList = "theme-2";
        } else {
            main.classList = "theme-1";
        }
});