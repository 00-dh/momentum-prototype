const h1 = document.querySelector("#hello h1");

function handleMouseEnter() {
  const clickedClassName = "active";
  if (h1.classList.contains(clickedClassName)) {
    h1.classList.remove(clickedClassName);
  } else {
    h1.classList.add(clickedClassName);
  }
}

h1.addEventListener("click", handleMouseEnter);
