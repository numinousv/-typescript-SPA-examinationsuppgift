import snowWidget from "../../components/snowWidget/snowWidget";
import "./countdown.css";

//Talar om för TS hur datan från API:et kommer att se ut
type TimeleftTotalResponse = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
//Skapar ett element kallad för Countdown
export default function countdown(): HTMLElement {
  const section = document.createElement("section");
  section.classList.add("countdown-container");

  section.innerHTML = `
     <div class="backdrop-blur-md bg-gray-900/60 p-10 rounded-4xl shadow-2xl max-w-2xl text-center">
        <h1 class="font-[Great_Vibes] text-5xl mb-4">🎅 Countdown till julafton 🎄</h1>
        <div id="timer" class="font-[Great_Vibes]">
            <div><span id="days">00</span><p>Dagar</p></div>
            <div><span id="hours">00</span><p>Timmar</p></div>
            <div><span id="minutes">00</span><p>Minuter</p></div>
            <div><span id="seconds">00</span><p>Sekunder</p></div>
        </div>
        </div>
    `;
//Letar efter rätt HTML-tagg där siffrorna ska skrivas
  const daysEl = section.querySelector<HTMLSpanElement>("#days");
  const hoursEl = section.querySelector<HTMLSpanElement>("#hours");
  const minutesEl = section.querySelector<HTMLSpanElement>("#minutes");
  const secondsEl = section.querySelector<HTMLSpanElement>("#seconds");

//skapar en variabel som håller antalet sekudner kvar, dn börjar på null
    let remainingSeconds: number | null = null;
//hämtar api:et
    async function fetchFromApi(): Promise<void> {
      try{
        const res = await fetch(
          "https://christmascountdown.live/api/timeleft/total?timezone=Europe/Stockholm"
        );
      if (!res.ok) {
        console.error("Kunde inte hämta data", res.status);
        return;
      }
      //Gör om svaret till ett objekt som sen räknar ner allt till sekunder
      const data = (await res.json()) as TimeleftTotalResponse;
      remainingSeconds = 
      data.days * 24 * 60 * 60 +
      data.hours * 60 * 60 +
      data.minutes * 60 +
      data.seconds;

      //uppdaterar direkt i DOM
      updateDisplay(data.days, data.hours, data.minutes, data.seconds);
      } catch (error) {
        console.error("Fel vid hämtning", error);
      }
    }

    function updateDisplay(
      days: number,
      hours: number,
      minutes: number,
      seconds: number
    ): void {
      if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
      daysEl.textContent = days.toString();
      hoursEl.textContent = hours.toString().padStart(2, "0");
      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");
    }
//Om tiden inte har något värde än eller slut så stoppar den
    function tick(): void {
      if (remainingSeconds === null || remainingSeconds <= 0) return;
//Minskar med en 1 
      remainingSeconds -= 1;
//räknar om tillbaka till gamla värden som visas på sidan
    const days = Math.floor(remainingSeconds / (24 * 60 *60));
    const hours = Math.floor((remainingSeconds  / ( 60 * 60)) % 24);
    const minutes = Math.floor((remainingSeconds  /  60) % 60);
    const seconds = Math.floor(remainingSeconds  % 60);

    updateDisplay(days, hours, minutes, seconds);
  
  }
fetchFromApi();
function blablabla() {
 window.setInterval(tick, 1000); //körs varje sek
 window.setInterval(fetchFromApi, 60_000);//körs varje min
return;
}
  blablabla();
  
  section.prepend(snowWidget())

  return section;
}
