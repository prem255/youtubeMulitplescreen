const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const sumBtn = document.getElementById("sum");

function add(num1:number,num2:number)
{
    return num1+num2;
}

sumBtn?.addEventListener('click',()=>{
    let sum = add(+num1.value,+num2.value)
   console.log(sum)
})