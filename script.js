const numbers = document.querySelectorAll(".numbs span");
const counterEl = document.querySelector(".counter");
const finalEl = document.querySelector(".final");
const replayBtn = document.querySelector("#replay");

function resetDom() {
  counterEl.classList.remove("hide");
  finalEl.classList.remove("show");
  numbers.forEach((numb) => {
    numb.classList.value = "";
  });
  numbers[0].className = "in";
}
runAnimation();
function runAnimation() {
  numbers.forEach((numb, idx) => {
    const lastElement = numbers.length - 1;
    numb.addEventListener("animationend", (e) => {
      if (e.animationName === "GetIn" && idx !== lastElement) {
        numb.classList.remove("in");
        numb.classList.add("out");
      } else if (e.animationName === "GetOut" && numb.nextElementSibling) {
        numb.nextElementSibling.classList.add("in");
      } else {
        counterEl.classList.add("hide");
        finalEl.classList.add("show");
      }
    });
  });
}
replayBtn.addEventListener("click", () => {
  resetDom();
  runAnimation();
});
