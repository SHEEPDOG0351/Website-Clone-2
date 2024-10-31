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
});
