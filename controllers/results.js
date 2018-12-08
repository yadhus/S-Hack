const SearchResults = require('../models/SearchResults');

exports.getResults = (req, res, next) => {
    const keyWord = req.query.search;
    const url = 'https://stackoverflow.com/questions/tagged/' + keyWord + '?sort=votes';
    // console.log("fck" + keyWord);
    if (keyWord === "") {
        res.render('error', {
            pageTitle: "No Results Found" 
        });
    } else {
        const search = new SearchResults(url, keyWord);
        search.dataScrape(search => {
            res.render('results', {
                searchs: search,
                pageTitle: req.query.search + "- Search Results",
                keyWord: keyWord
                // path: '/'
            });
        });
        // search.getResultsFromFile();?\
    }

};

