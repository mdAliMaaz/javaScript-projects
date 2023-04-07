const btnEl  = document.getElementById("btn");
const quoteEl  =document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiUrl  = "https://api.quotable.io/random";


btnEl.addEventListener("click",async()=>{
    try {
        quoteEl.innerText = "loading ...";
        authorEl.innerText = "please wait";
        const res  = await fetch(apiUrl);
        const data =  await res.json();
        quoteEl.innerText = data.content;
        authorEl.innerText = data.author;
    } catch (error) {
        quoteEl.innerText = "somthing went wrong , please again later";
    }
});