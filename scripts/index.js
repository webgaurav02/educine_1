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

let courseValue = "";
const enrollBtns = document.getElementsByClassName("course-btn");
const btnArray = Array.from(enrollBtns);
btnArray.forEach((button) => {
    button.addEventListener("click", (e) => {
        let ele = e.target.parentNode;
        const para = ele.getElementsByTagName("p")[0];
        courseValue += ele.firstElementChild.innerHTML + " ";
        courseValue += para.innerHTML;
        const CourseName = document.getElementById("course");
        CourseName.setAttribute('value', courseValue);
        courseValue = "";
    });
});