/*
Memory Game
JavaScript file
By Ulysse Valdenaire
21/08/20251
*/

document.addEventListener("DOMContentLoaded", () => {

  // Array with the names and the path of the cards
  const cardArray = [
    {
      name: "atom",
      img: "assets/atom.png",
    },
    {
      name: "atom",
      img: "assets/atom.png",
    },
    {
      name: "codeblock",
      img: "assets/codeblock.png",
    },
    {
      name: "codeblock",
      img: "assets/codeblock.png",
    },
    {
      name: "discord",
      img: "assets/discord.png",
    },
    {
      name: "discord",
      img: "assets/discord.png",
    },
    {
      name: "folder",
      img: "assets/folder.png",
    },
    {
      name: "folder",
      img: "assets/folder.png",
    },
    {
      name: "mozilla",
      img: "assets/mozilla.png",
    },
    {
      name: "mozilla",
      img: "assets/mozilla.png",
    },
    {
      name: "python",
      img: "assets/python.png",
    },
    {
      name: "python",
      img: "assets/python.png",
    },
    {
      name: "steam",
      img: "assets/steam.png",
    },
    {
      name: "steam",
      img: "assets/steam.png",
    },
    {
      name: "vscode",
      img: "assets/vscode.png",
    },
    {
      name: "vscode",
      img: "assets/vscode.png",
    },
  ];


  //Function to random the board
  cardArray.sort(()=>0.5 - Math.random())

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create the board
  function createrBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "assets/vscode.png");
      card.setAttribute("id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for match between two cards
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match !");
      cards[optionOneId].setAttribute("src", "assets/python.png");
      cards[optionTwoId].setAttribute("src", "assets/python.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "assets/vscode.png");
      cards[optionTwoId].setAttribute("src", "assets/vscode.png");
      alert(" Sorry Try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations !";
    }
  }

  //flip the card
  function flipCard() {
    let cardId = this.getAttribute("id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosen);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createrBoard();

});
