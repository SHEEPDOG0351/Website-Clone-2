document.addEventListener("DOMContentLoaded", function() {
    // Navbar scroll effect
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        const navHeight = nav.offsetHeight;
        if (window.scrollY > navHeight) {
            nav.classList.add("scrolled");
            console.log("Scrolled class added"); // Debugging output
        } else {
            nav.classList.remove("scrolled");
            console.log("Scrolled class removed"); // Debugging output
        }
    });

    // Reviews data
    const reviews = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium.",
            author: "Nick Andros",
            image: "" // Add image URL if available
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium.",
            author: "Jane Doe",
            image: "" // Add image URL if available
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium.",
            author: "John Smith",
            image: "" // Add image URL if available
        }
    ];
    
    let currentReviewIndex = 0;

    function scrollReview(direction) {
        const reviewContent = document.querySelector(".review-content-container");
        reviewContent.classList.add("fade-out");

        setTimeout(() => {
            currentReviewIndex = (currentReviewIndex + direction + reviews.length) % reviews.length;
            updateReview();
            reviewContent.classList.remove("fade-out");
        }, 300);
    }

    function updateReview() {
        const reviewDescription = document.querySelector(".review-description");
        const authorName = document.querySelector("#author-info-container p");
        const authorImage = document.querySelector("#author-info-container img");

        reviewDescription.textContent = reviews[currentReviewIndex].text;
        authorName.textContent = reviews[currentReviewIndex].author;
        authorImage.src = reviews[currentReviewIndex].image || "default-image.jpg";
    }

    document.querySelector(".left-arrow").addEventListener("click", () => scrollReview(-1));
    document.querySelector(".right-arrow").addEventListener("click", () => scrollReview(1));

    // Property scrolling
    let propertyIndex = 0;

    function setupPropertyScroll() {
        const propertiesContainer = document.querySelector('.property-card-container');
        if (propertiesContainer) {
            const propertyCardWidth = propertiesContainer.querySelector('.property-card').offsetWidth + 20; // Adjust for padding/margin if necessary

            function scrollNext() {
                propertiesContainer.style.transition = 'transform 0.5s ease-in-out';
                propertyIndex++;
                propertiesContainer.style.transform = `translateX(-${propertyIndex * propertyCardWidth}px)`;

                // After the transition, move the first card to the end and reset the transform to create an infinite loop effect
                propertiesContainer.addEventListener('transitionend', () => {
                    propertiesContainer.style.transition = 'none';
                    const firstCard = propertiesContainer.firstElementChild;
                    propertiesContainer.appendChild(firstCard);
                    propertyIndex--;
                    propertiesContainer.style.transform = `translateX(-${propertyIndex * propertyCardWidth}px)`;
                }, { once: true });
            }

            function scrollPrevious() {
                // Prepend the last card to the start and set transform without animation to simulate instant change
                const lastCard = propertiesContainer.lastElementChild;
                propertiesContainer.insertBefore(lastCard, propertiesContainer.firstElementChild);
                propertiesContainer.style.transition = 'none';
                propertyIndex++;
                propertiesContainer.style.transform = `translateX(-${propertyIndex * propertyCardWidth}px)`;

                // Add transition and shift container back to make it smooth
                setTimeout(() => {
                    propertiesContainer.style.transition = 'transform 0.5s ease-in-out';
                    propertyIndex--;
                    propertiesContainer.style.transform = `translateX(-${propertyIndex * propertyCardWidth}px)`;
                }, 10); // Small timeout to apply transition
            }

            document.getElementById('next').addEventListener('click', scrollNext);
            document.getElementById('previous').addEventListener('click', scrollPrevious);
        } else {
            console.error("Property card container not found!");
        }
    }

    // Initialize the first review on page load
    updateReview();

    // Initialize property scroll functionality
    setupPropertyScroll();
});
