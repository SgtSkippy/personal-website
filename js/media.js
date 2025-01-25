// Handles media window popup for all projects
function displayMediaWindow() {
    const mediaBtn_open = document.querySelectorAll(".media-link");     // Grabs all media buttons
    const mediaBtn_close = document.querySelectorAll(".media-close");   // Grabs all close buttons
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
};

// Loads images/videos for all projects
function loadProjectMedia(project) {
    const media = project.querySelector(".media-files");        // FIXME: project catches a type error
    const mediaContent = project.querySelectorAll(".media-files img, .media-files video");
    const previousButton = project.querySelector(".media-button.left");
    const nextButton = project.querySelector(".media-button.right");
    const dotsContainer = project.querySelector(".media-dots");

    // TODO: Implement changing and updating media, generating dots for media count, and adding listeners to buttons
};

// Initializes all project media
const projectMedia = document.querySelectorAll(".media-space");     // Grabs all media space from each project
projectMedia.forEach(project => {
    loadProjectMedia(project);
});

document.addEventListener("DOMContentLoaded", displayMediaWindow);
document.addEventListener("DOMContentLoaded", loadProjectMedia);