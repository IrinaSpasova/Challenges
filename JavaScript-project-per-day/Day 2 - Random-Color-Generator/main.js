window.onload = function () {
    addColorToBox();
}

for (let i = 0; i < 9; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function randomHexColorCode() {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for (var i = 0; i < colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
        console.log(color);
    }

    return '#' + color;
}

function addColorToBox() {
    randomColorBlock.forEach(e => {
        var newColor = randomHexColorCode();
        console.log(newColor);
        e.style.background = newColor;
        e.innerHTML = newColor;
    });
}