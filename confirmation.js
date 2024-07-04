document.addEventListener('DOMContentLoaded', () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        const cart = JSON.parse(cartData);
        const bookList = document.getElementById('book-list');

        cart.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author} - Quantity: ${book.quantity}`;
            bookList.appendChild(listItem);
        });

        // Clear the cart data after displaying it
        localStorage.removeItem('cart');
    } else {
        const bookList = document.getElementById('book-list');
        const listItem = document.createElement('li');
        listItem.textContent = 'No books were found in your order.';
        bookList.appendChild(listItem);
    }
});