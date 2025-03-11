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
//   // Person.call(this, name, age);
//   Person.apply (this, [name, age]);
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
// const obj = {
// 	name: "TT",
// 	age: 23,
// 	arr: [1, 2, 3],
// 	date: new Date(),
// 	foo: function () {
// 		console.log();
// 	},
// };
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
// const names = [
// 	{ userid: 2, name: "Velen" },
// 	{ userid: 56, name: "Illidan" },
// 	{ userid: 23, name: "Muradin" },
// 	{ userid: 12, name: "Sylvanas" },
// 	{ userid: 44, name: "Cenarius" },
// 	{ userid: 4, name: "Gul'Dan" },
// ];
// const roles = [
// 	{ userid: 2, role: "Mage" },
// 	{ userid: 4, role: "Worlock" },
// 	{ userid: 56, role: "Demon Hunter" },
// 	{ userid: 66, role: "Druid" },
// 	{ userid: 87, role: "Shaman" },
// 	{ userid: 12, role: "Hunter" },
// ];

// function solution(...args) {
// 	let tar = [];
// 	args.forEach((cur) => {
// 		tar = [...tar, ...cur];
// 	}); // [].concat()
// 	console.log(tar);

// 	const map = {};
// 	tar.forEach((ele) => {
// 		map[ele.userid] = {
// 			...{ name: null, userid: null, role: null },
// 			...map[ele.userid],
// 			...ele,
// 		};
// 	});

// 	console.log(map);
//   return Object.values(map);
// }
// console.log(solution(names, roles));
/* 
  2: {},
  66: {}
*/
// [
//   { userid: 2, name: "Velen", role: "Mage"},
//   ...
// ]

// * iife
// const API = (function () {
// 	const getTodo = function () {
// 		fetch("url").then();
// 	};
//   const deleteTodo = function () {
// 		fetch("url").then();
// 	};

// 	return {
// 		getTodo,
//     deleteTodo
// 	};
// })();
// }());

// * currying
// * closure
// function foo(n) {
//   const hello = 'hello';
//   return function(m) {
//     return n + m;
//   }
// }
// const bar = foo(4); // n = 4, hello = 'hello'
// const baz = foo(7); // n = 7, hello = 'hello'
// console.log(bar(5)); // sum: 9
// console.log(baz(5)); // sum: 12

// function add(n) {
//   return function(cur, i, self) {
//     return cur + n;
//   }
// }

// console.log([1, 2, 3].map(add(100)));

// ^ interview question~~~~~~~~~~~~~~~
// const sum = function (a, b) {
// 	return a + b;
// };
// const cb = function (a, b, c, d) {
// 	return a * b + c - d;
// };

// const fnForSum = limitedFunction(3, sum); // n = 3
// const fnForCb = limitedFunction(5, cb); // n = 5

// function limitedFunction(num, callback) {
//   let counter = num;

//   return function(...args) {

//     if (counter > 0) {
//       counter--;
//       return callback(...args);
//     } else {
//       return 'over limited!';
//     }
//   }
// }

// console.log('for sum: ', fnForSum(4, 5)); // 9
// console.log('for sum: ', fnForSum(4, 5)); // 9
// console.log('for sum: ', fnForSum(4, 5)); // 9
// console.log('for sum: ', fnForSum(4, 5)); // 9
// console.log('for sum: ', fnForSum(4, 5)); // 9
// console.log('for sum: ', fnForSum(4, 5)); // 9

// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9
// console.log(fnForCb(4, 5, 1, 2)); // 9

// ^ interview question~~~~~~~~~~~~~~~
// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c + 2; // 16

// console.log(runAll(callback1, callback2, callback3)(1)); // 16

function runAll(...callbackArr) {
	//[callback1, callback2, callback3]

	return function (num) {
		let res = num;
		while (callbackArr.length) {
			const fn = callbackArr.shift(); // push, pop, shift, unshift
			res = fn(res);
			console.log("res: ", res);
		}
		return res;
		// return callbackArr.reduce(function (res, fn) {
		// 	return fn(res);
		// }, num);
	};
}

