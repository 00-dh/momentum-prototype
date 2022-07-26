const title = document.querySelector("#hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

title.onclick = handleTitleClick;

function mouseEnter() {
  title.innerText = "mouse is here";
}

function mouseLeave() {
  title.innerText = "mouse is gone";
}

title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);
