function change(e, check) {
    if (check === "over") {
        e.target.setAttribute("src", "./img(2)small.jpg");
        return;
    }

    e.target.setAttribute("src", "./img(1) small.png");
}


function blurInp(e, checkInp) {
    var nameError = document.getElementsByClassName('name-error')[0];
    var passError = document.getElementsByClassName('pass-error')[0];
    e.target.style.background = "transparent";

    if (checkInp === 'name') {
        if (e.target.value.length < 6) {
            nameError.innerText = 'Name should be at least 6 characters';
            nameError.style.display = 'block';
            return;
        }
        nameError.style.display = 'none';
    }

    if (checkInp === 'pass') {
        if (e.target.value.length < 8) {
            passError.innerText = 'Password should be at least 8 characters';
            passError.style.display = 'block';
            return;
        }
        passError.style.display = 'none';
    }
}

function passVisiblility(e) {
    var Visiblility = document.getElementById('visible');

    if (Visiblility.getAttribute('src') === "./visibility_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.png") {
        e.target.previousElementSibling.setAttribute('type', 'text');
        Visiblility.setAttribute("src", "./visibility_off_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.png");
    } else {
        e.target.previousElementSibling.setAttribute('type', 'password');
        Visiblility.setAttribute("src", "./visibility_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.png");
    }
}