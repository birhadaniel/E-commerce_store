   // Product Data
   const products = [
    {
        id: 1,
        name: "Classic T-Shirt",
        price: 29.99,
        category: "clothing",
        subCategory: "t-shirts",
        color: "black",
        image: "images/classic t-shirt.png",
        featured: true,
        description: "A comfortable and versatile classic t-shirt that goes with any outfit."
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 89.99,
        category: "clothing",
        subCategory: "jackets",
        color: "blue",
        image: "images/Denim jacket.png",
        featured: true,
        description: "A timeless denim jacket that adds style to any casual outfit."
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 79.99,
        category: "shoes",
        subCategory: "athletic",
        color: "white",
        image:"images/Running Shoes.png",
        featured: false,
        description: "Lightweight and comfortable running shoes perfect for your workout."
    },
    {
        id: 4,
        name: "Leather Wallet",
        price: 39.99,
        category: "accessories",
        subCategory: "wallets",
        color: "brown",
        image: "images/Leather Wallet.png",
        featured: false,
        description: "A high-quality leather wallet with multiple card slots and a coin pocket."
    },
    {
        id: 5,
        name: "Summer Dress",
        price: 49.99,
        category: "clothing",
        subCategory: "dresses",
        color: "red",
        image: "images/Summer Dress.png", // Changed from color code to image path
        featured: true,
        description: "A light and beautiful summer dress for those sunny days."
    },
    {
        id: 6,
        name: "Casual Sneakers",
        price: 59.99,
        category: "shoes",
        subCategory: "casual",
        color: "gray",
        image: "images/Casual Sneakers.png", // Changed from color code to image path
        featured: true,
        description: "Stylish and comfortable casual sneakers for everyday wear."
    },
    {
        id: 7,
        name: "Backpack",
        price: 45.99,
        category: "accessories",
        subCategory: "bags",
        color: "black",
        image: "images/backpack.jpg", // Changed from color code to image path
        featured: false,
        description: "A spacious and durable backpack with multiple compartments."
    },
    {
        id: 8,
        name: "Sunglasses",
        price: 24.99,
        category: "accessories",
        subCategory: "eyewear",
        color: "black",
        image: "images/sunglasses.jpg", // Changed from color code to image path
        featured: true,
        description: "Stylish sunglasses with UV protection for a cool summer look."
    },
    {
        id: 9,
        name: "Winter Coat",
        price: 129.99,
        category: "clothing",
        subCategory: "coats",
        color: "green",
        image: "images/winter coat.jpg", // Changed from color code to image path
        featured: false,
        description: "A warm and cozy winter coat to keep you comfortable in cold weather."
    },
    {
        id: 10,
        name: "Hiking Boots",
        price: 99.99,
        category: "shoes",
        subCategory: "boots",
        color: "brown",
        image: "images/hiking boots.jpg", // Changed from color code to image path
        featured: false,
        description: "Durable hiking boots with excellent grip and ankle support."
    },
    {
        id: 11,
        name: "Scarf",
        price: 19.99,
        category: "accessories",
        subCategory: "scarves",
        color: "red",
        image: "images/scarf.jpg", // Changed from color code to image path
        featured: false,
        description: "A soft and warm scarf perfect for cold winter days."
    },
    {
        id: 12,
        name: "Slim Fit Jeans",
        price: 69.99,
        category: "clothing",
        subCategory: "jeans",
        color: "blue",
        image: "images/slim jeans.webp", // Changed from color code to image path
        featured: true,
        description: "Classic slim fit jeans that provide both comfort and style."
    },
    {
        id: 13,
        name: "Elegant Watch",
        price: 159.99,
        category: "accessories",
        subCategory: "watches",
        color: "silver",
        image: "images/elegant-watch.jpg", // Changed from color code to image path
        featured: true,
        description: "An elegant watch that adds sophistication to any outfit."
    },
    {
        id: 14,
        name: "Floral Shirt",
        price: 44.99,
        category: "clothing",
        subCategory: "shirts",
        color: "multicolor",
        image: "images/floral-shirt.jpeg", // Changed from color code to image path
        featured: false,
        description: "A vibrant floral shirt perfect for summer days and casual outings."
    },
    {
        id: 15,
        name: "Formal Shoes",
        price: 89.99,
        category: "shoes",
        subCategory: "formal",
        color: "black",
        image: "images/formal-shoes.jpeg", // Changed from color code to image path
        featured: false,
        description: "Elegant formal shoes made of high-quality materials for special occasions."
    },
    {
        id: 16,
        name: "Beanie Hat",
        price: 15.99,
        category: "accessories",
        subCategory: "hats",
        color: "gray",
        image: "images/beanie-hat.jpg", // Changed from color code to image path
        featured: false,
        description: "A comfortable and warm beanie hat for cold days."
    }
];


