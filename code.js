const calculate = document.getElementById('calculate');
calculate.addEventListener('click',()=>{
    let age = document.getElementById('Age').value;
    let total = (age * 365)
    document.getElementById('display').innerHTML =
    total + " days" ;
}
);