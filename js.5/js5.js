//Confirms

let answers = [];

let answer1 = confirm("Вам подобається програмування?");
answers.push(answer1);

let answer2 = confirm("Ви впевнені у своєму виборі?");
answers.push(answer2);

let answer3 = confirm("Ви готові до нових викликів?");
answers.push(answer3);

console.log(answers);



//Prompts
let answers = [];

answers[0] = prompt("Вам подобається програмування?");
answers[1] = prompt("Ви впевнені у своєму виборі??");
answers[2] = prompt("Ви готові до нових викликів?");

console.log(answers);


//Item access
let arr = ["apple", "banana", "orange", "grape"];

let index = prompt("Введіть індекс у масиві:");

if (index >= 0 && index < arr.length) {
  let element = arr[index];
  console.log("Значення елемента за введеним індексом:", element);
} else {
  console.log("Недійсний індекс!");
}


//Item change
let arr = ["apple", "banana", "orange", "grape"];

let index = prompt("Введіть індекс у масиві:");
let value = prompt("Введіть значення:");

if (index >= 0 && index < arr.length) {
  arr[index] = value;
  console.log("Масив після зміни:", arr);
} else {
  console.log("Недійсний індекс!");
}


//Multiply table
const arr = [];

for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    row.push((i + 1) * (j + 1));
  }
  arr.push(row);
}

console.log(arr);


//Multiply table slice
const multiplicationTable = [];

for (let i = 1; i <= 5; i++) {
  const row = [];
  for (let j = 1; j <= 5; j++) {
    const product = i * j;
    if (product !== 0) {
      row.push(product);
    }
  }
  multiplicationTable.push(row);
}

console.log(multiplicationTable);


//IndexOf Word
const sentence = prompt("Введіть рядок з кількох слів:");
const targetWord = prompt("Введіть потрібне слово:");

const words = sentence.split(" ");
const position = words.indexOf(targetWord);

if (position !== -1) {
  const wordNumber = position + 1;
  alert(`Слово "${targetWord}" знаходиться на позиції ${wordNumber} у рядку.`);
} else {
  alert(`Слово "${targetWord}" не знайдено у рядку.`);
}


//Reverse
const originalArray = [];

for (let i = 0; i < 5; i++) {
  const userInput = prompt("Введіть елемент:");
  originalArray.push(userInput);
}

const reversedArray = [];

while (originalArray.length > 0) {
  const element = originalArray.pop();
  reversedArray.push(element);
}

console.log("Оригінальний масив:", originalArray);
console.log("Масив у зворотньому порядку:", reversedArray);


//Reverse 2
const originalArray = [];
const reversedArray = [];

for (let i = 0; i < 5; i++) {
  const userInput = prompt("Введіть елемент:");
  originalArray.push(userInput);
  reversedArray.unshift(userInput);
}

console.log("Оригінальний масив:", originalArray);
console.log("Масив у зворотньому порядку:", reversedArray);


//Copy
const copiedArr = arr.slice().map(row => row.slice());

//Deep Copy
const copiedArr = JSON.parse(JSON.stringify(arr));


//Array Equals
const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1 === arr2); 


//Flat
const arr = [];

for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    row.push((i + 1) * (j + 1));
  }
  arr.push(row);
}

const flattenedArr = [].concat(...arr);

console.log(flattenedArr);
console.log(flattenedArr.length);


//Destruct
const input = prompt("Введіть рядок:");
const [firstLetter, , , , fifthLetter, , , , ninthLetter] = input;

console.log(`Перша літера: ${firstLetter}`);
console.log(`П'ята літера: ${fifthLetter}`);
console.log(`Дев'ята літера: ${ninthLetter}`);


