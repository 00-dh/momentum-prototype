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

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copier");
}

title.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
  alert("SOS no wifi!");
}
function handleWindowOnline() {
  alert("ALL GOOD!");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
