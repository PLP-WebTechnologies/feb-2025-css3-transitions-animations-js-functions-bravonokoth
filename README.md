# CSS3 Transitions, Animations, and Advanced JavaScript Functions

## Objectives

Create smooth CSS transitions and animations.
Use JavaScript functions for dynamic behavior.
Implement local storage for data persistence.

## Instructions
Add CSS animations to elements like buttons or images.

>[!NOTE]
> - Write a JavaScript function that:
> - Stores and retrieves user preferences using localStorage.
> - Implements an animation triggered by user actions.

## Tasks

Create a CSS animation.
Store data in localStorage.
Apply JavaScript to trigger animations.

## Implementation Details
The assignment has been completed with the following files:
- **`index.html`**:
  - Semantic HTML5 structure with `<header>`, `<main>`, `<section>`, and `<footer>`.
  - Includes sections for animations (box and image) and user preferences (form for background color and font size).
  - Links to `style.css` and `script.js`.
- **`style.css`**:
  - Implements CSS transitions for buttons (hover scaling) and body (background color, font size).
  - Defines a `pulse` keyframe animation for the image and a transition for the box (rotate and scale).
  - Ensures responsive design with centered content.
- **`script.js`**:
  - Triggers animations on a box (rotate and scale) and an image (pulse) via a button click.
  - Uses `localStorage` to store and retrieve user preferences (background color and font size).
  - Provides dynamic behavior with form submission, preference loading, and reset functionality.
  - Includes feedback messages for user actions.

## How to Run
1. Clone the repository:
  
   git clone https://github.com/PLP-WebTechnologies/feb-2025-css3-transitions-animations-js-functions-bravonokoth.git
Navigate to the project directory:

cd feb-2025-css3-transitions-animations-js-functions-bravonokoth
Start a local server:
With Node.js:


npx http-server
With Python:


python3 -m http.server 8000
Open http://localhost:8080 (or http://localhost:8000) in a browser.


## Test the features:
Click "Trigger Animation" to animate the box and image.
Set background color and font size in the form, then submit to save.
Refresh to confirm preferences persist.
Click "Reset Preferences" to clear settings.

## Notes
The implementation uses smooth CSS transitions and animations for a polished user experience.
JavaScript functions are modular and well-commented for maintainability.
localStorage ensures preferences persist across sessions.
The project is extensible for additional animations or preferences.

Happy Coding!

## About
This repository was created by GitHub Classroom for the PLP Web Technologies course (February 2025).