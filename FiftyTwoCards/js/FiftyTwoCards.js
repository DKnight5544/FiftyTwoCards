
var CARD_ARRAY = [];
var SHUFFLE_ARRAY = [];

function body_onload() {
    createCards();
}


function createCards() {
    addValues(0);
    addValues(1);
    addValues(3);
    addValues(2);
}

function addValues(suit) {
    var container = document.getElementById("mainContainer");
    for (var value = 0; value < 13; value++) {

        var borderColor = (suit === 0 || suit === 3) ? "black" : "red";
        var marginTop = (-2 - (suit * 123)).toString() + "px";
        var marginLeft = (-2 - (value * 79)).toString() + "px";
        var numericID = (suit * 13) + value;

        var props = new Props(borderColor, marginTop, marginLeft, numericID);
        var card = new Card(props, container);

        CARD_ARRAY.push(card);
    }
}

function reset() {
    for (var index = 0; index < CARD_ARRAY.length ; index++) {
        CARD_ARRAY[index].reset();
    }
}

function shuffleCards() {
    var swapIndex, card1, card2, tempProps;
    for (var index = CARD_ARRAY.length - 1; index > 0; index--) {
        swapIndex = Math.floor(Math.random() * index);
        card1 = CARD_ARRAY[index];
        card2 = CARD_ARRAY[swapIndex];
        tempProps = card1.cloneProps();
        card1.setProps(card2.cloneProps());
        card2.setProps(tempProps);
    }
}

function visuallyShuffleCards() {
    for (var index = CARD_ARRAY.length - 1; index > 0; index--) {
        var map = new Object();
        map.index1 = index;
        map.index2 = Math.floor(Math.random() * index);
        SHUFFLE_ARRAY.push(map);
    }
    if (SHUFFLE_ARRAY.length === 51) shuffleOneCard();
}

function shuffleOneCard() {
    var map = SHUFFLE_ARRAY.shift();
    if (map) {
        var card1 = CARD_ARRAY[map.index1];
        var card2 = CARD_ARRAY[map.index2];
        var tempProps = card1.cloneProps();
        card1.setProps(card2.cloneProps());
        card2.setProps(tempProps);
        setTimeout(shuffleOneCard, 200);
    }
}


// -------- For Automated Testing with Jasmine ----------------------


function test_CardCount() {
    return CARD_ARRAY.length;
}

function test_CardsShouldBeUnique(shuffleCount) {

    var testArray = new Uint8Array(CARD_ARRAY.length);

    for (var count = 0; count < shuffleCount; count++) { shuffleCards(); }

    for (var index = 0; index < CARD_ARRAY.length; index++) {
        var card = CARD_ARRAY[index];
        var cardIndex = card.getNumericID();
        testArray[cardIndex]++;
        if (testArray[cardIndex] > 1) return cardIndex;
    }

    return 0;
}

function test_CorrectIndexTotal(shuffleCount) {

    var indexTotal = 0;

    for (var count = 0; count < shuffleCount; count++) { shuffleCards(); }

    for (var index = 0; index < CARD_ARRAY.length; index++) {
        indexTotal += CARD_ARRAY[index].getNumericID();
    }

    return indexTotal;

}

function test_isResetWorking() {

    var originalValuesArray = [];
    var suitValueArray = [0, 1, 3, 2];
    for (var row = 0; row < 4; row++) {
        var suit = suitValueArray[row];
        for (var col = 0; col < 13; col++) {
            originalValuesArray.push((suit * 13) + col);
        }
    }

    reset();

    for (var index = 0; index < CARD_ARRAY.length; index++) {
        if (originalValuesArray[index] != CARD_ARRAY[index].getNumericID()) return false;
    }

    return true;

}

