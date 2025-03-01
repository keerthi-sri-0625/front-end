
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[1];


openModalBtn.onclick = function() {
    modal.style.display = "block";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
