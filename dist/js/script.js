var spacePortfolio = function () {
    var portfolioItems = document.querySelectorAll('.portfolioItem');
    var itemNum = portfolioItems.length;
    var counter = 0;
    portfolioItems.forEach(function (portfolioItem) {
        if (counter % 4 < 2) {
            portfolioItem.classList.add('l3Col');
        }
        else {
            portfolioItem.classList.add('l6Col');
        }
        portfolioItem.classList.add('m4Col');
        counter++;
    });
    if (itemNum % 3 == 1 && itemNum > 3) {
        for (var i = 1; i <= 4; i++) {
            portfolioItems.item(itemNum - i).classList.remove('l6Col');
            portfolioItems.item(itemNum - i).classList.add('l3Col');
            portfolioItems.item(itemNum - i).classList.remove('m4Col');
            portfolioItems.item(itemNum - i).classList.add('m6Col');
        }
    }
    if (itemNum % 3 == 2) {
        for (var i = 1; i <= 2; i++) {
            portfolioItems.item(itemNum - i).classList.remove('l3Col');
            portfolioItems.item(itemNum - i).classList.add('l6Col');
            portfolioItems.item(itemNum - i).classList.remove('m4Col');
            portfolioItems.item(itemNum - i).classList.add('m6Col');
        }
    }
    if (itemNum % 2) {
        portfolioItems.item(itemNum - 1).classList.add('sSpan');
    }
};
(function doHandlebars() {
    fetch('src/portfolio.json').then(function (response) {
        return response.json();
    }).then(function (response) {
        var portfolioJSON = response;
        fetch('src/templates/portfolioItem.hbs').then(function (response) {
            return response.text();
        }).then(function (response) {
            var HBTemplate = response;
            var template = Handlebars.compile(HBTemplate);
            var html = template(portfolioJSON);
            document.querySelector('.portfolioContainer').innerHTML = html;
            spacePortfolio();
        });
    });
})();
