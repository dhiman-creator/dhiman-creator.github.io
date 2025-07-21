// Load header and footer dynamically
window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);

  // Feedback form handling
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const comments = document.getElementById("comments").value.trim();
      const response = document.getElementById("response");

      if (name && email && comments) {
        response.textContent = "Thank you for your feedback!";
        form.reset();
      } else {
        response.textContent = "Please fill all fields.";
      }
    });
  }
});
