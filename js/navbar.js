  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".sticky-top");
    
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navbar.classList.add("bg-primary", "shadow");
      } else {
        navbar.classList.remove("bg-primary", "shadow");
      }
    });
  });

