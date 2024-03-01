const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_Confirmation = document.getElementById('password_Confirmation');


//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());

}

// Evente Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(username.value === ''){
        showError(username, 'Username is required');
    } else{
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)){
        showError(email, 'Email is not valid')
    }else{
        showSuccess(email)
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    } else{
        showSuccess(password)
    }

    if(password_Confirmation.value === ''){
        showError(password_Confirmation, 'Password Confirmation is required');
    } else{
        showSuccess(password_Confirmation)
    }

});