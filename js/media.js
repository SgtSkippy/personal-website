function displayMedia() {
    const mediaBtn_open = document.querySelectorAll(".media-link");
    const mediaBtn_close = document.querySelectorAll(".media-close");
    const mediaOverlay = document.getElementById("mediaOverlay");

    // Media button handler
    mediaBtn_open.forEach(button => {
        button.addEventListener("click", () => {
            const mediaId = button.getAttribute("data-popup-id");
            const mediaWindow = document.getElementById(mediaId);
            mediaWindow.style.display = "grid";
            mediaOverlay.style.display = "grid";
        });
    });

    // Media window close button handler
    mediaBtn_close.forEach(button => {
        button.addEventListener("click", () => {
            const mediaWindow = button.closest(".media-window");
            mediaWindow.style.display = "none";
            mediaOverlay.style.display = "none";
        });
    });

    // Overlay close handler
    mediaOverlay.addEventListener("click", () => {
        document.querySelectorAll(".media-window").forEach(mediaWindow => {
            mediaWindow.style.display = "none";
            mediaOverlay.style.display = "none";
        });
    });
}

document.addEventListener("DOMContentLoaded", displayMedia);