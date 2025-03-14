document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loopedSlides: 3,
    freeMode: true,
    freeModeMomentum: false,
  });
});

//FAQs

const faqItems = document.querySelectorAll("#faq-ul li");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".answer");

    faqItems.forEach((faq) => {
      const otherAnswer = faq.querySelector(".answer");
      if (otherAnswer && otherAnswer !== answer) {
        otherAnswer.style.display = "none";
      }
    });

    //toggle the current answer

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "flex";
    }
  });
});

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

const hiddenFeatureFirst = document.getElementById("feature1");
const hiddenFeaturesecond = document.getElementById("feature2");
const seeMore = document.getElementById("seemore");

const faqButton = document.getElementById("faqButton");
const faqButtonm = document.getElementById("faqButtonM");
const faqSection = document.getElementById("faqSection");
const waitListBtn = document.getElementById("joinwaitlist");
const heroWaitBtn = document.getElementById("joinwait23");
const waitListSection = document.getElementById("waitSection");
const day = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//FAQ scroll

if (faqButtonm && faqSection) {
  faqButtonm.addEventListener("click", (e) => {
    e.preventDefault();
    faqSection.scrollIntoView({ behavior: "smooth" });
  });
}

if (faqButton && faqSection) {
  faqButton.addEventListener("click", (e) => {
    e.preventDefault();
    faqSection.scrollIntoView({ behavior: "smooth" });
  });
}

//Waitlist scroll
if (waitListBtn && waitListSection) {
  waitListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    waitListSection.scrollIntoView({ behavior: "smooth" });
  });
}

if (heroWaitBtn && waitListSection) {
  heroWaitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hey");

    waitListSection.scrollIntoView({ behavior: "smooth" });
  });
}

if (seeMore) {
  seeMore.addEventListener("click", () => {
    console.log("clicked");
    hiddenFeatureFirst.style.display = "block";
    hiddenFeaturesecond.style.display = "block";
    seeMore.style.display = "none";
  });
}

// if(faqButton){
// faqButton.addEventListener("click", () => {
//   const top = faqSection.offsetTop;
//   window.scrollTo({
//     top: 200,
//     behavior: "smooth",
//   });
// });

// }'

let totalSecondsLeft =
  JSON.parse(window.localStorage.getItem("time-left")) || 30 * 24 * 60 * 60; // 30 days in seconds
// const currentSecond = new Date()
// currentSecond.getSecondsi

const handleCountDown = () => {
  if (totalSecondsLeft > 0) {
    totalSecondsLeft -= 1;

    let daysLeft = Math.floor(totalSecondsLeft / 86400);
    let hoursLeft = Math.floor((totalSecondsLeft % 86400) / 3600); //seconds in hours
    let minutesLeft = Math.floor((totalSecondsLeft % 3600) / 60);
    let secondsLeft = totalSecondsLeft % 60;

    day.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;
    window.localStorage.setItem("time-left", totalSecondsLeft);
  } else {
    console.log("Countdown finished!");
    clearInterval(interval); // Stop the timer when it reaches 0
  }
};

const interval = setInterval(handleCountDown, 1000);
