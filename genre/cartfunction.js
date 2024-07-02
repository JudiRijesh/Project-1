
// Function to add the book to the cart
function addToCart(title, author, picture) {

    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the item in the cart
    let existingItem = cart.find(item => item.title === title);

      // If item exists, increment quantity, otherwise add new item
      if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ title, author, picture, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart))

    // Redirect to the cart page
    window.location.href = '../cart.html'
} 