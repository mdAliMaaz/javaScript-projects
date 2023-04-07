const celEl = document.getElementById("celsius");
const fahEl = document.getElementById("fahrenheit");
const kelEl = document.getElementById("kelvin");


function compute(event){
    const currentEl = +event.target.value;
    switch (event.target.name) {
        case "c":
            kelEl.value = (currentEl+273.32).toFixed(2);
            fahEl.value = (currentEl*1.8+32).toFixed(2);
            break;
        case "f":
            celEl.value = ((currentEl-32)/1.8).toFixed(2);
            kelEl.value = ((currentEl -32)/1.8 + 273.32).toFixed(2);
            break;

        case "k":
            celEl.value = ((currentEl-273.32)).toFixed(2);
            fahEl.value = ((currentEl-273.32)*1.8 + 32).toFixed(2);
            break;      
        default:
            break;
    }

}