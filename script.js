const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

musicButton.addEventListener("click", function() {
    musicButton.style.animationPlayState = "running"
    musicButton.addEventListener("animationend", () => {
        musicButton.remove()
        music.play();
    })
});
