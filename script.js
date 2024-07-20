function openSidebar() {
    document.getElementById("sidebar").style.width = "250px"; // Adjust width as needed
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

document.querySelector(".menu-icon").addEventListener("click", openSidebar);