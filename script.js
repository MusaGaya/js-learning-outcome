// ==========================================
// MAKE ORIGINAL FUNCTIONS WORK (GLOBAL SCOPE)
// ==========================================

// These need to be global for onclick attributes to work
window.greetUser = function() {
    var nameInput = document.getElementById('nameInput');
    var greeting = document.getElementById('greeting');
    if (nameInput && greeting) {
        var name = nameInput.value || 'Guest';
        greeting.innerHTML = 'Welcome ' + name + '! Thanks for visiting this JavaScript presentation. 🎉';
    }
};

window.calculate = function() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var answer = document.getElementById('answer');
    if (answer) {
        answer.innerHTML = '✅ Sum = ' + (num1 + num2);
    }
};

window.showTime = function() {
    var timeDiv = document.getElementById('time');
    if (timeDiv) {
        var now = new Date();
        timeDiv.innerHTML = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
};

// ==========================================
// ORIGINAL CODE (Preserved exactly as it was)
// ==========================================

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
// ARRAYS
// ==========================

let languages = ["HTML", "CSS", "JavaScript", "React", "Git"];
let arrayOutput = "";

languages.forEach(function(item) {
    arrayOutput += "<li>" + item + "</li>";
});

document.getElementById("arrays").innerHTML = "<ul>" + arrayOutput + "</ul>";

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
<p>Name: ${student.name}</p>
<p>Department: ${student.department}</p>
<p>Level: ${student.level}</p>
<p>Track: ${student.track}</p>
`;

// ==========================
// LOOPS
// ==========================

let loopOutput = "";

for (let i = 1; i <= 10; i++) {
    loopOutput += `<p>Iteration ${i}</p>`;
}

document.getElementById("loops").innerHTML = loopOutput;

// ==========================================
// ADD DOM SELECTORS DEMO (Using existing elements)
// ==========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✅ DOM Selectors Demo Loaded');
    
    // Create a new section for DOM Selectors demo
    var selectorSection = document.createElement('section');
    selectorSection.innerHTML = `
        <h2>🔍 DOM Selectors Demonstration</h2>
        <div id="selectorDemo" style="padding:15px; background:#f8fafc; border-radius:8px; border-left:4px solid #2563eb;">
            <p><strong>Using DOM Selectors:</strong></p>
            <div id="selectorResults" style="margin:10px 0;"></div>
            <button onclick="showSelectorDemo()" style="padding:8px 16px; background:#2563eb; color:white; border:none; border-radius:6px; cursor:pointer;">
                Run Selector Demo
            </button>
            <button onclick="highlightSections()" style="padding:8px 16px; background:#7c3aed; color:white; border:none; border-radius:6px; cursor:pointer; margin-left:8px;">
                Highlight Sections
            </button>
            <button onclick="clearHighlights()" style="padding:8px 16px; background:#dc2626; color:white; border:none; border-radius:6px; cursor:pointer; margin-left:8px;">
                Clear Highlights
            </button>
        </div>
    `;
    
    // Insert after the introduction section
    var introSection = document.querySelector('section:first-of-type');
    if (introSection) {
        introSection.insertAdjacentElement('afterend', selectorSection);
    }
    
    // Add styles for highlighting
    var styleTag = document.createElement('style');
    styleTag.textContent = `
        .section-highlight {
            border: 3px solid #2563eb !important;
            background: #dbeafe !important;
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(styleTag);
});

// Global functions for the new buttons
window.showSelectorDemo = function() {
    var results = document.getElementById('selectorResults');
    if (!results) return;
    
    // Using different DOM selectors
    var byId = document.getElementById('variables');
    var byQuery = document.querySelector('section');
    var allSections = document.querySelectorAll('section');
    var allButtons = document.querySelectorAll('button');
    var firstButton = document.querySelector('button');
    
    results.innerHTML = `
        <div style="background:white; padding:12px; border-radius:6px; border:1px solid #e2e8f0;">
            <p><strong>📌 getElementById('variables'):</strong> Found element with ID "variables"</p>
            <p><strong>📌 querySelector('section'):</strong> Found first section: "${byQuery ? byQuery.querySelector('h2')?.textContent || 'Section' : 'Not found'}"</p>
            <p><strong>📌 querySelectorAll('section'):</strong> Found ${allSections.length} sections</p>
            <p><strong>📌 querySelectorAll('button'):</strong> Found ${allButtons.length} buttons</p>
            <p><strong>📌 querySelector('button'):</strong> Found first button: "${firstButton ? firstButton.textContent.trim() : 'Not found'}"</p>
        </div>
    `;
};

