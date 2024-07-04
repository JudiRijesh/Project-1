// Create a shopping cart function

function loadCart() {
    // Getting the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartSection = document.getElementById('cart-section');
    let numberInCart = document.getElementById('items-number');

    if (cart.length === 0) {
        cartSection.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let totalItems = 0;

    cartSection.innerHTML = ''; 
    cart.forEach((item, index) => {
        totalItems += item.quantity;

        // Create element
        let div = document.createElement('div');
        div.classList.add('cart-item');

        let titleElement = document.createElement('h3');
        let authorElement = document.createElement('h5');
        let pictureElement = document.createElement('img');
        let quantityElement = document.createElement('p');
        let decrementButton = document.createElement('button');
        let incrementButton = document.createElement('button');
        let qtyInput = document.createElement('input');

        // Changing font color to white
        titleElement.style.color = 'white';
        authorElement.style.color = 'white';
        quantityElement.style.color = 'white';

        // Populate the elements
        titleElement.innerHTML = item.title;
        authorElement.innerHTML = `Author: ${item.author}`;
        pictureElement.src = item.picture;
        decrementButton.innerHTML = '-';
        incrementButton.innerHTML = '+';
        decrementButton.classList.add('decrement-button');
        incrementButton.classList.add('increment-button');
        qtyInput.type = 'number';
        qtyInput.classList.add('item-qty');
        qtyInput.value = item.quantity;
        qtyInput.readOnly = true;

        // Append elements on page
        div.appendChild(titleElement);
        div.appendChild(authorElement);
        div.appendChild(pictureElement);
        div.appendChild(decrementButton);
        div.appendChild(qtyInput);
        div.appendChild(incrementButton);
        cartSection.appendChild(div);

        // Event listeners for increment and decrement buttons
        decrementButton.addEventListener('click', () => updateQuantity(index, -1));
        incrementButton.addEventListener('click', () => updateQuantity(index, 1));
    });

    numberInCart.innerHTML = `Items in Shopping Cart: ${totalItems}`;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) cart[index].quantity = 1; // Ensure quantity doesn't go below 1
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart(); // Reload the cart to reflect changes
    }
}

function clearCart() {
    window.location.href = 'shipping.html'
}
// Load the cart when the page is loaded
window.onload = loadCart;
