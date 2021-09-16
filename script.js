"use strict"; 

/*
let number = 5;
const leftBorderWidth = 1;

number =10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

let number = 4.6;
console.log(-4/0);
console.log('string' * 9);

const persone = "Evgeny";

const bool = true;

const obj1 = {
    name: "evgeny",
    age: 27,
    isMarried: false
};

console.log(obj1["name"]);
*/

/*Lessson 7
alert("hello0");

const result = confirm("Are you there?");
console.log(result);

const answer = +prompt("What is your Age?", "");
console.log(answer + 50);

const answers = [];
answers[0] = prompt("What is your Name?");
answers[1] = prompt("What is your Last Name?");
answers[2] = prompt("What is your age?");

console.log(typeof(answers));
console.log(typeof(null));*/

//Lesson 8
/*
const category = "toys";

console.log(`hhtp://someurl.com/${category}/6`);

const user = "Evgeny";
alert(`Hello dear, ${user}!`)*/

//Lesson 9

let incr = 10;
let decr = 10;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(2*4 == 8);//одно равно это присваивание и вданной строке не возможно потому что тут происходит сравнение (==)
console.log(2*4 === 8);//строгое 

// (&&) оператор И
const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

// (||) оператор ИЛИ

const isChecked1 = true,
      isClose1 = false;

console.log(isChecked1 || isClose1);

// (!text)опаратор отрицания
const isChecked2 = false,
      isClose2 = false;

console.log(isChecked2 || !isClose2);

// (!= && !==) оператор не равно
console.log(2+2*2 != "6");//обычное не равно
console.log(2+2*2 !== "6");//строгое не равно
