// Wait until everything is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Button click handlers
    document.querySelector('.play-btn').addEventListener('click', function() {
        alert('Playing Stranger Things!');
    });

    document.querySelector('.info-btn').addEventListener('click', function() {
        alert('More info: Stranger Things is a supernatural series.');
    });

    // Click on any movie card
    document.querySelectorAll('.movie-card').forEach(function(card) {
        card.addEventListener('click', function() {
            alert('You clicked on: ' + card.textContent);
        });
    });

});
// Login button click
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Redirecting to login page...');
});
