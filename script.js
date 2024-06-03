const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const character = new Image();
character.src = './img/character.png';

let charX = canvas.width / 2 - 50;
let charY = canvas.height / 2 - 50;
let charWidth = 100;
let charHeight = 100;

character.onload = () => {
    drawCharacter();
};

function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(character, charX, charY, charWidth, charHeight);
}

canvas.addEventListener('click', moveCharacter);

function moveCharacter(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    if (
        clickX >= charX &&
        clickX <= charX + charWidth &&
        clickY >= charY &&
        clickY <= charY + charHeight
    ) {
        charX = Math.random() * (canvas.width - charWidth);
        charY = Math.random() * (canvas.height - charHeight);
        drawCharacter();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const gameImage = document.getElementById("game-image");
    const images = ["./img/image1.jpg", "./img/image2.jpg", "./img/image3.jpg"];
    let currentIndex = 0;

    gameImage.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        gameImage.src = images[currentIndex];
    });

    const refreshButton = document.getElementById("refresh-btn");
    refreshButton.addEventListener("click", function() {
        location.reload();
    });
});