//Destruct default
const input = prompt("Введіть рядок:");
const [, secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = input;

console.log(`Друга літера: ${secondLetter}`);
console.log(`Четверта літера: ${fourthLetter}`);
console.log(`П'ята літера: ${fifthLetter}`);


//Multiply table rest
const multiplicationTable = [];

for (let i = 1; i <= 5; i++) {
  const row = [];
  for (let j = 1; j <= 5; j++) {
    const product = i * j;
    if (product !== 0) {
      row.push(product);
    }
  }
  multiplicationTable.push(row);
}

const [first, second, ...rest] = multiplicationTable;

const flattenedArray = [...first, ...second, ...rest.flat()];

console.log(flattenedArray);


//For Alert
const names = ["John", "Paul", "George", "Ringo"];

for (let name of names) {
  alert(name);
}


//For Select Option
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

for (const currency of currencies) {
  str += `<option>${currency}</option>`;
}

str += "</select>";

document.write(str);


//For Table Horizontal
const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";

str += "<tr>";
for (const name of names) {
  str += `<td>${name}</td>`;
}
str += "</tr>";

str += "</table>";

document.write(str);


//For Table Vertical
const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";

for (const name of names) {
  str += "<tr>";
  str += `<td>${name}</td>`;
  str += "</tr>";
}

str += "</table>";

document.write(str);


//For Table Letters
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";

for (const currency of currencies) {
  str += "<tr>";
  for (const letter of currency) {
    str += `<td>${letter}</td>`;
  }
  str += "</tr>";
}

str += "</table>";

document.write(str);


//For Multiply Table
document.write("<table>");

for (let i = 1; i <= 5; i++) {
  document.write("<tr>");

  for (let j = 1; j <= 5; j++) {
    const product = i * j;
    const backgroundColor = i % 2 === 0 ? "#eaf6ff" : "#ffffff";
    document.write(`<td style="background-color: ${backgroundColor}">${product}</td>`);
  }

  document.write("</tr>");
}

document.write("</table>");


//Function Capitalize
const capitalize = str => {
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

console.log(capitalize("cANBerRa")); 


//Map Capitalize
const capitalize = str => {
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

const inputString = prompt("Введіть рядок:");
const wordsArray = inputString.split(" ");
const capitalizedArray = wordsArray.map(word => capitalize(word));
const capitalizedString = capitalizedArray.join(" ");

console.log(capitalizedString);


//Filter Lexics
const forbiddenWords = ["bad", "evil", "wrong"]; // Масив неприпустимих слів

const inputString = prompt("Введіть рядок:");
const wordsArray = inputString.split(" ");

const filteredArray = wordsArray.filter(word => {
  return !forbiddenWords.includes(word.toLowerCase());
});

const filteredString = filteredArray.join(" ");

console.log(filteredString);


//Beep Lexics
const forbiddenWords = ["bad", "evil", "wrong"]; // Масив заборонених слів

const inputString = prompt("Введіть рядок:");
const wordsArray = inputString.split(" ");

const transformedArray = wordsArray.map(word => {
  return forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word;
});

const transformedString = transformedArray.join(" ");

console.log(transformedString);



//Reduce HTML
const currencies = ["USD", "EUR", "GBP", "UAH"];
const str = currencies.reduce((accumulator, currency) => {
  return accumulator + `<option>${currency}</option>`;
}, "<select>") + "</select>";

console.log(str);


//For Brackets Hell Check
const line = prompt("Введіть рядок:");
const bracketsStack = [];
let i = 0;

for (const character of line) {
  if (character === "[" || character === "(" || character === "{") {
    bracketsStack.push({ bracket: character, position: i });
  } else if (character === "]" || character === ")" || character === "}") {
    const lastBracket = bracketsStack.pop();
    if (
      !lastBracket ||
      (character === "]" && lastBracket.bracket !== "[") ||
      (character === ")" && lastBracket.bracket !== "(") ||
      (character === "}" && lastBracket.bracket !== "{")
    ) {
      console.log(`Помилка у рядку на позиції ${i}`);
      break;
    }
  }
  i++;
}

if (bracketsStack.length === 0) {
  console.log("Всі дужки у рядку вірні");
} else {
  console.log(`Помилка у рядку на позиції ${bracketsStack[0].position}`);
}



