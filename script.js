// ==========================
// VARIABLES
// ==========================

let studentName = "Musa";
const internship = "SIWES";
let completedWeeks = 5;

document.getElementById("variables").innerHTML = `
<p>Name: ${studentName}</p>
<p>Programme: ${internship}</p>
<p>Completed Weeks: ${completedWeeks}</p>
`;


// ==========================
// NUMBERS
// ==========================

let score1 = 85;
let score2 = 90;

let average = (score1 + score2) / 2;

document.getElementById("numbers").innerHTML = `
<p>Score One: ${score1}</p>
<p>Score Two: ${score2}</p>
<p>Average Score: ${average}</p>
`;


// ==========================
// STRINGS
// ==========================

let firstName = "Musa";
let lastName = "Gaya";

let fullName = firstName + " " + lastName;

document.getElementById("strings").innerHTML = `
<p>First Name: ${firstName}</p>
<p>Last Name: ${lastName}</p>
<p>Full Name: ${fullName}</p>
`;


// ==========================
// BOOLEANS
// ==========================

let passed = true;
let loggedIn = false;

document.getElementById("booleans").innerHTML = `
<p>Passed: ${passed}</p>
<p>Logged In: ${loggedIn}</p>
`;


// ==========================
// COMPARISONS
// ==========================

let age = 20;

let comparisonResult = age >= 18;

document.getElementById("comparisons").innerHTML = `
<p>Age = ${age}</p>
<p>Is Adult? ${comparisonResult}</p>
<p>10 > 5 : ${10 > 5}</p>
<p>10 == "10" : ${10 == "10"}</p>
<p>10 === "10" : ${10 === "10"}</p>
`;


// ==========================
// FUNCTIONS
// ==========================

function greetUser(){

let name = document.getElementById("nameInput").value;

if(name===""){
name="Guest";
}

document.getElementById("greeting").innerHTML=
`Welcome ${name}! Thanks for visiting this JavaScript presentation.`;

}


// ==========================
// ARRAYS
// ==========================

let languages = [
"HTML",
"CSS",
"JavaScript",
"React",
"Git"
];

let arrayOutput="";

languages.forEach(function(item){

arrayOutput += "<li>"+item+"</li>";

});

document.getElementById("arrays").innerHTML =
"<ul>"+arrayOutput+"</ul>";


// ==========================
// OBJECTS
// ==========================

let student = {

name:"Musa",

department:"Computer Science",

level:"300",

track:"Frontend"

};

document.getElementById("objects").innerHTML = `
<p>Name: ${student.name}</p>
<p>Department: ${student.department}</p>
<p>Level: ${student.level}</p>
<p>Track: ${student.track}</p>
`;


// ==========================
// LOOPS
// ==========================

let loopOutput="";

for(let i=1;i<=10;i++){

loopOutput += `<p>Iteration ${i}</p>`;

}

document.getElementById("loops").innerHTML = loopOutput;


// ==========================
// CALCULATOR
// ==========================

function calculate(){

let num1 = Number(document.getElementById("num1").value);

let num2 = Number(document.getElementById("num2").value);

let sum = num1 + num2;

document.getElementById("answer").innerHTML =
"Sum = " + sum;

}


// ==========================
// DATE & TIME
// ==========================

function showTime(){

let today = new Date();

document.getElementById("time").innerHTML =
today;

}