// get input value
function getInputFiled(inputId) {
    const inputField = document.getElementById(inputId)
    const inputtAmountText = inputField.value
    const inputAmount = parseFloat(inputtAmountText)

    // clear input field 
    inputField.value = ''
    return inputAmount
}




// button deposit
document.getElementById('deposit-button').addEventListener('click', function () {

})

// button withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {

})