export default function createPopup(imageLink: string, altText: string) {
    const popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `

         <div class="popup__image-container">
            <div class="popup__inner-container">
            <img class="popup__image" src="${imageLink}" alt="${altText}" />
        </div>
        <button class="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    `

    function openPopup(): void {
        requestAnimationFrame(() => {
            popup.classList.add('popup_opened')
        })
        document.addEventListener('keydown', closePopupOnEscape)
    }

    function closePopupOnEscape(evt: KeyboardEvent): void {
        if (evt.key === 'Escape') {
            const p: HTMLElement | null = document.querySelector('.popup_opened')
            p && closePopup()
        }
    }

    function closePopup(): void {
        requestAnimationFrame(() => {
            popup.classList.remove('popup_opened')
        })
        popup.addEventListener('transitionend', () => {
            popup.remove()
        })

        document.removeEventListener('keydown', closePopupOnEscape)
    }

    const closeBtn: HTMLElement | null = popup.querySelector('.popup__close-button')


    if (closeBtn) {
    closeBtn.addEventListener('click', closePopup)
    }

    return { popup, openPopup }
}
