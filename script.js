let pass1 = document.querySelector('#pass3');
let pass2 = document.querySelector('#pass4');
let err = document.querySelector('#err');


let errPass = () => {
    console.log('log');
    if(pass1.value && !pass1.checkValidity()) {
        err.style.visibility = 'visible';
        passCheck();
        }
    else {err.style.visibility = 'hidden';
    passCheck()};
    }    

let passCheck = () => {
    console.log('log');
    if (pass1.value !== pass2.value){
        pass2.setCustomValidity("Passwords don't match")
    }
    else {
        pass2.setCustomValidity("")
    }
}    
 
pass1.addEventListener('focusout', errPass);
pass2.addEventListener('change', passCheck);
