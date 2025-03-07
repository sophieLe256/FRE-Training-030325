/**
 * @class
 * what is javascript, ECMAScript  ES6
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data: : number, string, undefined, boolean,
 * Object Data or reference Data : array, object
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 *
 * @class
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 *
 * @class
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 *
 * @class
 * XHR
 * callback function; callback hell
 * Promise
 * MyPromise
 * MyFetch
 *
 * @class
 * todolist:
 *   MVC
 *   NodeList vs. HTMLCollection
 *   Event bubbling
 *
 * @class
 * JQuery
 */

// var num = 10;
// function foo(num) {
//   num = 2;
// }
// foo(num);
// console.log(num);

// var obj = {age: 10};
// function bar(obj) {
//   obj.age = 2;
// }
// bar(obj);
// console.log(obj.age);

// * coercion & equality == vs. ===
// console.log(1 == '1'); // value: type:
// console.log(1 === '1');
// console.log(1 == true);
// console.log(true + 1); //2 true + false // 1
// console.log(typeof ('12' + 1)); // 2
// console.log('12' - 1); // 11
// console.log(typeof ('hello' - 1)); // hello1
// console.log(typeof null); // 11
// console.log(typeof undefined); // 11
// console.log()
// * falcy: '', 0, null, undefined, false, NaN,
// if (-1) {
//   console.log('trucy')
// } else {
//   console.log('falcy')
// }
//*          var   vs. let vs. const, vs. function
//scrope:    function, block,  block , block
// hoisting: var, function

// (function(require, exports, module, __filename, __dirname) {

// // console.log(a);
// function foo() {
//   var a = 0;
//   console.log('inner: ', a);
// }
// var b = 0;
// // })()

// let c = 0;
// const

// if (true) {
//   const a = 6;
//   a = 34;
// }
// console.log('outer: ', a);
// foo();

// if (true) {
//   function foo() {
//     console.log(111);
//   }
// }

// let a = 0;
// a = true;
// const b = false;
// b = 34;
// const obj = {};
// obj.name = 'TT';
// const arr = [];
// arr[0] = 'TT';
// * immutable vs. mutable
// let obj = {
//   name: 'TT',
//   age: 45
// };
// // obj = {...obj, salary: 34};

// obj.salary = 45

// * oop: Object oriented programming in JS
// * encapsulation; inheritance; Poly-morph-ism; abstraction;
// * constructer function, prototype chain
//* encapsulation

// class Person {
// 	// var
// 	#name = "TT";
// 	age = 56;

// 	get name() {
// 		return this.#name;
// 	}
// 	set name(newname) {
// 		this.#name = newname;
// 	}

// 	// lifecycle
// 	constructor(age, name) {
// 		this.#name = name;
// 		this.age = age;
// 		console.log("im Person class");
// 	}

// 	// method
// 	run(param) {
// 		console.log(this.#name + " is running");
// 		console.log(this.#name, "is running");
// 		console.log(`${this.#name} is running`);
// 	}

// 	static walk() {
// 		console.log("walking");
// 	}
// } // "" '' ``

// function Person(age, name) {
// 	let _name = name;
// 	this.age = age;

// 	Object.defineProperty(this, "name", {
// 		get: function () {
// 			return _name;
// 		},
// 		set: function (newname) {
// 			_name = newname;
// 		},
// 	});
// }
// Person.prototype.run = function () {
// 	console.log('person: ', this.name);
// };
// Person.walk = function () {
// 	console.log("walking");
// };
// Person.walk();

