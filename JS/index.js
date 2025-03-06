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

function Person(age, name) {
	let _name = name;
	this.age = age;

	Object.defineProperty(this, "name", {
		get: function () {
			return _name;
		},
		set: function (newname) {
			_name = newname;
		},
	});
}
Person.prototype.run = function () {
	console.log('person: ', this.name);
};
Person.walk = function () {
	console.log("walking");
};
Person.walk();

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
function Employee(name, age, company) {
	// super(name, age);
  Person.call(this, name, age);
	this.company = company;
}
// Employee.prototype = {...Person.prototype};
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.run = function () {
	console.log('employee: ', this.name);
};

const p = new Person(12, "David");
// console.log(p);
console.log(p.name);
p.run();

const e = new Employee(34, "UU", "Jump");
console.log(e);
e.run();

// p.run();

// Array.prototype.myForEach = function() {
//   console.log('this is my forEach');
// }

// // promise,
// Promise.all()
// Math.max()
// Array.from()

//
