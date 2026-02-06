const opnbtn = document.getElementById("opnbtn");
const navactive = document.getElementById("navclose");
opnbtn.onclick = function () {
  const icon = opnbtn.querySelector("i");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
    navactive.classList.replace("navclose", "navactive");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
    navactive.classList.replace("navactive", "navclose");
  }
};