// * inheritance
// class Employee extends Person {
// 	constructor(name, age, company) {
// 		super(name, age);
// 		this.company = company;
// 	}
//   run() {
//     console.log(this.company, this.name, this.age);
//   }
// }
// function Employee(name, age, company) {
// 	// super(name, age);
//   Person.call(this, name, age);
// 	this.company = company;
// }
// // Employee.prototype = {...Person.prototype};
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.run = function () {
// 	console.log('employee: ', this.name);
// };

// const p = new Person(12, "David");
// // console.log(p);
// console.log(p.name);
// p.run();

// const e = new Employee(34, "UU", "Jump");
// console.log(e);
// e.run();

// p.run();

// Array.prototype.myForEach = function() {
//   console.log('this is my forEach');
// }

// // promise,
// Promise.all()
// Math.max()
// Array.from()

//
// * loop in JS: array, object
// * MyForeach, MyMap, MyFilter, MyReduce
// *  Object.values(); Object.keys(); Object.entries(); 
// *
// * destructure
// *
// * rest parameter vs. spread operator
// *
// * object copy

// const arr = [false, 2, 3, 4, 5, true, 0, "", "test"];
// const obj = {
// 	name: "EE",
// 	age: 23,
// };
// for (let i = 0; i < arr.length; i++) {
//   if (!!arr[i]) {
//     console.log(arr[i]);
//     break;
//   }
// }
// const a = 'test';
// console.log(typeof !!(true + 1));
// // console.log(typeof (a + ''));
// console.log(typeof +a);
// for (const ele of arr) {
//   console.log(ele);
//   continue;
// }
// for (const key in arr) {
//   console.log(arr[key]);
//   break;
// }
// for (const key in obj) {
//   console.log(key, obj[key]);
// }
// console.log(arr['3']);
// arr.forEach(function(cur, i, array) {
//     // console.log(arr[i]);
//     // continue;
//     array[i] = 10;
// });

// Array.prototype.myForEach = function (cb) {
// 	// console.log("this: ", this);
// 	for (let i = 0; i < this.length; i++) {
// 		cb(this[i], i, this);
// 	}
// };
// arr.myForEach(function(cur, i, array) {
//     // console.log(arr[i]);
//     // continue;
//     array[i] = 10;
// });

// Array.prototype.myMap = function (cb) {
//   const arr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		arr.push(cb(this[i], i, this));
// 	}
//   return arr;
// };
// const newarr = arr.myMap(function(cur) {
//   return 5
// });

//* filter, finde, some, every...

// console.log(newarr);

// str.split('').reduce((acc, cur, i, array) => acc + cur + cur, '');
// '' + a + a = aa + b + b = aabb + c + c = aabbcc
// console.log(res); //

// const numbers = [175, 50, 25];

// Array.prototype.myReduce = function(cb, initacc) {
//   let acc;
//   let index;
//   if (initacc == undefined) {
//     acc = this[0];
//     index = 1;
//   } else {
//     acc = initacc;
//     index = 0;
//   }

// 	for (let i = index; i < this.length; i++) {
// 		acc = cb(acc, this[i], i, this);
// 	}
//   return acc;
// }

// const str = 'abc'; // 'aabbcc';

// const res = str.split('').myReduce(function(acc, cur, i, array) {
//   return acc + cur + cur;
// }, '');

// const res = numbers.myReduce(function(total, num, i) {
//   // console.log('hello' + i);
//   return total - num;
// });
// console.log(res);

// * destructure
// const [j, i] = [23, function() {}];

// const { a: name, c, d, innerObj: {innerArr: arr} } = {
// 	a: 12442312,
// 	b: 45,
// 	c: 42,
//   innerObj: {
//     innerArr: [3, 4, 5]
//   }
// };
// console.log(arr);

// * rest parameter vs. spread operator ...
// const obj = {
//   name: 'TT',
//   age: 23
// };
// const objcopy = {...obj}; // spread operator
// console.log(objcopy);

// function foo(a, b, ...args) { // rest parameter
//   // console.log([...arguments]); // spread operator
//   console.log('args: ', args); // spread operator
// }
// foo(1, 2, 3, 4, 5, 7);

// function foo(a, b) {
//   return a + b;
// }
// function hello(a, b, c) {
//   return a + b - c;
// }

// function bar(cb) {
//   return function(...args) { // <----------------------rest parameter
//     return cb(...args); // spread operator
//   }
// }

// const baz = bar(foo);
// const rephello = bar(hello);

// console.log(foo(4, 5)); // 9
// console.log(baz(4, 5)); // 9

// console.log(hello(4, 5, 6)); // 9
// console.log(rephello(4, 5, 6)); // 9

// * object copy: shallow, clone(deepcopy)
const obj = {
	name: "TT",
	age: 23,
	arr: [1, 2, 3],
	date: new Date(),
	foo: function () {
		console.log();
	},
};
// const objcopy = {...obj};
// objcopy.arr[0] = 100;

// console.log(obj, objcopy);
// const scopyobj = obj;

// * JSON.stringify, JSON.parse
// console.log(JSON.stringify(obj));
// const objcopy = JSON.parse(JSON.stringify(obj));

// * structuredClone
// const objcopy = structuredClone(obj);
// console.log(obj, objcopy);

// * cloneDeep

// * Object.create()

// ^ interview question~~~~~~~~~~~~~~~
const names = [
	{ userid: 2, name: "Velen" },
	{ userid: 56, name: "Illidan" },
	{ userid: 23, name: "Muradin" },
	{ userid: 12, name: "Sylvanas" },
	{ userid: 44, name: "Cenarius" },
	{ userid: 4, name: "Gul'Dan" },
];
const roles = [
	{ userid: 2, role: "Mage" },
	{ userid: 4, role: "Worlock" },
	{ userid: 56, role: "Demon Hunter" },
	{ userid: 66, role: "Druid" },
	{ userid: 87, role: "Shaman" },
	{ userid: 12, role: "Hunter" },
];

function solution(...args) {
	let tar = [];
	args.forEach((cur) => {
		tar = [...tar, ...cur];
	}); // [].concat()
	console.log(tar);

	const map = {};
	tar.forEach((ele) => {
		map[ele.userid] = {
			...{ name: null, userid: null, role: null },
			...map[ele.userid],
			...ele,
		};
	});

	console.log(map);
  return Object.values(map);
}
console.log(solution(names, roles));
/* 
  2: {},
  66: {}
*/
// [
//   { userid: 2, name: "Velen", role: "Mage"},
//   ...
// ]
