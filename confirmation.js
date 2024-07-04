document.addEventListener('DOMContentLoaded', () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        let cart = JSON.parse(cartData);
        let bookList = document.getElementById('book-list');

        cart.forEach(book => {
            let listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author} - Quantity: ${book.quantity}`;
            bookList.appendChild(listItem);
        });

        // Clear the cart data after displaying it
        localStorage.removeItem('cart');
    } else {
        let bookList = document.getElementById('book-list');
        let listItem = document.createElement('li');
        listItem.textContent = 'No books were found in your order.';
        bookList.appendChild(listItem);
    }
});