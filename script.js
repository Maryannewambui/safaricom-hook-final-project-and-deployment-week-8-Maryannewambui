    // Modal functionality
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  
  // Form validation and success message
  document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const dropdown = document.getElementById('dropdown-menu');
    const successMessage = document.createElement('p');
    let isValid = true;
  
    // Name validation
    if (name.value.length < 3) {
      isValid = false;
      document.getElementById('name-error').innerText = 'Name must be at least 3 characters long.';
    } else {
      document.getElementById('name-error').innerText = '';
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      isValid = false;
      document.getElementById('email-error').innerText = 'Enter a valid email address.';
    } else {
      document.getElementById('email-error').innerText = '';
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password.value)) {
      isValid = false;
      document.getElementById('password-error').innerText =
        'Password must be at least 8 characters long, with one uppercase letter and one number.';
    } else {
      document.getElementById('password-error').innerText = '';
    }
  
    // Dropdown validation
    if (!dropdown.value) {
      isValid = false;
      document.getElementById('dropdown-message').innerText = 'Please select a role.';
    } else {
      document.getElementById('dropdown-message').innerText = '';
    }
  
    // If all fields are valid
    if (isValid) {
      const successMessage = document.createElement('p');
      successMessage.innerText = 'Registration successful!';
      successMessage.className = 'success-message';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';
      document.getElementById('signup-form').appendChild(successMessage);
  
      name.value = '';
      email.value = '';
      password.value = '';
      dropdown.value = '';
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("homepageVideo");
    video.play().catch(error => console.log("Autoplay failed:", error));
});


document.getElementById('contact-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");
  
  if (aboutSection) {
    aboutSection.addEventListener("click", function () {
      aboutSection.classList.toggle("visible");
      aboutSection.classList.toggle("hidden");
    });
  }

  const sections = document.querySelectorAll(".section-fade-in");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});





