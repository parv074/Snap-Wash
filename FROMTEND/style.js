function openPopup(serviceName) {
    const popup = document.getElementById("servicePopup");
    const title = document.getElementById("popupTitle");
    popup.style.display = "flex";
    title.innerText = serviceName;
}

document.querySelector(".close-popup").addEventListener("click", function () {
    document.getElementById("servicePopup").style.display = "none";
});

window.addEventListener("click", function (e) {
    const popup = document.getElementById("servicePopup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


document.querySelectorAll(".service-item").forEach(function(item) {
    item.addEventListener("click", function() {
        const serviceName = item.querySelector("p").innerText;
        openPopup(serviceName);
    });
});