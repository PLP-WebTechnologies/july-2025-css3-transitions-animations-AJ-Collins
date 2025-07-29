document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.remove("animate"); 
  void box.offsetWidth; 
  box.classList.add("animate");
});

function validateForm(name, email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || name.length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (!emailPattern.test(email)) {
    return "Invalid email address.";
  }
  return "valid";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  const result = validateForm(name, email);

  if (result === "valid") {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
  } else {
    message.style.color = "red";
    message.textContent = result;
  }
});
