let user =document.getElementById("user")
let email =document.getElementById("email")
let password =document.getElementById("psw")
let sub =document.getElementById("submit")

sub.addEventListener('click',register)

function register(e){
e.preventDefault()
if(user.value === '' || email.value === ""||password.value===""){
    alert('please fill your Data')
}else{
    localStorage.setItem("name",user.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
}
setTimeout(() => {
    window.location='login.html'
}, 1500);
}
    

