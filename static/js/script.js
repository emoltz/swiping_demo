// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
    'https://source.unsplash.com/random/1000x1000/?sky',
    'https://source.unsplash.com/random/1000x1000/?landscape',
    'https://source.unsplash.com/random/1000x1000/?ocean',
    'https://source.unsplash.com/random/1000x1000/?moutain',
    'https://source.unsplash.com/random/1000x1000/?forest'
];

const img1 = new Image().src = 'static/js/book_covers/american-psycho-670x1024.jpg';
const img2 = new Image().src = 'static/js/book_covers/gatsby-original2.jpg';
const img3 = new Image().src = 'static/js/book_covers/image.jpg';
const img4 = new Image().src = 'static/js/book_covers/image-1.jpg';
const img5 = new Image().src = 'static/js/book_covers/jurrasic.jpg';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5
]


// variables
let cardCount = 0;

// functions
function appendNewCard() {
    const card = new Card({
        imageUrl: images[cardCount % 5],
        onDismiss: appendNewCard,
        onLike: () => {
            like.style.animationPlayState = 'running';
            like.classList.toggle('trigger');
        },
        onDislike: () => {
            dislike.style.animationPlayState = 'running';
            dislike.classList.toggle('trigger');
        }
    });
    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
    appendNewCard();
}

