const titles = [
    "Cybersecurity Student",
    "Secure Software Enthusiast",
    "Aspiring Penetration Tester",
    "Future Security Engineer"
];

const typingText = document.getElementById("typing-text");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentTitle.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentTitle.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent =
            currentTitle.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            titleIndex++;

            if (titleIndex >= titles.length) {

                titleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();
