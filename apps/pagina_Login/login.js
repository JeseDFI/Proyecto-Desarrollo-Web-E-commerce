const titulo = document.getElementById("title");
const btnRegistro = document.getElementById("btn-registro");
const btnLogin = document.getElementById("btn-login");

titulo.textContent = "Inicia sesión";

btnRegistro.addEventListener("click", () => {
    titulo.textContent = "Registro";
});

btnLogin.addEventListener("click", () => {
    titulo.textContent = "Inicia sesión";
});