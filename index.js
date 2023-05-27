const signupForm = document.querySelector('.signup-form');
const signupError = document.querySelector('.error-message');
const signupInput = document.querySelector('.input-el');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();

    function validateEmail(){
        if(!signupInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            signupError.classList.add('active');
            signupInput.classList.add('active')
        } else {
            signupError.classList.remove('active');
            signupInput.classList.remove('active');
        }
    }
});


/*------------for cta input------*/

const ctaForm = document.querySelector('.cta-form-el');
const ctaError = document.querySelector('.cta-error');
const ctaInput = document.querySelector('.cta-input');

ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailValid();

    function emailValid(){
        if(!ctaInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            ctaError.classList.add('active');
            ctaInput.classList.add('active');
        } else {
            ctaError.classList.remove('active');
            ctaInput.classList.remove('active');
        }
    }
})