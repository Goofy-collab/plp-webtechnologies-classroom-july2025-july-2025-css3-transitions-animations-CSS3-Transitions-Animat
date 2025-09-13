// PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES

// Global variables to demonstrate scope
let globalScore = 0;
const globalMultiplier = 10;

/**
 * Function demonstrating parameters and return values
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value  
 * @returns {number} Random number between min and max
 */
function generateRandomNumber(min, max) {
    // Local variable - demonstrates local scope
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
}

/**
 * Function that processes user data with parameters
 * @param {string} name - User's name
 * @param {number} age - User's age
 * @returns {object} Processed user information
 */
function processUserData(name, age) {
    // Local scope variables
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    
    const userData = {
        name: name,
        age: age,
        birthYear: birthYear,
        category: age >= 18 ? 'Adult' : 'Minor'
    };
    
    // Update display
    const output = document.getElementById('functionOutput');
    output.innerHTML = `
        <strong>Processed Data:</strong><br>
        Name: ${userData.name}<br>
        Age: ${userData.age}<br>
        Birth Year: ${userData.birthYear}<br>
        Category: ${userData.category}
    `;
    
    return userData;
}

/**
 * Function demonstrating local vs global scope
 */
function demonstrateScope() {
    // Local variable with same name as global
    let globalScore = 999; 
    const localMessage = "This is local scope!";
    
    // Access global variable through window object to show difference
    const output = document.getElementById('functionOutput');
    output.innerHTML = `
        <strong>Scope Demonstration:</strong><br>
        Local globalScore: ${globalScore}<br>
        Global globalScore: ${window.globalScore || globalScore}<br>
        Global Multiplier: ${globalMultiplier}<br>
        Local Message: ${localMessage}
    `;
}

/**
 * Function that calculates and updates display
 */
function calculateAndDisplay() {
    // Using function with parameters and return value
    const randomNum = generateRandomNumber(1, 100);
    
    // Update global score using local calculation
    globalScore += randomNum * globalMultiplier;
    
    // Update displays
    document.getElementById('scoreDisplay').textContent = `Score: ${globalScore}`;
    document.getElementById('functionOutput').innerHTML = `
        <strong>Calculation Result:</strong><br>
        Random Number: ${randomNum}<br>
        Multiplier: ${globalMultiplier}<br>
        Added to Score: ${randomNum * globalMultiplier}<br>
        New Total: ${globalScore}
    `;
    
    return globalScore;
}

// PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT

/**
 * Function to trigger CSS animation on box
 */
function triggerBoxAnimation() {
    const box = document.getElementById('cssBox');
    
    // Remove any existing animation classes
    box.classList.remove('pulse');
    
    // Generate random transform values
    const translateX = generateRandomNumber(-50, 50);
    const translateY = generateRandomNumber(-30, 30);
    const rotate = generateRandomNumber(-180, 180);
    const scale = generateRandomNumber(80, 150) / 100;
    
    // Apply transform using JavaScript
    box.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`;
    
    // Add pulse animation class
    setTimeout(() => {
        box.classList.add('pulse');
    }, 100);
    
    // Reset after animation
    setTimeout(() => {
        box.style.transform = '';
        box.classList.remove('pulse');
    }, 2000);
}

/**
 * Function to toggle loading spinner
 */
function toggleLoading() {
    const spinner = document.getElementById('loadingSpinner');
    
    if (spinner.classList.contains('active')) {
        // Stop loading
        spinner.classList.remove('active');
    } else {
        // Start loading
        spinner.classList.add('active');
        
        // Auto-stop after 3 seconds
        setTimeout(() => {
            spinner.classList.remove('active');
        }, 3000);
    }
}

/**
 * Function to flip card animation
 */
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}

/**
 * Function to show modal with animations
 */
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    
    // Trigger animation after display is set
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

/**
 * Function to close modal with parameters for event handling
 * @param {Event} event 
 */
function closeModal(event) {
    const modal = document.getElementById('modal');
    
    // If event is provided and clicked element is not the modal background, return
    if (event && event.target !== modal) {
        return;
    }
    
    // Remove show class for exit animation
    modal.classList.remove('show');
    
    // Hide modal after animation completes
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

/**
 * Function to demonstrate slide-in animations
 */
function slideInElements() {
    const slideElements = document.querySelectorAll('.slide-element');
    
    // Reset all elements
    slideElements.forEach(element => {
        element.classList.remove('slide-in');
    });
    
    // Animate elements with staggered timing
    slideElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('slide-in');
        }, index * 200); // 200ms delay between each element
    });
}

/**
 * Reusable function to add pulse effect to any element
 * @param {HTMLElement} element - Element to animate
 */
function addPulseEffect(element) {
    element.classList.add('pulse');
    setTimeout(() => {
        element.classList.remove('pulse');
    }, 600);
}

//EVENT LISTENERS AND INITIALIZATION

// Add click listener to CSS box for demonstration
document.getElementById('cssBox').addEventListener('click', function() {
    addPulseEffect(this);
});

// Initialize some elements on page load
window.addEventListener('load', function() {
    console.log('Page loaded! All animations and functions ready.');
    
    // Demonstrate scope by setting global variable
    globalScore = generateRandomNumber(10, 50);
    document.getElementById('scoreDisplay').textContent = `Score: ${globalScore}`;
});

// Keyboard shortcuts for advanced interaction
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'f':
        case 'F':
            flipCard();
            break;
        case 'm':
        case 'M':
            showModal();
            break;
        case 'Escape':
            closeModal();
            break;
    }
});