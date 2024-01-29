document.addEventListener('DOMContentLoaded', () => {
  // Fetch beer details and display on page
  fetch('http://localhost:3000/beers/1')
      .then(response => response.json())
      .then(data => displayBeerDetails(data));

  // Fetch all beers and display menu
  fetch('http://localhost:3000/beers')
      .then(response => response.json())
      .then(data => displayBeerMenu(data));

  // Add event listener to review form
  const reviewForm = document.getElementById('add-review-form');
  reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newReview = reviewForm.querySelector('#review-input').value;
      displayNewReview(newReview);
  });
});

function displayBeerDetails(beer) {
  // Display beer details in the #beer-details div
  // Use innerHTML or create DOM elements and appendChild
}

function displayBeerMenu(beers) {
  // Display beer menu in the #beer-menu nav
  // Use innerHTML or create DOM elements and appendChild
}

function displayNewReview(review) {
  // Display the new review on the page
  // Use innerHTML or create DOM elements and appendChild
}







// app.js
document.addEventListener('DOMContentLoaded', () => {
  // ... (previous code)

  // Add event listener to review form
  const reviewForm = document.getElementById('add-review-form');
  reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newReview = reviewForm.querySelector('#review-input').value;
      displayNewReview(newReview);
  });
});

function displayNewReview(review) {
  // Display the new review on the page
  // Use innerHTML or create DOM elements and appendChild
}
