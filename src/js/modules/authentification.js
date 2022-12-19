import { contentOfPage } from './contentOfPage.js';
import { svgFunc } from './svgIconFunctions.js';
import searcher from './search.js';
// import { showBookmarkedItems } from './showBookmarkedItems.js';


svgFunc();
// showBookmarkedItems()


window.addEventListener('popstate', ()=>contentOfPage());

const userAuthentification = document.querySelector('.user-authentification');

if (document.location.href === 'http://localhost:3000/') {
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    userAuthentification.appendChild(clon);
    const form = document.querySelector('.authentication');
    const fields = form.querySelectorAll('.field');
    const errorsInFields = Array.from(fields);
    const errorsInSpans = document.querySelectorAll('.errorInSpan');
    const signUpToAccount = document.querySelector('.create-account__sign-up');
    const questionOfAuthentification = document.querySelector('.create-account__question');
    const titleOfenterToAccount = document.getElementsByTagName('h1')[0];
    const buttonOfenterToAccount = document.querySelector('.authentication-button__submit');
    const repeatPassword = document.querySelector('.authentication-password-second');
    const root = document.getElementById('root');
    let arrFocus = []; // for errors

    signUpToAccount.addEventListener('click', () => {
        if (signUpToAccount.innerHTML == 'Sign Up') {
            signUpToAccount.innerHTML = 'Login';
            titleOfenterToAccount.innerHTML = 'Sign Up';
            buttonOfenterToAccount.value = 'Create an account';
            questionOfAuthentification.innerHTML = 'Already have an account?';
            repeatPassword.className = 'authentication-password-second--active';
        } else {
            signUpToAccount.innerHTML = 'Sign Up';
            titleOfenterToAccount.innerHTML = 'Login';
            buttonOfenterToAccount.value = 'Login to your account';
            questionOfAuthentification.innerHTML = 'Don’t have an account?';
            repeatPassword.className = 'authentication-password-second';
        }
    });

    form.addEventListener('submit', (EO) => {
        EO.preventDefault();
        if (signUpToAccount.innerHTML === 'Sign Up') {
            return alert('You need to create account!');
        }
        arrFocus.length = 0;
        let caughtErrorsInSpans = Array.from(errorsInSpans);
        let errors = form.querySelectorAll('.error');
        let caughtErrors = Array.from(errors);
        for (let i = 0; i < caughtErrors.length; i++) {
            if (!errorsInFields[i].value) {
                caughtErrors[i].innerHTML = 'empty field';
                arrFocus.push(errorsInFields[i]);
            } else if (caughtErrorsInSpans[i].innerHTML) {
                arrFocus.push(errorsInFields[i]);
            }
        }
        if (arrFocus.length) {
            arrFocus[0].focus();
        } else {
            userAuthentification.style.display = 'none';
            root.style.display = 'block';
            history.pushState(
                {
                    firstKey: "trending",
                    secondKey: "recommended",
                    secondKeyTitle: "recommended for you"

                },
                '',
                'home'
            )
            contentOfPage();
        }
    })

    function borderRedColor(el, color) {
        el.style.borderColor = color;
    };


    errorsInFields.forEach((v) => {
        v.onblur = () => {
            if (v.type === 'email') {
                let error = document.querySelector('.emailSpan');
                if (!(v.value)) {
                    error.innerHTML = 'empty field';
                    borderRedColor(v, '#FC4747');
                } else if (!v.value.endsWith('@gmail.com')) {
                    error.innerHTML = 'Please, add gmail.com!';
                    borderRedColor(v, '#FC4747');
                } else {
                    error.innerHTML = '';
                    borderRedColor(v, '#5A698F');
                }
            }
            if (v.placeholder === 'Password') {
                let error = document.querySelector('.firstPasswordSpan');
                if (!(v.value)) {
                    error.innerHTML = 'empty field';
                    borderRedColor(v, '#FC4747');
                } else if (v.value.length < 8) {
                    error.innerHTML = 'min 8 symbols';
                    borderRedColor(v, '#FC4747');
                } else {
                    error.innerHTML = '';
                    borderRedColor(v, '#5A698F');
                }
            }
            if (v.placeholder === 'Repeat password') {
                let error = document.querySelector('.secondPasswordSpan');
                let userPassword = document.getElementById('userPassword');
                if (!(v.value)) {
                    error.innerHTML = 'empty field';
                    borderRedColor(v, '#FC4747');
                } else if (userPassword.value != v.value) {
                    error.innerHTML = 'check your password';
                    borderRedColor(v, '#FC4747');
                } else {
                    error.innerHTML = '';
                    borderRedColor(v, '#5A698F');
                }
            }
        }
    })


} else {
    userAuthentification.innerHTML='';
    root.style.display = 'block';
    contentOfPage();
}

