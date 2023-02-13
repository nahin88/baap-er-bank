//step 1: addEventListner to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get deposit amount from input field
    const depositField = document.getElementById('deposit-field');
    const currentDepositFieldAmountString = depositField.value;
    const currentDepositFieldAmount = parseFloat(currentDepositFieldAmountString);

    //step 5: clear input field
    depositField.value = '';
    
    if(isNaN(currentDepositFieldAmount)){
        alert('please provide a number');
        return;
    }

    //step 3: get deposit total from deposit section
    const priviousDepositTotal = document.getElementById('total-deposit');
    const newDepositTotalValueString = priviousDepositTotal.innerText;
    const newDepositTotalValue = parseFloat(newDepositTotalValueString);
    //add deposit total
    priviousDepositTotal.innerText = currentDepositFieldAmount + newDepositTotalValue;
    //step 4: get balance total from balance section
    const priviousBalanceTotal = document.getElementById('total-balance');
    const newBalanceTotalString = priviousBalanceTotal.innerText;
    const newBalanceTotal = parseFloat(newBalanceTotalString);
    //add balance total
    priviousBalanceTotal.innerText = newBalanceTotal + currentDepositFieldAmount;
    
});