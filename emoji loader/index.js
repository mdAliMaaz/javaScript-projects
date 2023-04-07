const btnEl = document.getElementById("btn");
const nameEl  = document.getElementById("name");
const emoji = [];
// -----------------------------------------------------------------





   

 
// --------------------------------------------------------------


try {

    getEmoji(); 

    async function getEmoji(){
        let resp = await fetch("https://emoji-api.com/emojis?access_key=f78be1483baed7e4cf87ca21dcc6a9341fbe0b02");
        let data = await resp.json();
        console.log(data);
        for(let i=0; i<1500; i++){
            emoji.push({
                name:data[i]. character,
                code:data[i].unicodeName,
            })
        }
    }

    btnEl.addEventListener("click",()=>{
        const radNum = Math.floor(Math.random()*emoji.length);
        btnEl.innerHTML = emoji[radNum].name;
        nameEl.innerHTML = emoji[radNum].code;
    })
    
} catch (error) {
    btnEl.innerHTML = "ERROE:(";
        nameEl.innerHTML = "Check Your Network!!!";
        console.log("error");
    
}
