const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const passwordRules = document.querySelector('.password-rules');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const number = document.querySelector('#number');
const digit = document.querySelector('#digit');
const validColor = '#29F8FE';
const invalidColor = '#B80692';

cpassword.addEventListener('keyup', verifyPassword);
password.addEventListener('focus', passwordFocus);
password.addEventListener('focusout', passwordFocusOut);
password.addEventListener('keyup', passwordKeyUp);

function passwordKeyUp(){
  uppercase.style.color = this.value.match('[A-Z]')? validColor: invalidColor;
  lowercase.style.color = this.value.match('[a-z]')? validColor: invalidColor;
  number.style.color = this.value.match('[0-9]')? validColor: invalidColor;
  digit.style.color = (this.value.length>=8)? validColor: invalidColor;
}

function verifyPassword(){
  if(password.value!=cpassword.value){
    this.setCustomValidity('Invalid field.')
  }else{
    this.setCustomValidity('')
  }
}

function passwordFocus(){
  passwordRules.style.display = 'block';
}

function passwordFocusOut(){
  passwordRules.style.display = 'none';
}
