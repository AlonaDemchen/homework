//Number: odd
const userInput = prompt("Введіть число:");
const number = parseInt(userInput);

if (isNaN(number)) {
  console.log("Ви ввели некоректне число.");
} else {
  if (number % 2 === 0) {
    console.log("Введене число є парним.");
  } else {
    console.log("Введене число є непарним.");
  }
}


//String: lexics
const userInput = prompt("Введіть текст:");
const badWords = ["поганий", "нецензурне слово", "некоректний"]; 

let foundBadWord = false;

for (let i = 0; i < badWords.length; i++) {
  if (userInput.indexOf(badWords[i]) !== -1) {
    foundBadWord = true;
    break;
  }
}

if (foundBadWord) {
  console.log("Текст містить некоректні слова.");
} else {
  console.log("Текст є коректним.");
}


//Boolean
const answer1 = confirm("Чи вам подобається погода?");
console.log("Відповідь на перше питання:", answer1);


//Boolean: if
const gender = confirm("Ви жінка?");

if (gender) {
  alert("Ви жінка");
} else {
  alert("Ви чоловік");
}



//Comparison: sizes
const size = prompt("Введіть розмір в нашій системі:");

let translatedSize;

if (size === "XS") {
  translatedSize = "44";
} else if (size === "S") {
  translatedSize = "46";
} else if (size === "M") {
  translatedSize = "48";
} else if (size === "L") {
  translatedSize = "50";
} else if (size === "XL") {
  translatedSize = "52";
} else {
  translatedSize = "Невідомий розмір";
}

alert(`Розмір у нашій системі: ${size}\nРозмір у системі розмірів одягу: ${translatedSize}`);



//Ternary
const isMale = confirm("Ви чоловік?");

const genderMessage = isMale ? "Ви чоловік" : "Ви жінка";
alert(genderMessage);



//Prompt: or
const age = prompt("Введіть свій вік:");

if (!age) {
  alert("Помилка: Вік не був введений або було натиснуто 'Скасувати'.");
}


//Confirm: or this days
confirm("Шопінг?") || alert("Ти - бяка");


//Confirm: if this days
if (!confirm("Шопінг?")) {
  alert("Ти - бяка");
}


//Default: or
let firstName = prompt("Введіть ім'я:") || "Іван";
let lastName = prompt("Введіть прізвище:") || "Іванов";
let middleName = prompt("Введіть по батькові:") || "Іванович";

console.log(`ПІБ: ${lastName} ${firstName} ${middleName}`);



//Default: if
let firstName = prompt("Введіть ім'я:");
if (!firstName) {
  firstName = "Іван";
}

let lastName = prompt("Введіть прізвище:");
if (!lastName) {
  lastName = "Іванов";
}

let middleName = prompt("Введіть по батькові:");
if (!middleName) {
  middleName = "Іванович";
}

console.log(`ПІБ: ${lastName} ${firstName} ${middleName}`);



//Login and password
let login = prompt("Введіть логін:");

if (login === "admin") {
  let password = prompt("Введіть пароль:");

  if (password === "qwerty") {
    alert("Логін успішний. Вітаємо!");
  } else {
    alert("Невірний пароль.");
  }
} else {
  alert("Невірний логін.");
}


//Currency exchange
let currency = prompt("Введіть валюту (наприклад, USD, EUR):").toUpperCase();
let isBuying = confirm("Ви бажаєте купити?");

let rate;

if (currency === "USD") {
  rate = isBuying ? 1 / 37 : 37;
} else if (currency === "EUR") {
  rate = isBuying ? 1 / 42 : 42;
} else {
  alert("Непідтримувана валюта.");
}

if (rate) {
  let amount = parseFloat(prompt("Введіть суму для обміну:"));

  if (isBuying) {
    let exchangedAmount = amount * rate;
    alert(`Ви отримаєте ${exchangedAmount.toFixed(2)} ${currency}`);
  } else {
    let exchangedAmount = amount / rate;
    alert(`Ви отримаєте ${exchangedAmount.toFixed(2)} UAH`);
  }
}



//Scissors

function generateRandomChoice() {
  return Math.floor(Math.random() * 3);
}

function getChoiceString(choice) {
  if (choice === 0) {
    return "камінь";
  } else if (choice === 1) {
    return "ножиці";
  } else {
    return "папір";
  }
}

let userChoice = prompt("Введіть ваш вибір: камінь, ножиці або папір").toLowerCase();

let computerChoice = generateRandomChoice();

if (
  (userChoice === "камінь" && computerChoice === 1) ||
  (userChoice === "ножиці" && computerChoice === 2) ||
  (userChoice === "папір" && computerChoice === 0)
) {
  alert(`Ви перемогли! Ваш вибір: ${userChoice}. Вибір програми: ${getChoiceString(computerChoice)}.`);
} else if (
  (userChoice === "камінь" && computerChoice === 2) ||
  (userChoice === "ножиці" && computerChoice === 0) ||
  (userChoice === "папір" && computerChoice === 1)
) {
  alert(`Ви програли! Ваш вибір: ${userChoice}. Вибір програми: ${getChoiceString(computerChoice)}.`);
} else {
  alert(`Нічия! Ваш вибір: ${userChoice}. Вибір програми: ${getChoiceString(computerChoice)}.`);
}




