// import {Web} from 'webdriverio';

export class BasePage{
    constructor(){
        browser.timeouts("script", 3000);
        browser.timeouts("implicit", 10000);
        // browser.timeouts("pageLoad", 7000);
    }
}