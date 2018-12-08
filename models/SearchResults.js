const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

let urlData = [];

const pa = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'results.json');


module.exports = class SearchResults {
    constructor(url, keyWord) {
        this.keyWord = keyWord;
        this.url = url;
    }
    dataScrape(cb) {
        request(this.url, (error, resp, body) => {
            let $ = cheerio.load(body);
            $('#questions .question-summary .summary .question-hyperlink').attr('href', (i, val) => {
                urlData.push('https://stackoverflow.com' + val);
            }).text();

            fs.writeFile(pa, JSON.stringify(urlData), (err) => {
                console.log(err);
            });
            // console.log('scraped from scraper.js', urlData);
            fs.readFile(pa, (err, SearchResults) => {
                if (err) {
                    cb([]);
                } else {
                    cb(JSON.parse(SearchResults));
                    // console.log(JSON.parse(SearchResults));
                }
            });
        });
    }

}

