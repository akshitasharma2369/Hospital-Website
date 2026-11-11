// Appointment Form
document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your appointment request has been submitted successfully!");

    this.reset();
});


// Contact Form
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    this.reset();
});