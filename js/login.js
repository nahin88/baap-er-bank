// step-1: set eventListner to button
document.getElementById('btn-clicked').addEventListener('click', function(){
    //step-2: get email value form input email field
    //always remember we use .value for get input inner value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //step-3: get password value from password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //Danger: Do not verify email password on the client side
    //step-4: verify email & password and check whether valid or not valid.
    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tor kase tk nai tui gorib');
    }
});