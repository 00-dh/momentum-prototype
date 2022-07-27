const h1 = document.querySelector("#hello h1");

function handleMouseEnter() {
  const clickedClassName = "active";
  h1.classList.toggle(clickedClassName);
}

h1.addEventListener("click", handleMouseEnter);
