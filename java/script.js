// ====== Custom Form Validation ======
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from refreshing page

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  // Basic validation rules
  if(username === "") {
    message.textContent = "Username cannot be empty.";
    message.style.color = "red";
    return;
  }

  if(!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // If all checks pass
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// ====== Interactive Feature 1: Change Background Color ======
document.getElementById("colorBtn").addEventListener("click", () => {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// ====== Interactive Feature 2: Live Text Preview ======
document.getElementById("liveInput").addEventListener("input", (event) => {
  const preview = document.getElementById("preview");
  preview.textContent = event.target.value;
});
