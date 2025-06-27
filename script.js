document.addEventListener("DOMContentLoaded", () => {
  // Tab buttons
  const loginTab = document.querySelector(".login-tab");
  const signupTab = document.querySelector(".signup-tab");

  // Forms
  const loginForm = document.querySelector(".login-form");
  const signupForm = document.querySelector(".signup-form");

  // Toggle Login Tab
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  // Toggle Signup Tab
  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  });

  // Toggle Password Visibility (Login + Signup)
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = icon.previousElementSibling;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      icon.src = isPassword ? "assets/eye-open.png" : "assets/eye-close.png";
    });
  });

  // Phone Number Dropdown
  const selector = document.querySelector(".country-selector");
  const dropdown = selector?.querySelector(".dropdown");
  const selectedFlag = document.getElementById("selected-flag");
  const countryCode = document.getElementById("country-code");

  if (selector && dropdown && selectedFlag && countryCode) {
    selector.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    dropdown.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        selectedFlag.src = item.getAttribute("data-flag");
        countryCode.textContent = item.getAttribute("data-code");
        dropdown.style.display = "none";
      });
    });

    document.addEventListener("click", (e) => {
      if (!selector.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  }
});
