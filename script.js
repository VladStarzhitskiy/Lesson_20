'use strict';

function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }else
    {
        no()
    }
}

function showOk(){
    console.log('Вы согласились');
}
function showCancel(){
    console.log('Вы отменили выполнение');
}
ask('Вы согласны', showOk, showCancel);



//Второй вариант указаного высше
function ask2(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

ask2('Вы согласны?',
    function(){console.log('Вы согласились');},
    function(){console.log('Вы отказались');}
);


// new Function - Способ объявить функцию
let num = 2;
let sum = new Function('a, b', 'return '+ num + '+a+b;'); //return 2+a+b;

let result = sum(10, 25); //37



//Рекурсия


function pow(x, n){
    if(n!=1){
        return x * pow(x, n - 1);
    }else{
        return x;
    }
}
console.log( pow(2, 3) ); //8

console.log( pow(2, 70) );

//Контекст выполнение, стек

/*
    1) pow(2,3) = 2 * 2 * 2
    2) pow(2,2) = 2 * 2
    3) pow(2,1) = 2
*/

//Именованые функциональные выражения

let func1 = function(){}; //Функциональное выражение

let func2 = function sayHi(name){//именнованое функциональное выражение
//sayHi = 'текст'; // именованную функцию нельзя перенезначить
console.log(sayHi);
};

func2(); //Выдает код себя же

//sayHi(); - будет ошибка - Именнованная функция не доступна из вне

//Введение в методы и свойства

let str = 'Привет';
console.log( str.length ); // выдает количесто символов в строке. В нашем случае 6 символов.
for(let i = 0; i < str.length; i++){
    if(i == 'в'){
        console.log(i);
    }
}

// Метод toUpperCase

str = str.toUpperCase(); //ПРИВЕТ

//Метод toFixed

let num1 = 12.345;

console.log( num1.toFixed(0) )//вписываем число которое показывает 
//до скольки символов будет округлено число + приобразовывает в текст в нашем случае будет "12"


//Числа

 //Способы записи числа

console.log( 0xFF); //255

console.log( 3e5);// 300000 

console.log( 3e-5 ); //0.00003

//Проверка на  бесконечность
isFinite(1); //true 
isFinite(Infinity); //false //Проверяет значение если оно не равно NaN\ Infinity\ -Infinity

//Мягкое преобразование
console.log( +'12px'); // NaN
console.log( parseInt('12px') ); //12
console.log( parseFloat('12.3.2') ); //12.3
console.log( parseInt('FF', 16) );//225

//Проверка на число
console.log( isNaN('-11.5') ); // Сначала преобразует число а потом вернет True, если это NaN

function isNumeric(n){
    return !isNaN(parseFloat(n)) && ifFinite(n);
}

//Преобразование toString

let k = 255;
console.log( k.toString(16) ); //FF


//Округление
 console.log( Math.floor(3.1) ); //3 Округление в низ
 console.log( Math.ceil(3.1) ); //4 Округление в верх
 console.log( Math.round(3.1) ); //3 Округление до ближайшего целого

 //Округление до заданной точности

 let b = 3.456;

 console.log( Math.round(b * 100) / 100 );
 //3.456 -> 345.6 -> 346 -> 3.46

b = 12.34;
console.log( b.toFixed(1) );//12.3

b = 12.36;
b.toFixed(1); //'12.4'

b.toFixed(5); //'12.36000'
// Что бы отбросить нули нужно записать
console.log( +b.toFixed(5) ); //12.36


let price = 6.35;

console.log( price.toFixed(1) ); //6.3
console.log( Math.round(price * 10) / 10); //6.4


//Неточные вычисления

console.log( 0.1 + 0.2 == 0.3); //false
console.log( 0.1 + 0.2); // 0.3000000000000004
console.log( 0.1 + 0.2 > 0.3 ); //true

console.log( 0.1.toFixed(20) );
//Первый способ сделать так что бы это console.log( 0.1 + 0.2 == 0.3); //false работало, показовао тру
console.log( (0.1 * 10 + 0.2 * 10) / 10); //0.3

//Второй способ округлить
let result2 = 0.1 + 0/2;
console.log( +result2. toFixed(10) ); //0.3

console.log( 99999999999999999 );



console.log(Math.random() );//случайное число от 0 до 1

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);// Math.floor что бы округлялось до целого числа
}

console.log( getRandom(10, 20)  );




//дз делать через рекурсию и фор


