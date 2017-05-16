
'use strict';

const CARD_ARRAY = [];
const SHUFFLE_ARRAY = [];
const SUIT_ORDER_ARRAY = [0, 1, 3, 2];
const CARD_VALUE_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function body_onload() {
    createCards();
}


function createCards() {

    const container = document.getElementById("mainContainer");

    SUIT_ORDER_ARRAY.forEach(function (suit) {
        CARD_VALUE_ARRAY.forEach(function (value) {

            const borderColor = (suit === 0 || suit === 3) ? "black" : "red";
            const marginTop = (-2 - (suit * 123)).toString() + "px";
            const marginLeft = (-2 - (value * 79)).toString() + "px";
            const numericID = (suit * 13) + value;

            const props = new Props(borderColor, marginTop, marginLeft, numericID);
            const card = new Card(props, container);

            CARD_ARRAY.push(card);

        })
    })
}


function reset() {
    CARD_ARRAY.forEach(function (card) { card.reset() });
    SHUFFLE_ARRAY.length = 0;
}


function shuffleCards() {
    loadShuffleArray();
    SHUFFLE_ARRAY.forEach(function (swapper) {
        swapper.swap();
    })
    SHUFFLE_ARRAY.length = 0;
}

function visuallyShuffleCards() {
    loadShuffleArray();
    if (SHUFFLE_ARRAY.length === CARD_ARRAY.length) shuffleOneCard();
}

function loadShuffleArray() {
    CARD_ARRAY.slice(0).reverse().forEach(function (card1, index) {
        let swapIndex = Math.floor(Math.random() * (CARD_ARRAY.length - 1 - index));
        let card2 = CARD_ARRAY[swapIndex];
        let swapper = new CardSwapper(card1, card2);
        SHUFFLE_ARRAY.push(swapper);
    })
}

function shuffleOneCard() {
    const swapper = SHUFFLE_ARRAY.shift();
    if (swapper) {
        swapper.swap();
        setTimeout(shuffleOneCard, 200);
    }
}

