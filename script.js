// ==========================================
// WAIT FOR DOM TO LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

    console.log('✅ JavaScript loaded successfully');

    // ==========================================
    // DEMONSTRATE DOM SELECTORS
    // ==========================================
    
    // 1. getElementById - Select elements by ID
    console.log('=== DOM SELECTORS DEMO ===');
    
    // Using getElementById
    var headerElement = document.getElementById('variables');
    console.log('1. getElementById("variables"):', headerElement);
    
    // Using querySelector - selects first matching element
    var firstSection = document.querySelector('section');
    console.log('2. querySelector("section"):', firstSection);
    
    // Using querySelectorAll - selects all matching elements
    var allSections = document.querySelectorAll('section');
    console.log('3. querySelectorAll("section"):', allSections.length + ' sections found');
    
    // Using querySelector with class selector
    var mainContent = document.querySelector('.interactive-demo');
    console.log('4. querySelector(".interactive-demo"):', mainContent);
    
    // ==========================================
    // DEMONSTRATE DOM EVENTS
    // ==========================================
    
    console.log('=== DOM EVENTS DEMO ===');
    
    // Find all buttons in the page
    var allButtons = document.querySelectorAll('button');
    console.log('Found ' + allButtons.length + ' buttons on the page');
    
    // Add event listeners to existing buttons
    var buttons = document.querySelectorAll('button');
    var clickCounter = 0;
    var counterDisplay = document.createElement('p');
    counterDisplay.style.marginTop = '10px';
    counterDisplay.style.fontWeight = 'bold';
    counterDisplay.style.color = '#2563eb';
    counterDisplay.textContent = 'Button clicks: 0';
    
    // Find the functions section to add our counter
    var functionsSection = document.querySelector('section:nth-child(7)');
    if (functionsSection) {
        functionsSection.appendChild(counterDisplay);
    }
    
    // Add click events to all buttons
    for (var i = 0; i < buttons.length; i++) {
        (function(buttonIndex) {
            buttons[buttonIndex].addEventListener('click', function(e) {
                clickCounter++;
                counterDisplay.textContent = 'Button clicks: ' + clickCounter;
                
                // Show which button was clicked
                var buttonText = this.textContent.trim() || 'Button ' + (buttonIndex + 1);
                console.log('🖱️ Clicked: "' + buttonText + '" - Total clicks: ' + clickCounter);
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(function() {
                    buttons[buttonIndex].style.transform = 'scale(1)';
                }, 150);
            });
        })(i);
    }
    
    // Demonstrate event removal and re-addition
    // Find the first button to demonstrate
    var firstButton = document.querySelector('button');
    if (firstButton) {
        console.log('Demonstrating event removal on first button');
        
        // Function to handle click
        function specialClickHandler() {
            alert('🎯 This button had a special event listener!');
        }
        
        // Add special event
        firstButton.addEventListener('click', specialClickHandler);
        
        // Remove after 3 seconds (demonstration)
        setTimeout(function() {
            firstButton.removeEventListener('click', specialClickHandler);
            console.log('⛔ Special event removed from first button');
        }, 3000);
        
        // Re-add after 6 seconds (demonstration)
        setTimeout(function() {
            firstButton.addEventListener('click', specialClickHandler);
            console.log('✅ Special event re-added to first button');
        }, 6000);
    }
    
    // ==========================================
    // DEMONSTRATE CALLBACK FUNCTIONS
    // ==========================================
    
    console.log('=== CALLBACK FUNCTIONS DEMO ===');
    
    // 1. Callback with setTimeout (asynchronous callback)
    console.log('1. setTimeout callback demo:');
    setTimeout(function() {
        console.log('   ⏰ This is a callback function executed after 2 seconds');
        var timeDisplay = document.createElement('p');
        timeDisplay.textContent = '⏰ Callback executed: ' + new Date().toLocaleTimeString();
        timeDisplay.style.color = '#7c3aed';
        timeDisplay.style.fontWeight = '500';
        timeDisplay.style.padding = '8px';
        timeDisplay.style.background = '#ede9fe';
        timeDisplay.style.borderRadius = '6px';
        
        var loopsSection = document.querySelector('section:nth-child(11)');
        if (loopsSection) {
            loopsSection.appendChild(timeDisplay);
        }
    }, 2000);
    
    // 2. Callback with forEach (array method)
    console.log('2. forEach callback demo:');
    var skills = ['DOM Manipulation', 'Event Handling', 'Callbacks', 'Selectors'];
    var skillList = document.createElement('ul');
    skillList.style.marginTop = '10px';
    skillList.style.padding = '10px';
    skillList.style.background = '#f8fafc';
    skillList.style.borderRadius = '6px';
    skillList.style.borderLeft = '4px solid #2563eb';
    
    skills.forEach(function(skill, index) {
        var listItem = document.createElement('li');
        listItem.textContent = (index + 1) + '. ' + skill;
        listItem.style.padding = '3px 0';
        skillList.appendChild(listItem);
        console.log('   - ' + skill);
    });
    
    var arraysSection = document.querySelector('section:nth-child(8)');
    if (arraysSection) {
        arraysSection.appendChild(skillList);
    }
    
    // 3. Callback with event listeners (already demonstrated above)
    console.log('3. Event listener callbacks: Already added to all buttons');
    
    // 4. Custom callback function example
    console.log('4. Custom callback function demo:');
    
    // Higher-order function that accepts a callback
    function processUserInput(input, callback) {
        console.log('   Processing input: "' + input + '"');
        var result = callback(input);
        console.log('   Result: ' + result);
        return result;
    }
    
    // Callback function for string transformation
    function transformText(text) {
        return text.toUpperCase() + ' (length: ' + text.length + ')';
    }
    
    // Callback function for number validation
    function validateNumber(num) {
        if (isNaN(num)) return '❌ Invalid number';
        return '✅ Valid number: ' + Number(num);
    }
    
    // Execute the callbacks
    processUserInput('javascript is fun', transformText);
    processUserInput('42', validateNumber);
    processUserInput('hello', validateNumber);
    
    // Display custom callback results
    var callbackResult = document.createElement('div');
    callbackResult.style.marginTop = '10px';
    callbackResult.style.padding = '10px';
    callbackResult.style.background = '#f0fdf4';
    callbackResult.style.borderRadius = '6px';
    callbackResult.style.borderLeft = '4px solid #16a34a';
    callbackResult.innerHTML = 
        '<strong>🔄 Callback Results:</strong><br>' +
        '• "javascript is fun" → ' + transformText('javascript is fun') + '<br>' +
        '• "42" → ' + validateNumber('42') + '<br>' +
        '• "hello" → ' + validateNumber('hello');
    
    var comparisonsSection = document.querySelector('section:nth-child(6)');
    if (comparisonsSection) {
        comparisonsSection.appendChild(callbackResult);
    }
    
    // ==========================================
    // ADD INTERACTIVE DEMO FOR DOM SELECTORS
    // ==========================================
    
    console.log('=== ADDING INTERACTIVE SELECTOR DEMO ===');
    
    // Create selector demo section
    var selectorDemoSection = document.createElement('section');
    selectorDemoSection.id = 'selectorDemoSection';
    selectorDemoSection.innerHTML = 
        '<h2>🔍 DOM Selectors Interactive Demo</h2>' +
        '<p class="section-desc">Click buttons to see DOM selectors in action</p>' +
        '<div style="display:flex; flex-wrap:wrap; gap:10px; margin:10px 0;">' +
        '   <button class="btn btn-primary" id="highlightAllBtn">Highlight All Sections</button>' +
        '   <button class="btn btn-secondary" id="highlightFirstBtn">Highlight First Section</button>' +
        '   <button class="btn btn-secondary" id="countSectionsBtn">Count Sections</button>' +
        '   <button class="btn btn-danger" id="clearHighlightsBtn">Clear Highlights</button>' +
        '</div>' +
        '<div id="selectorOutput" style="padding:12px; background:#f8fafc; border-radius:6px; border-left:4px solid #2563eb; margin-top:10px;">' +
        '   📌 Click a button to see selector results' +
        '</div>';
    
    // Insert after the introduction section
    var introSection = document.querySelector('section:first-of-type');
    if (introSection) {
        introSection.insertAdjacentElement('afterend', selectorDemoSection);
    }
    
    // Add styles for the new buttons
    var styleTag = document.createElement('style');
    styleTag.textContent = 
        '.btn-primary { background: #2563eb; color: white; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; } ' +
        '.btn-secondary { background: #e2e8f0; color: #334155; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; } ' +
        '.btn-danger { background: #dc2626; color: white; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; } ' +
        '.btn-primary:hover, .btn-secondary:hover, .btn-danger:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); } ' +
        '.section-highlight { border: 3px solid #2563eb !important; background: #dbeafe !important; transition: all 0.3s ease; }';
    document.head.appendChild(styleTag);
    
    // ==========================================
    // ADD EVENT LISTENERS FOR SELECTOR DEMO
    // ==========================================
    
    // Use event delegation to handle clicks on dynamically created buttons
    document.addEventListener('click', function(e) {
        var target = e.target;
        
        // Handle Highlight All Sections button
        if (target.id === 'highlightAllBtn') {
            var allSections = document.querySelectorAll('section');
            for (var i = 0; i < allSections.length; i++) {
                allSections[i].classList.add('section-highlight');
            }
            var output = document.getElementById('selectorOutput');
            if (output) {
                output.innerHTML = '✅ Selected ' + allSections.length + ' sections using <code>querySelectorAll("section")</code>';
            }
            console.log('Highlighted all ' + allSections.length + ' sections');
            e.preventDefault();
        }
        
        // Handle Highlight First Section button
        if (target.id === 'highlightFirstBtn') {
            var firstSection = document.querySelector('section');
            // Remove highlights first
            var allSections = document.querySelectorAll('section');
            for (var i = 0; i < allSections.length; i++) {
                allSections[i].classList.remove('section-highlight');
            }
            if (firstSection) {
                firstSection.classList.add('section-highlight');
                var sectionTitle = firstSection.querySelector('h2');
                var titleText = sectionTitle ? sectionTitle.textContent : 'First';
                var output = document.getElementById('selectorOutput');
                if (output) {
                    output.innerHTML = '🔹 Selected first section using <code>querySelector("section")</code>: "' + titleText + '"';
                }
                console.log('Highlighted first section: ' + titleText);
            }
            e.preventDefault();
        }
        
        // Handle Count Sections button
        if (target.id === 'countSectionsBtn') {
            var allSections = document.querySelectorAll('section');
            var totalElements = document.querySelectorAll('*').length;
            var totalButtons = document.querySelectorAll('button').length;
            var totalInputs = document.querySelectorAll('input').length;
            
            var output = document.getElementById('selectorOutput');
            if (output) {
                output.innerHTML = 
                    '📊 Statistics:<br>' +
                    '• Sections: ' + allSections.length + ' (using <code>querySelectorAll</code>)<br>' +
                    '• Total elements: ' + totalElements + ' (using <code>querySelectorAll("*")</code>)<br>' +
                    '• Buttons: ' + totalButtons + ' (using <code>querySelectorAll("button")</code>)<br>' +
                    '• Inputs: ' + totalInputs + ' (using <code>querySelectorAll("input")</code>)';
            }
            console.log('Page statistics: Sections=' + allSections.length + ', Elements=' + totalElements);
            e.preventDefault();
        }
        
        // Handle Clear Highlights button
        if (target.id === 'clearHighlightsBtn') {
            var allSections = document.querySelectorAll('section');
            for (var i = 0; i < allSections.length; i++) {
                allSections[i].classList.remove('section-highlight');
            }
            var output = document.getElementById('selectorOutput');
            if (output) {
                output.innerHTML = '🧹 Highlights cleared';
            }
            console.log('Cleared all highlights');
            e.preventDefault();
        }
    });
    
    // ==========================================
    // ADD EVENT LOGGER
    // ==========================================
    
    console.log('=== ADDING EVENT LOGGER ===');
    
    var eventLogger = document.createElement('div');
    eventLogger.style.position = 'fixed';
    eventLogger.style.bottom = '20px';
    eventLogger.style.right = '20px';
    eventLogger.style.maxWidth = '350px';
    eventLogger.style.background = '#1e293b';
    eventLogger.style.color = 'white';
    eventLogger.style.padding = '12px 16px';
    eventLogger.style.borderRadius = '8px';
    eventLogger.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
    eventLogger.style.zIndex = '9999';
    eventLogger.style.fontSize = '13px';
    eventLogger.style.maxHeight = '150px';
    eventLogger.style.overflowY = 'auto';
    eventLogger.innerHTML = 
        '<strong style="display:block; margin-bottom:6px;">📨 Event Log</strong>' +
        '<div id="eventLogContent">Ready...</div>';
    document.body.appendChild(eventLogger);
    
    // Update event log with click events
    document.addEventListener('click', function(e) {
        var target = e.target;
        var logContent = document.getElementById('eventLogContent');
        if (logContent) {
            var tagName = target.tagName;
            var id = target.id ? '#' + target.id : '';
            var className = target.className ? '.' + target.className.split(' ')[0] : '';
            var text = target.textContent ? ' "' + target.textContent.trim().substring(0, 30) + '"' : '';
            var message = '🖱️ Clicked: ' + tagName.toLowerCase() + id + className + text;
            logContent.innerHTML = message + '<br>' + logContent.innerHTML;
            if (logContent.children.length > 10) {
                logContent.removeChild(logContent.lastChild);
            }
        }
    });
    
    console.log('✅ Event logger added to page');
    
    // ==========================================
    // MAKE ORIGINAL FUNCTIONS WORK
    // ==========================================
    
    // Ensure original functions are available globally
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
    // FINAL SUMMARY
    // ==========================================
    
    console.log('=== SUMMARY ===');
    console.log('✅ DOM Selectors demonstrated');
    console.log('✅ DOM Events demonstrated');
    console.log('✅ Callback Functions demonstrated');
    console.log('✅ All features working with existing HTML');

});
