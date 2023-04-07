const inputEl  = document.getElementById("input");
const infoEl = document.getElementById("info");
const meaningContainer = document.getElementById("meaning-container");
const titleEL = document.getElementById("title");
const meaningEl  =document.getElementById("meaning");
const audioEl = document.getElementById("audio");




// --------------------------------------------------------------
 async function getApi (word){
    try {
        infoEl.style.display = "block";
        meaningContainer.style.display = "none";
        infoEl.innerText = `searching the meaning ${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const res =  await fetch(url).then((res)=> res.json());
        infoEl.style.display = "none";
        meaningContainer.style.display = "block";
        titleEL.innerText  =res[0].word;
        meaningEl.innerText =res[0].meanings[0].definitions[0].definition;
        audioEl.src = res[0].phonetics[0].audio;
    } catch (error) {
        infoEl.innerText = `erroe:check your neywork`
        
    }
   

}
// --------------------------------------------------------
inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key === "Enter"){
        getApi(e.target.value);
    
    }
    
})
