const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const imgEl  =document.querySelector(".img");
const nameEL  = document.querySelector(".anime-name");






btnEl.addEventListener("click",async()=>{
   
    try {
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
        nameEL.innerHTML = "updating...)";
        imgEl.src  = "check.svg";
        const resp = await fetch("https://api.catboys.com/img");
        const data  = await resp.json();
        btnEl.disabled = false;
        btnEl.innerHTML = "click";
        animeContainerEl.style.display = "block";
        imgEl.src = data.url;
        nameEL.innerHTML = data.artist;

    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerHTML = "click";
        nameEL.innerHTML = "check your network :(";
        imgEl.src = "check.svg";
    }
});