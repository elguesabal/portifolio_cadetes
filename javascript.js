import header from "./src/header/header.js";
// import main from "./src/main/main.js";
// import footer from "./src/footer/footer.js";

// import card from "./card.js";

document.getElementById("header").innerHTML = header();
// document.getElementById("main").innerHTML = main();
// document.getElementById("footer").innerHTML = footer();


// function inserir() {
//     document.getElementById("usuarios").innerHTML += card("thais", 30);
//     document.getElementById("usuarios").innerHTML += card("yuri", 15);
// }

document.getElementById("inserir").addEventListener("click", inserir);