alert("Bienvenido espero te diviertas");
function nivelOne() {
  const questions = [
    {
      question: `Te encuentras parado frente a la Mansión de las Sombras, sus imponentes torres se alzan contra el cielo nublado. La brisa del bosque de Eldrath parece susurrar advertencias, pero tu determinación supera cualquier temor. La puerta principal, desgastada por el tiempo, se abre lentamente ante tu toque.`,
      options: ["Entras a la mansión sin dudarlo.", "Titubeas y decides explorar los alrededores antes de entrar."],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "entras a la mansión sin dudarlo.") {
          currentQuestion = 1;
        } else {
          currentQuestion = 2;
        }
      }
    },
    {
      question: `Dentro de la mansión, los susurros de los espíritus atrapados resuenan en tus oídos mientras avanzas por pasillos oscuros. En una sala, encuentras un antiguo diario que revela la obsesión de Lord Malachai por la inmortalidad y sus rituales oscuros.`,
      options: ["Continúas explorando la mansión en busca de más pistas", "Decides dejar la mansión y buscar ayuda afuera."],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "continúas explorando la mansión en busca de más pistas") {
          currentQuestion = 3;
        } else {
          currentQuestion = 4;
        }
      }
    },
    {
      question: `Descubres pistas sobre los secretos que acechan en el bosque, pero la mansión sigue siendo un misterio.`,
      options: ["Avanzar", "Regresar"],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "avanzar") {
          currentQuestion = 4;
        } else {
          currentQuestion = 3;
        }
      }
    },
    {
      question: `Proporciona información valiosa pero aumenta tu exposición a la oscuridad de la mansión. Una sombra se materializa ante ti, una manifestación de la magia negra. Ofrece poder a cambio de tu lealtad.`,
      options: ["Aceptas el poder oscuro y te conviertes en parte de la maldición.", "Rechazas la oferta y buscas un camino de redención."],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "aceptas el poder oscuro y te conviertes en parte de la maldición.") {
          currentQuestion = 5;
          displayQuestion();
        } else {
          currentQuestion = 7;
          displayQuestion();
        }
      }
    },
    {
      question: `Mientras avanzas entre los árboles, la oscuridad parece intensificarse, pero tu curiosidad te impulsa hacia adelante. Después de un tiempo, encuentras un sendero oculto que te lleva a un claro donde la luz de la luna apenas puede penetrar la densa vegetación. En el claro, descubres antiguas ruinas cubiertas por enredaderas retorcidas. Estas ruinas parecen ser los restos de un templo antiguo que una vez sirvió como punto focal para rituales arcanos. Inscripciones extrañas adornan las piedras, y un aura de misterio se cierne sobre el lugar.`,
      options: ["Investigar las inscripciones y tratar de descifrar los antiguos secretos.", "Ignorar las ruinas y continuar explorando el bosque."],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "investigar las inscripciones y tratar de descifrar los antiguos secretos.") {
          currentQuestion = 6;
          displayQuestion();
        } else {
          currentQuestion = 9;
          displayQuestion();
        }
      }
    },
    {
      question: `Investigando más, descubres un antiguo artefacto que podría romper la maldición, pero para activarlo, se requiere un sacrificio.`,
      options: ["Ofreces tu propia vida en el altar para romper la maldición", "Buscas una alternativa para evitar el sacrificio personal."],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "ofreces tu propia vida en el altar para romper la maldición") {
          currentQuestion = 8;
          displayQuestion();
        } else {
          currentQuestion = 7;
          displayQuestion();
        }
      }
    },
    {
      question: `Descubres que estas antiguas escrituras narran la historia de los Eldrathianos y los primeros experimentos con la magia oscura. Obtienes un conocimiento profundo sobre la maldición que asola la mansión y el bosque.`,
      options: ["Seguir", "Regresar"],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "Segir") {
          currentQuestion = 10;
          displayQuestion();
        } else {
          currentQuestion = 2;
          displayQuestion();
        }
      }
    },
    {
      question: `Buscar una alternativa puede tener consecuencias inesperadas.`,
      options: ["Usar la alternativa", "Retractarse"],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "usar la alternativa") {
          currentQuestion = 8;
          displayQuestion();
        } else {
          currentQuestion = 5;
          displayQuestion();
        }
      }
    },
    {
      question: `El sacrificio personal puede poner fin a la maldición, pero también te lleva a un final trágico`,
      options: ["Aceptar el sacrificio", "Retirarse"],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "aceptar el sacrificio") {
          showMessage("Te conviertes en el nuevo líder de los Eldrathianos, expandiendo la oscuridad.", "red");
        } else {
          currentQuestion = 5;
        }
      }
    },
    {
      question: `Ignorar las ruinas y seguir explorando, encuentras una extraña flor luminiscente que destaca en la oscuridad. Puedes decidir recogerla, y esta flor se convierte en un objeto crucial más adelante en la historia.`,
      options: ["siguiente"],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "siguiente") {
          currentQuestion =10;
        } else {
          currentQuestion = 10;
        }
      }
    },
    {
      question: `De vuelta en el sendero principal, te enfrentas a una bifurcación. A tu izquierda, el camino parece iluminado por una luz tenue, mientras que a la derecha, la oscuridad se intensifica.`,
      options: ["Aceptar el sacrificio", "Retirarse"],
      answer: function (optionUsuario) {
        if (optionUsuario.toLowerCase() === "aceptar el sacrificio") {
          currentQuestion =6;
        } else {
          currentQuestion = 10;
        }
      }
    }
  ];
   console.log("nivel uno cargado")
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

  function checkAnswer(selected) {
    questions[currentQuestion].answer(selected);
    displayQuestion();
  }

  document.getElementById('nextBtn').onclick = () => {
    avanzarNivel();
    function avanzarNivel(nivel) {
      nivel++;
       nivelTwo();
  };

  }

  function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = '';
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    paragraph.style.color = color;
    messageElement.appendChild(paragraph);
  }

  displayQuestion();
  nivelTwo();
}

nivelOne();
