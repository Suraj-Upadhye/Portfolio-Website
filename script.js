function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

const themeSwitcher = document.getElementById("themeSwitcher");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// Contact form :
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let valid = true;
  
  // Name validation
  let name = document.getElementById("name").value.trim();
  if (name.length < 3) {
      document.getElementById("nameError").innerText = "Name must be at least 3 characters long.";
      valid = false;
  } else {
      document.getElementById("nameError").innerText = "";
  }

  // Email validation
  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Enter a valid email.";
      valid = false;
  } else {
      document.getElementById("emailError").innerText = "";
  }

  // Message validation
  let message = document.getElementById("message").value.trim();
  if (message.length < 10) {
      document.getElementById("messageError").innerText = "Message must be at least 10 characters long.";
      valid = false;
  } else {
      document.getElementById("messageError").innerText = "";
  }

  if (!valid) {
      event.preventDefault(); 
  } else {
      setTimeout(() => {
          document.getElementById("contactForm").reset(); 
      }, 500); 
  }
});

// Clear form fields when page loads
window.onload = function() {
  document.getElementById("contactForm").reset();
};


// gsap

gsap.from("#navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});


gsap.from(".sectionTitle", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
      trigger: ".sectionTitle",
      start: "top 80%",
      toggleActions: "play none none reverse"
  }
});

gsap.from(".skillList li, .educationEntry", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
      trigger: ".skillList",
      start: "top 85%",
      toggleActions: "play none none reverse"
  }
});


gsap.fromTo(".greeting span", 
  { width: "0px" }, 
  { width: "auto", duration: 1.5, ease: "steps(12)" }
);


gsap.from(".projectCard", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".projectsContainer",
      start: "top 85%",
      toggleActions: "play none none reverse"
  }
});

gsap.to(".homeImage img", {
  y:10,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "power1.inOut"
});

document.getElementById("themeSwitcher").addEventListener("click", () => {
  gsap.to("body", {
      backgroundColor: "black",
      color: "white",
      duration: 0.5
  });
});



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Scroll animation for the profile image 
  gsap.from(".homeImage", {
      x: 100, 
      opacity: 0, 
      duration: 1, 
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".homeImage",
          start: "top 80%",
          toggleActions: "play none none none"
      }
  });
});
