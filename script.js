document.addEventListener("DOMContentLoaded", function() {
    var popupMessage = document.getElementById("popup-message");
    var popupMessageHeader = document.getElementById("popup-message-header");

    // Hide the pop-up messages by default
    popupMessage.style.display = "none";
    popupMessageHeader.style.display = "none";

    // Add click event listener to the images
    document.getElementById("popup-trigger").addEventListener("click", function() {
        // Toggle the visibility of the first pop-up message
        if (popupMessage.style.display === "none" || popupMessage.style.display === "") {
            popupMessage.style.display = "block";
        } else {
            popupMessage.style.display = "none";
        }
    });

    document.getElementById("popup-trigger-header").addEventListener("click", function() {
        // Toggle the visibility of the header pop-up message
        if (popupMessageHeader.style.display === "none" || popupMessageHeader.style.display === "") {
            popupMessageHeader.style.display = "block";
        } else {
            popupMessageHeader.style.display = "none";
        }
    });
});

function closePopup() {
    var popupMessage = document.getElementById("popup-message");
    popupMessage.style.display = "none";
}

function closePopupHeader() {
    var popupMessageHeader = document.getElementById("popup-message-header");
    popupMessageHeader.style.display = "none";
}
