//cursor
let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
  
});

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("#navbar");

// nav bar
hamburger.addEventListener("click", function () {
  navbar.classList.toggle("activeNav");
});

//slider 
const track1 = document.getElementById("track");
window.onmousedown = (e) => {
  track1.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = () => {
  track1.dataset.mouseDownAt = "0";
  track1.dataset.prevPercentage = track1.dataset.percentage;
};
window.onmousemove = (e) => {
  if (track1.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track1.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextpercentage = Math.min(
    Math.max(parseFloat(track1.dataset.prevPercentage) + percentage, -100),
    0
  );

  track1.dataset.percentage = nextpercentage;
  track1.style.transform = `translate(${nextpercentage}%,0%)`;

  for (const image of track1.getElementsByClassName("image")) {
    track1.animate(
      {
        transform: `translate(${nextpercentage}%,0%)`,
      },
      { 
        duration: 1200, fill: "forwards" }
    );
    image.animate(
      {
        objectPosition: `${nextpercentage + 100}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

//product 
const buttons = document.querySelectorAll('.ham');
const descriptions = document.querySelectorAll('.des');
const images = document.querySelectorAll('.card-img');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log("hii");
    images[index].style.transform = `rotateY(${images[index].style.transform == 'rotateY(180deg)' ? '0deg' : '180deg'})`;
    descriptions[index].style.transform = `rotateY(${descriptions[index].style.transform == 'rotateY(0deg)' ? '180deg' : '0deg'})`;
  });
});

