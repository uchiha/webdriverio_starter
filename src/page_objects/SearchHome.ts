import {BasePage} from '../common/BasePage';

export class SearchHome extends BasePage{
    
    constructor(){
        // this will set timeouts based from BasePage
        super();
    }

    private getSearchInput() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.element("input[name='b']");
    }

    public searchForInput(inputS : string){
        this.getSearchInput().setValue(inputS);
    }

}