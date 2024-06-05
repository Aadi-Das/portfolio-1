var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");
let clicked = false;
bars.addEventListener("click", barClicked);
// w3school: https://www.w3schools.com/howto/howto_js_read_more.asp

// declaring variables and "calling it" (not sure the correct wording) from the html page by id
function readmore() {
  var ques = document.getElementById("ques");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");

  // if and else statement
  // if true do:
  if (ques.style.display === "none") {
    ques.style.display = "inline";
    btn.innerHTML = "Read More";
    more.style.display = "none";

    //if false do:
  } else {
    ques.style.display = "none";
    btn.innerHTML = "Read Less";
    more.style.display = "inline";
  }
}

clicked = true;

//setting up the clicked Effect
function barClicked() {
  let navi = document.querySelector(".navi");

  bars.classList.toggle("active");
  nav.classList.toggle("visible");
  if (clicked == true) {
    navi.style.pointerEvents = "auto";
    clicked = false;
  } else if (clicked == false) {
    navi.style.pointerEvents = "none";
    clicked = true;
  }
}
