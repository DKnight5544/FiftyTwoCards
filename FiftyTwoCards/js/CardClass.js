
function Card(props, container) {

    var img = document.createElement("img");
    img.src = "cardz.png";

    var div = document.createElement("div");
    div.className = "card";
    div.img = img;
    div.appendChild(img);

    if (container) container.appendChild(div);

    var originalProps = props;
    var currentProps = originalProps.getClone();
    apply();

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

    this.reset = reset;


    function reset() {
        currentProps = originalProps.getClone()
        apply();
    }

    function apply() {
        div.style.borderColor = currentProps.borderColor;
        div.img.style.marginTop = currentProps.marginTop;
        div.img.style.marginLeft = currentProps.marginLeft;
    }

}