'use strict';

function Card(props, container) {


    const img = document.createElement("img");
    const div = document.createElement("div");
    const originalProps = props;


    let currentProps = originalProps.getClone();


    this.getNumericID = function () {
        return currentProps.numericID;
    }

    this.cloneProps = function () {
        return currentProps.getClone();
    }

    this.setProps = function (props) {
        currentProps = props;
        apply();
    }

    this.reset = function() {
        currentProps = originalProps.getClone()
        apply();
    }

    img.src = "cardz.png";
    div.className = "card";
    div.img = img;
    div.appendChild(img);

    if (container) container.appendChild(div);

    apply();

    function apply() {
        div.style.borderColor = currentProps.borderColor;
        div.img.style.marginTop = currentProps.marginTop;
        div.img.style.marginLeft = currentProps.marginLeft;
    }

}