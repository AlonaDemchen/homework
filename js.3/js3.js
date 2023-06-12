//String: greeting
var name = prompt("Введіть ваше ім'я:");
alert("Привіт, " + name + "!");


//String: gopni4ek
var input = prompt("Введіть рядок:");

var words = input.split(","); 
var result = words.join(" блін,"); 

alert(result);


//String: capitalize
let str = prompt("Введіть рядок:");
let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log(result);


//String: word count
let str = prompt("Введіть рядок:");
let words = str.split(" ");
let wordCount = words.length;

console.log("Кількість слів у рядку: " + wordCount);



//String: credentials
String.prototype.capitalize = function() {
  return this.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
};

var firstName = prompt("Ведіть ваше ім'я:").trim().capitalize();
var middleName = prompt("Введіть ваше прізвище:").trim().capitalize();
var lastName = prompt("Ведіть ваше ім'я по-батькові:").trim().capitalize();

var fullName = firstName + " " + middleName + " " + lastName;

console.log(fullName);


//String: beer
let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let result = str.replace(/пиво/g, "чай");
console.log(result); // "Було жарко. Василь пив чай вприкуску з креветками"


//String: no tag
let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tagStart = str.indexOf("<");
let tagEnd = str.indexOf(">");
let result = str.replace(str.slice(tagStart, tagEnd + 1), "");
console.log(result); // "якийсь текст, в якому є один тег і всяке інше"


//String: big tag
let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let tagStart = str.indexOf("<");
let tagEnd = str.indexOf(">");
let tag = str.slice(tagStart, tagEnd + 1);
let capitalizedTag = tag.toUpperCase();
let result = str.slice(0, tagStart) + capitalizedTag + str.slice(tagEnd + 1);
console.log(result); // "якийсь текст у якому є один тег <BR /> і всяке інше"


//String: new line
var userInput = prompt("Введіть рядок з новими рядками:");
var lines = userInput.split('\n');
var multiLineString = lines.join('\n');
console.log(multiLineString);


//String: youtube
const userInput = prompt("Введіть текст з посиланням на YouTube:");
const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|\.be\/|\/watch\?v=|\/embed\/|\/v\/|youtu\.be\/)([^&\n?]+)/;
const match = userInput.match(regex);

if (match) {
  const videoId = match[1];
  const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  document.write(embedCode);
} else {
  document.write("Посилання на YouTube не знайдено.");
}


