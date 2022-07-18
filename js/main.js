
///////////product/////////////
let cartsup =document.querySelector('.cart-product div')
let cartproduct =document.querySelector('.cart-product ')
let count = document.querySelector('.badge')
let shoppingcart = document.querySelector('.shopping-cart')
let btn = document.querySelector('.cart-product')

shoppingcart.addEventListener('click',opencart)
///////////////////////////
function productui (){
    let productui = products.map((item)=>{
        return`
        
    <div class="prodct-item">
        <img src=${item.imageurl} alt="img">
    <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>Lorem ipsum dolor sit am, adipisicing elit. Nihil</p>
        <span>Size: ${item.size}</span>
    </div>
    <div class="product-item-action">
        <button class="add" onclick='added(${item.id})'>Add to Cart</button>
        <i id="fav" class="fa-solid fa-heart fav"></i>
    </div>
    </div>
        `
    })
product.innerHTML= productui
}
productui();
//////////////////////////////////////////////////////

let addproduct= localStorage.getItem('productincart')
?JSON.parse(localStorage.getItem('productincart'))
:[];
if(addproduct){
    addproduct.map((item)=>{
    cartsup.innerHTML +=`<p> ${item.title} </p>`
    }) 
    count.style.display='block'
    count.innerHTML += addproduct.length 
}
///////////////////////////////////////////////////
function added(id){
    if(localStorage.getItem('name')){
    let choosen = products.find((item)=>item.id ===id)
    cartsup.innerHTML +=`<p> ${choosen.title} </p>`
addproduct=[...addproduct,choosen]
localStorage.setItem('productincart',JSON.stringify(addproduct))
//////////////////////////////////////////////////////////////////////
let cartproduct =document.querySelectorAll ('.cart-product div p')
    count.style.display='block'
    count.innerHTML = cartproduct.length
    }else{
        window.location='login.html'
    }
}
////////////////////////////////////////////////////
function opencart(){
    if(cartsup.innerHTML != ''){
if(cartproduct.style.display=='block'){
    cartproduct.style.display='none'
}else{
    cartproduct.style.display='block'
}
    }

}