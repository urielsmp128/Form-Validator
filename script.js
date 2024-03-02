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
function isValidEmail(input){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegex.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }
}

// Check required fields
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

// Check input Lenght
function checkLenght(input, minLenght, maxLenght){
    if(input.value.length < minLenght){
        showError(input, `${getFieldName(input)} must be at least ${minLenght} characters`);
    }else if (input.value.length > maxLenght){
        showError(input, `${getFieldName(input)} must be less than ${maxLenght} characters`)
    }else{
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

// Get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Evente Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequired([username, email, password, password_Confirmation])
    checkLenght(username, 3, 15);
    checkLenght(password, 6, 25);
    isValidEmail(email);
    checkPasswordsMatch(password, password_Confirmation)
});