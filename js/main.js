let myElement = document.getElementById("hhh");
let continer = document.getElementById("sss");
let haeder = document.getElementById("haeder");
let sora = document.getElementById("sora");
let h2 = document.getElementById("h2");

const change = () => {
    myElement.style.backgroundColor= "#272727";
    haeder.style.backgroundColor= "#272727";
    continer.style.backgroundColor= "rgb(46 46 46)";
    h2.style.boxshadow = "0px 0px 18px #0075ff";
}
sora.onclick = change;