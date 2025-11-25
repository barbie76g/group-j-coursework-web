document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");
  const bookNowBtn = document.querySelector(".book-now-btn");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  document.querySelectorAll(".navbar li a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });

  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", () => {
      window.location.href = "booking.html"; 
      
    });
  }
});