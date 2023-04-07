const ratingsEls = document.querySelectorAll(".rating");
let feedback = "";
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

// -----------------------------------------------------------------------

ratingsEls.forEach((ratingel)=>{
    ratingel.addEventListener("click",(event)=>{
        remove();
        feedback = event.target.innerText ||event.target.parentNode.innerText;
        event.target.parentNode.classList.add("active");

    });
});

btnEl.addEventListener("click",()=>{
    if(feedback!==""){
        containerEl.innerHTML = `
        <strong>thank you</strong>
        <br>
        <br>
        <strong>FeedBack:${feedback}</strong>
        <br>
        <br>
        “If you take care of your people, your people will take care of your customers and your business will take care of itself.”`


    }
})
// -------------------------------------------------------------------
 function remove (){
    ratingsEls.forEach((ratingel)=>{
        ratingel.classList.remove("active");})
}