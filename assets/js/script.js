const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector("#btn2");
const btnAll = document.querySelectorAll(".btn");

console.log("Task1");
let res = "\n";

for (let i = 0; i < 3; i++) {
  res += "\n -";
}
console.log(res);
console.log("--------------------------------------------");
console.log("Task2");
let i = 1,
  limit = prompt("Task2 Введите кол-во повторений"),
  res2 = "\n";
while (i <= limit) {
  res2 += "\n - ";
  i++;
}
console.log(res2);
console.log("--------------------------------------------");
console.log("Task3");

function dash() {
  let lim1 = 1,
    lim2 = prompt("Task3 Введите кол-во повторений"),
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
dash2(prompt("Task3-2 Введите кол-во повторений"));

console.log("--------------------------------------------");

console.log("Task4");

let AddNumbers = function () {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  return a + b;
};
console.log(AddNumbers());

console.log("--------------------------------------------");

function SubNumbers() {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  res = a - b;
  console.log(res);
}

btn2.addEventListener("click", SubNumbers);

console.log("--------------------------------------------");

function MultNumbers() {
  let a = Number(prompt("Введите число a")),
    b = Number(prompt("Введите число b"));
  res = a * b;
  console.log(res);
}

btnAll[0].addEventListener("click", MultNumbers);

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

btnAll[1].addEventListener("click", DivNumbers);

console.log("--------------------------------------------");

console.log("Task5");

function getNumber() {
  let num = prompt("Введите число");

  while (num >= 0) {
    console.log(num);
    num--;
  }
}
btnAll[2].addEventListener("click", getNumber);

console.log("--------------------------------------------");

console.log("Task5-2");

btnAll[3].addEventListener("click", () => {
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
    i /= 2;
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
    : console.log(Math.round(userNumber % 11) * 11);
}
closestNum(prompt("Введите X"));

console.log("Task8-2");

let getClosestNum = (a, b, x = Math.trunc(a / b)) => {
  if (a >= b) {
    if (!(a % b)) return a;
    return b * (x + 1) - a < a - b * x ? b * (x + 1) : b * x;
  }
  return "Некорректный ввод данных";
};

console.log(
  getClosestNum(
    prompt("Task8 Введите первое число"),
    prompt("Task8 Введите второе число")
  )
);
