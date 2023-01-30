let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

let info_personal = document.getElementById("info-personal");
let habilidades = document.getElementById("habilidades");
let cualidades = document.getElementById("cualidades");
let exp_laboral = document.getElementById("exp-laboral");

btn1.addEventListener("click", function(){
    info_personal.style.display="block";
    btn1.style.backgroundColor="#C5CAE9";
    
    cambiarFondoBtn(btn4, btn2, btn3);
    displayNone(cualidades, exp_laboral, habilidades);
})

btn2.addEventListener("click", function(){
    btn2.style.backgroundColor="#C5CAE9";
    cualidades.style.display="block";

    cambiarFondoBtn(btn1, btn4, btn3);
    displayNone(info_personal, exp_laboral, habilidades);
})

btn3.addEventListener("click", function(){
    habilidades.style.display="block";
    btn3.style.backgroundColor="#C5CAE9";

    cambiarFondoBtn(btn1, btn2, btn4);
    displayNone(info_personal, cualidades, exp_laboral);
})

btn4.addEventListener("click", function(){
    btn4.style.backgroundColor="#C5CAE9";
    exp_laboral.style.display="block";

    cambiarFondoBtn(btn1, btn2, btn3);
    displayNone(info_personal, cualidades, habilidades);
})

function cambiarFondoBtn (color1, color2, color3) {
    color1.style.backgroundColor="#303F9F";
    color2.style.backgroundColor="#303F9F";
    color3.style.backgroundColor="#303F9F";
}

function displayNone (section1, section2, section3) {
    section1.style.display="none";
    section2.style.display="none";
    section3.style.display="none";
}