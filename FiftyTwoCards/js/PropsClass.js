'use strict';

function Props(borderColor, marginTop, marginLeft, numericID) {

    this.borderColor = borderColor;
    this.marginTop = marginTop;
    this.marginLeft = marginLeft;
    this.numericID = numericID;

    this.getClone = function () {
        return new Props(this.borderColor, this.marginTop, this.marginLeft, this.numericID);
    }
}