const menuBtn = document.querySelector('.menu-button');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// const container = document.querySelector(".menu-bg");

// // Move animation
// container.addEventListener('mousemove', (e) => {
//     // console.log(e.pageX, e.pageY);
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 7;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 7;

//     container.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
// })