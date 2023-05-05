//* En este ejercicio, se te pide que calcules y imprimas la suma de los elementos de un arreglo, teniendo en cuenta que algunos de estos números pueden ser bastante grandes.

//* La función que debes completar se llama "aVeryBigSum" y tiene un parámetro: un arreglo de enteros llamado "ar". La función debe devolver la suma de todos los elementos del arreglo.

//* La entrada se proporciona en el siguiente formato: la primera línea contiene un entero "n", que indica la cantidad de elementos en el arreglo. La segunda línea contiene "n" enteros separados por espacios, que son los elementos del arreglo.

//* La salida debe ser un número entero que representa la suma de los elementos del arreglo.

//* Para resolver este ejercicio, puedes recorrer el arreglo "ar" utilizando un bucle for y acumular la suma de los elementos en una variable. Dado que algunos de los enteros pueden ser muy grandes, es importante tener en cuenta que el tipo de datos de la variable acumuladora puede tener que ser un "long" para evitar desbordamientos.

function aVeryBigSum(ar) {
	let sum = 0;
	for (let i = 0; i < ar.length; i++) {
		sum += ar[i];
	}
	return sum;
}

//* Este ejercicio se llama "Diagonal Difference" y se trata de encontrar la diferencia absoluta entre la suma de los elementos de la diagonal principal y la suma de los elementos de la diagonal secundaria de una matriz cuadrada.

//* El enunciado pide que implementes una función llamada "diagonalDifference" que reciba como argumento una matriz cuadrada (un arreglo de arreglos) y devuelva la diferencia absoluta entre las sumas de los elementos de las diagonales principal y secundaria.

//* Para resolver este ejercicio, puedes recorrer la matriz utilizando dos bucles for anidados y sumar los elementos de ambas diagonales. Luego, calcular la diferencia absoluta entre ambas sumas.

function diagonalDifference(arr) {
	let n = arr.length;
	let diagonal1 = 0;
	let diagonal2 = 0;
	for (let i = 0; i < n; i++) {
		diagonal1 += arr[i][i];
		diagonal2 += arr[i][n - i - 1];
	}
	return Math.abs(diagonal1 - diagonal2);
}

//* consiste en calcular la fracción de números positivos, negativos y ceros en una lista de números enteros.

//* Para resolver este problema, primero debes leer la lista de números enteros y almacenarla en un array.

//* Luego, debes declarar tres variables para contar la cantidad de números positivos, negativos y ceros. Inicializa las variables en cero.

//* A continuación, puedes utilizar un bucle for para recorrer el array y verificar si cada número es positivo, negativo o cero. Puedes utilizar la estructura if-else para esto.

//* Si el número es positivo, incrementa la variable que cuenta los números positivos en uno. Si es negativo, incrementa la variable que cuenta los números negativos en uno. Si es cero, incrementa la variable que cuenta los ceros en uno.

//* Después de recorrer todo el array, calcula la fracción de cada tipo de número. Puedes hacer esto dividiendo la cantidad de números positivos, negativos o ceros por el total de números en el array.

//* Finalmente, muestra los resultados utilizando console.log(). Recuerda que debes mostrar los resultados con 6 decimales de precisión.

function plusMinus(arr) {
	let positiveCount = 0;
	let negativesCount = 0;
	let zerosCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positiveCount++;
		} else if (arr[i] < 0) {
			negativesCount++;
		} else {
			zerosCount++;
		}
	}
	const positiveFraction = positiveCount / arr.length;
	const negativeFraction = negativesCount / arr.length;
	const zerosFraction = zerosCount / arr.length;

	console.log(positiveFraction.toFixed(6));
	console.log(negativeFraction.toFixed(6));
	console.log(zerosFraction.toFixed(6));
}

//* Escribir una función que imprima una escalera de caracteres "#" con una altura específica "n". La escalera debe estar alineada a la derecha. Por ejemplo, si n = 6, la salida debería verse así:
//*   #
//*   ##
//*  	###
//* 	####
//* 	#####
//* 	######

//* Para resolver este problema, necesitarás utilizar una estructura de bucle anidado. El bucle exterior se encargará de imprimir cada fila de la escalera, y el bucle interior se encargará de imprimir los caracteres "#" y los espacios en blanco.

