import {LocType} from './LocType';
export class LocWrapper {

    public elementName : string;
    public elementValue : string;
    public elementType : LocType;
    public fromPageObject : string;

    constructor(elementName : string, elementValue : string, locatorType : LocType, whichPageObj : string){
        this.elementName = elementName;
        this.elementValue = elementValue;
        this.elementType = locatorType;
        this.fromPageObject = whichPageObj;
    }
}