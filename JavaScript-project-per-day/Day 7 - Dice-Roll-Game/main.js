function shuffle(){
    const img = document.getElementById('img');
    let random = Math.floor(Math.random() * 6) +1;
    img.setAttribute("src", `assets/${random}.png`);
    console.log(random);
}

function anim(){
    setTimeout(shuffle,1000)
    const img = document.getElementById('img');
    img.setAttribute("src", `assets/dice-rol.gif`);
}