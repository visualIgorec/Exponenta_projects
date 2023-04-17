const engineBtn1 = document.querySelector("#engine-btn1");
const engineBtn2 = document.querySelector("#engine-btn2");
const engineBtn3 = document.querySelector("#engine-btn3");
const engineBtn4 = document.querySelector("#engine-btn4");

const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");

// activation dropdown menu
selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

//engineBtn1
engineBtn1.addEventListener("click", () => {
  fetch("./src/html_pages/equip_1/statInfo_1.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("main").innerHTML = text));

  fetch("./src/html_pages/equip_1/statRightSide_1.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("right-main").innerHTML = text));
});

//engineBtn2
engineBtn2.addEventListener("click", () => {
  fetch("./src/html_pages/equip_2/statInfo_2.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("main").innerHTML = text));

  fetch("./src/html_pages/equip_2/statRightSide_2.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("right-main").innerHTML = text));
});

//engineBtn3
engineBtn3.addEventListener("click", () => {
  fetch("./src/html_pages/equip_3/statInfo_3.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("main").innerHTML = text));

  fetch("./src/html_pages/equip_3/statRightSide_3.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("right-main").innerHTML = text));
});

//engineBtn4
engineBtn4.addEventListener("click", () => {
  fetch("./src/html_pages/equip_4/statInfo_4.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("main").innerHTML = text));

  fetch("./src/html_pages/equip_4/statRightSide_4.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("right-main").innerHTML = text));
});
