
import {
    cards,
    openedCardsNumbers,
    saveOpenedCardNumber
} from '../../components/cards'
import createPopup from '../../components/popup/popup'
import snowWidget from '../../components/snowWidget/snowWidget'

export default function home():HTMLElement {
    //skapar ett element med class 'home'
    const home = document.createElement('section')
    home.classList.add('home')

    //skapar ett nytt element med class 'grid'
    const gridEl = document.createElement('div')
    gridEl.classList.add('grid')

    //loopar genom cards
    cards.forEach((card) => {
        //nytt element <button> med 2 class
        const box = document.createElement('button')
        box.classList.add('grid__item', `grid__item_${card.number}`)

        //fyller elementet med innerHTML
        box.innerHTML = `
         <span class="grid__item-number">
            ${card.number}
        </span>
        `

        if (openedCardsNumbers.includes(card.number)) {
            renderBox(box, card.imageUrl)
        }

        //event listener för varje knapp; hämtar vädren
        // från rätt kort och använder dem som argument
        // till popup funktionen för att skapa ett popup-element.
        // öppnar popup
        box.addEventListener('click', () => {
            if (!box.classList.contains('grid__item_opened')) {
                saveOpenedCardNumber(card.number)
                renderBox(box, card.imageUrl)
            }

            const { popup, openPopup } = createPopup(
                card.imageUrl,
                card.text
            )
            home.append(popup)
            openPopup()
        })

        //lägger in ett färdigt element i grid-elementet
        gridEl.appendChild(box)
    })

    function renderBox(b: HTMLElement, image: string):void {
        b.classList.add('grid__item_opened')
        b.style.backgroundImage = `url('${image}')`
    }

    //lägger in ett grid-element med 24 stycken children i home-elementet
    home.append(gridEl)

    return home


}
