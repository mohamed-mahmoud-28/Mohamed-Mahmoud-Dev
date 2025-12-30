const moonIcon = document.querySelector('.moon-icon');
const navbar = document.querySelector('nav');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    navbar.classList.add('navbar-dark-mode');

    moonIcon.classList.remove('fa-moon');
    moonIcon.classList.add('fa-sun');
}

moonIcon.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        // Dark Mode ON
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');

        localStorage.setItem('theme', 'dark');
    } else {
        // Light Mode ON
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');

        localStorage.setItem('theme', 'light');
    }

});



const form = document.getElementById('contentForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const content = document.getElementById('content').value.trim();

    if (name === '' || email === '' || content === '') {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Your message has been submitted successfully!';
    message.style.color = 'green';

    form.reset();
});


// The Animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

reveals.forEach(reveal => {
    observer.observe(reveal);
});


// Skills Animation
const skillSection = document.querySelector("#Slills");
const skillItems = document.querySelectorAll(".skill-item");

const skillObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("active");

                        const bar = item.querySelector(".progress-bar");
                        const value = bar.getAttribute("data-progress");

                        bar.style.width = value + "%";
                        bar.textContent = value + "%";
                    }, index * 200);
                });

                skillObserver.unobserve(skillSection);
            }
        });
    },
    { threshold: 0.3 }
);

skillObserver.observe(skillSection);


