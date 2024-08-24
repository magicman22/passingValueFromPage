import { LightningElement, api } from 'lwc';

export default class PassingPropertyFromPageToLWC extends LightningElement {
    @api valueFromPage;

    connectedCallback(){
        console.log('connectedCallback()');
        console.log('valueFromPage => ', this.valueFromPage);
    }
    
    renderedCallback(){
        console.log('renderedCallback()');
        console.log('valueFromPage => ', this.valueFromPage);
    }
}