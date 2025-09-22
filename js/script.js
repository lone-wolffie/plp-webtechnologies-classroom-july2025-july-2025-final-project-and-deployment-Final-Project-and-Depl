//Mobile Menu Toggle 
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenuBtn.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
  });
}

//Highlight Active Nav Link
const navLinks = document.querySelectorAll(".nav-link");

//Check the current page URL and add "active" class
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

//Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

function handleScrollAnimations() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
handleScrollAnimations(); //Run once on page load

//Contact Form Submission
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      formStatus.textContent = "✅ Thank you for contacting me. I'll get back to you soon!";
      formStatus.style.color = "green";
    // Reset form
      contactForm.reset();
    } else {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.style.color = "red";
    }
  });
}
