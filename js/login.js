let username = document.getElementById("user")
let password = document.getElementById("password")
let sign = document.getElementById("sign")
let getuser = localStorage.getItem("name")
let getpassword= localStorage.getItem("password")


sign.addEventListener('click',login)
function login(e){
e.preventDefault()
    if(username.value === '' ||password.value===""){
    alert('please fill your Data')
}else{
if(getuser &&
    getuser.trim() ==username.value.trim()
    &&getpassword
    &&getpassword==password.value.trim()
    ) {
setTimeout(() => {
        window.location='index.html'
    }, 1500);
    }else{
        alert('may be user name or password is wrong')
    }

}


}

