// tipo de datos

var num = 2;
console.log(typeof num);
console.log(num);
console.error(num);
console.info(num);
console.warn(num);

num = 'Hola mundo';
console.log(typeof num);
console.log(num);

// 2 grupos de tipos de datos: primitivos y los de tipo object
// primitivos: tipo de datos simple (numero, string, boolean, undefined, null)

var myVar = 2;
console.log(typeof myVar);
myVar = 3.14;
console.log(typeof myVar);
myVar = -1;
console.log(typeof myVar);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(1 + 1 === 1 + 2);

//los datos primitivos son inmutables, no se pueden cambiar despues de haberse definido
myVar = 'cocina';
console.log(typeof myVar);
console.log(myVar.length);
myVar[0] = 'b';
console.log(myVar);
myVar = 'bocina';
console.log(myVar);

//valor object, se aconseja usar valores primitivos, directamente con el valor
myVar = new Number(2);
console.log(typeof myVar);
myVar = new String('Hola');
console.log(typeof myVar);

//valores boolean
myVar = true; // false
console.log(typeof myVar);

//null vs undefined
myVar = null;
console.log(myVar);
var myVar2 = undefined;
console.log(myVar2);
console.log(null == undefined);
var myVar3 = null;
var myVar4;
console.log(myVar3, myVar4);

//tratado de string
var myString = "comillas dobles";
myString = 'comillas simples';
var myString2 = `interpolacion de variables: ${myString}`;
console.log(myString, myString2);

//trabajar con operadores
var one = 1;
var two = '2';
console.log(one + two);
console.log(two - one);