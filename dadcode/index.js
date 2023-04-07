const btnEl = document.getElementById("btn");
jokeEl  = document.getElementById("joke");

const api  ="Bv6tjn8VhhETaZkcow/VYw==iYKhnixj5a33JZVR"
const option =  {
    method:'GET',
    headers: { 'X-Api-Key': api}
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// ------------------------------------------------------------------------
async function getJoke(){

    try {
        
            jokeEl.innerText = "updating...";
            btnEl.disabled  =true;
            btnEl.innerText  ="loading...";
            const response = await fetch(apiUrl,option);
            const data =  await response.json();
        
            btnEl.disabled  =false;
            btnEl.innerText  ="Tell me a Joke";
            jokeEl.innerText = data[0].joke;
        }
        
    catch (error) {
        jokeEl.innerText = "error happend ,try again later"   
    }
}

btnEl.addEventListener("click",getJoke);


