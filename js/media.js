function displayMedia(projectMediaButton) {
    const mediaBtn_open = document.querySelectorAll(".media-link");
    const mediaBtn_close = document.querySelectorAll(".media-close");
    const mediaOverlay = document.getElementsByClassName("mediaWindow-overlay");

    mediaBtn_open.forEach(button => {
        button.addEventListener("click", () => {
            const mediaId = button.getAttribute(data-popup-id);
            const mediaWindow = document.getElementById(mediaId);
            mediaWindow.style.display = "block";
            mediaOverlay.style.display = "block";
        });
    });

    
}