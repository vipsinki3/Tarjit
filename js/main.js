document.getElementById("sora").onclick = (myFunction)
document.getElementById("sora").src = "./img/wb_sunny_black_24dp.svg";
var hhh = document.getElementById("hhh");
let x = true;
function myFunction () {
    hhh.classList.toggle("nnn")
    var bodyDark = document.body;
    bodyDark.classList.toggle("dark-mode");
    var haeder=document.getElementById("haeder");
    haeder.classList.toggle("header-dark-mode");
    let container =document.getElementById("con-dark");
    container.classList.toggle("con-dark");
    let headerH1 = document.getElementById("h1-dark");
    headerH1.classList.toggle("HHH1");
    let containerh1 = document.getElementById("hh1-dark");
    containerh1.classList.toggle("continerh4");
    let studyh1 = document.getElementById("h2");
    studyh1.classList.toggle("study-h2dark")    
    if(hhh.classList.contains("nnn")){
        sora.src = "./img/wb_sunny_white_24dp.svg";
    }else{
        sora.src = "./img/wb_sunny_black_24dp.svg";
    }
}

