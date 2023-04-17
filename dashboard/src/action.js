const homeBtn = document.querySelector("#home-btn");

homeBtn.addEventListener("click", () => {
  fetch("./src/html_pages/main/main.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("main").innerHTML = text));

  fetch("./src/html_pages/main/mainRightSide.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("right-main").innerHTML = text));
});
