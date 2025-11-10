const titulo = document.getElementById("title");
const btnRegistro = document.getElementById("btn-registro");
const btnLogin = document.getElementById("btn-login");

titulo.textContent = "Registrarse";

btnRegistro.addEventListener("click", () => {
    titulo.textContent = "Registrarse";
});

btnLogin.addEventListener("click", () => {
    titulo.textContent = "Iniciar sesión";
});