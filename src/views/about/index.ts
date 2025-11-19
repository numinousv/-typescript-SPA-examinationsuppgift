export default function about() {
  const about = document.createElement("div");
  about.classList.add("about", "flex", "justify-center", "items-center", "min-h-screen");

  about.innerHTML = `
    <div class="backdrop-blur-md bg-gray-900/60 p-10 rounded-4xl shadow-2xl max-w-2xl text-center">
      <h1 class="font-[Great_Vibes] text-5xl mb-4">About the calendar</h1>
      <p class="text-lg text-gray-100 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
   <img src="/anteaters-3.png" class="mx-auto rounded-2xl shadow-lg m-6">
        <p class="text-lg text-gray-100 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
    </div>
  `;

  return about;
}
