// var id = 5; //js
var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b)
						if (Object.prototype.hasOwnProperty.call(b, p))
							d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function (d, b) {
			if (typeof b !== 'function' && b !== null)
				throw new TypeError(
					'Class extends value ' +
						String(b) +
						' is not a constructor or null'
				);
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype =
				b === null
					? Object.create(b)
					: ((__.prototype = b.prototype), new __());
		};
	})();
// Basic Types
var id = 5; //ts
var company = 'vinayak';
var hireable = true;
var x = 'hello';
x = true; //since type is any we can do anything here
var age;
age = 26;
// console.log("ID: ", id)
var ids = [1, 2, 3, 4, 5, 6]; //js
var idsts = [1, 2, 3, 4, 5]; //correct
// lets ids2ts:number[] = [1,2,3,4,true]//wrong
var array = [1, true, 'vinayak'];
//tuple
var person = [1, 'vinayak', true];
//tuple array
var employee;
employee = [
	[1, 'vin'],
	[2, 'ayak'],
];
//union
var pid;
pid = '22';
//enum set of named constants either numeric or string
// enum Direction1 {
//     Up, //0
//     Down, //1
//     Left, //2
//     Right //3
// }
// console.log("Up", Direction1.Up)
var Direction1;
(function (Direction1) {
	Direction1[(Direction1['Up'] = 1)] = 'Up';
	Direction1[(Direction1['Down'] = 2)] = 'Down';
	Direction1[(Direction1['Left'] = 3)] = 'Left';
	Direction1[(Direction1['Right'] = 4)] = 'Right'; //4
})(Direction1 || (Direction1 = {}));
// console.log("Up", Direction1.Right)
var Direction;
(function (Direction) {
	Direction['Up'] = 'Up';
	Direction['Down'] = 'Down';
	Direction['Left'] = 'Left';
	Direction['Right'] = 'Right'; //4
})(Direction || (Direction = {}));
var user = {
	id: 1,
	name: 'vinayak',
};
//type assertion
var cid = 1;
// let customerId = <number>cid example 1
var customerId = cid; // example 2
//using types in functions
function addNum(x, y) {
	return x + y;
} //function returns number
// console.log(addNum(10, 20))
function log(message) {
	console.log(message);
}
var user1 = {
	id: 1,
	name: 'vinayak',
};
var p1 = 1;
//correct
var add = function (x, y) {
	return x + y;
};
//wrong
// const add1: MathFunc = (x: number, y: string): number => x + y
var sub = function (x, y) {
	return x - y;
};
//classes with inteface
var Person = /** @class */ (function () {
	function Person(id, name) {
		this.id = id;
		this.name = name;
	}
	return Person;
})();
var Person1 = /** @class */ (function () {
	function Person1(id, name) {
		this.id = id;
		this.name = name;
	}
	Person1.prototype.register = function () {
		return ''.concat(this.name, ' is now registered');
	};
	return Person1;
})();
var vinayak = new Person1(1, 'vinayak');
var shahdeo = new Person(2, 'shahdeo');
console.log(vinayak.register());
console.log(vinayak, shahdeo);
var Employee = /** @class */ (function (_super) {
	__extends(Employee, _super);
	function Employee(id, name, position) {
		var _this = _super.call(this, id, name) || this; // same as before in person class
		_this.position = position;
		return _this;
	}
	return Employee;
})(Person1);
var emp = new Employee(3, 'abhishek', 'lead');
// console.log(emp.register())
//Generics
function getArray(items) {
	return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(['lal', 'vinayak', 'nath', 'shahdeo']);
// numArray.push("hello")//no problem when not using generics
numArray.push(1);
//todo add topics for each concept of typesript
