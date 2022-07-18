let user =document.getElementById("username")
let userInfo = document.getElementById("user_info")
let links = document.getElementById("links")
let checkUser=localStorage.getItem("name")
let logout = document.getElementById("Log_out")


if(checkUser){
    links.remove()
    userInfo.style.display="flex"
    user.innerHTML= `<span>Hi </span> ` +checkUser
}

logout.addEventListener("click",function(){
setTimeout(() => {
    window.location='login.html'
}, 1500);
})