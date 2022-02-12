document.getElementById("sora").onclick = (myFunction)
function myFunction() {
    var bodyDark = document.body;
    bodyDark.classList.toggle("dark-mode");
    var haeder=document.getElementById("haeder");
    haeder.classList.toggle("header-dark-mode");
    let container =document.getElementById("con-dark")
    container.classList.toggle("con-dark")
}