//* Una forma de enfocar este problema es imprimir primero los espacios en blanco necesarios para alinear la escalera a la derecha, y luego imprimir los caracteres "#" necesarios para crear la escalera. Puedes utilizar la función repeat() de JavaScript para imprimir un carácter o cadena de caracteres un número determinado de veces.

//* Asegúrate de que la escalera tenga el mismo número de caracteres "#" en cada fila y que las filas estén alineadas a la derecha.

function staircase(n) {
	let stairs = new Array(n).fill(" ");

	stairs.forEach((stair, index) => {
		stairs[n - index - 1] = "#";
		console.log(stairs.join(""));
	});
}
staircase(6);

//* Dado un arreglo de enteros, escribir una función que revierta el orden de los elementos del arreglo.

//* Por ejemplo, si el arreglo es [1, 2, 3, 4, 5], la función debería retornar [5, 4, 3, 2, 1].

//* Donde a es el arreglo de entrada.

//* Para resolver el problema, aquí hay algunos pasos que puedes seguir:

//* Crea un nuevo arreglo vacío.
//* Recorre el arreglo de entrada desde el último elemento hasta el primero.
//* En cada iteración, agrega el elemento actual al final del nuevo arreglo.
//* Retorna el nuevo arreglo.

function reverseArray(a) {
	let arr = [];
	for (let i = a.length - 1; i >= 0; i--) {
		arr.push(a[i]);
	}
	return arr;
}

//* te pide que encuentres cuántas velas en un pastel son las más altas. El pastel se representa como un array de enteros donde cada elemento del array representa la altura de una vela.

//* Para resolver este problema, necesitamos encontrar la altura máxima de las velas y luego contar cuántas velas tienen esa altura.

//* El proceso para resolver el problema sería el siguiente:

//* Inicializar dos variables: maxHeight y count a 0. Estas variables se utilizarán para rastrear la altura máxima de las velas y el número de velas que tienen esa altura, respectivamente.

//* Iterar sobre el array de velas y para cada vela:

//* a. Si la altura de la vela es mayor que maxHeight, actualiza maxHeight a la altura de la vela y restablece count a 1.

//* b. Si la altura de la vela es igual a maxHeight, aumenta count en 1.

//* Devuelve el valor de count.

function birthdayCakeCandles(candles) {
	let maxHeight = 0;
	let count = 0;

	for (let i = 0; i < candles.length; i++) {
		if (candles[i] > maxHeight) {
			maxHeight = candles[i];
			count = 1;
		} else if (candles[i] === maxHeight) {
			count++;
		}
	}
	return count;
}

//* El problema "Mini-Max Sum" pide que le des cinco números enteros diferentes como entrada y, a continuación, debes calcular la suma mínima y la suma máxima de cuatro de los cinco números. En otras palabras, debes sumar cuatro de los cinco números y encontrar tanto la suma mínima como la suma máxima posible.

//* Por ejemplo, si los cinco números que se te dan como entrada son [1, 2, 3, 4, 5], entonces la suma mínima posible es 1 + 2 + 3 + 4 = 10 y la suma máxima posible es 2 + 3 + 4 + 5 = 14.

//* Una vez que hayas encontrado ambas sumas, debes imprimir en pantalla ambas sumas en una sola línea, separadas por un espacio.

function miniMaxSum(arr) {
	arr.sort((a, b) => a - b);
	const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr);
	arr.sort((a, b) => b - a);
	const maxSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr);
	console.log(minSum + " " + maxSum);
}

//* pide que conviertas una hora en formato de 12 horas (AM/PM) en un formato de 24 horas.

//* El input es una cadena de texto en el formato hh:mm:ssAM o hh:mm:ssPM, donde hh representa la hora en formato de 12 horas, mm representa los minutos y ss representa los segundos. La cadena termina con las letras AM o PM, que indican si la hora es antes o después del mediodía, respectivamente.

//* Para resolver este problema, necesitamos extraer las partes relevantes de la cadena de entrada y convertir la hora a un formato de 24 horas. Para hacerlo, podemos seguir los siguientes pasos:

//* Extraer la hora, los minutos y los segundos de la cadena de entrada.

