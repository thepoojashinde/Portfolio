// ================= MOBILE NAV =================
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});

function closeMobileNav() {
  mobileNav.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", closeMobileNav);

// ================= CONTACT FORM =================
const form = document.querySelector("#contact-form");
const loader = document.querySelector(".lds-ripple");
const circles = document.querySelectorAll(".lds-ripple div");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // show loader
    loader.style.display = "block";
    circles[0].classList.add("run-animation");
    circles[1].classList.add("run-animation");

    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const message = document.querySelector("#messageArea").value;

    const newData = {
      name,
      email,
      phone,
      message,
    };

    // 🔥 CORRECT BACKEND URL
    const response = await fetch(
      "https://portfolio-gbj3.onrender.com/api/v1/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    const data = await response.json();
    console.log("BACKEND RESPONSE:", data);

    alert("Form submitted successfully ✅");
    form.reset();
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Something went wrong. Please try again.");
  } finally {
    // hide loader
    loader.style.display = "none";
    circles[0].classList.remove("run-animation");
    circles[1].classList.remove("run-animation");
  }
});

// ================= TYPED TEXT =================
var typeData = new Typed(".role", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
