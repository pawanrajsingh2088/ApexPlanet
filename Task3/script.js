document.getElementById("startQuiz").addEventListener("click", () => {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.remove("hidden");
  quizContainer.innerHTML = `
    <p><strong>Q1:</strong> Which language is used for styling web pages?</p>
    <button onclick="checkAnswer(this, true)">CSS</button>
    <button onclick="checkAnswer(this, false)">Python</button>
    <button onclick="checkAnswer(this, false)">C++</button>
    <p id="quizResult"></p>
  `;
});

function checkAnswer(btn, correct) {
  const result = document.getElementById("quizResult");
  if (correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong, try again!";
    result.style.color = "red";
  }
}

document.getElementById("fetchJoke").addEventListener("click", async () => {
  const jokePara = document.getElementById("joke");
  jokePara.textContent = "Loading joke...";

  try {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    jokePara.textContent = `😂 ${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokePara.textContent = "Failed to load joke 😢";
  }
});