//* Comprobar si la hora es AM o PM. Si es AM y la hora es 12, la hora debe establecerse en 00. Si es PM y la hora no es 12, agregue 12 a la hora.

//* Devuelve la hora en formato de 24 horas, como una cadena de texto en el formato hh:mm:ss.

function timeConversion(s) {
	const time = s.split(":");
	if (s.end("PM") && hour !== 12) {
		hour += 12;
	} else if (s.end("AM") && hour === 12) {
		hour = 0;
	}
	return `${hour.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	//! SIN TERMINAR
}

//* Tengo un gato y un perro.

//* Los conseguí al mismo tiempo que gatito/cachorro. Eso fue humanYearshace años.

//* Devuelve sus respectivas edades ahora como [ humanYears, catYears, dogYears]

//* NOTAS:

//* añoshumanos >= 1
//* humanYears son solo números enteros
//* Años del gato
//* 15años de gato para el primer año
//* +9años de gato por segundo año
//* +4cat años por cada año después de eso
//* Años del perro
//* 15años de perro para el primer año
//* +9años de perro por segundo año
//* +5años de perro por cada año después de eso

var humanYearsCatYearsDogYears = function (humanYears) {
	let catYears = 0;
	let dogYears = 0;

	if (humanYears === 1) {
		catYears = 15;
		dogYears = 15;
	} else if (humanYears === 2) {
		catYears = 24;
		dogYears = 24;
	} else if (humanYears > 2) {
		catYears = 24 + (humanYears - 2) * 4;
		dogYears = 24 + (humanYears - 2) * 5;
	}
	return [humanYears, catYears, dogYears];
};

//* Completa el método que toma un valor booleano y devuelve una "Yes" cadena para true o una "No" cadena para false.

function boolToWord(bool) {
	const str = bool === true ? "Yes" : "No";
	return str;
}

//* Le preguntas a una niña pequeña: "¿Cuántos años tienes?" Ella siempre dice "x años", donde x es un número aleatorio entre 0 y 9.

//* Escriba un programa que devuelva la edad de la niña (0-9) como un número entero.

//* Suponga que la cadena de entrada de prueba siempre es una cadena válida. Por ejemplo, la entrada de prueba puede ser "1 año" o "5 años". El primer carácter de la cadena siempre es un número.

let edad = 0;

function getAge(inputString) {
	switch (edad) {
		case 0:
			return parseInt(inputString);

		case 1:
			return parseInt(inputString);

		case 2:
			return parseInt(inputString);

		case 3:
			return parseInt(inputString);

		case 4:
			return parseInt(inputString);

		case 5:
			return parseInt(inputString);

		case 6:
			return parseInt(inputString);

		case 7:
			return parseInt(inputString);

		case 8:
			return parseInt(inputString);

		default:
			break;
	}
}

//* Convertir número a matriz invertida de dígitos
//* Dado un número aleatorio no negativo, debe devolver los dígitos de este número dentro de una matriz en orden inverso.

//* Ejemplo (Entrada => Salida):
//* 35231 => [1,3,2,5,3]
//* 0 => [0]

let n = [35331894];

function digitize() {
	let num = n.toString();
	let arr = num.split("");
	return arr.reverse();
}
//! funciona pero no pasa el test de codewars !!!

//* Depuración de la función sayHello
//* La nave estelar Enterprise se ha encontrado con un problema al crear un programa para saludar a todos cuando suben a bordo. ¡Es su trabajo arreglar el código y hacer que el programa vuelva a funcionar!

//* Salida de ejemplo:

//* Hello, Mr. Spock

let name = "Mr. Spock";

function sayHello() {
	return `Hello, ${name}`;
}

//* ¿Puedes encontrar la aguja en el pajar?

//* Escriba una función findNeedle()que tome un array montón de basura pero que contenga uno"needle"

//* Después de que su función encuentre la aguja, debería devolver un mensaje (como una cadena) que dice:

//* "found the needle at position" además index encontró la aguja, así que:

//* Ejemplo (Entrada --> Salida)

//* ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

let haystack = [
	"hay",
	"junk",
	"hay",
	"needle",
	"hay",
	"moreJunk",
	"randomJunk",
];

function findNeedle() {
	let search = haystack.indexOf("needle");
	if (search !== -1) {
		return `found the needle at position ${search} `;
	} else {
		return "La palabra 'needle' no se encuentra en el array.";
	}
}

//! funciona pero no pasa el test de codewars !!!

//* Hubo un examen en tu clase y lo pasaste. ¡Felicidades!
//* Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

//* Recibe una matriz con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

//* ¡Regresa True si estás mejor, de lo contrario False!

//* Nota:
//* Sus puntos no están incluidos en la matriz de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la matriz dada!

let classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
let yourPoints = 80;

function betterThanAverage() {
	let suma = 0;
	for (let i = 0; i < classPoints.length; i++) {
		suma += classPoints[i];
	}
	const promedio = suma / classPoints.length;
	return yourPoints > promedio;
}

//* Se le dará una lista de cadenas. Debe ordenarlo alfabéticamente (distingue entre mayúsculas y minúsculas y según los valores ASCII de los caracteres) y luego devolver el primer valor.

//* El valor devuelto debe ser una cadena, y tener "***"entre cada una de sus letras.

//* No debe eliminar ni agregar elementos de/a la matriz.

let s = [
	"bitcoin",
	"take",
	"over",
	"the",
	"world",
	"maybe",
	"who",
	"knows",
	"perhaps",
];
function twoSort() {
	s.sort();
	const string = s[0].split("").join("***");
	return string;
}

//* Dada una matriz no vacía de enteros, devuelva el resultado de multiplicar los valores en orden. Ejemplo:

//* [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let x = [1, 2, 3, 4];
let result = 1;

function grow() {
	for (let i = 0; i < x.length; i++) {
		result *= x[i];
	}
	return result;
}

//* Complete la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. Deben conservarse todos los espacios en la cadena.

//* Ejemplos

//* "This is an example!" ==> "sihT si na !elpmaxe"
//* "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

reverseWords("el mundo esta en llamas");

//* Crea una función que responda a la pregunta "¿Estás tocando el banjo?".
//* Si tu nombre comienza con la letra "R" o "r" minúscula, ¡estás tocando el banjo!

//* La función toma un nombre como único argumento y devuelve una de las siguientes cadenas:

//* name + " plays banjo"
//* name + " does not play banjo"

//* Los nombres dados son siempre cadenas válidas.

function areYouPlayingBanjo(name) {
	// Implement me
	return name;
}

//* Implemente una función que convierta el valor booleano dado en su representación de cadena.

//* Nota: Solo se darán entradas válidas.

function booleanToString(b) {
	return b ? "true" : "false";
}

//* Crea una función que dé un saludo personalizado. Esta función toma dos parámetros: namey owner.

//* Use condicionales para devolver el mensaje adecuado:

//* caso	devolver

//* el nombre es igual al dueño	'Hola jefe'

//* de lo contrario	'Hola invitado'

function greet(name, owner) {
	return name === owner ? "Hello boss" : "Hello guest";
}

//* En esta pequeña tarea, se le da una cadena de números separados por espacios y tiene que devolver el número más alto y el más bajo.

//* Ejemplos
//* highAndLow("1 2 3 4 5");  // return "5 1"
//* highAndLow("1 2 -3 4 5"); // return "5 -3"
//* highAndLow("1 9 3 4 -5"); // return "9 -5"
//* notas

//* Todos los números son válidos Int32, no es necesario validarlos.
//* Siempre habrá al menos un número en la cadena de entrada.
//* La cadena de salida debe ser dos números separados por un solo espacio, y el número más alto es el primero.

let str1 = "";
let str2 = "";

function highAndLow(numbers) {
	const str1 = numbers.charAt(numbers.length - 1);
	const str2 = numbers.charAt(0);
	return str1.concat(" " + str2);
}
highAndLow("1, 9, 3, 4, -5");
//! falta que verifique los numeros negativos solo devuelve positivos !!!

//* Escriba una función para dividir una cadena y convertirla en una matriz de palabras.

//* Ejemplos (Entrada ==> Salida):
//* "Robin Singh" ==> ["Robin", "Singh"]

//* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string) {
	// code code code
}
