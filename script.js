const hamburger= document.querySelector('.hamburger');
const navbar= document.querySelector('#navbar');
hamburger.addEventListener('click',function () {
    navbar.classList.toggle('activeNav');
    });


const track1 = document.getElementById("track");
window.onmousedown = e =>{
    track1.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () =>{
    track1.dataset.mouseDownAt="0";
    track1.dataset.prevPercentage = track1.dataset.percentage;
}
window.onmousemove = e =>{
    if (track1.dataset.mouseDownAt ==="0") return;

    const mouseDelta= parseFloat(track1.dataset.mouseDownAt)- e.clientX ;
    const maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta / maxDelta)* -100;
    const nextpercentage = Math.min(Math.max(parseFloat(track1.dataset.prevPercentage) + percentage, -100), 0);

    track1.dataset.percentage = nextpercentage;
    track1.style.transform = `translate(${nextpercentage}%,0%)`;

    for(const image of track1.getElementsByClassName("image")){
        track1.animate({
            transform: `translate(${nextpercentage}%,0%)`},
            {duration:1200,fill:"forwards"
        });
        image.animate({
            objectPosition: `${nextpercentage +100}% center`},
            {duration:1200,fill:"forwards"
        });
    }
}

