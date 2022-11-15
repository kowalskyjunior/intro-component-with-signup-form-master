function Claim(){

const firstName = document.getElementById('name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

if(firstName.value == '' || firstName.value.length < 5){
    let firstName = document.getElementById('name')
    firstName.classList = 'input-name-error'
    let iconErrorName = document.getElementById('icon-error-name')
    iconErrorName.style.display = 'block'
} else {
    firstName.classList = 'input-name-sucess'
    let iconErrorName = document.getElementById('icon-error-name')
    iconErrorName.style.display = 'none'
}

if(lastName.value == '' || lastName.value.length < 5){
    let lastName = document.getElementById('last-name')
    lastName.classList = 'input-last-name-error'
    let iconErrorLastName = document.getElementById('icon-error-last-name')
    iconErrorLastName.style.display = 'block'
} else{
    lastName.classList = 'input-last-name-sucess'
    let iconErrorLastName = document.getElementById('icon-error-last-name')
    iconErrorLastName.style.display = 'none'
}

if(email.value == ''){
    let email = document.getElementById('email')
    email.classList = 'input-email-error'
    let iconErrorEmail = document.getElementById('icon-error-email')
    iconErrorEmail.style.display = 'block'
} else{
    email.classList = 'input-email-sucess'
    let iconErrorEmail = document.getElementById('icon-error-email')
    iconErrorEmail.style.display = 'none'
}

if(password.value == ''){
    password.classList = 'input-password-error'
    let iconErrorPassword = document.getElementById('icon-error-password')
    iconErrorPassword.style.display = 'block'
} else{
    password.classList = 'input-password-sucess'
    let iconErrorPassword = document.getElementById('icon-error-password')
    iconErrorPassword.style.display = 'none'
}

if(firstName.value == true && lastName.value == true && email.value == true && password.value == true){
    let checkInput = document.getElementById('validation')
    checkInput.style.display = 'block'
}
}