let slideIndex = [1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// Functions for first slider
function showSlidesTime1() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1 - 1].style.display = "block";
}

let slideIndex1 = 0;
let timeBtn1 = document.getElementById("timeBtn1");
let speedBtn1 = document.getElementById("speedBtn1");
let timerText1 = document.getElementById("timerText1");
var timerId1;
var count1 = 0;

var speed1 = 1000;

function toggleTimer1() {
  count1++;

  if (count1 % 2 == 1) {
    timeBtn1.innerHTML = "Stop timer";
    timerId1 = setInterval(showSlidesTime1, speed1);
  } else {
    timeBtn1.innerHTML = "Start timer";
    clearInterval(timerId1);
  }
}

function changeSpeed1() {
  if (speed1 == 1000) {
    timerText1.innerHTML = "2 seconds";
    speed1 = 2000;
  } else if (speed1 == 2000) {
    timerText1.innerHTML = "5 seconds";
    speed1 = 5000;
  } else if (speed1 == 5000) {
    timerText1.innerHTML = "1 second";
    speed1 = 1000;
  }
  if (count1 % 2 == 1) {
    clearInterval(timerId1);
    timerId1 = setInterval(showSlidesTime1, speed1);
  }
}

// Functions for second slider
function showSlidesTime2() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  slides[slideIndex2 - 1].style.display = "block";
}

let slideIndex2 = 0;
let timeBtn2 = document.getElementById("timeBtn2");
let speedBtn2 = document.getElementById("speedBtn2");
let timerText2 = document.getElementById("timerText2");
var timerId2;
var count2 = 0;

var speed2 = 1000;

function toggleTimer2() {
  count2++;

  if (count2 % 2 == 1) {
    timeBtn2.innerHTML = "Stop timer";
    timerId2 = setInterval(showSlidesTime2, speed2);
  } else {
    timeBtn2.innerHTML = "Start timer";
    clearInterval(timerId2);
  }
}

function changeSpeed2() {
  if (speed2 == 1000) {
    timerText2.innerHTML = "2 seconds";
    speed2 = 2000;
  } else if (speed2 == 2000) {
    timerText2.innerHTML = "5 seconds";
    speed2 = 5000;
  } else if (speed2 == 5000) {
    timerText2.innerHTML = "1 second";
    speed2 = 1000;
  }
  if (count2 % 2 == 1) {
    clearInterval(timerId2);
    timerId2 = setInterval(showSlidesTime2, speed2);
  }
}

// Functions for third slider
function showSlidesTime3() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {
    slideIndex3 = 1;
  }
  slides[slideIndex3 - 1].style.display = "block";
}

let slideIndex3 = 0;
let timeBtn3 = document.getElementById("timeBtn3");
let speedBtn3 = document.getElementById("speedBtn3");
let timerText3 = document.getElementById("timerText3");
var timerId3;
var count3 = 0;

var speed3 = 1000;

function toggleTimer3() {
  count3++;

  if (count3 % 2 == 1) {
    timeBtn3.innerHTML = "Stop timer";
    timerId3 = setInterval(showSlidesTime3, speed3);
  } else {
    timeBtn3.innerHTML = "Start timer";
    clearInterval(timerId3);
  }
}

function changeSpeed3() {
  if (speed3 == 1000) {
    timerText3.innerHTML = "2 seconds";
    speed3 = 2000;
  } else if (speed3 == 2000) {
    timerText3.innerHTML = "5 seconds";
    speed3 = 5000;
  } else if (speed3 == 5000) {
    timerText3.innerHTML = "1 second";
    speed3 = 1000;
  }
  if (count3 % 2 == 1) {
    clearInterval(timerId3);
    timerId3 = setInterval(showSlidesTime3, speed3);
  }
}
