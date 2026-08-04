const newTicketBtn = document.getElementById("newTicketBtn");
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");

newTicketBtn.onclick = () => {
    modal.classList.remove("hidden");
};

cancel.onclick = () => {
    modal.classList.add("hidden");
};