// * this ----> object, be use in a function
// * call, apply, bind

// function(require, exports, module, __filename, __dirname) {
//   function foo() {
//     console.log(this); //
//   }
//   foo();
// //}
// // exports.hi = 'hi';
// console.log(this); // module.exports
// console.log(exports);
// console.log(module.exports);
// console.log(__filename);
// console.log(__dirname);

// const {foo: bar} = require("./test");
// console.log(bar(100));
// "use strict"
// const obj = { // promise instance
//   name: 'TT',
//   foo: function() { // then
//     console.log('this in foo: ', this); //<-------------------

//     const bar = function() {
//       console.log('this in bar: ', this); // <------
//     } //<-------------------

//     // this
//     // const bar = () => {
//     //   console.log('this in bar: ', this); // <------
//     // }
//     bar();
//     return this;
//   }
// }
// obj.foo();

// * call, apply, bind
// const obj = {
//     pi: 3.14159265,
//     getPi() {
//         return this.pi;
//     }
// }
// function printPi(num1, num2) { // 100
//   console.log('from print: ', this.pi, num1, num2);
// }
// const newPrintPi = printPi.bind(obj); // lazy

// printPi.call(obj, 4, 5); // eager 1 + 100
// printPi.apply(obj, [4, 5]); // eager 1 + 1.length 100
// newPrintPi(4, 5);
// class Person {
//   name = 'RR';
//   walk() {
//     this.name;
//   }
// }

// // * arrow bind this auto, function
// console.log([1, 2, 3].map((cur, i, self) => {
//   console.log(this);
//   return cur + this.age;
// }, {age: 45}));

// * event loop
// // var i = 0; // let
// for (let i = 0; i < 5; i++) {
//   // (function(v) {
//   //   v = 0
//   //   setTimeout(() => console.log(v), v * 1000);
//   // })(i);
//   setTimeout(() => console.log(i), (5 - i) * 1000);
// } // 0, 1, 2, 3, 4 vs. 5, 5, 5, 5, 5
// console.log('hello');

/* 
  call stack: [() => console.log(i), i = 4;] // closure: v = 0

  web api: [
     () => console.log(i), 5s, i = 0;
  ]

  task queue: [
    
     () => console.log(i), i = 3;
      () => console.log(i), i = 2;
       () => console.log(i), i = 1;
        () => console.log(i), i = 0;
  ]
*/

// * XHR
// const url = "https://jsonplaceholder.typicode.com/todos";
// const print = (res) => {
// 	console.log("start print");
// 	console.log(res);
// 	console.log("end print");
// };

// function getDataFromBackend(url) {
// 	return new Promise((resolve, reject) => {
// 		const xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function () {
// 			if (this.readyState == 4 && this.status == 200) {
// 				resolve(JSON.parse(xhttp.response));
// 			}
// 		};
// 		xhttp.open("GET", url);
// 		xhttp.send();
// 	});
// }

// 67, 12, 87
// getDataFromBackend(`${url}/67`)
// 	.then((data) => {
// 		print(data);
// 		return getDataFromBackend(`${url}/12`);
// 	})
// 	.then((data) => {
// 		print(data);
// 		return getDataFromBackend(`${url}/87`);
// 	})
// 	.then(console.log);
// getDataFromBackend(`${url}/12`, print);
// getDataFromBackend(`${url}/87`, print);

// (async () => {
//   print(await getDataFromBackend(`${url}/67`)); //5s
//   print(await getDataFromBackend(`${url}/12`)); //4s
//   print(await getDataFromBackend(`${url}/87`)); //6s
// })(); // 15s; 6s

console.log("hello world");

// * callback function; callback hell
// const foo = () => console.log("foo");
// const randomNumber = () => Math.floor(Math.random() * 6);

// const callFnInRandomTime = (callback) => {
// 	const timer = randomNumber();
// 	console.log(`${timer}s`);

