import "./countdown.css";

export default function countdown() {
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

const daysEl = section.querySelector("#days");
const hoursEl = section.querySelector("#hours");
const minutesEl = section.querySelector("#minutes");
const secondsEl = section.querySelector("#seconds");

function updateCountdown(){
const now = new Date();
const christmas = new Date(now.getFullYear(), 11, 24);
if (now > christmas) {
    christmas.setFullYear(now.getFullYear() + 1);
}
const diff = christmas - now;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

daysEl.textContent = days;
hoursEl.textContent = hours.toString().padStart(2, "0");
minutesEl.textContent = minutes.toString().padStart(2, "0");
secondsEl.textContent = seconds.toString().padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

return section;
}
