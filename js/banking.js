// handle deposit and withdraw
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
// handle balance
function handleBalance(InputAmountField, isDeposit) {
    const balanceField = document.getElementById('balance')
    const previousBalance = parseInt(balanceField.innerText)
    const depositInputField = document.getElementById(InputAmountField)
    const newDeposit = parseInt(depositInputField.value)
    if (isDeposit == true) {
        const newBalance = previousBalance + newDeposit
        balanceField.innerText = newBalance
    } else {
        const newBalance = previousBalance - newDeposit
        balanceField.innerText = newBalance
    }
}


// for Deposit Field
document.getElementById('deposit-btn').addEventListener('click', function () {
    handleDepositAndWithdraw('deposit-total', 'deposit-input', true)
})


// For Withdraw Field
document.getElementById('withdraw-btn').addEventListener('click', function () {
    handleDepositAndWithdraw('withdraw-total', 'withdraw-input', false)
})