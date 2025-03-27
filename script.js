const amount = document.querySelector("#totalAmount")
const zakatAmount = document.querySelector("#zakat_value")
const calculationButton = document.querySelector("#calculation")
const zakatValue = document.querySelector("#zakat_value") 

const zakatFormula = ()=>{

    
    // formula on zakat amount
    const zakatPercentage = 0.025 // 2.5 percentage 
    const freshZakatAmountValue = amount.value * zakatAmount
    
    zakatAmount.innerHTML= freshZakatAmountValue
    
}