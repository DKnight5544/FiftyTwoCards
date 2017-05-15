
'use strict';

const CARD_ARRAY = [];
const SHUFFLE_ARRAY = [];

function body_onload() {
    createCards();
}

function createCards() {

    const container = document.getElementById("mainContainer");
    const suitValueArray = [0, 1, 3, 2];

    for (let row = 0; row < 4; row++) {
        let suit = suitValueArray[row];
        for (let value = 0; value < 13; value++) {

            const borderColor = (suit === 0 || suit === 3) ? "black" : "red";
            const marginTop = (-2 - (suit * 123)).toString() + "px";
            const marginLeft = (-2 - (value * 79)).toString() + "px";
            const numericID = (suit * 13) + value;

            const props = new Props(borderColor, marginTop, marginLeft, numericID);
            const card = new Card(props, container);

            CARD_ARRAY.push(card);
        }
    }
}


function reset() {
    for (let index = 0; index < CARD_ARRAY.length ; index++) {
        CARD_ARRAY[index].reset();
    }
}

function shuffleCards() {
    for (let index = CARD_ARRAY.length - 1; index > 0; index--) {
        let swapIndex = Math.floor(Math.random() * index);
        let card1 = CARD_ARRAY[index];
        let card2 = CARD_ARRAY[swapIndex];
        let tempProps = card1.cloneProps();
        card1.setProps(card2.cloneProps());
        card2.setProps(tempProps);
    }
}

function visuallyShuffleCards() {
    for (let index = CARD_ARRAY.length - 1; index > 0; index--) {
        const map = new Object();
        map.index1 = index;
        map.index2 = Math.floor(Math.random() * index);
        SHUFFLE_ARRAY.push(map);
    }
    if (SHUFFLE_ARRAY.length === 51) shuffleOneCard();
}

function shuffleOneCard() {
    const map = SHUFFLE_ARRAY.shift();
    if (map) {
        const card1 = CARD_ARRAY[map.index1];
        const card2 = CARD_ARRAY[map.index2];
        const tempProps = card1.cloneProps();
        card1.setProps(card2.cloneProps());
        card2.setProps(tempProps);
        setTimeout(shuffleOneCard, 200);
    }
}

