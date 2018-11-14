import { LocWrapper } from "../utils/LocWrapper";

export class BasePage{
    constructor(){
        browser.timeouts("script", 3000);
        browser.timeouts("implicit", 10000);
        // browser.timeouts("pageLoad", 7000);
    }

    protected getTheElement(locatorWrap : LocWrapper) : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>{
        return browser.element(locatorWrap.elementValue);
        
    }

    protected sendKeysPlusCR(elem : LocWrapper, toType: string){
        try {
            this.getTheElement(elem).setValue(toType);
        } catch (error) {
            console.log(`==> I can't find the "${elem.elementName}"`)
            throw new Error(`${error} \n ===# The element named "${elem.elementName}" from "${elem.fromPageObject}" page object was not found! #===`);
        }
        browser.keys("\uE007");
    }
}