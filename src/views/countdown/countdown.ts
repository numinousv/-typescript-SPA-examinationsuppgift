import "./countdown.css";

type TimeleftTotalResponse = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

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

  const daysEl = section.querySelector<HTMLSpanElement>("#days");
  const hoursEl = section.querySelector<HTMLSpanElement>("#hours");
  const minutesEl = section.querySelector<HTMLSpanElement>("#minutes");
  const secondsEl = section.querySelector<HTMLSpanElement>("#seconds");


    let remainingSeconds: number | null = null;

    async function fetchFromApi(): Promise<void> {
      try{
        const res = await fetch(
          "https://christmascountdown.live/api/timeleft/total?timezone=Europe/Stockholm"
        );
      if (!res.ok) {
        console.error("Kunde inte hämta data", res.status);
        return;
      }
      const data = (await res.json()) as TimeleftTotalResponse;
      remainingSeconds = 
      data.days * 24 * 60 * 60 +
      data.hours * 60 * 60 +
      data.minutes * 60 +
      data.seconds;
      
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

    function tick(): void {
      if (remainingSeconds === null || remainingSeconds <= 0) return;

      remainingSeconds -= 1;
    
    const days = Math.floor(remainingSeconds / (24 * 60 *60));
    const hours = Math.floor((remainingSeconds  / ( 60 * 60)) % 24);
    const minutes = Math.floor((remainingSeconds  /  60) % 60);
    const seconds = Math.floor(remainingSeconds  % 60);

    updateDisplay(days, hours, minutes, seconds);
  
  }
fetchFromApi();
function blablabla() {
 window.setInterval(tick, 1000);
 window.setInterval(fetchFromApi, 60_000);
return;
}
blablabla();
  return section;
}
