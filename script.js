// Simple search functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const movieCards = document.querySelectorAll(".movie-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    movieCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
});
