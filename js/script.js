const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const message = document.querySelector("#messageArea").value;

    const response = await fetch(
      "https://portfolio-gbj3.onrender.com/api/v1/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      }
    );

    const data = await response.json();
    console.log("BACKEND RESPONSE:", data);

    if (!response.ok) {
      throw new Error(data.message || "Server error");
    }

    alert("Message sent successfully ✅");
    form.reset();

  } catch (error) {
    console.error("FORM ERROR:", error);
    alert("Something went wrong. Please try again.");
  }
});

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove('active');
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
});
