function verifyPassword(){
  if(password.value!=cpassword.value){
    this.setCustomValidity('Invalid field.')
  }else{
    this.setCustomValidity('')
  }
}

const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

cpassword.addEventListener('keyup', verifyPassword)