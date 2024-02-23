// Задание номер 1 
 
// function stringStats(str) { 
//     var letters = 0; 
//     var numbers = 0; 
//     var other = 0; 
   
//     for (var i = 0; i < str.length; i++) { 
//       var char = str[i]; 
//       if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') { 
//         letters++; 
//       } else if (char >= '0' && char <= '9') { 
//         numbers++; 
//       } else { 
//         other++; 
//       } 
//     } 
   
//     console.log("Letters: " + letters); 
//     console.log("Numbers: " + numbers); 
//     console.log("Other: " + other); 
//   } 
 
// Задание номер 2 
 
//   function textNumber(number) { 
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять']; 
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадцать']; 
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто']; 
//     if (number > 0 && number <= 9) { 
//       return first[number - 1]; 
//     } 
//     if (number >= 10 && number <= 20) { 
//       return second[number - 10]; 
//     } 
//     if (number > 20 && number <= 99) { 
//       let str = ${number}; 
//       str = str.split(''); 
//       let firstNumber = str[0]; 
//       let secondNumber = str[1]; 
//       //return [ third[firstNumber - 2], first[secondNumber - 1] ]; 
//       return ${third[firstNumber - 2]} ${first[secondNumber - 1]}; 
//     } 
//   } 
//   alert(textNumber(35)); 
//   alert(textNumber(89)); 
//   alert(textNumber(12)); 
 
// Задание 3 
 
// const str = 'БОЛЬШИЕ БУКВЫ на маленькие, маленькие – НА БОЛЬШИЕ 123456789'; 
 
// function changeRegister (str) { 
// let upperWord = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'; 
// let lowerWord = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'; 
// let number = '1234567890'; 
// let result = []; 
   
//   for(var i = 0; i < str.length; i++) { 
//     if(upperWord.includes(str[i])) { 
//       result.push(str[i].toLowerCase()); 
//     } 
//     else if(lowerWord.includes(str[i])) { 
//       result.push(str[i].toUpperCase()); 
//     } 
//     else if(number.includes(str[i])) { 
//       result.push(str[i].replace('_')); 
//     } 
//     else { 
//       result.push(str[i]); 
//     } 
//   } 
//   return result.join(''); 
// }; 
 
// console.log(str); 
//     console.log(changeRegister(str)); 
 
 
// Задание 4 
// Написать функцию, которая преобразует названия css- 
// стилей с дефисом в название в СamelСase стиле: font-size 
// в fontSize, background-color в backgroundColor, text- 
// align в textAlign. 
 
// function toCamelCase(text) { 
//     return text.split('-').map((word,index) => index ? word.charAt(0).toUpperCase() + word.slice(1): word).join('') 
// } 
 
// console.log(toCamelCase('background-color')) 
// console.log(toCamelCase('-moz-background-color')) 
 
 
// Задание 5 
 
// function abbreviation(str) { 
//     var words = str.split(' '); 
//     var result = ''; 
//     for (var i = 0; i < words.length; i++) { 
//       result += words[i].charAt(0).toUpperCase(); 
//     } 
//     return result; 
//   } 
//   console.log(abbreviation("cascading style sheets"));  
 
 
// Задание 6 
 
 
// function joinStrings() { 
//     return Array.prototype.slice.call(arguments).reduce(function (a, b) { 
//       return a + b; 
//     }); 
//   } 
//   console.log(joinStrings("Hello", "world", "!", "How", "are", "you?")); // "Helloworld!Howareyou?" 
 
 
// Задание 7 
 
// function calculator(str) { 
//     var operators = ['+', '-', '*', '/']; 
//     var operator = ''; 
//     var num1 = 0; 
//     var num2 = 0; 
//     var i = 0; 
   
//     while (i < str.length && operators.indexOf(str[i]) === -1) { 
//       i++; 
//     } 
   
//     operator = str[i]; 
//     num1 = parseFloat(str.slice(0, i)); 
//     num2 = parseFloat(str.slice(i + 1)); 
   
//     switch (operator) { 
//       case '+': 
//         return num1 + num2; 
//       case '-': 
//         return num1 - num2; 
//       case
//         '*':
//         return num1 * num2; 
//       case '/': 
//         return num1 / num2; 
//       default: 
//         return 'Invalid operator'; 
//     } 
//   } 
//   console.log(calculator("5+3")); // 8 
//   console.log(calculator("5-3")); // 2 
//   console.log(calculator("5*3")); // 15 
//   console.log(calculator("5/3")); // 1.6666666666666667 
//   console.log(calculator("5%3")); // Invalid operator 
 
// Задание 8 
 
// function getUrlInfo(url) { 
//     var urlObj = new URL(url); 
//     var result = { 
//       protocol: urlObj.protocol, 
//       host: urlObj.host, 
//       hostname: urlObj.hostname, 
//       port: urlObj.port, 
//       pathname: urlObj.pathname, 
//       search: urlObj.search, 
//       hash: urlObj.hash, 
//       origin: urlObj.origin 
//     }; 
// //     return result; 
//   } 
  
   
// Задание 9 
 
// function splitString(str, delimiter) { 
//     var result = []; 
//     var start = 0; 
//     var end = 0; 
//     while (end !== -1) { 
//       end = str.indexOf(delimiter, start); 
//       if (end === -1) { 
//         result.push(str.slice(start)); 
//         break; 
//       } else { 
//         result.push(str.slice(start, end)); 
//       } 
//       start = end + delimiter.length; 
//     } 
//     return result; 
//   } 
//   console.log(splitString("10/2020", "/"));  
 
 
// ЗАДАНИЕ 10 
 
function formatText(template) { 
    let args = Array.from(arguments).slice(1); 
    let result = template; 
    for (let i = 0; i < args.length; i++) { 
        let index = i + 1; 
        let regex = new RegExp(`%${index}`, 'g'); 
        result = result.replace(regex, args[i]); 
    } 
    return result; 
 } 
 console.log(formatText("Today is %1 %2.%3.%4 , Monday , 10,8, 2020"));
