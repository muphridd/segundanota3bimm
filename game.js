let gameState = {
    lastStep: "start",
    hp: 100,
    items: [],
    decisions: {
      helpedGuerreiras: false,
      usedMusicBox: false,
      darienSaved: false,
    },
    history: [],
  };
  
  const story = {
    start: {
      text: "Sailor Moon se aproxima do Reino Escuro. Rainha Beryl transporta-a em uma redoma de energia até o interior de seu palácio. Ela apresenta Endymion como seu novo servo, e o ordena que a mate. O que você faz?",
      choices: [
        {
          text: "Tentar usar a Cura Lunar em Endymion",
          nextStep: "curaLunar",
          damage: 0,
        },
        {
          text: "Tentar fugir e derrotar Beryl",
          nextStep: "fugir",
          damage: 10,
        },
      ],
    },
    curaLunar: {
      text: "Você tenta usar a Cura Lunar, mas não consegue trazer Endymion de volta. Darien começa a atacá-la severamente, mas a situação parece descontrolada. O que você faz agora?",
      choices: [
        {
          text: "Tentar mais uma vez com a caixa de música",
          nextStep: "caixaMusica",
          damage: 5,
        },
        {
          text: "Fugir e buscar ajuda",
          nextStep: "fugirBuscaAjuda",
          damage: 10,
        },
      ],
    },
    caixaMusica: {
      text: "Você decide usar a caixa de música novamente, mas algo diferente acontece. A música parece ter um efeito contraditório em Endymion. O que você faz agora?",
      choices: [
        {
          text: "Tentar forçar a música, apesar da resistência de Endymion",
          nextStep: "caixaMusicaFalha",
          damage: 15,
        },
        {
          text: "Desistir da caixa e tentar outra abordagem",
          nextStep: "desistirCaixaMusica",
          damage: 0,
        },
      ],
    },
    desistirCaixaMusica: {
      text: "Você decide desistir da caixa de música, já que ela não está funcionando. Você tenta uma abordagem diferente. O que você faz agora?",
      choices: [
        {
          text: "Tentar usar a Cura Lunar novamente",
          nextStep: "curaLunar",
          damage: 0,
        },
        {
          text: "Fugir e buscar ajuda",
          nextStep: "fugirBuscaAjuda",
          damage: 10,
        },
      ],
    },
    caixaMusicaFalha: {
      text: "Endymion resiste com todas as suas forças. Ele ataca com mais ferocidade. A caixa de música parece ter o efeito oposto, e a situação está ficando cada vez mais difícil.",
      choices: [
        { text: "Lutar até o fim", nextStep: "lutar", damage: 20 },
        {
          text: "Fugir para buscar mais ajuda",
          nextStep: "fugirBuscaAjuda",
          damage: 10,
        },
        {
          text: "Tentar usar um feitiço de cura",
          nextStep: "usarCura",
          damage: 0,
        },
      ],
    },
    lutar: {
      text: "Você decide lutar até o fim. A batalha está intensa, e Endymion parece cada vez mais furioso. Você deve agir rápido!",
      choices: [
        {
          text: "Usar o poder do Cristal de Prata",
          nextStep: "vitoriaFinal",
          damage: 30,
        },
        {
          text: "Lutar fisicamente contra Endymion",
          nextStep: "batalhaFisica",
          damage: 20,
        },
      ],
    },
    batalhaFisica: {
      text: "A luta física é exaustiva e difícil. Você precisa de mais força ou talvez uma estratégia mágica. Endymion está mais forte que o esperado.",
      choices: [
        {
          text: "Usar a magia do Cristal de Prata",
          nextStep: "vitoriaFinal",
          damage: 50,
        },
        {
          text: "Lutar com mais força física",
          nextStep: "batalhaFisicaProlongada",
          damage: 40,
        },
      ],
    },
    batalhaFisicaProlongada: {
      text: "O cansaço toma conta. A batalha prolongada está custando caro. Se não tomar uma decisão rápida, pode não resistir.",
      choices: [
        {
          text: "Fugir e tentar uma nova abordagem",
          nextStep: "fugir",
          damage: 0,
        },
        {
          text: "Usar a energia de Lua para um ataque final",
          nextStep: "ataqueFinal",
          damage: 50,
        },
      ],
    },
    ataqueFinal: {
      text: "Com um último esforço, você canaliza o poder da Lua para um ataque final, derrotando Endymion com um golpe devastador.",
      choices: [
        {
          text: "Avançar para enfrentar Beryl",
          nextStep: "finalBeryl",
          damage: 0,
        },
      ],
    },
    fugir: {
      text: "Você tenta fugir da batalha, mas a situação não facilita. A fuga não é fácil, e você se encontra em uma nova área do palácio.",
      choices: [
        {
          text: "Tentar buscar ajuda com as guerreiras",
          nextStep: "fugirBuscaAjuda",
          damage: 5,
        },
        {
          text: "Usar uma magia de teleporte para escapar",
          nextStep: "teleporte",
          damage: 10,
        },
      ],
    },
    teleporte: {
      text: "Você usa uma poderosa magia de teleporte para tentar escapar. Porém, a magia não sai como esperado, e você se encontra em um lugar perigoso.",
      choices: [
        {
          text: "Tentar usar a Cura Lunar",
          nextStep: "curaLunarFalha",
          damage: 5,
        },
        {
          text: "Fugir novamente em busca de mais ajuda",
          nextStep: "fugirBuscaAjuda",
          damage: 10,
        },
      ],
    },
    fugirBuscaAjuda: {
      text: "Você decide fugir e buscar ajuda. Você se esconde em um local seguro enquanto pensa nas opções. O que você faz agora?",
      choices: [
        {
          text: "Voltar para enfrentar Endymion",
          nextStep: "enfrentarEndymion",
          damage: 0,
        },
        {
          text: "Procurar por mais aliados nas sombras do palácio",
          nextStep: "aliadosNaSombra",
          damage: 0,
        },
      ],
    },
    aliadosNaSombra: {
      text: "Você encontra as guerreiras, que estavam se preparando para um ataque. Elas se oferecem para ajudá-la, mas há uma condição: vocês precisarão enfrentar juntas as forças de Beryl.",
      choices: [
        {
          text: "Aceitar a ajuda das guerreiras e atacar Beryl",
          nextStep: "finalBeryl",
          damage: 20,
        },
        {
          text: "Recusar a ajuda e tentar fugir novamente",
          nextStep: "fugir",
          damage: 10,
        },
      ],
    },
    enfrentarEndymion: {
      text: "Você retorna para enfrentar Endymion mais uma vez. Ele está mais enfurecido, mas parece que você tem mais chances agora com sua nova força. O que você faz?",
      choices: [
        {
          text: "Usar a magia do Cristal de Prata",
          nextStep: "vitoriaFinal",
          damage: 30,
        },
        {
          text: "Lutar fisicamente",
          nextStep: "batalhaFisica",
          damage: 20,
        },
      ],
    },
    finalBeryl: {
      text: "Você aproveita a abertura e tenta atacar Beryl com todas as suas forças! A batalha decisiva começa.",
      choices: [
        {
          text: "Usar a magia do Cristal de Prata",
          nextStep: "vitoriaFinal",
          damage: 50,
        },
        {
          text: "Lutar fisicamente",
          nextStep: "batalhaFisica",
          damage: 20,
        },
      ],
    },
    vitoriaFinal: {
      text: "Você derrotou Beryl com uma poderosa magia! O Reino Escuro começa a desmoronar, e a paz é restaurada. Você venceu!",
      choices: [
        {
          text: "Jogar novamente",
          nextStep: "start",
          damage: 0,
        },
      ],
    },
  };
  
  function renderStory(step) {
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");
    const hpDisplay = document.getElementById("hp");
    const backButtonDiv = document.getElementById("back-button");
    const gameOverDiv = document.getElementById("game-over");
  
    // Exibir o texto da história atual
    storyText.innerHTML = story[step].text;
  
    // Mostrar as opções de escolha
    choicesDiv.innerHTML = "";
    story[step].choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => {
        makeChoice(choice.nextStep, choice.damage);
      };
      choicesDiv.appendChild(button);
    });
  
    // Exibir o HP
    hpDisplay.textContent = "HP: " + gameState.hp;
  
    // Se o jogador chegou ao final
    if (gameState.hp <= 0) {
      endGame();
    }
  }
  
  function makeChoice(nextStep, damage) {
    gameState.history.push(gameState.lastStep);
    gameState.lastStep = nextStep;
    gameState.hp -= damage;
  
    renderStory(nextStep);
  }
  
  function endGame() {
    const gameOverDiv = document.getElementById("game-over");
    const pathDiv = document.createElement("div");
  
    // Mostra a mensagem de fim de jogo
    gameOverDiv.innerHTML = "<h2>Fim de Jogo! Seu HP acabou!</h2>";
  
    // Adiciona o caminho realizado
    let pathText = "<h3>Caminho realizado:</h3><ul>";
    gameState.history.forEach((step, index) => {
      const stepName = story[step]?.text || "Passo desconhecido";
      pathText += `<li>Escolha ${index + 1}: ${stepName}</li>`;
    });
    pathText += "</ul>";
  
    pathDiv.innerHTML = pathText;
    gameOverDiv.appendChild(pathDiv);
  
    // Botão para reiniciar o jogo
    gameOverDiv.innerHTML +=
      '<button onclick="resetGame()">Jogar Novamente</button>';
  
    // Exibe o game over e esconde as escolhas
    gameOverDiv.style.display = "block";
    document.getElementById("choices").style.display = "none";
  }
  
  function resetGame() {
    gameState = {
      lastStep: "start",
      hp: 100,
      items: [],
      decisions: {
        helpedGuerreiras: false,
        usedMusicBox: false,
        darienSaved: false,
      },
      history: [],
    };
  
    const gameOverDiv = document.getElementById("game-over");
    gameOverDiv.style.display = "none";
    document.getElementById("choices").style.display = "block";
  
    renderStory("start");
  }
  
  // Começar o jogo
  renderStory("start");
  
