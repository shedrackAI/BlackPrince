const playBtn = document.querySelector(".my-audio");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");


const barTop = document.querySelector(".bar-top");
const barMiddle = document.querySelector(".bar-middle");
const barBottom = document.querySelector(".bar-bottom");
const menu = document.querySelector('.hamburger-menu');

const menuContainer = document.querySelector('.menu-container');

menu.addEventListener('click', evt => {
	barTop.classList.toggle('bar-top-animate');
	barMiddle.classList.toggle('bar-middle-animate');
	barBottom.classList.toggle('bar-bottom-animate');

    menuContainer.classList.toggle("move")
})

const text1 = '../audios/Line1.mp3';
const text2 = '../audios/Line2.mp3';

audio1.src = text1;
audio2.src = text2;




playBtn.addEventListener("click", () => {
    audio1.play();

    setInterval(() => {
        audio1.addEventListener("ended", () => {
            audio2.play();
        })
    }, 200);
})
