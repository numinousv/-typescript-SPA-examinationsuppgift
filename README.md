# 🤖 JavaScript & TypeScript i praktiken - (E1) Modulär TypeScript-applikation

Uppgiften går ut på att bygga en webbapplikation baserad på ett flertal mindre moduler. Det vill säga att den består av många små "byggstenar" som är uppdelade i sina egna filer och mappar men tillsammans bildar en och samma applikation.

## 📦 Leverabler

Applikationen ska redovisas fullt fungerande i webbläsaren tillsammans med sin källkod.

## 👨‍⚖️ Krav

### Projektet ska

- **använda en bundler**
  - Förslagsvis en bundler ni har jobbat med tidigare.
- **vara skrivet i TypeScript**
  - Utnyttja alla verktyg som finns i din IDE för att hantera typing errors och varningar. Undvik överdrivet bruk av casting.
- **ha en städad och lättnavigerad mapp- och filstruktur**
  - Jobba utifrån perspektivet att en utomstående person enkelt ska kunna förstå och jobba vidare med projektet i framtiden.
- **bestå av ett flertal komponenter och views**
  - Mer detaljerad information om detta finns nedan.
- **utnyttja state och omrendering vid något tillfälle**
  - Det ska finnas state-variabler, antingen direkt i tillhörande moduler eller i en globalt tillgänglig store. När en state-variabels värde uppdateras ska sidan/modulen renderas om för att demonstrera det uppdaterade värdet. Utan detta förblir sidan statisk.
- **innehålla någon form av interaktivitet**
  - Blanda statiska och dynamiska filer. Experimentera med båda koncepten och injecera JavaScript-logik där det behövs. Det är inget fel i att bygga en app helt utan statiska sidor om det visar sig vara bäst. Uppgiftens huvudfokus är JavaScript. Rå HTML är ni redan välbekanta med.
- **hämta data från ett API**
  - Förslag på public APIs finns överallt på nätet, i [js--fetch-intro](https://github.com/chas-academy/js--fetch-intro) eller längst ned i [Frontendresurser](https://www.notion.so/chasacademy/Frontend-250d1037d091808e8f5be682f4afbefb).
- **kunna komplieras till JavaScript och byggas**
  - Appen ska i praktiken kunna deployas och fungera i en live-miljö. Deployment kommer inte att vara en del av uppgiften, men TypeScript och bundlern ska kunna bygga en `dist`-mapp med alla relevanta filer.

### Övriga krav

- **Alla gruppmedlemmar ska ha pushat commits**
  - Fördela ansvaret för versionshantering så jämnt som möjligt. Byt person som utför git-kommandon vid varje arbetstillfälle. Det är starkt rekommenderat att jobba med branches, pull requests och code reviews för att få övning i det. Läs mer om riktlinjerna kring grupparbete i Canvas vid oklarheter.
- **En del av applikationen (Förslagsvis en view, page eller ett flertal components) ska byggas eller refaktoreras av AI**
  - Tillvägagångssättet och era reflektioner kring detta ska redovisas tillsammans med applikationen.

## 🦮 Riktlinjer

Ett tips är att hålla projektet relativt småskaligt och sedan bygga vidare i mån av tid. Ni har fria händer när det kommer till _vad_ som ska byggas, så länge det följer riktlinjerna nedan:

- **4-5 views**
  - En view kan vara en header, footer, ett formulär m.m.
- **4-5 components**
  - Components är betydligt mindre, återanvändbara moduler - Knappar, input-fält, ui-element m.m. - och bör gå att injecera med olika properties. Oftast i form av funktioner som tar argument.
  - Sikta på att göra era komponenter så återanvändbara som möjligt. Försök att undgå att skräddarsy dem med logik för specifika utfall. Detta kan man isåfall göra i en "wrapper" som är en egen fil som omsluter komponenten.
- **Pages**
  - Att strukturera ett projekt är alltid i någon mån subjektivt. Det kan hända att pages inte behövs i det här fallet. En page fungerar som en wrapper för både views och components. En page skulle t.ex. kunna vara en "Kontakt"-sida som innehåller både en view i form av ett kontaktformulär tillsammans med diverse olika komponenter. En större modul som delvis består av andra moduler.

### _Det är fullt tillåtet och rekommenderat att återanvända saker från SPA-uppgiften. Ni kan t.o.m. göra en fork, lägga till TypeScript-konfiguration, konvertera alla `.js`-filer till `.ts` och jobba vidare därifrån._

## 👩‍💻 Att konfigurera TypeScript

Det finns i huvudsak två tillvägagångssätt, båda med sina egna för- och nackdelar.

1. Konfigurera TypeScript i ett redan existerande projekt

   1. Följ de relevanta stegen i guiden i [ts--intro](https://github.com/chas-academy/js--fetch-intro) - Installera dev dependencyn och sätt upp skriptet. Om ni väljer att initiera TypeScript eller skapa en `tsconfig.json`-fil manuellt och klistra in kodstycket från guiden är valfritt - Kodstycket kommer från Vite och ert projekt är sannolikt byggt med Vite.
   2. Konvertera alla `.js`-filer till `.ts`.
   3. Lägg till skriptet `"build": "tsc && vite build"` i `package.json`för att kunna bygga en deploybar version av appen.

2. Skapa ett nytt projekt med en bundler utifrån en TypeScript template
   - Förslagsvis `npm create vite@latest ersätt-med-appens-namn-utan-mellanrum -- --template vanilla-ts`.

### Kör `npx tsc` eller `npm run dev` för att upptäcka återstående ts errors
