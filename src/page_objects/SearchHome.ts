import {BasePage} from '../common/BasePage';
import {LocWrapper} from '../utils/LocWrapper';
import { LocType } from '../utils/LocType';

export class SearchHome extends BasePage{
    private INPUT_ELEM : LocWrapper = new LocWrapper("Google search input", "input[name='b']", LocType.CSS, SearchHome.name);

    constructor(){
        // this will set timeouts based from BasePage
        super();
    }

    // this one is encapsulated, the better implementation.
    public searchForTheKeyword(keyword : string){
        this.sendKeysPlusCR(this.INPUT_ELEM, keyword);
        browser.pause(5000);
    }

}