const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.getElementById("year").textContent = new Date().getFullYear();


const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMsg.style.color = "red";
        formMsg.textContent = "Please fill in all fields!";
        return;
    }

        if (!email.includes("@") || !email.includes(".")) {
        formMsg.style.color = "red";
        formMsg.textContent = "Please enter a valid email!";
        return;
    }

        formMsg.style.color = "green";
    formMsg.textContent = "Your message has been sent successfully!";

        setTimeout(() => {
        form.reset();
        formMsg.textContent = "";
    }, 3000);
});
