'use strict';


$(function() {
    let toggleTimeBtn = $('.toggle-time');
    let showTimeBtn = $('.show-time');
    let $msec = $('.msec');
    let $sec = $('.sec');
    let $min = $('.min');
    let $hour = $('.hour');
    let timeArr = [0, 0, 0, 0]; // hour, min, sec, msec
    let msecInterval;
    let secInterval;
    let minInterval;
    let hourInterval;
    let checkingInterval;
    let isClockRunning = false;
    let isChangingTimeRunning = false;


    function startClock() {
        msecInterval = setInterval(() => {
            timeArr[3]++;
        }, 10);

        secInterval = setInterval(() => {
            timeArr[2]++;
        }, 1000);

        minInterval = setInterval(() => {
            timeArr[1]++;
        }, 60000);

        hourInterval = setInterval(() => {
            timeArr[0]++;
        }, 3600000);

        displayChangingTime()
    }

    function displayChangingTime() {
        checkingInterval = setInterval(() => {
            if (timeArr[3] < 10) {
                $msec.text(`0${timeArr[3]}`);
            } else if (timeArr[3] < 100) {
                $msec.text(`${timeArr[3]}`);
            } else if (timeArr[3] >= 100) {
                timeArr[3] = 0;
                $msec.text(`0${timeArr[3]}`);
            }

            if (timeArr[2] < 10) {
                $sec.text(`0${timeArr[2]}`);
            } else if (timeArr[2] < 60) {
                $sec.text(`${timeArr[2]}`);
            } else if (timeArr[2] >= 60) {
                timeArr[2] = 0;
                $sec.text(`0${timeArr[2]}`);
            }

            if (timeArr[1] < 10) {
                $min.text(`0${timeArr[1]}`);
            } else if (timeArr[1] < 60) {
                $min.text(`${timeArr[1]}`);
            } else if (timeArr[1] >= 60) {
                timeArr[1] = 0;
                $min.text(`0${timeArr[1]}`);
            }

            $hour.text(`${timeArr[0]}`);
        }, 1);

        isChangingTimeRunning = true;
    }

    function stopClock() {
        clearInterval(checkingInterval);
        clearInterval(msecInterval);
        clearInterval(secInterval);
        clearInterval(minInterval);
        clearInterval(hourInterval);
        timeArr = [0, 0, 0, 0];
        $msec.text('00');
        $sec.text('00');
        $min.text('00');
        $hour.text('0');
    }

    function toggleClock() {
        if (isClockRunning == true) {
            stopClock()
            isClockRunning = false;
            isChangingTimeRunning = false;
        } else {
            startClock()
            isClockRunning = true;
        }
    }


    function displayCurrentTime() {
        if (isChangingTimeRunning == true) {
            clearInterval(checkingInterval);
            isChangingTimeRunning = false;
        } else if (isChangingTimeRunning == false && isClockRunning == true) {
            displayChangingTime();
        } else {
            return;
        }
    }


    toggleTimeBtn.on('click', toggleClock);
    showTimeBtn.on('click', displayCurrentTime);
});