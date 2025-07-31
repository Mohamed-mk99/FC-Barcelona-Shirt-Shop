// Select the menu icon and navbar menu
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// // Add click event listener to toggle the menu
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Highlight active navigation menu item
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a'); // Select all navigation links
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Add 'active' class to the matching link
        }
    });
});


/// Handle registration form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.register form'); // Select the registration form

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get user input values
        const fullName = form.querySelector('input[placeholder="name"]').value;
        const username = form.querySelector('input[placeholder="surname"]').value;
        const email = form.querySelector('input[placeholder="Email"]').value;
        const phone = form.querySelector('input[placeholder="Phone Number"]').value;
        const password = form.querySelector('input[placeholder="Password"]').value;
        const confirmPassword = form.querySelector('input[placeholder="Confirm password"]').value;

        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Save user data to localStorage
        const userData = {
            fullName,
            username,
            email,
            phone,
        };

        localStorage.setItem('user', JSON.stringify(userData)); // Save as a JSON string
        alert('Account created successfully!');

        // Redirect to homepage
        window.location.href = 'homepage.html';
    });
});