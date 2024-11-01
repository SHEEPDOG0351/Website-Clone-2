// Define the `scrollReview` and `updateReview` functions globally
let currentReviewIndex = 0;
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

function scrollReview(direction) {
    const reviewContent = document.querySelector(".review-content-container");
    reviewContent.classList.add("fade-out"); // Trigger fade-out

    setTimeout(() => {
        // Update the current review index
        currentReviewIndex += direction;
        
        if (currentReviewIndex < 0) {
            currentReviewIndex = reviews.length - 1;
        } else if (currentReviewIndex >= reviews.length) {
            currentReviewIndex = 0;
        }

        updateReview();
        reviewContent.classList.remove("fade-out"); // Start fade-in
    }, 300); // Delay matches the CSS transition duration for fade-out
}

// Function to update the review content
function updateReview() {
    const reviewDescription = document.querySelector(".review-description");
    const authorName = document.querySelector("#author-info-container p");
    const authorImage = document.querySelector("#author-info-container img");

    reviewDescription.textContent = reviews[currentReviewIndex].text;
    authorName.textContent = reviews[currentReviewIndex].author;
    authorImage.src = reviews[currentReviewIndex].image || "default-image.jpg";
}

let propertyIndex = 0;

function setupPropertyScroll() {
    const propertiesContainer = document.querySelector('.property-card-container');
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

    // Attach event listeners to buttons
    document.getElementById('next').addEventListener('click', scrollNext);
    document.getElementById('previous').addEventListener('click', scrollPrevious);
}

// Initialize the property scroll functionality
document.addEventListener("DOMContentLoaded", setupPropertyScroll);



// Attach the scroll function to the buttons
document.querySelector('.next-button').addEventListener('click', () => scrollProperties('next'));
document.querySelector('.prev-button').addEventListener('click', () => scrollProperties('prev'));


// function updateProperties() {
//     const property_img = document.querySelector('.property-card img')
//     const property_cost = document.querySelector('.property-card-cost')
//     const property_description = document.querySelector('.property-text span')
//     const property_address = document.querySelector('.property-card-address')
// }

// Waits until HTML is loaded
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        const navHeight = nav.offsetHeight;
        if (window.scrollY > navHeight) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Initialize the first review on page load
    updateReview();

    // Set up event listeners for the buttons
    document.querySelector(".left-arrow").addEventListener("click", () => scrollReview(-1));
    document.querySelector(".right-arrow").addEventListener("click", () => scrollReview(1));

    document.getElementById('previous').addEventListener('click', () => scrollProperties(-1));
    document.getElementById('next').addEventListener('click', () => scrollProperties(1))
});
