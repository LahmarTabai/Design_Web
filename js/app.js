document.addEventListener("DOMContentLoaded", () => {

    /**************** Partie Button Burger ******************/

    let butn = document.querySelectorAll(".toggle");
    let body = document.querySelector('body');
    let icoferm = '<i class="fas fa-times fermer" aria-hidden="true"></i>';
    let nav = document.querySelector('.menu');

    for (let i = 0; i < butn.length; i++) {
        butn[i].addEventListener("click", e => {
            if (butn[i].innerHTML.match('<i class="fas fa-bars ouvrir" aria-hidden="true"></i>')) {
                butn[i].innerHTML = icoferm;
                nav.classList.add("ouvrir");
            } else if (butn[i].innerHTML.match('<i class="fas fa-times fermer" aria-hidden="true"></i>')) {
                butn[i].innerHTML = '<i class="fas fa-bars ouvrir" aria-hidden="true"></i>';
                nav.classList.remove("ouvrir");
            }
            body.classList.toggle("open");
        });
    };

    /*************** Vérification Mail  **************/

    let el = document.getElementsByName("password")[0];
    let email = document.getElementsByName("email")[0];

    let war = document.querySelector('.warning');

    const User = {
        mail: "lahmartabai@yahoo.fr",
        pwd: `azerty`
    };

    localStorage.setItem('mail', User.mail);
    localStorage.setItem('password', User.pwd);
    const emails = localStorage.getItem('mail', User.mail);
    const mdp = localStorage.getItem('password', User.pwd);

    let targ = User.mail;
    let identt = targ.substring(0, targ.indexOf('@'));

    let tark = email.value;
    let ident = tark.substring(0, tark.indexOf('@'));

    console.log(ident);

    let btn = document.querySelector(".btnn");
    btn.addEventListener("click", e => {
        e.preventDefault();
        el.value == mdp && email.value == emails ? war.innerHTML = "Welcome " + `${identt}` : war.innerHTML = "Sorry " + `${ident}` + " You are not Allowed";
        if (war.innerHTML == "Welcome " + `${identt}`) {
            war.classList.remove("fail");
            war.classList.add("success");
        } else {
            war.classList.remove("success");
            war.classList.add("fail");
        }
    });
});