document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".position-fixed");
  const logo = document.getElementById("navbar-logo"); // Select the logo image by ID
  const logo2 = document.getElementById("navbar-logo2");
  const nav1 = document.getElementById("nvb-link-1");
  const nav2 = document.getElementById("nvb-link-2");
  const nav3 = document.getElementById("nvb-link-3");
  const nav4 = document.getElementById("nvb-link-4");
  const nav5 = document.getElementById("nvb-link-5");

  if (!logo) {
    console.error("Logo element not found");
    return;
  }

  console.log("Initial logo src:", logo.src);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-primary", "shadow", "border-bottom", "border-secondary");
      logo.src = "images/webassets/logowhite.png"; // Change to the white logo
      logo2.src = "images/webassets/logowhite.png";
      console.log("Scrolled down: Changing logo to logowhite.png");
      nav1.classList.add("text-secondary");
      nav2.classList.add("text-secondary");
      nav3.classList.add("text-secondary");
      nav4.classList.add("text-secondary");
      nav5.classList.add("text-secondary");
    } else {
      navbar.classList.remove("bg-primary", "shadow", "border-bottom", "border-secondary");
      logo.src = "images/webassets/logo.png"; // Change back to the default logo
      logo2.src = "images/webassets/logo.png";
      console.log("Scrolled up: Changing logo to logo.png");
      nav1.classList.remove("text-secondary");
      nav2.classList.remove("text-secondary");
      nav3.classList.remove("text-secondary");
      nav4.classList.remove("text-secondary");
      nav5.classList.remove("text-secondary");
    }
  });
});


