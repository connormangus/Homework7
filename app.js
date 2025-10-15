// Step 1: Verify JS connection
console.log('Hello World!');

// Step 3: Variables
let name = "Connor Mangus"; // My name
let hasDownloadedResume = false; // Tracks if my resume is downloaded

// Step 4: Personalized greeting
function showGreeting(userName) {
    return "Hello, my name is " + userName + "! Welcome to my portfolio!";
}

// Step 5: Calculate days until a deadline
function daysUntilDeadline(deadline) {
    const today = new Date();
    const future = new Date(deadline);
    const diffTime = future - today; // milliseconds difference
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert to days
    return diffDays;
}

// Execute after DOM loads
window.addEventListener('DOMContentLoaded', () => {

    // Display greeting
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = showGreeting(name);
    }

    // Resume button click alert (Step 2)
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            if (!hasDownloadedResume) {
                alert("Your resume is downloaded successfully!");
                hasDownloadedResume = true;
            }
        });
    }

    // Display remaining days for ongoing project (Step 5)
    const daysLeftEl = document.getElementById('daysLeft');
    if (daysLeftEl) {
        const days = daysUntilDeadline('2025-11-01');
        daysLeftEl.textContent = "Days remaining until project deadline: " + days;
    }

});