/*function greetUser(name){
    console.log("Hello, " + name + "!");
}
greetUser("Vishali");

let greet = function(name){
    console.log("Hi, " + name + "!");
}no
greet("Varsha");

let greetArrow = (name) => {
    console.log("Hey, " + name + "!");
}
greetArrow("Vidhya");


function add(num1,num2){
    console.log(num1+num2);
}
add(10,20);


let multiply = (num3,num4)=>"Multiplication of " + num3 + " and " + num4 + " is " + (num3*num4);
console.log(multiply(10,20));

let greetuser = function (num5,num6){
    console.log("Subtraction of " + num5 + " and " + num6 + " is " + (num5-num6));
}
greetuser(20,10);

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);*/


let arr = [21, 25, 29, 24, 28];
console.log(arr);
const double = arr.map((num) => {
    return num * 2;
});
console.log("Double: " + double);
let arr2 = [...arr.map((num) => num ** 2)];
console.log("Double (using spread): " + arr2);

let arr3 = [...arr.filter((num) => num > 25)];
console.log("Filtered (greater than 25): " + arr3);

let arr4 = [...arr.reduce((acc, num) => {
    acc.push(num * 3);
    return acc;
}, [])];
console.log("Reduced (tripled): " + arr4);

let newArr = [...arr, arr2, arr3, arr4];
console.log("New Array: " + newArr);
console.log("1.Logging");
setTimeout(() => {
    console.log("2.Logging");
}, 1000);
console.log("3.Logging");

const getUser = (id)=>{
    return new Promise((resolve, reject) => {
        if(id){
            resolve({id: id, name: "Vishali"});
        }
        reject("id is not found");
    });
};

getUser(1).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
});
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const outputElement = document.getElementById("output");

buttonElement.addEventListener("click", () => {
    const inputValue = inputElement.value;
    outputElement.textContent = "You entered: " + inputValue;
});
