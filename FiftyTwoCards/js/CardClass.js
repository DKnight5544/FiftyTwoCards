'use strict';

function Card(props, container) {


    const img = document.createElement("img");
    const img2 = document.createElement("img");
    const div = document.createElement("div");
    const originalProps = props;

    const large_width = "75px";
    const large_height = "119px";
    const small_width = "13px";
    const small_height = "35px";

    const size = "Large";


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

    this.reset = function () {
        currentProps = originalProps.getClone()
        apply();
    }

    this.switchSizes = function () {
        if (div.style.width === large_width) {
            div.style.width = small_width;
            div.style.height = small_height;
        }
        else {
            div.style.width = large_width;
            div.style.height = large_height;
        }
    }

    let curImg = 1;
    this.flip = function () {
        curImg = 3 - curImg;
        img.src = (curImg === 1) ? "cardz.png" : "shiftwise.png";
    }

    img.src = "cardz.png";
    img.style.width = "1027px";
    img.style.height = "492px";

    img2.src = "shiftwise.png"; //pre-load

    div.className = "card";
    div.style.width = large_width;
    div.style.height = large_height;

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