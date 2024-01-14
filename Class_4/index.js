let signUp = document.querySelector(".signUp");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFields = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector('.btn');
let showPasswordBtn2 = document.querySelector('.btn2');
let submitButton = document.querySelector('.signUpButton');

let nameRegex  = /^[a-z\s]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let Name, email, password, confirmPassword, field;
let nameTarget, emailTarget, passwordTarget, cnfPwdTarget;
let nFlag, eFlag, pwdFlag, cnfFlag;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let emptyField of emptyFields){
    emptyField.classList.add("d-none");
}

signUp.addEventListener('keyup', (e)=>{
    e.preventDefault();
    field = e.target.dataset.key;

    switch(field){
        case "name":
            Name = e.target.value;
            nameTarget = e.target;
            break;
        
        case "email":
            email = e.target.value;
            emailTarget = e.target;
            break;
        
        case "password":
            password = e.target.value;
            passwordTarget = e.target;
            break;

        case "confirmPwd":
            confirmPassword = e.target.value;
            cnfPwdTarget = e.target;
            break;
        
        default:
            Name, email, password, confirmPassword = '';
            break;
    }
})

submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    if(Name){

        if(nameRegex.test(Name)){
            nameTarget.classList.remove('error');
            errorMessages[0].classList.add('d-none');
            nFlag = true;
        }
        else{
            nameTarget.classList.add('error');
            errorMessages[0].classList.remove('d-none');
            nFlag = false;
        }
    }
    else{
        emptyFields[0].classList.remove('d-none');
    }

    if(email){

        if(emailRegex.test(email)){
            emailTarget.classList.remove('error');
            errorMessages[1].classList.add('d-none');
            eFlag = true;
        }
        else{
            emailTarget.classList.add('error');
            errorMessages[1].classList.remove('d-none');
            eFlag = false;
        }
    }
    else{
        emptyFields[1].classList.remove('d-none');
    }

    if(password){

        if(pwdRegex.test(password)){
            passwordTarget.classList.remove('error');
            errorMessages[2].classList.add('d-none');
            pwdFlag = true;
        }
        else{
            passwordTarget.classList.add('error');
            errorMessages[2].classList.remove('d-none');
            pwdFlag = false;
        }
    }
    else{
        emptyFields[2].classList.remove('d-none');
    }

    if(confirmPassword){

        if(pwdRegex.test(confirmPassword)){
            cnfPwdTarget.classList.remove('error');
            errorMessages[3].classList.add('d-none');
            cnfFlag = true;
        }
        else{
            cnfPwdTarget.classList.add('error');
            errorMessages[3].classList.false('d-none');
            cnfFlag = false;
        }
    }
    else{
        emptyFields[3].classList.remove('d-none');
    }

    if(confirmPassword === password){
        cnfPwdTarget.classList.remove('error');
        errorMessages[4].classList.add("d-none");
        pwdFlag = cnfFlag = true;
    }
    else{
        cnfPwdTarget.classList.add('error');
        errorMessages[4].classList.remove("d-none");
        pwdFlag = cnfFlag = false;
    }

    if(nFlag && eFlag && pwdFlag && cnfFlag){
        nameTarget.value = emailTarget.value = passwordTarget.value = cnfPwdTarget.value ="";
        alert("Successful Sign Up") 
    }

})

showPasswordBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(passwordTarget.getAttribute('type')=='text'){
        passwordTarget.setAttribute('type','password');
    }
    else{
        passwordTarget.setAttribute('type','text');
    }
})

showPasswordBtn2.addEventListener('click', (e)=> {
    e.preventDefault();
    if(cnfPwdTarget.getAttribute('type')=='text'){
        cnfPwdTarget.setAttribute('type','password');
    }
    else{
        cnfPwdTarget.setAttribute('type','text');
    }
})

