// ==========================================
// DOM SELECTORS DEMO
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to DOM elements
    var boxContainer = document.getElementById('boxContainer');
    var selectorMessage = document.getElementById('selectorMessage');
    
    // Only run if the DOM selector elements exist (they're in the new HTML)
    if (boxContainer) {
        
        // Helper: Clear all selections
        function clearSelections() {
            var allBoxes = document.querySelectorAll('.box');
            for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].classList.remove('selected', 'special-selected');
            }
        }

        // Helper: Log message to selector log
        function logSelectorMessage(message) {
            selectorMessage.textContent = message;
        }

        // Select all boxes using querySelectorAll
        document.getElementById('selectAllBtn').addEventListener('click', function() {
            clearSelections();
            var allBoxes = document.querySelectorAll('.box');
            for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].classList.add('selected');
            }
            logSelectorMessage('✅ Selected ' + allBoxes.length + ' boxes using querySelectorAll(".box")');
        });

        // Select special boxes using querySelectorAll
        document.getElementById('selectSpecialBtn').addEventListener('click', function() {
            clearSelections();
            var specialBoxes = document.querySelectorAll('.special');
            for (var i = 0; i < specialBoxes.length; i++) {
                specialBoxes[i].classList.add('special-selected');
            }
            logSelectorMessage('✨ Selected ' + specialBoxes.length + ' special boxes using querySelectorAll(".special")');
        });

        // Select first box using querySelector
        document.getElementById('selectFirstBtn').addEventListener('click', function() {
            clearSelections();
            var firstBox = document.querySelector('.box');
            if (firstBox) {
                firstBox.classList.add('selected');
                logSelectorMessage('🔹 Selected first box using querySelector(".box"): "' + firstBox.textContent + '"');
            }
        });

        // Clear selections
        document.getElementById('clearSelectionBtn').addEventListener('click', function() {
            clearSelections();
            logSelectorMessage('🧹 Selections cleared');
        });
    }

    // ==========================================
    // DOM EVENTS & CALLBACKS DEMO
    // ==========================================

    var clickBtn = document.getElementById('clickBtn');
    var clickCounter = document.getElementById('clickCounter');
    var eventStatus = document.getElementById('eventStatus');
    var eventMessage = document.getElementById('eventMessage');

    if (clickBtn) {
        var clickCount = 0;

        // Callback function for click event
        function handleClick() {
            clickCount++;
            clickCounter.textContent = clickCount;
            logEventMessage('🖱️ Button clicked! Count: ' + clickCount);
            
            // Visual feedback
            clickBtn.style.transform = 'scale(0.95)';
            setTimeout(function() {
                clickBtn.style.transform = '';
            }, 150);
        }

        // Log helper for events
        function logEventMessage(message) {
            if (eventMessage) {
                eventMessage.textContent = message;
            }
        }

        // Attach click event
        clickBtn.addEventListener('click', handleClick);
        if (eventMessage) logEventMessage('✅ Click event active');

        // Reset counter
        var resetBtn = document.getElementById('resetCounterBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                clickCount = 0;
                clickCounter.textContent = '0';
                logEventMessage('🔄 Counter reset to 0');
            });
        }

        // Change background color (callback as anonymous function)
        var colorBtn = document.getElementById('colorBtn');
        if (colorBtn) {
            colorBtn.addEventListener('click', function() {
                var colors = ['#dbeafe', '#fce7f3', '#d1fae5', '#fef3c7', '#ede9fe', '#fecaca'];
                var randomColor = colors[Math.floor(Math.random() * colors.length)];
                var mainElement = document.querySelector('main');
                if (mainElement) {
                    mainElement.style.backgroundColor = randomColor;
                }
                logEventMessage('🎨 Background color changed to ' + randomColor);
            });
        }

        // Remove event listener
        var removeEventBtn = document.getElementById('removeEventBtn');
        if (removeEventBtn) {
            removeEventBtn.addEventListener('click', function() {
                clickBtn.removeEventListener('click', handleClick);
                if (eventStatus) {
                    eventStatus.textContent = 'Inactive ❌';
                    eventStatus.style.color = '#dc2626';
                }
                logEventMessage('⛔ Click event REMOVED - button no longer responds');
            });
        }

        // Re-add event listener
        var addEventBtn = document.getElementById('addEventBtn');
        if (addEventBtn) {
            addEventBtn.addEventListener('click', function() {
                clickBtn.removeEventListener('click', handleClick);
                clickBtn.addEventListener('click', handleClick);
                if (eventStatus) {
                    eventStatus.textContent = 'Active ✅';
                    eventStatus.style.color = '#16a34a';
                }
                logEventMessage('✅ Click event RE-ADDED - button is active again');
            });
        }
    }

    // ==========================================
    // CALLBACK FUNCTIONS DEMO
    // ==========================================

    var callbackInput = document.getElementById('callbackInput');
    var callbackOutput = document.getElementById('callbackOutput');
    var callbackBtn = document.getElementById('callbackBtn');

    if (callbackInput && callbackBtn) {
        
        // Callback function that processes input
        function processTextInput(input) {
            if (!input || input.trim() === '') {
                return '⚠️ Please enter some text';
            }
            
            var trimmed = input.trim();
            var upper = trimmed.toUpperCase();
            var reversed = trimmed.split('').reverse().join('');
            var wordCount = trimmed.split(/\s+/).length;
            
            return '📝 "' + trimmed + '" → UPPER: ' + upper + ' | Reversed: ' + reversed + ' | Words: ' + wordCount;
        }

        // Higher-order function that executes a callback
        function executeCallback(callbackFn) {
            var input = callbackInput.value;
            var result = callbackFn(input);
            if (callbackOutput) {
                callbackOutput.textContent = result;
            }
            logEventMessage('🔄 Callback executed with input: "' + (input || '(empty)') + '"');
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
    }

    // ==========================================
    // ORIGINAL CODE (Preserved and working)
    // ==========================================

    // ==========================
    // VARIABLES
    // ==========================

    var variablesDiv = document.getElementById("variables");
    if (variablesDiv) {
        var studentName = "Musa";
        var internship = "SIWES";
        var completedWeeks = 5;

        variablesDiv.innerHTML = 
            '<p><strong>Name:</strong> ' + studentName + '</p>' +
            '<p><strong>Programme:</strong> ' + internship + '</p>' +
            '<p><strong>Completed Weeks:</strong> ' + completedWeeks + '</p>';
    }

    // ==========================
    // NUMBERS
    // ==========================

    var numbersDiv = document.getElementById("numbers");
    if (numbersDiv) {
        var score1 = 85;
        var score2 = 90;
        var average = (score1 + score2) / 2;

        numbersDiv.innerHTML = 
            '<p><strong>Score One:</strong> ' + score1 + '</p>' +
            '<p><strong>Score Two:</strong> ' + score2 + '</p>' +
            '<p><strong>Average Score:</strong> ' + average + '</p>';
    }

    // ==========================
    // STRINGS
    // ==========================

    var stringsDiv = document.getElementById("strings");
    if (stringsDiv) {
        var firstName = "Musa";
        var lastName = "Gaya";
        var fullName = firstName + " " + lastName;

        stringsDiv.innerHTML = 
            '<p><strong>First Name:</strong> ' + firstName + '</p>' +
            '<p><strong>Last Name:</strong> ' + lastName + '</p>' +
            '<p><strong>Full Name:</strong> ' + fullName + '</p>';
    }

    // ==========================
    // BOOLEANS
    // ==========================

    var booleansDiv = document.getElementById("booleans");
    if (booleansDiv) {
        var passed = true;
        var loggedIn = false;

        booleansDiv.innerHTML = 
            '<p><strong>Passed:</strong> ' + passed + '</p>' +
            '<p><strong>Logged In:</strong> ' + loggedIn + '</p>' +
            '<p><strong>Type of true:</strong> ' + typeof true + '</p>';
    }

    // ==========================
    // COMPARISONS
    // ==========================

    var comparisonsDiv = document.getElementById("comparisons");
    if (comparisonsDiv) {
        var age = 20;
        var comparisonResult = age >= 18;

        comparisonsDiv.innerHTML = 
            '<p><strong>Age =</strong> ' + age + '</p>' +
            '<p><strong>Is Adult?</strong> ' + comparisonResult + '</p>' +
            '<p><strong>10 > 5 :</strong> ' + (10 > 5) + '</p>' +
            '<p><strong>10 == "10" :</strong> ' + (10 == "10") + ' (loose equality)</p>' +
            '<p><strong>10 === "10" :</strong> ' + (10 === "10") + ' (strict equality)</p>';
    }

    // ==========================
    // ARRAYS
    // ==========================

    var arraysDiv = document.getElementById("arrays");
    if (arraysDiv) {
        var languages = ["HTML", "CSS", "JavaScript", "React", "Git"];
        var arrayOutput = "";

        for (var i = 0; i < languages.length; i++) {
            arrayOutput += '<li>' + languages[i] + '</li>';
        }

        arraysDiv.innerHTML = 
            '<p><strong>Languages learned:</strong></p>' +
            '<ul>' + arrayOutput + '</ul>' +
            '<p><strong>Total languages:</strong> ' + languages.length + '</p>';
    }

    // ==========================
    // OBJECTS
    // ==========================

    var objectsDiv = document.getElementById("objects");
    if (objectsDiv) {
        var student = {
            name: "Musa",
            department: "Computer Science",
            level: "300",
            track: "Frontend"
        };

        objectsDiv.innerHTML = 
            '<p><strong>Name:</strong> ' + student.name + '</p>' +
            '<p><strong>Department:</strong> ' + student.department + '</p>' +
            '<p><strong>Level:</strong> ' + student.level + '</p>' +
            '<p><strong>Track:</strong> ' + student.track + '</p>';
    }

    // ==========================
    // LOOPS
    // ==========================

    var loopsDiv = document.getElementById("loops");
    if (loopsDiv) {
        var loopOutput = "";
        for (var i = 1; i <= 10; i++) {
            loopOutput += '<p>Iteration ' + i + '</p>';
        }

        loopsDiv.innerHTML = 
            '<p><strong>Loop from 1 to 10:</strong></p>' +
            loopOutput;
    }

    // ==========================
    // CALCULATOR (Function remains global for onclick)
    // ==========================

    window.calculate = function() {
        var num1 = Number(document.getElementById("num1").value);
        var num2 = Number(document.getElementById("num2").value);
        var sum = num1 + num2;
        var answerDiv = document.getElementById("answer");
        if (answerDiv) {
            answerDiv.innerHTML = '✅ Sum = ' + sum;
        }
    };

    // ==========================
    // DATE & TIME (Function remains global for onclick)
    // ==========================

    window.showTime = function() {
        var today = new Date();
        var options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        var timeDiv = document.getElementById("time");
        if (timeDiv) {
            timeDiv.innerHTML = today.toLocaleDateString('en-US', options);
        }
    };

    // ==========================
    // GREETING FUNCTION (remains global for onclick)
    // ==========================

    window.greetUser = function() {
        var nameInput = document.getElementById("nameInput");
        var greetingDiv = document.getElementById("greeting");
        if (nameInput && greetingDiv) {
            var name = nameInput.value;
            if (name === "") {
                name = "Guest";
            }
            greetingDiv.innerHTML = 'Welcome ' + name + '! Thanks for visiting this JavaScript presentation. 🎉';
        }
    };

    // Console log for debugging
    console.log('✅ DOM Selectors, Events, and Callbacks demo loaded successfully');
    console.log('ℹ️ If buttons don\'t work, check that your HTML has the correct IDs');
});
