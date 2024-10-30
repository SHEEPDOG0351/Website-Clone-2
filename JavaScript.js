    //Waits until HTML is loaded
    document.addEventListener("DOMContentLoaded", function() {
        
        const nav = document.querySelector("nav");

        
        window.addEventListener("scroll", function() {
            // Check if the user has scrolled past the height of the nav
            if (window.scrollY > navHeight) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });

        function scrollLeft() {
            const carousel = document.querySelector('.property-carousel');
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
          }
          
          function scrollRight() {
            const carousel = document.querySelector('.property-carousel');
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
          }

          const reviews = [
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium.",
                author: "Nick Andros",
                image: "" // Add image URL if available
            },
            {
                text: "Another review text goes here. This one is from a different client.",
                author: "Jane Doe",
                image: "" // Add image URL if available
            },
            {
                text: "Yet another review text. Clients love our service!",
                author: "John Smith",
                image: "" // Add image URL if available
            }
        ];
        
        let currentReviewIndex = 0;
        
        function updateReview() {
            const reviewDescription = document.querySelector(".review-description");
            const authorName = document.querySelector("#author-info-container p");
            const authorImage = document.querySelector("#author-info-container img");
        
            reviewDescription.textContent = reviews[currentReviewIndex].text;
            authorName.textContent = reviews[currentReviewIndex].author;
            authorImage.src = reviews[currentReviewIndex].image || "default-image.jpg"; // Default image if no URL
        }
        
        function scrollReview(direction) {
            currentReviewIndex += direction;
        
            if (currentReviewIndex < 0) {
                currentReviewIndex = reviews.length - 1; // Loop back to the last review
            } else if (currentReviewIndex >= reviews.length) {
                currentReviewIndex = 0; // Loop back to the first review
            }
        
            updateReview();
        }
        
        // Initialize the first review on page load
        updateReview();
        
    });