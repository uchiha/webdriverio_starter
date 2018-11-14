import {BasePage} from '../common/BasePage';
import {LocWrapper} from '../utils/LocWrapper';
import { LocType } from '../utils/LocType';

export class SearchHome extends BasePage{
    private INPUT_ELEM : LocWrapper = new LocWrapper("Google search input", "input[name='b']", LocType.CSS, SearchHome.name);

    constructor(){
        // this will set timeouts based from BasePage
        super();
    }
    

    private getSearchInput() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return this.getTheElement(this.INPUT_ELEM);
    }

    // this method will use getSearchInput()
    public searchForInput(inputS : string){
        try {
            this.getSearchInput().setValue(inputS);
        } catch (error) {
            console.error(`==> I can't find the "${this.INPUT_ELEM.elementName}"`);
            throw error;
        }
    }

    // this one won't
    public searchForInputInd(inputS : string){
        try {
            this.getTheElement(this.INPUT_ELEM).setValue(inputS);
        } catch (error) {
            console.error(`==> I can't find the "${this.INPUT_ELEM.elementName}"`);
            throw error;
        }
    }

    // this one is encapsulated, the better implementation.
    public searchForTheKeyword(keyword : string){
        this.sendKeysPlusCR(this.INPUT_ELEM, keyword);
        browser.pause(5000);
    }

}