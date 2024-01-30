document.addEventListener('DOMContentLoaded', (
) => {
  // Make a GET request to /beers/1
  fetch('http://localhost:3000/beers/1')
      .then(response => response.json())
      .then(data => {
          // Update HTML elements with beer details
          document.getElementById('beer-name').textContent = data.name;
          document.getElementById('beer-image').src = data.image_url;
          document.getElementById('beer-description').textContent = data.description;

          const reviewsList = document.getElementById('beer-reviews');
          reviewsList.innerHTML = ""; // Clear existing reviews
          data.reviews.forEach(review => {
              const li = document.createElement('li');
              li.textContent = review;
              reviewsList.appendChild(li);
          });
      })
      .catch(error => console.error('Error fetching beer details:', error));

  // Make a GET request to /beers to load the menu
  fetch('http://localhost:3000/beers')
      .then(response => response.json())
      .then(beers => {
          const beerMenu = document.getElementById('beer-menu');
          beers.forEach(beer => {
              const menuItem = document.createElement('div');
              menuItem.textContent = beer.name;
              menuItem.addEventListener('click', () => displayBeerDetails(beer.id));
              beerMenu.appendChild(menuItem);
          });
      })
      .catch(error => console.error('Error fetching beer menu:', error));

  // Function to display beer details on menu item click
  function displayBeerDetails(beerId) {
      // Implement similar code as the one inside the DOMContentLoaded event
  }
});
document.getElementById('review-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const newReview = document.getElementById('new-review').value;

  // Update the displayed reviews (no persistence required)
  const reviewsList = document.getElementById('beer-reviews');
  const li = document.createElement('li');
  li.textContent = newReview;
  reviewsList.appendChild(li);

  // Clear the input field
  document.getElementById('new-review').value = '';