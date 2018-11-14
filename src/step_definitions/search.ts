import {Given, When, Then, Before, After, AfterAll} from 'cucumber';
import {SearchHome} from '../page_objects/SearchHome';

let searchHomes : SearchHome;

Given(/^I browse to the preferred search engine$/, async () => {
    browser.url("https://google.co.nz");
});

When(/^I searched for "([^"]*)"$/, (searchWord) => {
    if(searchHomes == null || searchHomes == undefined){
        searchHomes = new SearchHome();
        console.log("----> yep, its either undefined or null");
    } else{
        console.log("----> no worries, its defined already!");
    }
    
    searchHomes.searchForTheKeyword(searchWord);
    
});

