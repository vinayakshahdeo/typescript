// var id = 5; //js
// Basic Types
var id = 5; //ts
var company = "vinayak";
var hireable = true;
var x = "hello";
x = true; //since type is any we can do anything here
var age;
age = 26;
// console.log("ID: ", id)
var ids = [1, 2, 3, 4, 5, 6]; //js
var idsts = [1, 2, 3, 4, 5]; //correct
// lets ids2ts:number[] = [1,2,3,4,true]//wrong
var array = [1, true, "vinayak"];
//tuple
var person = [1, "vinayak", true];
//tuple array
var employee;
employee = [
    [1, "vin"],
    [2, "ayak"]
];
//union
var pid;
pid = "22";
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; //3
})(Direction1 || (Direction1 = {}));
console.log("Up", Direction1.Up);
