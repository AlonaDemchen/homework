/*Исходный код*/
var a = 5;
var b, c;

b = (a * 5);
b = (c = b / 2); //выражение (b/2) нужно обернуть в дополнительные круглые скобки, чтобы обеспечить правильный порядок вычислений
//Измененный код
var a = 5;  //присваивается значение переменной "а"
var b, c;   //объявляют 2 переменных 

b = (a * 5);  // b=5*5=25 значение 25 присваивается b
b = (c = (b / 2));  // c=25/2=12,5 значение 12.5 присваивается "с"
// b=c=12.5 значение "с" присваивается "b"




//Number: age
var age = prompt("Введите ваш возвраст:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

alert("Ваш год рожениия: " + birthYear);



//Number: temperature

var celsius = prompt("Введите температуру в Градусах Цельсия:");
var fahrenheit = (celsius * 9 / 5) + 32;

var fahrenheitToCelsius = prompt("Введите температуру в градусах Фаренгейта:");
var celsiusConverted = (fahrenheitToCelsius - 32) * 5 / 9;

alert(celsius + " градусов цельсия равно " + fahrenheit + " градусам фаренгейта.");
alert(fahrenheitToCelsius + " градусов фаренгейта " + celsiusConverted + " градусам цельсия");


//Number: divide
var num1 = parseInt(prompt("Введите первое число:"));
var num2 = parseInt(prompt("Введите второе число:"));

var result = Math.floor(num1 / num2);

alert("Результат: " + result);



//Number: currency
const rate = 40.5

var amount = parseFloat(prompt("Введите сумму в валюте:"));
var exchangedAmount = (amount * rate).toFixed(2);

alert("Сума после обмена: " + exchangedAmount);


//Number: RGB
var red = parseInt(prompt("Введите значение Red(0-255):"));
var green = parseInt(prompt("Введите значение Green (0-255):"));
var blue = parseInt(prompt("Введите значение Blue(0-255):"));

var color = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

alert("CSS-color: " + color);

function componentToHex(component) {
  var hex = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}


//Number: flats
var totalFloors = parseInt(prompt("Введите количество этажей в доме:"));
var flatsPerFloor = parseInt(prompt("Введите количество квартир на этаже:"));
var targetFlatNumber = parseInt(prompt("Введите номер квартиры:"));

var flatsPerEntrance = totalFloors * flatsPerFloor;
var entranceNumber = Math.ceil(targetFlatNumber / flatsPerEntrance);
var floorNumber = Math.ceil((targetFlatNumber % flatsPerEntrance) / flatsPerFloor);

alert("Подъезд: " + entranceNumber + ", Этаж: " + floorNumber);


