"use strict"

// document.querySelector('.form__button').addEventListener('click', ()=>{

// })

const number = 1562;
const getMaxDigit = (number) => {
   let arr = ('' + number).split('');
   return Math.max.apply(null, arr);
}
const num = 3;
const pow = 3;
const numPow = (num, pow) => {
   let result = num;
   for(let i = 1; i < pow; i++) {
      result *= num;
   }
   return result;
}

const NAME = "yAroSlAW";
const nameFirstWordBig = (NAME) => {
   let nameArray = NAME.toLowerCase().split('');
   let formatedName = nameArray[0].toUpperCase()+nameArray.splice(1, nameArray.length).join('');
   return formatedName;
}

const SUMA = 1000;
const TAX = 19.5;
const sumTogetherTax = (SUMA, TAX) => {
   return SUMA - (SUMA * parseFloat(TAX) / 100);
}

const N = 15;
const M = 25;
const getRandomNumber = (N, M) => {
   N = Math.ceil(N);
   M = Math.floor(M);
   return Math.floor(Math.random() * (M - N + 1)) + N;
}

const WORD = "Варфаламієвська ніч";
const LETTER = "а";
const countLetter = (LETTER, WORD) => {
   return WORD.toLowerCase().split(LETTER.toLowerCase()).length - 1;
}

const CURRENCY = "1050.50uah";
const convertCurrency = (CURRENCY) => {
   if (CURRENCY.includes("UAH") || CURRENCY.includes("uah")) {
      return (parseFloat(CURRENCY) / 39.5).toFixed(2) + "$";
   } else if (CURRENCY.includes("$")) {
      return (parseFloat(CURRENCY) * 39.5).toFixed(2) + "UAH"
   } else {
      return "Unknow currency"
   }
}

const LENGTH = 6;
const getRandomPassword = (LENGTH) => {
   let randomArray = "";
   for (let i = 0; i < LENGTH; i++) {
      randomArray += Math.round(Math.random() * (9 - 0) + 0);
   }
   return randomArray;
}

const deleteLetters = (LETTER, WORD) => {
   return WORD.split(LETTER).join('');
}

const palyndrom = "Я несу гусеня";
const isPalyndrom = (palyndrom) => {
   let reversWord = palyndrom.toLowerCase().split(' ').join('').split('').reverse().join('');
   let formatPolyndrom = palyndrom.toLowerCase().split(' ').join('');
   if (reversWord === formatPolyndrom) {
      return true;
   } else return false;
    
}

const DuplicateWord = "Бісквіт був дуже ніжним";
const deleteDublicateLetter = (DuplicateWord) => {
   let formateDuplicateWord = DuplicateWord.toLowerCase().split(' ').join('');
   let result = '';
   for (let i = 0; i < formateDuplicateWord.length; i++) {
      if (countLetter(formateDuplicateWord[i], formateDuplicateWord) > 1) {
         deleteLetters(formateDuplicateWord[i], formateDuplicateWord)
      } else result += formateDuplicateWord[i]
   }

   return result;
}

// console.log(getMaxDigit(number));
// console.log(numPow(num, pow));
// console.log(nameFirstWordBig(NAME));
// console.log(sumTogetherTax(SUMA, TAX));
// console.log(getRandomNumber(N, M));
// console.log(countLetter(LETTER, WORD));
// console.log(convertCurrency(CURRENCY));
// console.log(getRandomPassword(LENGTH));
// console.log(deleteLetters(LETTER, WORD));
// console.log(isPalyndrom(palyndrom));
// console.log(deleteDublicateLetter(DuplicateWord));

// document.writeln(`<p>${getMaxDigit(number)}</p>`)
// document.writeln(`<p>${numPow(num, pow)}</p>`)
// document.writeln(`<p>${nameFirstWordBig(NAME)}</p>`)
// document.writeln(`<p>${sumTogetherTax(SUMA, TAX)}</p>`)
// document.writeln(`<p>${getRandomNumber(N, M)}</p>`)
// document.writeln(`<p>${countLetter(LETTER, WORD)}</p>`)
// document.writeln(`<p>${convertCurrency(CURRENCY)}</p>`)
// document.writeln(`<p>${getRandomPassword(LENGTH)}</p>`)
// document.writeln(`<p>${deleteLetters(LETTER, WORD)}</p>`)
// document.writeln(`<p>${isPalyndrom(palyndrom)}</p>`)
// document.writeln(`<p>${deleteDublicateLetter(DuplicateWord)}</p>`)

document.writeln(
   `Function 1: Найбільша цифра в числі 1562 : ${getMaxDigit(number)}  <br/>
    Function 2: 3 в 3 степені:  ${numPow(num, pow)}  <br/>
    Function 3: Відформатоване ім'я yAroSlAW : ${nameFirstWordBig(NAME)} <br/>
    Function 4: Сума заробітньої плати після оплати податку з 1000: ${sumTogetherTax(SUMA, TAX)}<br/>
    Function 5: Випадкове ціле число від 15 до 25 ${getRandomNumber(N, M)} <br/>
    Function 6: Буква "а" в реченні "Варфаламієвська ніч" повторюєся ${countLetter(LETTER, WORD)} рази  <br/>
    Function 7: 1050.50 гривень це: ${convertCurrency(CURRENCY)} доларів<br/>
    Function 8: Рандомний пароль з 6 цифр ${getRandomPassword(LENGTH)} <br/>
    Function 9: "Варфаламієвська ніч" без "а" ${deleteLetters(LETTER, WORD)} <br/>
    Function 10: "Я несу гусеня" це палідрон? ${isPalyndrom(palyndrom)} <br/>
    Function 11: Букви які не повторюються в реченні "Бісквіт був дуже ніжним": ${deleteDublicateLetter(DuplicateWord)} <br/>
 `
 );
