// События Native JS. Классная работа
// ! Все HTML элементы которыми нужно манипулировать пропишите отдельно в файле index.html

// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;
const colorDiv = document.getElementById("colorDiv");

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "r":
      colorDiv.style.backgroundColor = "red";
      break;
    case "g":
      colorDiv.style.backgroundColor = "green";
      break;
    case "b":
      colorDiv.style.backgroundColor = "blue";
      break;
    case "w":
      colorDiv.style.backgroundColor = "white";
      break;
    case "B":
      if (event.shiftKey) {
        colorDiv.style.backgroundColor = "black";
      }
      break;
    case "G":
      if (event.shiftKey) {
        colorDiv.style.backgroundColor = "gray";
      }
      break;
  }
});
// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;
let i = 0;
document.getElementById("em");
em.addEventListener("click", function () {
  console.log(i);
  i *= 2;
});

// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;
// Находим div по его id
let newDiv = document.getElementById("newDiv");
newDiv.addEventListener("click", function (elem) {
  let x = elem.offsetX;
  let y = elem.offsetY;
  console.log(`Позиция: (${x}, ${y})`);
});

// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута

let inp2 = document.getElementById("inp2");
inp2.addEventListener("input", function () {
  document.body.style.backgroundColor = inp2.value;
});
