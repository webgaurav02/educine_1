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


function redirectToWhatsApp() {
    window.open('https://wa.me/918076199461?text=Hello%20Educine%20Academy!%20%F0%9F%91%8B%20I\'m%20interested%20in%20learning%20more%20about%20your%20coaching%20classes%20and%20courses.%20Can%20you%20provide%20me%20with%20more%20information?%20%F0%9F%93%9A', '_blank');
}



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