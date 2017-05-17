
'use strict';

function CardSwapper(card1, card2) {
    const c1 = card1;
    const c2 = card2;

    this.swap = function () {
        const props = c1.cloneProps();
        c1.setProps(c2.cloneProps());
        c2.setProps(props);
    }

}