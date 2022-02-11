// deposit and withdraw amount handle
function handleDepositAndWithdraw(totalAmountField, InputAmountField, isDeposit) {
    // get Total Amount field
    const amountTotalField = document.getElementById(totalAmountField)
    const previousAmount = parseInt(amountTotalField.innerText)
    // get Input amount field
    const amountInputField = document.getElementById(InputAmountField)
    const inputAmount = parseInt(amountInputField.value)
    const totalAmount = previousAmount + inputAmount;
    amountTotalField.innerText = totalAmount;
    handleBalance(InputAmountField, isDeposit)

    // clear input field
    amountInputField.value = '';
}
// balance amount handle
function handleBalance(InputAmountField, isDeposit) {
    const balanceField = document.getElementById('balance')
    const previousBalance = parseInt(balanceField.innerText)
    const amountInputField = document.getElementById(InputAmountField)
    const amountInput = parseInt(amountInputField.value)
    if (isDeposit == true) {
        const newBalance = previousBalance + amountInput
        balanceField.innerText = newBalance
    } else {
        const newBalance = previousBalance - amountInput
        balanceField.innerText = newBalance
    }
}
// button's work handle
function btnValidation(buttonId, inputId) {
    const targetInputBtn = document.getElementById(buttonId)
    const targetInputField = document.getElementById(inputId)
    if (targetInputField.value > 0) {
        targetInputBtn.removeAttribute('disabled')
        targetInputBtn.classList.remove('bg-red-200')
        targetInputBtn.classList.add('bg-red-400')
    } else {
        targetInputBtn.setAttribute('disabled', true)
        targetInputBtn.classList.remove('bg-red-400')
        targetInputBtn.classList.add('bg-red-200')
    }
}


// for Deposit Field
document.getElementById('deposit-btn').addEventListener('click', function () {
    handleDepositAndWithdraw('deposit-total', 'deposit-input', true)
    btnValidation('deposit-btn', 'deposit-input')
})
document.getElementById('deposit-input').addEventListener('keyup', function () {
    btnValidation('deposit-btn', 'deposit-input')
})


// For Withdraw Field
document.getElementById('withdraw-btn').addEventListener('click', function () {
    handleDepositAndWithdraw('withdraw-total', 'withdraw-input', false)
    btnValidation('withdraw-btn', 'withdraw-input')
})
document.getElementById('withdraw-input').addEventListener('keyup', function () {
    btnValidation('withdraw-btn', 'withdraw-input')
})