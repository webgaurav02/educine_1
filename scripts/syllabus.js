const toggler = document.getElementById("check");
const navPhone = document.getElementById('navPhone');
toggler.checked = false;
navPhone.style.opacity = '0';

const toggleNav = () => {
    if (navPhone.style.opacity=='0'){
        navPhone.style.left = '10%';
        navPhone.style.opacity = '1';
    }
    else{
        navPhone.style.left = '-100%';
        navPhone.style.opacity = '0';
    }
    toggler.checked = (navPhone.style.opacity=='0') ? false : true;
}

toggler.addEventListener( 'click', toggleNav);