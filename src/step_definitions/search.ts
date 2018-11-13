import {Given, When, Then, Before, After, AfterAll} from 'cucumber';

Given(/^I browse to the preferred search engine$/, async () => {
    browser.url("https://google.co.nz");
});

