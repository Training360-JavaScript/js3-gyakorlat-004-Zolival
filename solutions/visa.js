'use strict';

const checkVisa = (cardNumber) => {
    const visaCard = /^4[0-9]{12}(?:[0-9]{3})?$/ ;
    // return cardNumber.match(visaCard) ? true : false ; //or
    return visaCard.test(cardNumber)
}


export default checkVisa ;