// 	setTimeout(callback, timer * 1000);
// };

// callFnInRandomTime(() => {
//   callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//       callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//           callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//               callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                   foo();
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
// * Promise: ES6, let const, arrow function, class, promise

// * MyPromise
// class MyPromise {
// 	thenCallbackQueue = [];
// 	currentValue = undefined;

// 	constructor(executor) {
// 		executor(this.resolve.bind(this), this.reject);
// 	}

// 	resolve(resData) {
// 		this.currentValue = resData;
// 		// console.log("this is resolve: ", resData);
// 		setTimeout(() => {
// 			while (this.thenCallbackQueue.length) {
// 				const fn = this.thenCallbackQueue.shift();
// 				this.currentValue = fn(this.currentValue);
// 			}
// 		});
// 		// console.log('console.log the name in promise: ', this.name);
// 	}

// 	reject = () => {
// 		// console.log('console.log the name in promise: reject ', this.name);
// 	};

// 	then(thenFn) {
// 		this.thenCallbackQueue.push(thenFn);
// 		return this;
// 	}
// 	catch() {}
// }

// new MyPromise((resolve, reject) => {
// 	console.log("hello"); // 1
// 	resolve('hello from antra');
// })
// 	.then((data) => {
// 		console.log(data); // 3
// 		return data + 'hello';
// 	})
// 	.then((data) => {
// 		console.log(data); // 3
// 		return data + 'hello';
// 	})
// 	.then((data) => {
// 		console.log(data); // 3
// 		return data + 'hello';
// 	})
// 	.catch(() => {});

// console.log(3); // 2

// taskqueue ----> 3

// const isThenable = (maybePromise) =>
// 	maybePromise && typeof maybePromise.then === "function";

// class MyPromise {
// 	#statusGroup = {
// 		PENDING: "pending",
// 		FULFILLED: "fulfilled",
// 		REJECTED: "rejected",
// 	};

// 	#status = this.#statusGroup.PENDING;
// 	#value = undefined;
// 	#reason = undefined;
// 	#thenQueue = [];
// 	#finallyQueue = [];

// 	constructor(executor) {
// 		if (typeof executor === "function") {
// 			try {
// 				executor(this.#resolve.bind(this), this.#reject.bind(this));
// 			} catch (err) {
// 				this.#reject(err);
// 			}
// 		}
// 	}

// 	#propagationResolved() {
// 		setTimeout(() => {
// 			this.#thenQueue.forEach(([controlledPromise, fulfilledFn]) => {
// 				if (typeof fulfilledFn === "function") {
// 					const valueOrPromise = fulfilledFn(this.#value);

// 					if (isThenable(valueOrPromise)) {
// 						valueOrPromise.then(
// 							(value) => controlledPromise.#resolve(value),
// 							(reason) => controlledPromise.#reject(reason)
// 						);
// 					} else {
// 						controlledPromise.#resolve(valueOrPromise);
// 					}
// 				} else {
// 					return controlledPromise.#resolve(this.#value);
// 				}
// 			});

// 			this.#finallyQueue.forEach(
// 				([controlledPromise, sideEffectFn]) => {
// 					sideEffectFn();
// 					controlledPromise.#resolve(this.#value);
// 				}
// 			);

// 			this.#thenQueue = [];
// 			this.#finallyQueue = [];
// 		});
// 	}

// 	#propagationRejected() {
// 		setTimeout(() => {
// 			this.#thenQueue.forEach(([controlledPromise, _, catchFn]) => {
// 				if (typeof catchFn === "function") {
// 					const valueOrPromise = catchFn(this.#reason);

// 					if (isThenable(valueOrPromise)) {
// 						valueOrPromise.then(
// 							(value) => controlledPromise.#resolve(value),
// 							(reason) => controlledPromise.#reject(reason)
// 						);
// 					} else {
// 						controlledPromise.#resolve(valueOrPromise);
// 					}
// 				} else {
// 					return controlledPromise.#reject(this.#reason);
// 				}
// 			});