window.highlightSections = function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.add('section-highlight');
    });
    var results = document.getElementById('selectorResults');
    if (results) {
        results.innerHTML = `<p style="color:#16a34a;">✅ Highlighted ${sections.length} sections using querySelectorAll('section')</p>`;
    }
};

window.clearHighlights = function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('section-highlight');
    });
    var results = document.getElementById('selectorResults');
    if (results) {
        results.innerHTML = `<p style="color:#475569;">🧹 Highlights cleared</p>`;
    }
};

// ==========================================
// ADD DOM EVENTS DEMO
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Create events section
    var eventsSection = document.createElement('section');
    eventsSection.innerHTML = `
        <h2>⚡ DOM Events Demonstration</h2>
        <div style="padding:15px; background:#f8fafc; border-radius:8px;">
            <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:15px;">
                <button id="eventCounterBtn" style="padding:10px 20px; background:#2563eb; color:white; border:none; border-radius:6px; cursor:pointer;">
                    Click Counter
                </button>
                <button id="colorChangeBtn" style="padding:10px 20px; background:#f59e0b; color:white; border:none; border-radius:6px; cursor:pointer;">
                    Change Color
                </button>
                <button id="removeEventDemoBtn" style="padding:10px 20px; background:#dc2626; color:white; border:none; border-radius:6px; cursor:pointer;">
                    Remove Event
                </button>
                <button id="addEventDemoBtn" style="padding:10px 20px; background:#16a34a; color:white; border:none; border-radius:6px; cursor:pointer;">
                    Re-add Event
                </button>
            </div>
            <div id="eventDemoOutput" style="padding:12px; background:white; border-radius:6px; border:1px solid #e2e8f0;">
                <p id="clickDisplay">Clicks: 0</p>
                <p id="eventStatusDisplay" style="color:#16a34a;">✅ Event Active</p>
            </div>
        </div>
    `;
    
    // Insert after selector section or at the end
    var sections = document.querySelectorAll('section');
    var lastSection = sections[sections.length - 1];
    if (lastSection) {
        lastSection.insertAdjacentElement('afterend', eventsSection);
    }
    
    // Add event listeners
    var clickCount = 0;
    var clickDisplay = document.getElementById('clickDisplay');
    var statusDisplay = document.getElementById('eventStatusDisplay');
    var counterBtn = document.getElementById('eventCounterBtn');
    var colorBtn = document.getElementById('colorChangeBtn');
    var removeBtn = document.getElementById('removeEventDemoBtn');
    var addBtn = document.getElementById('addEventDemoBtn');
    
    // The callback function
    function handleCounterClick() {
        clickCount++;
        if (clickDisplay) {
            clickDisplay.textContent = 'Clicks: ' + clickCount;
        }
        // Visual feedback
        counterBtn.style.transform = 'scale(0.95)';
        setTimeout(function() {
            counterBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Add event
    if (counterBtn) {
        counterBtn.addEventListener('click', handleCounterClick);
    }
    
    // Color change event
    if (colorBtn) {
        colorBtn.addEventListener('click', function() {
            var colors = ['#dbeafe', '#fce7f3', '#d1fae5', '#fef3c7', '#ede9fe', '#fecaca'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector('main').style.backgroundColor = randomColor;
        });
    }
    
    // Remove event
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            if (counterBtn) {
                counterBtn.removeEventListener('click', handleCounterClick);
                if (statusDisplay) {
                    statusDisplay.textContent = '⛔ Event Removed';
                    statusDisplay.style.color = '#dc2626';
                }
            }
        });
    }
    
    // Re-add event
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            if (counterBtn) {
                counterBtn.removeEventListener('click', handleCounterClick);
                counterBtn.addEventListener('click', handleCounterClick);
                if (statusDisplay) {
                    statusDisplay.textContent = '✅ Event Active';
                    statusDisplay.style.color = '#16a34a';
                }
            }
        });
    }
});

