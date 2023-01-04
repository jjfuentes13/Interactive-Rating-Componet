const circles = document.getElementsByClassName("circle");
const submit = document.getElementById("submit");

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("circle")) {
    for (let i = 0; i < circles.length; i++) {
      circles[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }
});

// submit.onclick = submitSurvey;

function submitSurvey() {
  let score = document.getElementsByClassName("circle active")[0].textContent;
  //   let scoreRating = "You selected ${score} out of 5"
  document.getElementById("survey").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById(
    "ratingScore"
  ).textContent = `You selected ${score} out of 5`;
  console.log(score);
}
