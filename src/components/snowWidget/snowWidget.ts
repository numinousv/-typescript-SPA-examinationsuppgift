export default function snowWidget() {
  const widget = document.createElement("div");
  widget.id = "snow-widget";

  widget.innerHTML = `
    <div id="snow-status" style="font-size: 22px; margin-bottom: 8px;">Checking...</div>
    <div id="snow-sub" style="color: #555; font-size: 14px;">Getting your location...</div>
    <div id="snow-animation" class="snowflakes" style="display: none;"></div>
  `;

  interface ForecastResponse {
    hourly?: {
      snowfall?: number[];
    };
  }

  function getPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async function willItSnowToday(): Promise<boolean> {
    const position = await getPosition();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=snowfall&forecast_days=1`;

    const res = await fetch(url);
    const data = (await res.json()) as ForecastResponse;

    const snowfall = data.hourly?.snowfall ?? [];
    return snowfall.some((amount: number) => amount > 0);
  }

  function startSnowAnimation() {
    const container = widget.querySelector("#snow-animation") as HTMLDivElement;
    if (!container) return;

    container.style.display = "block";

    for (let i = 0; i < 30; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.innerText = "❄";

      flake.style.left = `${Math.random() * 100}%`;
      flake.style.fontSize = `${12 + Math.random() * 12}px`;
      flake.style.animationDuration = `${4 + Math.random() * 6}s`;
      flake.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(flake);
    }
  }

  async function initWidget() {
    const status = widget.querySelector("#snow-status") as HTMLDivElement;
    const sub = widget.querySelector("#snow-sub") as HTMLDivElement;

    try {
      sub.innerText = "Fetching weather forecast...";
      const snow = await willItSnowToday();

      if (snow) {
        status.innerText = `❄️ Yes, it will snow!`;
        sub.innerText = `Santa's on his way`;
        startSnowAnimation();
      } else {
        status.innerText = `😕 No chance for snow today`;
        sub.innerText = `Santa won't come!`;
      }
    } catch {
      status.innerText = `☁️ Unable to check weather`;
      sub.innerText = "Location or API error";
    }
  }

  initWidget();

  return widget;
}
