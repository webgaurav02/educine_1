const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




// Reavel Animation
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");

  Array.from(reveals).forEach((revItem) => {
    let windowHeight = window.innerHeight;
    let elementTop = revItem.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revItem.classList.add("active");
    // } else {
    //   revItem.classList.remove("active");
    }
  })
}


window.addEventListener("scroll", reveal);







// Typing animation for title
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = (matchMedia('only screen and (max-width: 767px)').matches) ? ["Sainik\nSchool", "RMS\nCoaching", "RIMC\nCoaching", "JNV\nCoaching"] : ["Sainik School", "RMS Coaching", "RIMC Coaching", "JNV Coaching"];
// const phrases = ["Sainik School", "RMS Coaching", "RIMC Coaching", "JNV Coaching"];
const el = document.getElementById("type-sp");

let sleepTime = 80;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();








function redirectToWhatsApp() {
  window.open('https://wa.me/918292475069?text=Hello%20Educine%20Academy!%20%F0%9F%91%8B%20I\'m%20interested%20in%20learning%20more%20about%20your%20coaching%20classes%20and%20courses.%20Can%20you%20provide%20me%20with%20more%20information?%20%F0%9F%93%9A', '_blank');
}

function bookOnWhatsApp() {
  window.open('https://wa.me/918292475069?text=Hello%20Educine%20Academy!%20%F0%9F%91%8B%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20with%20you.%20Can%20you%20provide%20me%20with%20more%20information?%20%F0%9F%93%9A', '_blank');
}


// Navbar

const toggler = document.getElementById("check");
const navPhone = document.getElementById('navPhone');
toggler.checked = false;
navPhone.style.opacity = '0';

const toggleNav = () => {
  if (navPhone.style.opacity == '0') {
    navPhone.style.left = '10%';
    navPhone.style.opacity = '1';
  }
  else {
    navPhone.style.left = '-100%';
    navPhone.style.opacity = '0';
  }
  toggler.checked = (navPhone.style.opacity == '0') ? false : true;
}

toggler.addEventListener('click', toggleNav);