// ==========================================
// DOM SELECTORS DEMO
// ==========================================

// Get references to DOM elements
const boxContainer = document.getElementById('boxContainer');
const selectorMessage = document.getElementById('selectorMessage');

// Helper: Clear all selections
function clearSelections() {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.classList.remove('selected', 'special-selected');
    });
}

// Helper: Log message to selector log
function logSelectorMessage(message) {
    selectorMessage.textContent = message;
}

// Select all boxes using querySelectorAll
document.getElementById('selectAllBtn').addEventListener('click', function() {
    clearSelections();
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.add('selected'));
    logSelectorMessage(`✅ Selected ${allBoxes.length} boxes using querySelectorAll('.box')`);
});

// Select special boxes using querySelectorAll
document.getElementById('selectSpecialBtn').addEventListener('click', function() {
    clearSelections();
    const specialBoxes = document.querySelectorAll('.special');
    specialBoxes.forEach(box => box.classList.add('special-selected'));
    logSelectorMessage(`✨ Selected ${specialBoxes.length} special boxes using querySelectorAll('.special')`);
});

// Select first box using querySelector
document.getElementById('selectFirstBtn').addEventListener('click', function() {
    clearSelections();
    const firstBox = document.querySelector('.box');
    if (firstBox) {
        firstBox.classList.add('selected');
        logSelectorMessage(`🔹 Selected first box using querySelector('.box'): "${firstBox.textContent}"`);
    }
});

// Clear selections
document.getElementById('clearSelectionBtn').addEventListener('click', function() {
    clearSelections();
    logSelectorMessage('🧹 Selections cleared');
});

// ==========================================
// DOM EVENTS & CALLBACKS DEMO
// ==========================================

let clickCount = 0;
const clickBtn = document.getElementById('clickBtn');
const clickCounter = document.getElementById('clickCounter');
const eventStatus = document.getElementById('eventStatus');
const eventMessage = document.getElementById('eventMessage');

// Callback function for click event
function handleClick() {
    clickCount++;
    clickCounter.textContent = clickCount;
    logEventMessage(`🖱️ Button clicked! Count: ${clickCount}`);
    
    // Visual feedback
    clickBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickBtn.style.transform = '';
    }, 150);
}

// Log helper for events
function logEventMessage(message) {
    eventMessage.textContent = message;
}

// Attach click event
clickBtn.addEventListener('click', handleClick);
logEventMessage('✅ Click event active');

// Reset counter
document.getElementById('resetCounterBtn').addEventListener('click', function() {
    clickCount = 0;
    clickCounter.textContent = '0';
    logEventMessage('🔄 Counter reset to 0');
});

// Change background color (callback as anonymous function)
document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = ['#dbeafe', '#fce7f3', '#d1fae5', '#fef3c7', '#ede9fe', '#fecaca'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('main').style.backgroundColor = randomColor;
    logEventMessage(`🎨 Background color changed to ${randomColor}`);
});

// Remove event listener
document.getElementById('removeEventBtn').addEventListener('click', function() {
    clickBtn.removeEventListener('click', handleClick);
    eventStatus.textContent = 'Inactive ❌';
    eventStatus.style.color = '#dc2626';
    logEventMessage('⛔ Click event REMOVED - button no longer responds');
});

// Re-add event listener
document.getElementById('addEventBtn').addEventListener('click', function() {
    clickBtn.removeEventListener('click', handleClick);
    clickBtn.addEventListener('click', handleClick);
    eventStatus.textContent = 'Active ✅';
    eventStatus.style.color = '#16a34a';
    logEventMessage('✅ Click event RE-ADDED - button is active again');
});

// ==========================================
// CALLBACK FUNCTIONS DEMO
// ==========================================

const callbackInput = document.getElementById('callbackInput');
const callbackOutput = document.getElementById('callbackOutput');
const callbackBtn = document.getElementById('callbackBtn');

// Callback function that processes input
function processTextInput(input) {
    if (!input || input.trim() === '') {
        return '⚠️ Please enter some text';
    }
    
    const trimmed = input.trim();
    const upper = trimmed.toUpperCase();
    const reversed = trimmed.split('').reverse().join('');
    const wordCount = trimmed.split(/\s+/).length;
    
    return `📝 "${trimmed}" → UPPER: ${upper} | Reversed: ${reversed} | Words: ${wordCount}`;
}

// Higher-order function that executes a callback
function executeCallback(callbackFn) {
    const input = callbackInput.value;
    const result = callbackFn(input);
    callbackOutput.textContent = result;
    logEventMessage(`🔄 Callback executed with input: "${input || '(empty)'}"`);
    return result;
}

// Handle callback execution
function handleCallbackExecution() {
    executeCallback(processTextInput);
}

