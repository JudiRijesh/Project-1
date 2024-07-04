
//Creatin a shopping cart function

function loadCart(){
    
//getting the cart from localstorage

let cart = JSON.parse(localStorage.getItem('cart'))|| [];
let cartSection = document.getElementById('cart-section');
let numberInCart = document.getElementById('items-number');

console.log(cart)


if (cart.length === 0) {
    cartSection.innerHTML = '<p>Your cart is empty.</p>';
    return;
}

let totalItems = 0;

cartSection.innerHTML = ''; 
cart.forEach(item => {
    totalItems += item.quantity;

//create element
let div = document.createElement('div')
div.classList.add('cart-item');

let titleElement = document.createElement('h3')
let authorElement = document.createElement('h5')
let pictureElement = document.createElement('img')
let quantityElement = document.createElement('p')

// changing font color to white

titleElement.style.color = 'white'
authorElement.style.color = 'white'
quantityElement.style.color = 'white'

//populate the elements

titleElement.innerHTML = item.title
authorElement.innerHTML = `Author: ${item.author}`
pictureElement.src = item.picture
quantityElement.innerHTML = `Quantity: ${item.quantity}`

// append elements on page

div.appendChild(titleElement)
div.appendChild(authorElement)
div.appendChild(pictureElement)
div.appendChild(quantityElement)

cartSection.appendChild(div);

})

numberInCart.innerHTML = `Items in Shopping Cart: ${totalItems}`

}
function clearCart() {
        window.location.href = 'shipping.html'
}
// Load the cart when the page is loaded
window.onload = loadCart;