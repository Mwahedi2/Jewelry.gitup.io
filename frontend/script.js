const { format } = require("express/lib/response");

const username = document.getElementsById('username');
const email = document.getElementsById('email');
const password = document.getElementsById('password');
const password2 = document.getElementsById('password2');
form.addEventListener('submit',e =>{
    validateInput();

})
const setError = (element, message )=> {
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('.error')
    errorDisplay.innerText = message;
    inputControl.classList.remove('success')
};
const setSuccess =element => {
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.remove('error')
};

const validateInput=() => {
    const usernameValue =username.value.tirm();
    const emailValue =email.value.tirm();
    const passwordValue =password.value.tirm();
    const password2Value =password2.value.tirm();

};
if(usernameValue === ''){
    setError(username, 'User name is required');


}else{
    setSuccess(username);
}

if(email === ''){
    setError(email, 'User name is required');


}else{
    setSuccess('email');
}
if( password=== ''){
    setError(password, 'User name is required');


}else{
    setSuccess(password);
}
v

