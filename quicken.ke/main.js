// Menu Items Data
const menuItems = [
    {
        name: "Nyama Choma",
        price: 1500,
        description: "Tender, grilled meat marinated in traditional African spices, served with kachumbari and ugali. Our signature dish that brings the authentic taste of Kenya to your plate.",
        image: "thumbnails/nyama-choma.jpg"
    },
    {
        name: "Swahili Pilau",
        price: 800,
        description: "Aromatic rice cooked with a blend of traditional spices, tender meat, and caramelized onions. A coastal favorite that captures the essence of Swahili cuisine.",
        image: "thumbnails/pilau.jpg"
    },
    {
        name: "Sukuma Wiki",
        price: 400,
        description: "Fresh collard greens sautéed with onions and traditional spices. A healthy and flavorful side dish that's a staple in Kenyan homes.",
        image: "thumbnails/sukuma-wiki.jpg"
    },
    {
        name: "Mandazi",
        price: 200,
        description: "Sweet, fluffy African doughnuts with a hint of cardamom. Perfect for breakfast or as a sweet treat with afternoon tea.",
        image: "thumbnails/mandazi.jpg"
    }
];

// Reviews Data
const reviews = [
    {
        name: "Sarah M.",
        rating: 5,
        comment: "The Nyama Choma here is absolutely incredible! The meat was perfectly tender and the service was exceptional. The ambiance really makes you feel like you're experiencing authentic Kenyan dining."
    },
    {
        name: "John K.",
        rating: 4,
        comment: "Great selection of traditional dishes. The Pilau was particularly good - reminded me of my grandmother's cooking. Will definitely be coming back!"
    }
];

// Function to display menu items with animations
function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.opacity = '0';
        menuItem.style.transform = 'translateY(20px)';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">KSH ${item.price}</p>
                <button onclick="orderItem('${item.name}')">Order Now</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
        
        // Animate menu items
        setTimeout(() => {
            menuItem.style.transition = 'all 0.5s ease';
            menuItem.style.opacity = '1';
            menuItem.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Function to handle orders.//

function orderItem(itemName) {
    const orderMessage = `Thank you for ordering ${itemName}!
Would you like to:
1. Add to cart
2. Order now
3. Customize your order`;
    
    const choice = prompt(orderMessage);
    
    switch(choice) {
        case '1':
            alert('Item added to cart!');
            break;
        case '2':
            const address = prompt('Please enter your delivery address:');
            if (address) {
                alert(`Your order will be delivered to: ${address}\nEstimated delivery time: 45 minutes`);
            }
            break;
        case '3':
            alert('Customization feature coming soon!');
            break;
        default:
            alert('Thank you for your interest!');
    }
}

// Memory Game Logic
function startMemoryGame() {
    const foodEmojis = ['🍖', '🍗', '🍚', '🥘', '🥗', '🍲'];
    const cards = [...foodEmojis, ...foodEmojis];
    let flippedCards = [];
    let matchedPairs = 0;
    
    const gameContainer = document.getElementById('memory-game');
    gameContainer.innerHTML = '';

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.value = card;
        cardElement.onclick = () => flipCard(cardElement);
        gameContainer.appendChild(cardElement);
    });
}

function flipCard(card) {
    if (card.textContent === '') {
        card.textContent = card.dataset.value;
        card.style.background = 'var(--primary-purple)';
        card.style.color = 'white';
        
        setTimeout(() => {
            card.textContent = '';
            card.style.background = 'var(--light-purple)';
        }, 1000);
    }
}

// Function to display reviews with animation
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';
    
    reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.style.opacity = '0';
        reviewCard.style.transform = 'translateY(20px)';
        reviewCard.innerHTML = `
            <h3>${review.name}</h3>
            <p>Rating: ${'⭐'.repeat(review.rating)}</p>
            <p>${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewCard);
        
        // Animate review cards
        setTimeout(() => {
            reviewCard.style.transition = 'all 0.5s ease';
            reviewCard.style.opacity = '1';
            reviewCard.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Function to add a new review
function addReview() {
    const name = prompt('Enter your name:');
    const rating = parseInt(prompt('Rate us (1-5):'));
    const comment = prompt('Share your experience:');

    if (name && rating >= 1 && rating <= 5 && comment) {
        reviews.push({ name, rating, comment });
        displayReviews();
        alert('Thank you for your review!');
    } else {
        alert('Please provide valid information for your review.');
    }
}

// Function to view recipe
function viewRecipe(recipeName) {
    const recipes = {
        pilau: {
            title: "Traditional Pilau",
            ingredients: [
                "2 cups basmati rice",
                "500g meat (beef or chicken)",
                "2 onions, sliced",
                "4 cloves garlic",
                "1 inch ginger",
                "Pilau masala",
                "Salt to taste"
            ],
            instructions: [
                "1. Brown the meat with onions",
                "2. Add spices and cook until fragrant",
                "3. Add rice and water",
                "4. Simmer until rice is cooked"
            ]
        }
    };

    const recipe = recipes[recipeName];
    if (recipe) {
        alert(`${recipe.title}\n\nIngredients:\n${recipe.ingredients.join('\n')}\n\nInstructions:\n${recipe.instructions.join('\n')}`);
    }
}

// Function to scroll to menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the website
window.onload = function() {
    displayMenu();
    displayReviews();
    startMemoryGame();
};