// Button click event with callback
callbackBtn.addEventListener('click', handleCallbackExecution);

// Enter key event with callback
callbackInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleCallbackExecution();
    }
});

// Also demonstrate callback with array methods (forEach)
// Using forEach with callback - already in arrays section but reinforcing here
const demoArray = ['DOM', 'Events', 'Callbacks'];
const arrayCallback = function(item, index) {
    console.log(`Array item ${index}: ${item}`);
};
demoArray.forEach(arrayCallback);

// ==========================================
// ORIGINAL CODE (Polished)
// ==========================================

// ==========================
// VARIABLES
// ==========================

let studentName = "Musa";
const internship = "SIWES";
let completedWeeks = 5;

document.getElementById("variables").innerHTML = `
    <p><strong>Name:</strong> ${studentName}</p>
    <p><strong>Programme:</strong> ${internship}</p>
    <p><strong>Completed Weeks:</strong> ${completedWeeks}</p>
`;

// ==========================
// NUMBERS
// ==========================

let score1 = 85;
let score2 = 90;
let average = (score1 + score2) / 2;

document.getElementById("numbers").innerHTML = `
    <p><strong>Score One:</strong> ${score1}</p>
    <p><strong>Score Two:</strong> ${score2}</p>
    <p><strong>Average Score:</strong> ${average}</p>
`;

// ==========================
// STRINGS
// ==========================

let firstName = "Musa";
let lastName = "Gaya";
let fullName = firstName + " " + lastName;

document.getElementById("strings").innerHTML = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Full Name:</strong> ${fullName}</p>
`;

// ==========================
// BOOLEANS
// ==========================

let passed = true;
let loggedIn = false;

document.getElementById("booleans").innerHTML = `
    <p><strong>Passed:</strong> ${passed}</p>
    <p><strong>Logged In:</strong> ${loggedIn}</p>
    <p><strong>Type of true:</strong> ${typeof true}</p>
`;

// ==========================
// COMPARISONS
// ==========================

let age = 20;
let comparisonResult = age >= 18;

document.getElementById("comparisons").innerHTML = `
    <p><strong>Age =</strong> ${age}</p>
    <p><strong>Is Adult?</strong> ${comparisonResult}</p>
    <p><strong>10 > 5 :</strong> ${10 > 5}</p>
    <p><strong>10 == "10" :</strong> ${10 == "10"} (loose equality)</p>
    <p><strong>10 === "10" :</strong> ${10 === "10"} (strict equality)</p>
`;

// ==========================
// FUNCTIONS
// ==========================

function greetUser() {
    let name = document.getElementById("nameInput").value;
    if (name === "") {
        name = "Guest";
    }
    document.getElementById("greeting").innerHTML = 
        `Welcome ${name}! Thanks for visiting this JavaScript presentation. 🎉`;
}

// ==========================
// ARRAYS
// ==========================

let languages = ["HTML", "CSS", "JavaScript", "React", "Git"];
let arrayOutput = "";

languages.forEach(function(item) {
    arrayOutput += `<li>${item}</li>`;
});

document.getElementById("arrays").innerHTML = `
    <p><strong>Languages learned:</strong></p>
    <ul>${arrayOutput}</ul>
    <p><strong>Total languages:</strong> ${languages.length}</p>
`;

// ==========================
// OBJECTS
// ==========================

let student = {
    name: "Musa",
    department: "Computer Science",
    level: "300",
    track: "Frontend"
};

document.getElementById("objects").innerHTML = `
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Department:</strong> ${student.department}</p>
    <p><strong>Level:</strong> ${student.level}</p>
    <p><strong>Track:</strong> ${student.track}</p>
`;

// ==========================
// LOOPS
// ==========================

let loopOutput = "";
for (let i = 1; i <= 10; i++) {
    loopOutput += `<p>Iteration ${i}</p>`;
}

document.getElementById("loops").innerHTML = `
    <p><strong>Loop from 1 to 10:</strong></p>
    ${loopOutput}
`;

// ==========================
// CALCULATOR
// ==========================

function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("answer").innerHTML = `✅ Sum = ${sum}`;
}

// ==========================
// DATE & TIME
// ==========================

function showTime() {
    let today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById("time").innerHTML = today.toLocaleDateString('en-US', options);
}

// ==========================================
// DEMONSTRATE DOM MANIPULATION
// ==========================================

// Using getElementById to change header text dynamically
const headerTitle = document.querySelector('header h1');
console.log('Header found using querySelector:', headerTitle);

// Using querySelectorAll to count sections
const sections = document.querySelectorAll('section');
console.log(`Total sections: ${sections.length} (found with querySelectorAll)`);

// Log initial message
console.log('✅ DOM Selectors, Events, and Callbacks demo loaded successfully');