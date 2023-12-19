const multButtom = document.getElementById('buttonMult');
const divButtom = document.getElementById('buttonDiv');

multButtom.addEventListener("click",()=>{
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const numResult = Number(num1) * Number(num2);
    document.getElementById("result").value = numResult;
})
divButtom.addEventListener("click",()=>{
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const numResult = Number(num1) / Number(num2);
    document.getElementById("result").value = numResult;
})



