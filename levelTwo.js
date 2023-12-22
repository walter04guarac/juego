alert("El camino por el bosque")
function nivelTwo() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris"
    },
  ];

  let currentQuestion = 0;

  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    optionsElement.innerHTML = '';

    current.options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }

  function showMessage(message, color) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.style.fontSize = '24px';
    messageElement.style.textAlign = 'center';
    document.body.appendChild(messageElement);

    // Remove the message after a short delay (e.g., 1.5 seconds)
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 1500);
  }

  function checkAnswer(selected) {
    const current = questions[currentQuestion];
    if (selected === current.answer) {
      showMessage('Correct answer!', 'green');
    } else {
      showMessage('Wrong answer!', 'red');
    }

    // Automatically move to the next question after a short delay (e.g., 1 second)
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        showMessage('Quiz completed!', 'blue');
        cargarSiguienteNivel(3);
      }
    }, 1000);
  }

  function nivelCompletado() {
    document.getElementById('nextBtn').onclick = () => {
      checkAnswer();
    };
  }

  displayQuestion();
};
nivelTwo();