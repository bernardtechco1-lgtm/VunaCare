const modal = document.getElementById("modal");

const enrollButtons =
document.querySelectorAll(".enroll-btn");

const closeModal =
document.getElementById("closeModal");

enrollButtons.forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});