let attempts = 3;
let correctAnswer = "exam";

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value.toLowerCase();
  let message = document.getElementById("message");

  if (userAnswer === correctAnswer) {

    document.getElementById("questionPage").style.display = "none";
    document.getElementById("memoryPage").style.display = "block";

    // optional: pause video on memory page for dramatic effect
    // document.getElementById("bgVideo").pause();

  } else {
    attempts--;

    if (attempts >= 0) {
      message.innerText = "Wrong answer. Try again! 💭";
      document.getElementById("attempts").innerText = "Attempts left: " + attempts;
    } else {
      message.innerText = "No attempts left! 💔";
      document.querySelector("button").disabled = true;
    }
  }
}

document.addEventListener("click", function startAudio() {
  document.getElementById("bgAudio").play();
}, { once: true });

// Auto play audio when page loads
window.addEventListener("load", function () {
  const audio = document.getElementById("bgAudio");
  audio.play().catch(function () {
    // Browser blocked autoplay, play on first click instead
    document.addEventListener("click", function () {
      audio.play();
    }, { once: true });
  });
});

// Tap to enter screen
document.getElementById("tapScreen").addEventListener("click", function () {
  document.getElementById("bgAudio").play();
  document.getElementById("tapScreen").style.display = "none";
});