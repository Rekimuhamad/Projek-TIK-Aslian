// Refresh iframe dashboard
function refreshDashboard() {
    const frame = document.querySelector("iframe");
    frame.src = frame.src;
}

// Navbar active link switching while scrolling
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    let currentPosition = window.scrollY + 200;

    sections.forEach((section) => {
        if (section.offsetTop <= currentPosition && section.offsetTop + section.offsetHeight > currentPosition) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector('.navbar a[href="#' + section.id + '"]').classList.add("active");
        }
    });
});
