import linkButton  from '../../components/linkButton'


export default function header (): string {
    return`<header class="header w-full bg-gray-700/95 text-white shadow-md fixed top-0 z-50">
        <div class="flex justify-around items-center py-2.5 px-6 backdrop-blur-md bg-gray-900/40">
         <h1 class="flex items-center gap-2 font-[Great_Vibes] italic text-2xl">
             <span>Christmas anxiety calendar</span>
        </h1>

        <nav class="flex gap-4">
            <button id="theme-toggle" class="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-500 transition fixed top-4 right-4">🌙</button>

            ${linkButton("Home", "/home")}
            ${linkButton("About", "/about")}
            ${linkButton("Countdown", "/countdown")}
        </nav>
  </div>
</header>`
}

