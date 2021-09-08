// var id = 5; //js

// Basic Types
let id: number = 5 //ts
let company: string = "vinayak";
let hireable: boolean = true;
let x: any = "hello";
x = true //since type is any we can do anything here
let age: number

age = 26;
// console.log("ID: ", id)

let ids = [1, 2, 3, 4, 5, 6] //js
let idsts: number[] = [1, 2, 3, 4, 5] //correct
// lets ids2ts:number[] = [1,2,3,4,true]//wrong
let array: any[] = [1, true, "vinayak"]

//tuple
let person: [number, string, boolean] = [1, "vinayak", true]

//tuple array
let employee: [number, string][]

employee = [
    [1, "vin"],
    [2, "ayak"]
]

//union
let pid: string | number
pid = "22"


//enum set of named constants either numeric or string
// enum Direction1 {
//     Up, //0
//     Down, //1
//     Left, //2
//     Right //3
// }
// console.log("Up", Direction1.Up)
enum Direction1 {
    Up = 1,
    Down, //2
    Left, //3
    Right //4
}
// console.log("Up", Direction1.Right)
enum Direction {
    Up = "Up",
    Down = "Down", //2
    Left = "Left", //3
    Right = "Right" //4
}
// console.log("Up", Direction.Right)

//Objects

// const user: { id: number, name: string } = {
//     id: 1,
//     name: 'vinayak'
// }
//other way of typing 
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: "vinayak"
}

//type assertion

let cid: any = 1
// let customerId = <number>cid example 1
let customerId = cid as number // example 2


//using types in functions

function addNum(x: number, y: number): number {
    return x + y
} //function returns number
// console.log(addNum(10, 20))

function log(message: string | number): void {
    console.log(message)
}
// log("message");

//interfaces
interface User1 {
    readonly id: number,// this property cannot be modified
    name: string,
    age?: number//this field is optional in object
}
const user1: User1 = {
    id: 1,
    name: "vinayak"
}

type Point = number | string
const p1: Point = 1;

//can't use interface with unions or primitives


interface MathFunc {
    (x: number, y: number): number
}
//correct
const add: MathFunc = (x: number, y: number): number => x + y
//wrong
// const add1: MathFunc = (x: number, y: string): number => x + y

const sub: MathFunc = (x: number, y: number): number => x - y


//classes with inteface

class Person {
    private id: number //can only be accessed from this class
    protected name: string //access in this class or where the current class is extended

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
interface PersonInterface {
    id: number,
    name: string,
    register(): string// put register into number and it wont work
}
class Person1 implements PersonInterface {
    id: number //can only be accessed from this class
    name: string //access in this class or where the current class is extended

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`
    }
}
const vinayak = new Person1(1, "vinayak")
const shahdeo = new Person(2, "shahdeo")

console.log(vinayak.register())

console.log(vinayak, shahdeo)



class Employee extends Person1 {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name);// same as before in person class
        this.position = position
    }
}

const emp = new Employee(3, "abhishek", "lead")

// console.log(emp.register())


//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3])
let strArray = getArray<string>(["lal", "vinayak", "nath", "shahdeo"])

// numArray.push("hello")//no problem when not using generics
numArray.push(1)