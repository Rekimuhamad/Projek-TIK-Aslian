// Init AOS (Animasi Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: true, // Animasi hanya sekali saat scroll ke bawah
        offset: 100, // Trigger animasi 100px sebelum elemen muncul
        duration: 800, // Durasi animasi
        easing: 'ease-out-cubic'
    });
});

// Refresh Dashboard Logic
function refreshDashboard() {
    const frame = document.querySelector("iframe");
    const container = document.querySelector(".dashboard-frame");
    
    // Efek loading visual
    container.style.opacity = "0.5";
    setTimeout(() => {
        // Reload iframe
        const currentSrc = frame.src;
        frame.src = ''; 
        frame.src = currentSrc;
        
        container.style.opacity = "1";
    }, 300);
}

// Fullscreen Logic
function toggleFullScreen() {
    const elem = document.getElementById("dashboardContainer");

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { 
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { 
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Navbar Scroll Effect (Glass become darker)
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(2, 6, 23, 0.95)";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(2, 6, 23, 0.8)";
        navbar.style.boxShadow = "none";
    }
});