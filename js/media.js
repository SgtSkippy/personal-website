// Handles media window popup for all projects
function displayMediaWindow() {
    const mediaBtn_open = document.querySelectorAll(".media-link");     // Grabs all media buttons
    const mediaBtn_close = document.querySelectorAll(".media-close");   // Grabs all close buttons
    const mediaOverlay = document.getElementById("mediaOverlay");       // Grabs overlay container
    const mediaScreen_width = window.matchMedia("(max-width: 640px)");  // Grabs window width
    const navbar = document.getElementById("navbar");                   // Grabs top navigation bar

    // Media button handler
    mediaBtn_open.forEach(button => {
        // On click, display media window and overlay
        button.addEventListener("click", () => {
            const mediaId = button.getAttribute("data-popup-id");
            const mediaWindow = document.getElementById(mediaId);
            mediaWindow.style.display = "grid";
            mediaOverlay.style.display = "grid";
            // If window is small, close nav bar
            if (mediaScreen_width.matches) {
                navbar.style.display = "none";
            };
        });
    });

    // Media window close button handler
    mediaBtn_close.forEach(button => {
        // On click, close media window and overlay
        button.addEventListener("click", () => {
            const mediaWindow = button.closest(".media-window");
            mediaWindow.style.display = "none";
            mediaOverlay.style.display = "none";
            navbar.style.display = "block";
        });
    });

    // Overlay close handler
    // Upon clicking the overlay, close media window and overlay
    mediaOverlay.addEventListener("click", () => {
        document.querySelectorAll(".media-window").forEach(mediaWindow => {
            mediaWindow.style.display = "none";
            mediaOverlay.style.display = "none";
            navbar.style.display = "block";
        });
    });
};

// Loads images/videos for all projects
function loadProjectMedia(project) {
    const media = project.querySelector(".media-files");                                        // Grabs media file container
    const mediaContent = project.querySelectorAll(".media-files img, .media-files video");      // Grabs list of media files
    const previousButton = project.querySelector(".media-button.left");                         // Grabs left media button
    const nextButton = project.querySelector(".media-button.right");                            // Grabs right media button
    const dotsContainer = project.querySelector(".media-dots");                                 // Grabs the container for media dot illustration
    let currentIndex = 0;

    // If no media is available, stop initializing
    if (mediaContent.length === 0) {
        console.warn("No media found for the following project: ", project);
        return;
    };

    // Illustrate dots for media
    mediaContent.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("media-dot");
        // Set first media as active
        if (index === 0) {
            dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
    });

    const dots = project.querySelectorAll(".media-dot");        // Grab each dot after they've been created

    function updateMediaWindow() {
        // Moves media slides
        media.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Video handler
        mediaContent.forEach((mediaFile, index) => {
            if (mediaFile.tagName === "video") {
                // Pauses video if not currently selected
                if (index !== currentIndex) {
                    mediaFile.pause();
                };
            };
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    };

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % mediaContent.length;    // Loops to start
        updateMediaWindow();
    };

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + mediaContent.length) % mediaContent.length;      // Loops to end
        updateMediaWindow();
    };

    // Event listener for buttons
    nextButton.addEventListener("click", showNextSlide);
    previousButton.addEventListener("click", showPrevSlide);

    // Event listener for dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateMediaWindow();
        });
    });

    // Initialize first media display
    updateMediaWindow();
};

// Initializes all project media
document.addEventListener("DOMContentLoaded", displayMediaWindow);
document.addEventListener("DOMContentLoaded", () => {
    const projectMedia = document.querySelectorAll(".media-space");     // Grabs all media space from each project media window
    projectMedia.forEach(project => {
        loadProjectMedia(project);
    });
});