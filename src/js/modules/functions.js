'use strict'

const signUpToAccount = document.querySelector('.create-account__sign-up');
const questionOfAuthentification = document.querySelector('.create-account__question');
const titleOfenterToAccount = document.getElementsByTagName('h1')[0];
const buttonOfenterToAccount = document.getElementsByTagName('button')[0];
const repeatPassword = document.querySelector('.authentication-password-second');

signUpToAccount.addEventListener('click', () => {
    if (signUpToAccount.innerHTML == 'Sign Up') {
        signUpToAccount.innerHTML = 'Login';
        titleOfenterToAccount.innerHTML = 'Sign Up';
        buttonOfenterToAccount.innerHTML = 'Create an account';
        questionOfAuthentification.innerHTML = 'Already have an account?';
        repeatPassword.style.display = 'block';
    } else {
        signUpToAccount.innerHTML = 'Sign Up';
        titleOfenterToAccount.innerHTML = 'Login';
        buttonOfenterToAccount.innerHTML = 'Login to your account';
        questionOfAuthentification.innerHTML = 'Don’t have an account?';
        repeatPassword.style.display = 'none';
    }
});

// if (enterToAccount.value == 'Sign Up') {
//     enterToAccount.value='login'
// }

