// global css
import "./style.css";
// övrig css

//denna css import behövs inte, css filen kommer tas bort senare används tailwind istället.
// import "./views/static/header/header.css";

// statiska sidor
// måste referera till den specifika .html-filen pga "?raw"-suffixet
import header from "./views/header/header";
import home from "./views/home/home";
import footerHTML from "./views/static/footer/footer.html?raw";
import about from "./views/about/index";
import countdown from "./views/countdown/countdown";

// en funktion för att rendera olika sidor baserat på webbläsarens "path"
// för att ändra pathen kan du t.ex. skapa en anchor tag med href="/home"
// "/home" kommer då att läggas till i url:en
const getCurrentPage = () => {
  const currentPage = window.location.pathname;

  switch (currentPage) {
    case "/home":
      return home();
    // lägg tillbaka när vi har en funktion i /about
    case "/about":
      return about();
    case "/countdown":
      return countdown();
    default:
      return (window.location.pathname = "/home");
  }
};

const app = document.querySelector("#app")!;
// funktionen som renderar appen. kommer behöva köras om varje gång sidan ska omrenderas
// detta är grunden i hur man gör statiska html-sidor till interaktiva applikationer
const renderApp = () => {
  const currentPage = getCurrentPage();
  if (typeof currentPage === "string") {
    app.innerHTML = `
      ${header()}
      ${currentPage}
      ${footerHTML}
    `;
  } else {
    app.innerHTML = `
        ${header()}
        ${footerHTML}
        `;
    // footer är en js-fil som returnerar en template string med html-element.
    // ett mellanting mellan statisk och dynamisk

    // currentPage är i det här fallet ett objekt innehållande HTML-element
    // något i stil med document.createElement("div")
    app.insertBefore(currentPage, app.querySelector("footer"));
  }
};

// initial render
renderApp();

//rerender logic
// en eventListner som lyssnar på ändringar i URL:ens historik
window.addEventListener("popstate", renderApp);

//Dark Mode Toggle Button Logik
const themeToggle = document.querySelector("#theme-toggle")!;
themeToggle.textContent = "🌙";

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  themeToggle.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  themeToggle.classList.toggle("dark-mode");

  themeToggle.textContent = themeToggle.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
  document.documentElement.classList.toggle("dark");

  const theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});