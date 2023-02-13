/* step-1: add event handler to withdraw button
* step-2:  get withdraw input field
* step-2.5: make typeof string to number by using parseFloat
* step-3: get withdraw total amount from withdraw section
* step-4: add withdraw total and withdrawAmount and set to innerText
* step-5: clear widthdraw input field
* step-6: get balance total from balance section
* step 6.5: make typeof string to number by using parseFloat
*/

// step-1 : add event handler to withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
       
    // step-2: get withdraw input field
    const withdrawValueElement = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawValueElement.value;
    const currentWithdrawAmount = parseFloat(withdrawValueString);
    
    //step-5: clear widthdraw input field
    withdrawValueElement.value = '';
   
    if(isNaN(currentWithdrawAmount)){
        alert('please provide a number');
        return;
    }

    //step-3: get witdraw total amount from withdraw section
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const priviousWithdrawTotalSting = withdrawTotalElement.innerText;
    const priviousWithdrawTotal = parseFloat(priviousWithdrawTotalSting);

      //step-6: get balance total from balance section
      const balanceTotal = document.getElementById('total-balance');
      const newBalanceTotalString = balanceTotal.innerText;
      const newBalanceTotal = parseFloat(newBalanceTotalString);
      
      if(currentWithdrawAmount > newBalanceTotal){
          alert('baap er bank a atoo tk nai pagla');
          return;
      }
    
    //step-4: add widthdraw total and withdrawamount and set to innertext
    withdrawTotalElement.innerText = priviousWithdrawTotal + currentWithdrawAmount;

    //step-7: add
    balanceTotal.innerText = newBalanceTotal - currentWithdrawAmount;

});