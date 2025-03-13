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
const faqButtonm = document.getElementById('faqButtonM')
const faqSection = document.getElementById("faqSection");

// if(faqButton){
// faqButton.addEventListener("click", () => {
//   const top = faqSection.offsetTop;
//   window.scrollTo({
//     top: 200,
//     behavior: "smooth",
//   });
// });

// }

if (faqButtonm && faqSection) {
  faqButtonm.addEventListener("click", (e) => {
    e.preventDefault()
    faqSection.scrollIntoView({ behavior: "smooth" });
  });
  
}

if (faqButton && faqSection) {
  faqButton.addEventListener("click", (e) => {
    e.preventDefault()
    faqSection.scrollIntoView({ behavior: "smooth" });
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
