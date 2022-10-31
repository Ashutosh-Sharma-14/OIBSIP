const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const btn = document.querySelector('#convert-button');
const select1 = document.querySelector('#temp-1');
const select2 = document.querySelector('#temp-2');
const formula = document.querySelector('.formula')
const f1 = document.getElementById('formula1');
const f2 = document.getElementById('formula2');

btn.addEventListener('click',()=>{
    let a = parseInt(temp1.value);

    if(select1.selectedIndex == 0 || select2.selectedIndex == 0){
        alert('Choose valid options');
    }
    if(select1.selectedIndex == 1){
        if(select2.selectedIndex == 1){
            temp2.value = (a+273.15).toFixed(2) + " K";
        }
        if(select2.selectedIndex == 2){
            temp2.value = a;
        }
        if(select2.selectedIndex == 3){
            temp2.value = (a*(9/5) + 32).toFixed(2) + " F";
        }
    }

    if(select1.selectedIndex == 2){
        if(select2.selectedIndex == 1){
            temp2.value = a;
        }
        if(select2.selectedIndex == 2){
            temp2.value = (a - 273.15).toFixed(2) + " C";
        }
        if(select2.selectedIndex == 3){
            temp2.value = ((a-273.15)*9/5 + 32).toFixed(2) + " F";
        }
    }

    if(select1.selectedIndex == 3){
        if(select2.selectedIndex == 1){
            temp2.value = ((a - 32)*5/9 + 273.15).toFixed(2) + " K";
        }
        if(select2.selectedIndex == 2){
            temp2.value = ((a - 32)*5/9).toFixed(2);
        }
        if(select2.selectedIndex == 3){
            temp2.value = a;
        }
    }
})

select1.addEventListener('change',() =>{
    const choice = select1.value;
    // const choice2 = select2.value;
    if(choice === 'degree Celsius'){
        f1.innerHTML = "Kelvin = Celsius + 273.15";
        f2.innerHTML = "Farenheit = Celsius x 9/5 + 32";

    }

    if(choice === 'degree Farenheit'){
        f1.innerHTML = "Celsius = (Farenheit - 32) x 5/9";
        f2.innerHTML = "Kelvin = (Farenheit + 459.67) x 5/9";
    }

    if(choice === 'Kelvin'){
        f1.innerHTML = "Celsius = Kelvin - 273.15";
        f2.innerHTML = "Farenheit = Kelvin x 9/5 - 459.67";
    }
})
