let cube = document.getElementById('cube');
let buttons = document.getElementById('buttons');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let feed = document.getElementById('feed');


function tester (e) {
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

