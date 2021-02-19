let cube = document.getElementById('cube');
let buttons = document.getElementById('buttons');
let feed = document.getElementById('feed');
let s1 = document.getElementById('first');
let s2 = document.getElementById('second');
let s3 = document.getElementById('third');
let s4 = document.getElementById('fourth');
let s5 = document.getElementById('fifth');
let s6 = document.getElementById('sixth');
let wid = window.screen.width;
let hgt = window.screen.height;


function tester (e) {/*
    if (wid <= 900 || hgt <= 900) {/*
        s1.style.transform = "tanslateZ(50px) tanslateX(-50px) tanslateY(-50px)";
        s2.style.transform = "tanslate() tanslate() tanslate()";
        s3.style.transform = "tanslate() tanslate() tanslate()";
        s4.style.transform = "tanslate() tanslate() tanslate()";
        s5.style.transform = "tanslate() tanslate() tanslate()";
        s6.style.transform = "tanslate() tanslate() tanslate()";
        s1.style.backgroundColor = "#f00";
    }*/

    let click = e.target.id;

    switch (click) {
        case 'b1':
            cube.style.transform = 'rotate(0deg)';
            feed.style.top = '0';
            break;
        case 'b2':
            cube.style.transform = 'rotateY(270deg)';
            feed.style.top = '-100vh';
            break;
        case 'b3':
            cube.style.transform = 'rotateY(180deg)';
            feed.style.top = '-200vh';
            break;
        case 'b4':
            cube.style.transform = 'rotateY(90deg)';
            feed.style.top = '-300vh';
            break;
        case 'b5':
            cube.style.transform = 'rotateX(-90deg) rotateZ(180deg)';
            feed.style.top = '-400vh';
            break;
        case 'b6':
            cube.style.transform = 'rotateX(90deg) rotateZ(180deg)';
            feed.style.top = '-500vh';
            break;
    }
}

buttons.addEventListener('click', tester);

document.g