const zakatInput = document.querySelector("#totalAmount") // Zakat input
const calculation = document.querySelector("#calculation") // Zakat Ammount button
const zakatResult = document.querySelector("#zakat_value") // zakat value yaha pr zakat ka result show hoga


const zakatFormula  = (e)=>{
    e.preventDefault(

    )

    const  zakatPercentage = 0.025
    const totalAmount = Number( zakatInput.value)

    if(isNaN(totalAmount) || totalAmount <= 0){

        zakatResult.innerHTML = "Please input the value number aby oye smaj nhi aya tgheek se kaam kr "
        return
    }

    const zakatValue =   totalAmount*zakatPercentage.toFixed(2)

    zakatResult.innerHTML = zakatValue  
console.log("khuch tuo howa");


} 

calculation.addEventListener("click", zakatFormula)