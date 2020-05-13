const spacePortfolio : void = (() => {
    let portfolioItems = document.querySelectorAll('.portfolioItem');
    
    const itemNum : number = portfolioItems.length;
    let counter : number = 0;
    portfolioItems.forEach((portfolioItem : Element) => {
        if (counter % 4 < 2) {
            portfolioItem.classList.add('l3Col');
        } else {
            portfolioItem.classList.add('l6Col');
        }
        portfolioItem.classList.add('m4Col');
        counter++;
    });
    if (itemNum % 3 == 1 && itemNum > 3) {
        for (let i : number = 1; i <= 4; i++) {
            portfolioItems.item(itemNum - i).classList.remove('l6Col');
            portfolioItems.item(itemNum - i).classList.add('l3Col');
            portfolioItems.item(itemNum - i).classList.remove('m4Col');
            portfolioItems.item(itemNum - i).classList.add('m6Col');
        }
    }
    if (itemNum % 3 == 2) {
        for (let i : number = 1; i <= 2; i++) {
            portfolioItems.item(itemNum - i).classList.remove('l3Col');
            portfolioItems.item(itemNum - i).classList.add('l6Col');
            portfolioItems.item(itemNum - i).classList.remove('m4Col');
            portfolioItems.item(itemNum - i).classList.add('m6Col');
        }
    }
    if (itemNum % 2) {
        portfolioItems.item(itemNum - 1).classList.add('sSpan');
    }
})();