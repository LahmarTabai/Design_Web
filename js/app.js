document.addEventListener("DOMContentLoaded", () => {

    let el = document.getElementsByName("password")[0];
    let email = document.getElementsByName("email")[0];

    const User = {
        mail: "lahmartabai@yahoo.fr",
        pwd: `azerty`
    };

    localStorage.setItem('mail', User.mail);
    localStorage.setItem('password', User.pwd);
    const emails = localStorage.getItem('mail', User.mail);
    const mdp = localStorage.getItem('password', User.pwd);

    let btn = document.querySelector(".btnn");
    btn.addEventListener("click", e => {
        e.preventDefault();
        el.value == mdp && email.value == emails ? alert("Connexion") : alert("Connexion echoué");
    });
});