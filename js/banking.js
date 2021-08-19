// get input value
function getInputFiled(inputId) {
    const inputField = document.getElementById(inputId)
    const inputtAmountText = inputField.value
    const inputAmount = parseFloat(inputtAmountText)

    // clear input field 
    inputField.value = ''
    return inputAmount
}

// update total
function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId)
    const totalFieldText = totalField.innerText
    const previousTotal = parseFloat(totalFieldText)

    totalField.innerText = previousTotal + amount
}

// current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)

    return previousBalanceTotal
}

// update balance 
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount
    }
}


// button deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputFiled('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true)
        alert('successfully deposited')
    }
})

// button withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputFiled('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
        alert('successfully withdraw')
    }
    if (withdrawAmount > currentBalance) {
        alert('you can not withdraw more than you have in your account')
    }
})