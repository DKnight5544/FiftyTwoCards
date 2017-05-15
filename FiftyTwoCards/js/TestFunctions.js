
'use strict';


function test_CardCount() {
    return CARD_ARRAY.length;
}

function test_CardsShouldBeUnique(shuffleCount) {

    const testArray = new Uint8Array(CARD_ARRAY.length);

    for (let count = 0; count < shuffleCount; count++) shuffleCards();

    for (let index = 0; index < CARD_ARRAY.length; index++) {
        const card = CARD_ARRAY[index];
        const cardIndex = card.getNumericID();
        testArray[cardIndex]++;
        if (testArray[cardIndex] > 1) return cardIndex;
    }

    return 0;
}

function test_CorrectIndexTotal(shuffleCount) {

    let indexTotal = 0;

    for (let count = 0; count < shuffleCount; count++) { shuffleCards(); }

    for (let index = 0; index < CARD_ARRAY.length; index++) {
        indexTotal += CARD_ARRAY[index].getNumericID();
    }

    return indexTotal;

}

function test_isResetWorking() {

    const originalValuesArray = [];
    const suitValueArray = [0, 1, 3, 2];
    for (let row = 0; row < 4; row++) {
        let suit = suitValueArray[row];
        for (let col = 0; col < 13; col++) {
            originalValuesArray.push((suit * 13) + col);
        }
    }

    reset();

    for (let index = 0; index < CARD_ARRAY.length; index++) {
        if (originalValuesArray[index] != CARD_ARRAY[index].getNumericID()) return false;
    }

    return true;

}

