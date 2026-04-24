// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handling Form Submission
const form = document.getElementById('appointmentForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple animation feedback
    const btn = form.querySelector('button');
    btn.innerText = "Sending...";
    btn.style.backgroundColor = "#28a745"; // Green success color
    
    setTimeout(() => {
        alert("Thank you! We have received your inquiry.");
        form.reset();
        btn.innerText = "Send Message";
        btn.style.backgroundColor = "#007bff";
    }, 1500);
});