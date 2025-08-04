
document.addEventListener('DOMContentLoaded', function() {
    
    // Button click handlers
    document.querySelector('.play-btn').addEventListener('click', function() {
        alert('Playing Stranger Things!');
    });

    document.querySelector('.info-btn').addEventListener('click', function() {
        alert('More info: Stranger Things is a supernatural series.');
    });

    document.querySelectorAll('.movie-card').forEach(function(card) {
        card.addEventListener('click', function() {
            alert('You clicked on: ' + card.textContent);
        });
    });

});

document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Redirecting to login page...');
});