// ==========================================
// ADD CALLBACK FUNCTIONS DEMO
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Create callback section
    var callbackSection = document.createElement('section');
    callbackSection.innerHTML = `
        <h2>🔄 Callback Functions Demonstration</h2>
        <div style="padding:15px; background:#f8fafc; border-radius:8px;">
            <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:15px;">
                <input type="text" id="callbackInput" placeholder="Type something..." style="padding:8px 12px; border:2px solid #e2e8f0; border-radius:6px; flex:1; min-width:200px;">
                <button id="callbackDemoBtn" style="padding:10px 20px; background:#7c3aed; color:white; border:none; border-radius:6px; cursor:pointer;">
                    Process with Callback
                </button>
            </div>
            <div id="callbackOutput" style="padding:12px; background:white; border-radius:6px; border:1px solid #e2e8f0; min-height:50px;">
                <p style="color:#64748b;">Result will appear here...</p>
            </div>
            <div style="margin-top:10px; padding:10px; background:#f0fdf4; border-radius:6px; border-left:4px solid #16a34a;">
                <p><strong>💡 Callback Examples:</strong></p>
                <button onclick="demoSetTimeout()" style="padding:6px 12px; background:#2563eb; color:white; border:none; border-radius:4px; cursor:pointer; margin:3px;">
                    setTimeout Callback
                </button>
                <button onclick="demoForEach()" style="padding:6px 12px; background:#7c3aed; color:white; border:none; border-radius:4px; cursor:pointer; margin:3px;">
                    forEach Callback
                </button>
                <button onclick="demoCustomCallback()" style="padding:6px 12px; background:#16a34a; color:white; border:none; border-radius:4px; cursor:pointer; margin:3px;">
                    Custom Callback
                </button>
                <div id="callbackResultDisplay" style="margin-top:10px; padding:10px; background:white; border-radius:6px; border:1px solid #e2e8f0; min-height:30px;">
                    <p style="color:#64748b;">Callback results will appear here...</p>
                </div>
            </div>
        </div>
    `;
    
    // Insert after events section
    var eventsSection = document.querySelector('section:last-of-type');
    if (eventsSection) {
        // Find the events section by checking if it has the events content
        var allSections = document.querySelectorAll('section');
        var lastSection = allSections[allSections.length - 1];
        if (lastSection) {
            lastSection.insertAdjacentElement('afterend', callbackSection);
        }
    }
    
    // Callback function to process input
    function processText(input) {
        if (!input || input.trim() === '') {
            return '⚠️ Please enter some text';
        }
        var trimmed = input.trim();
        var upper = trimmed.toUpperCase();
        var reversed = trimmed.split('').reverse().join('');
        var wordCount = trimmed.split(/\s+/).length;
        return '📝 "' + trimmed + '" → UPPER: ' + upper + ' | Reversed: ' + reversed + ' | Words: ' + wordCount;
    }
    
    // Handle callback button click
    var callbackBtn = document.getElementById('callbackDemoBtn');
    var callbackInput = document.getElementById('callbackInput');
    var callbackOutput = document.getElementById('callbackOutput');
    
    if (callbackBtn && callbackInput && callbackOutput) {
        callbackBtn.addEventListener('click', function() {
            var input = callbackInput.value;
            var result = processText(input);
            callbackOutput.innerHTML = '<p style="color:#1e293b;">' + result + '</p>';
        });
        
        // Also trigger on Enter key
        callbackInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                var input = callbackInput.value;
                var result = processText(input);
                callbackOutput.innerHTML = '<p style="color:#1e293b;">' + result + '</p>';
            }
        });
    }
});

// ==========================================
// GLOBAL CALLBACK DEMO FUNCTIONS
// ==========================================

window.demoSetTimeout = function() {
    var display = document.getElementById('callbackResultDisplay');
    if (display) {
        display.innerHTML = '<p style="color:#f59e0b;">⏳ Waiting 2 seconds for callback...</p>';
        setTimeout(function() {
            display.innerHTML = '<p style="color:#16a34a;">✅ setTimeout callback executed at: ' + new Date().toLocaleTimeString() + '</p>';
        }, 2000);
    }
};

window.demoForEach = function() {
    var display = document.getElementById('callbackResultDisplay');
    if (display) {
        var items = ['DOM', 'Events', 'Callbacks', 'Selectors'];
        var output = '<p><strong>forEach callback results:</strong></p><ul style="list-style:none; padding:0;">';
        items.forEach(function(item, index) {
            output += '<li style="padding:3px 0;">' + (index + 1) + '. ' + item + '</li>';
        });
        output += '</ul>';
        display.innerHTML = output;
    }
};

window.demoCustomCallback = function() {
    var display = document.getElementById('callbackResultDisplay');
    if (display) {
        // Higher-order function
        function processData(data, callback) {
            return callback(data);
        }
        
        // Callback function
        function transformData(data) {
            return '🔹 Transformed: ' + data.toUpperCase() + ' (length: ' + data.length + ')';
        }
        
        var result = processData('javascript callback', transformData);
        display.innerHTML = '<p style="color:#7c3aed;">✅ Custom callback result: ' + result + '</p>';
    }
};

// ==========================================
// LOG TO CONSOLE
// ==========================================

console.log('✅ All JavaScript features loaded successfully!');
console.log('📌 DOM Selectors: getElementById, querySelector, querySelectorAll');
console.log('📌 DOM Events: addEventListener, removeEventListener');
console.log('📌 Callback Functions: setTimeout, forEach, custom callbacks');