// Cart State
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartContents = document.getElementById('cart-contents');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const successModal = document.getElementById('success-modal');
const continueShopping = document.getElementById('continue-shopping');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Filter Elements
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');

// Initialize product display
function initializeProducts() {
    displayProducts(products);
    setupEventListeners();
}

// Display products in the grid
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found matching your criteria</div>';
        return;
    }
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.onerror=null; this.style.backgroundColor='${product.color}'; this.src='images/placeholder.jpg';"> 
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Filter and sort products
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const price = priceFilter.value;
    const sort = sortFilter.value;
    
    let filteredProducts = [...products];
    
    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Apply price filter
    if (price !== 'all') {
        switch (price) {
            case 'under-50':
                filteredProducts = filteredProducts.filter(product => product.price < 50);
                break;
            case '50-100':
                filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 100);
                break;
            case 'over-100':
                filteredProducts = filteredProducts.filter(product => product.price > 100);
                break;
        }
    }
    
    // Apply sorting
    switch (sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayProducts(filteredProducts);
}

// Update cart
function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cart.length === 0) {
        cartContents.innerHTML = `
            <div class="empty-cart">
                <span>🛒</span>
                <p>Your cart is empty</p>
            </div>
        `;
        return;
    }
    
    // Calculate cart subtotal
    const subtotal = cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product.price * item.quantity);
    }, 0);
    
    const shipping = subtotal > 0 ? 10 : 0;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;
    
    let cartHTML = `<div class="cart-items">`;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-image">
               <img src="${product.image}" alt="${product.name}" 
                 onerror="this.onerror=null; this.style.backgroundColor='${product.color}'; this.src='images/placeholder.jpg';"> </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-price">$${product.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${product.id}">
                        <button class="quantity-btn increase" data-id="${product.id}">+</button>
                        <span class="remove-item" data-id="${product.id}">Remove</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartHTML += `</div>
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>$${shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" id="proceed-to-checkout">Proceed to Checkout</button>
        </div>
    `;
    
    cartContents.innerHTML = cartHTML;
    
    // Add event listeners for cart item controls
    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });
    
    const proceedBtn = document.getElementById('proceed-to-checkout');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
            checkoutModal.style.display = 'flex';
        });
    }
}

// Add to cart function
function addToCart(productId) {
    const productId$ = parseInt(productId);
    const existingItem = cart.find(item => item.id === productId$);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId$,
            quantity: 1
        });
    }
    
    updateCart();
}

// Decrease quantity
function decreaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCart();
    }
}

// Increase quantity
function increaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// Update quantity from input
function updateQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const quantity = parseInt(e.target.value);
    
    if (quantity < 1) {
        e.target.value = 1;
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        updateCart();
    }
}

// Remove item from cart
function removeItem(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Setup event listeners
function setupEventListeners() {
    // Add to cart buttons
    productsGrid.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }
    });
    
    // Cart icon
    cartIcon.addEventListener('click', () => {
        updateCart();
        cartModal.style.display = 'flex';
    });
    
    // Close cart modal
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Close checkout modal
    closeCheckout.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });
    
    // Filter events
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
    
    // Checkout form submission
    checkoutForm.addEventListener('submit', e => {
        e.preventDefault();
        checkoutModal.style.display = 'none';
        successModal.style.display = 'flex';
        
        // Clear cart after successful order
        cart = [];
        updateCart();
    });
    
    // Continue shopping button
    continueShopping.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
    
    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', e => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeProducts);