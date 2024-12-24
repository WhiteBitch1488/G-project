const str1 = document.getElementById("1");
const str2 = document.getElementById("2");
const str3 = document.getElementById("3");
const body = document.querySelector("body");
const btn1 = document.getElementById("4");
const btn2 = document.getElementById("5");

btn1.addEventListener("click", () => {
  const name = prompt("Введите ваше имя");
  body.classList.add("pic");
  str1.classList.add("hidden");
  str1.classList.remove("show");
  str2.classList.add("show");
  str2.classList.remove("hidden");
  btn1.classList.add("hidden");
  btn2.classList.remove("hidden");
  btn2.classList.add("show");

  str2.querySelector("span").innerText = name;
});

btn2.addEventListener("click", () => {
  str2.classList.remove("show");
  str2.classList.add("hidden");
  str3.classList.remove("hidden");
  str3.classList.add("show");
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
});
