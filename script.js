const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const department = document.getElementById("department").value.trim();

  if (!name || !email || !roll || !department) {
    alert("Please fill all fields.");
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email.");
    return;
  }

  alert(
    `Registration Successful!\nName: ${name}\nEmail: ${email}\nRoll: ${roll}\nDepartment: ${department}`
  );
  console.log({ name, email, roll, department });
  form.reset();
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const message = document.getElementById("cmessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  alert(`Thank you for contacting us, ${name}!`);
  console.log({ name, email, message });
  contactForm.reset();
});
