let product = document.getElementById('product')
let noproduct =document.querySelector('.noproduct')


function drawproductui (allproducts =[]){
if(JSON.parse(localStorage.getItem('productincart')).length === 0){
noproduct.innerHTML='مافيش منتجات هنا روح اختار الاول وبعدين تعالى تانى'
}

    let products =JSON.parse(localStorage.getItem('productincart')|| allproducts)
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
        <button class="add" onclick='removeitem(${item.id})'>Remove</button>
    </div>
    </div>
        `
    })
    product.innerHTML=productui
}
drawproductui()

function removeitem(id){
    let productincart=localStorage.getItem('productincart')
    if(productincart){
        
    let items = JSON.parse(productincart)
    let filteritem=  items.filter(item=> item.id !== id)
    localStorage.setItem('productincart',JSON.stringify(filteritem))
    drawproductui(filteritem)
    }
}
