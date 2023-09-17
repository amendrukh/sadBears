const sectionTeamButtons = document.querySelectorAll(".questions__item-header-icon");

sectionTeamButtons.forEach((el, indexEl) => {
    el.addEventListener("click", () => {
        const sectionTeamAnswers = document.querySelectorAll(".questions__item");
        const selectedItem = sectionTeamAnswers[indexEl];
        selectedItem.classList.toggle("active")
    });
});
