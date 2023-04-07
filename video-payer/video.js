 const btnEl = document.querySelector(".btn");
 const closeEl = document.querySelector(".close-icon");
 const videoContanerEl = document.querySelector(".videoContaner");
 const videoEl = document.querySelector("video")

 btnEl.addEventListener("click",()=> {
    videoContanerEl.classList.remove("active");
 });


 closeEl.addEventListener("click",()=> {
    videoContanerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
 });