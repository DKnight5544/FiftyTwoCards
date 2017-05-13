
var CORRECT_INDEX_TOTAL = 1326;  // 0 + 1 + 2 ... + 51))

createCards();

describe("FiftyTwoCards", function () {

    it("There Are 52 Cards", function () {
        expect(test_CardCount()).toEqual(52);
    })

    it("Cards Are Unique Before Shuffle", function () {
        expect(test_CardsShouldBeUnique(0)).toEqual(0);
    })

    it("Cards Have Correct Index Count Before Shuffle", function () {
        expect(test_CorrectIndexTotal(0)).toEqual(CORRECT_INDEX_TOTAL);
    })

    it("Cards Are Unique After 1 Shuffle", function () {
        expect(test_CardsShouldBeUnique(1)).toEqual(0);
    })

    it("Cards Have Correct Index Count After 1 Shuffle", function () {
        expect(test_CorrectIndexTotal(1)).toEqual(CORRECT_INDEX_TOTAL);
    })

    it("Cards Are Unique After 100 Shuffles", function () {
        expect(test_CardsShouldBeUnique(100)).toEqual(0);
    })

    it("Cards Have Correct Index Count After 100 Shuffles", function () {
        expect(test_CorrectIndexTotal(100)).toEqual(CORRECT_INDEX_TOTAL);
    })

    it("Reset Function Works", function () {
        expect(test_isResetWorking()).toEqual(true);
    })

});