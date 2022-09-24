function writeCards(guestNames, eventName) {
    let cards = []
    for (let i = 0; i < guestNames.length; i++) {
        cards.push(`Thank you, ${guestNames[i]}, for the wonderful ${eventName} gift!`)
    }
     countDown(guestNames.length);
    return cards
}

function countDown(number) {
    let count = number;
    while(count >= 0) {
      console.log(count--);
    }
  };
  

