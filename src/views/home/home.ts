import {
  cards,
  openedCardsNumbers,
  saveOpenedCardNumber,
  clearOpenedCardNumbers,
} from "../../components/cards";
import createPopup from "../../components/popup/popup";

export default function home(): HTMLElement {
  //skapar ett element med class 'home'
  const home = document.createElement("section");
  home.classList.add("home");
  const clearCardsBtn = document.createElement("button");
  clearCardsBtn.setAttribute("id", "clear-button");
  clearCardsBtn.innerText = `Close all boxes`;

  //Gör så att alla luckor är stängda från början
  if (!openedCardsNumbers.length) {
    clearCardsBtn.setAttribute("disabled", "disabled");
  }
//Kappen längst upp som stänger alla luckor
  clearCardsBtn.addEventListener("click", () => {
    closeAllBoxes();
    clearCardsBtn.setAttribute("disabled", "disabled");
    clearOpenedCardNumbers();
  });

  home.prepend(clearCardsBtn);

  //skapar ett nytt element med class 'grid'
  const gridEl = document.createElement("div");
  gridEl.classList.add("grid");

  const boxes: HTMLElement[] = [];

  // cards array som loopar och skapar buttons i varje lucka/card
  cards.forEach((card) => {
    //nytt element <button> med 2 class
    const box = document.createElement("button");
    box.classList.add("grid__item", `grid__item_${card.number}`);

    //fyller elementet med innerHTML
    box.innerHTML = `
         <span class="grid__item-number">
            ${card.number}
        </span>
        `;

    if (openedCardsNumbers.includes(card.number)) {
      renderBox(box, card.imageUrl);
    }

    //event listener för varje knapp; hämtar värden
    // från rätt kort och använder dem som argument
    // till popup funktionen för att skapa ett popup-element.
    // öppnar popup
    //SaveOpenedCardNumber är en funktion som importeras från cards.ts som sparar denna funktionen i localstorage
    // trycka på knappen sparar det i localstorage och skapar en popup window med bilderna och texten för luckorna.    
    box.addEventListener("click", () => {
      if (!box.classList.contains("grid__item_opened")) {
        saveOpenedCardNumber(card.number);
        renderBox(box, card.imageUrl);
      }

      const { popup, openPopup } = createPopup(card.imageUrl, card.text);
      home.append(popup);
      openPopup();

      clearCardsBtn.removeAttribute("disabled");
    });

    //lägger in ett färdigt element i grid-elementet
    gridEl.appendChild(box);
    boxes.push(box);
  });

  function renderBox(b: HTMLElement, image: string): void {
    b.classList.add("grid__item_opened");
    b.style.backgroundImage = `url('${image}')`;
  }

  function closeAllBoxes(): void {
    boxes.forEach((b) => {
      b.classList.remove("grid__item_opened");
      b.style.backgroundImage = "none";
    });
  }

  //lägger in ett grid-element med 24 stycken children i home-elementet
  home.append(gridEl);

  return home;
}
