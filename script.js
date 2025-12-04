function showQuote() {
  document.getElementById("quote").innerHTML =
    "Talent without working hard is nothing.";
}

function handleForm(e) {
  e.preventDefault();
  let name = document.getElementById("fanName").value;
  if (name === "") {
    document.getElementById("formMsg").innerHTML =
      "Please enter your name.";
  } else {
    document.getElementById("formMsg").innerHTML =
      "Thanks " + name + " for sharing!";
  }
}

function resetMessage() {
  document.getElementById("formMsg").innerHTML = "";
}

function calcGPG() {
  let goals = parseInt(document.getElementById("goals").value);
  let matches = parseInt(document.getElementById("matches").value);
  let result = document.getElementById("result");

  if (isNaN(goals) || isNaN(matches) || matches <= 0) {
    result.innerHTML = "Enter valid numbers.";
  } else {
    let gpg = goals / matches;
    result.innerHTML = "Goals per game: " + gpg.toFixed(2);
  }
}

function highlightAchievement() {
  document.getElementById("awardMsg").innerHTML =
    "Ronaldo’s 2016 Euro win with Portugal is a top achievement!";
}