console.log("Task1");
let res = "\n";

for (let i = 0; i < 3; i++) {
  res += "\n -";
}
console.log(res);
console.log("--------------------------------------------");
console.log("Task2");
let i = 1,
  limit = prompt("Введите кол-во повторений"),
  res2 = "\n";
while (i <= limit) {
  res2 += "\n - ";
  i++;
}
console.log(res2);
console.log("--------------------------------------------");
console.log("Task3");
const btn1 = document.getElementById("btn1");

function dash() {
  let lim1 = 1,
    lim2 = prompt("Введите кол-во повторений"),
    res3 = "\n";
  while (lim1 <= lim2) {
    res3 += "\n - ";
    lim1++;
  }
  console.log(res3);
}

btn1.onclick = dash;

console.log("--------------------------------------------");

console.log("Task3-2");

function dash2(lim1, lim2 = 1) {
  let res4 = "\n";
  while (lim1 >= lim2) {
    res4 += "\n * ";
    lim1--;
  }
  console.log(res4);
}
dash2(prompt('"Введите кол-во повторений"'));

console.log("--------------------------------------------");

console.log("Task4");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

function AddNumbers() {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  res = a + b;
  console.log(res);
}
btn2.addEventListener("click", AddNumbers);

console.log("--------------------------------------------");

function SubNumbers() {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  res = a - b;
  console.log(res);
}

btn3.addEventListener("click", SubNumbers);

console.log("--------------------------------------------");

function MultNumbers() {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  res = a * b;
  console.log(res);
}

btn4.addEventListener("click", MultNumbers);

console.log("--------------------------------------------");

function DivNumbers() {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  res = a / b;
  if (b === 0) {
    console.log("На 0 делить нельзя");
  } else {
    console.log(res);
  }
}

btn5.addEventListener("click", DivNumbers);

console.log("--------------------------------------------");

console.log("Task5");
const btn6 = document.getElementById("btn6");

function getNumkber() {
  let num = prompt("Введите число");

  while (num >= 0) {
    console.log(num);
    num--;
  }
}
btn6.addEventListener("click", getNumkber);

console.log("--------------------------------------------");

console.log("Task5-2");
const btn7 = document.getElementById("btn7");

btn7.addEventListener("click", () => {
  let num = prompt("Введите число");

  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
});

console.log("--------------------------------------------");

console.log("Task6");

function pow(num1, num2) {
  let res = Math.pow(num1, num2);
  let symbol = Math.sign(num2);
  if (symbol == 0) {
    console.log("0 степень");
  } else if (symbol == -1) {
    console.log("Отрицательная степень");
  }
  console.log("Результат = " + res);
}
pow(prompt("Введите число"), prompt("Введите степень"));

console.log("--------------------------------------------");

console.log("Task7");

(function () {
  let count = 0,
    i = 1000;
  console.log(`Стартовое значение = ${i}`);
  do {
    i = i / 2;
    console.log(`делим на 2 , результат = ${i}`);
    count++;
  } while (i > 50);
  console.log(`Количество операций  = ${count}`);
})();

console.log("--------------------------------------------");

console.log("Task8");
function closestNum(userNumber) {
  userNumber < 11
    ? console.log("Некорректный ввод")
    : console.log(Math.round(userNumber / 11) * 11);
}
closestNum(prompt("Введите X"));

console.log("Task8-2");

let getClosestNum = (a, b, x = Math.trunc(a / b)) => {
  if (a > b) {
    if (!(a % b)) return a;
    return b * (x + 1) - a < a - b * x ? b * (x + 1) : b * x;
  }
  return "Некорректный ввод данных";
};

console.log(
  getClosestNum(prompt("Введите первое число"), prompt("Введите второе число "))
);
