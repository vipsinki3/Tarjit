document.getElementById("sora").onclick = (myFunction)
function myFunction() {
    var bodyDark = document.body;
    bodyDark.classList.toggle("dark-mode");
    var haeder=document.getElementById("haeder");
    haeder.classList.toggle("header-dark-mode");
    let container =document.getElementById("con-dark");
    container.classList.toggle("con-dark");
    let headerH1 = document.getElementById("h1-dark");
    headerH1.classList.toggle("HHH1");
    let containerh1 = document.getElementById("hh1-dark");
    containerh1.classList.toggle("continerh4")
}