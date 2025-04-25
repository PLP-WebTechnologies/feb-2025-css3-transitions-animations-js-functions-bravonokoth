// Animation Section
const animateBtn = document.getElementById('animate-btn');
const animatedBox = document.getElementById('animated-box');
const animatedImage = document.getElementById('animated-image');

animateBtn.addEventListener('click', () => {
    // Trigger box animation
    animatedBox.classList.toggle('animate');
    
    // Trigger image animation
    animatedImage.classList.toggle('animate');
});

// User Preferences Section
const preferencesForm = document.getElementById('preferences-form');
const bgColorInput = document.getElementById('bg-color');
const fontSizeInput = document.getElementById('font-size');
const resetBtn = document.getElementById('reset-btn');
const statusMessage = document.getElementById('status-message');

// Load preferences from localStorage on page load
function loadPreferences() {
    const savedBgColor = localStorage.getItem('bgColor');
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        bgColorInput.value = savedBgColor;
    }
    if (savedFontSize) {
        document.body.style.fontSize = `${savedFontSize}px`;
        fontSizeInput.value = savedFontSize;
    }
}

// Save preferences to localStorage
function savePreferences(bgColor, fontSize) {
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('fontSize', fontSize);
    document.body.style.backgroundColor = bgColor;
    document.body.style.fontSize = `${fontSize}px`;
    statusMessage.textContent = 'Preferences saved!';
    setTimeout(() => {
        statusMessage.textContent = 'Preferences will be saved to localStorage.';
    }, 2000);
}

// Initialize preferences on page load
loadPreferences();

// Handle form submission
preferencesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bgColor = bgColorInput.value;
    const fontSize = fontSizeInput.value;
    savePreferences(bgColor, fontSize);
});

// Reset preferences
resetBtn.addEventListener('click', () => {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('fontSize');
    document.body.style.backgroundColor = '';
    document.body.style.fontSize = '';
    bgColorInput.value = '#ffffff';
    fontSizeInput.value = '16';
    statusMessage.textContent = 'Preferences reset!';
    setTimeout(() => {
        statusMessage.textContent = 'Preferences will be saved to localStorage.';
    }, 2000);
});