// 			this.#finallyQueue.forEach(
// 				([controlledPromise, sideEffectFn]) => {
// 					sideEffectFn();
// 					controlledPromise.#reject(this.#value);
// 				}
// 			);

// 			this.#thenQueue = [];
// 			this.#finallyQueue = [];
// 		});
// 	}

// 	#resolve(value) {
// 		if (this.#status === this.#statusGroup.PENDING) {
// 			this.#status = this.#statusGroup.FULFILLED;
// 			this.#value = value;
// 			this.#propagationResolved();
// 		}
// 	}
// 	#reject(reason) {
// 		if (this.#status === this.#statusGroup.PENDING) {
// 			this.#status = this.#statusGroup.REJECTED;
// 			this.#reason = reason;
// 			this.#propagationRejected();
// 		}
// 	}

// 	then(fulfilledFn, catchFn) {
// 		const controlledPromise = new MyPromise();
// 		this.#thenQueue.push([controlledPromise, fulfilledFn, catchFn]);

// 		if (this.#status === this.#statusGroup.FULFILLED) {
// 			this.#propagationResolved();
// 		} else if (this.#status === this.#statusGroup.REJECTED) {
// 			this.#propagationRejected();
// 		}

// 		return controlledPromise;
// 	}

// 	catch(catchFn) {
// 		return this.then(undefined, catchFn);
// 	}

// 	finally(sideEffectFn) {
// 		if (this.#status !== this.#statusGroup.PENDING) {
// 			sideEffectFn();

// 			return this.#status === this.#statusGroup.FULFILLED
// 				? MyPromise.resolve(this.#value)
// 				: MyPromise.reject(this.#reason);
// 		}

// 		const controlledPromise = new MyPromise();
// 		this.#finallyQueue.push([controlledPromise, sideEffectFn]);

// 		return controlledPromise;
// 	}

// 	static resolve(val) {
// 		return new MyPromise((res, _) => {
// 			res(val);
// 		});
// 	}
// 	static reject() {
// 		return new MyPromise((_, rej) => {
// 			rej(val);
// 		});
// 	}

// 	static all(promiseArr) {
// 		return new MyPromise((resolve, rej) => {
// 			const resolvedArr = new Array(promiseArr.length);
// 			let counter = 0;
// 			promiseArr.forEach((p, i) => {
//         if (p instanceof MyPromise) {
//           p.then((d) => {
//             resolvedArr[i] = d;
//             counter++;
//             if (counter === promiseArr.length) {
//               resolve(resolvedArr);
//             }
// 					});
// 				} else {
//           resolvedArr[i] = p;
//           counter++;
//           if (counter === promiseArr.length) {
//             resolve(resolvedArr);
//           }
// 				}
// 			});
// 		});
// 	}
// }

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
// 	setTimeout(resolve, 100, "foo");
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });
// Expected output: Array [3, 42, "foo"]

// new Promise((res, rej) => {
//   res(3)
// }).then(data => {
//   return new Promise((res) => {
//     res(56)
//   })
// }).then(console.log);

// * MyFetch

const url = "https://jsonplaceholder.typicode.com/todos";
const print = (res) => {
	console.log("start print");
	console.log(res);
	console.log("end print");
};

function myFetch(url, options) {
	const method = options && options.method ? options.method : "GET";

	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.open(method, url);

		if (options && options.headers) {
			Object.entries(options.headers).forEach(([key, val]) => {
				xhttp.setRequestHeader(key, val);
			});
		}

		xhttp.onreadystatechange = function () {
			if (
				this.readyState == 4 &&
				this.status >= 200 &&
				this.status < 300
			) {
				resolve({
					json() {
						return Promise.resolve(JSON.parse(xhttp.response));
					},
				});
			}
		};
		options && options.body ? xhttp.send(options.body) : xhttp.send();
	});
}

myFetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => response.json())
	.then((json) => console.log(json));

myFetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));
