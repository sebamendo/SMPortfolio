const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 10px 30px rgba(59,130,246,.25)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});
