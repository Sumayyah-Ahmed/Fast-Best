let currentIndex = 0;
const reviews = document.querySelectorAll('.review-card');
const total = reviews.length;
const next = document.getElementById('next');
const prev = document.getElementById('prev');

function showReview(index) {
  reviews.forEach((rev, i) => {
    rev.classList.remove('active');
    if (i === index) rev.classList.add('active');
  });
}

function nextReview() {
  currentIndex = (currentIndex + 1) % total;
  showReview(currentIndex);
}

function prevReview() {
  currentIndex = (currentIndex - 1 + total) % total;
  showReview(currentIndex);
}

next.addEventListener('click', nextReview);
prev.addEventListener('click', prevReview);

setInterval(nextReview, 4000); // Auto slide every 4 seconds
