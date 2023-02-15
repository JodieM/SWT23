import { LightningElement, api } from 'lwc';

export default class RecordViewFormDynamicContact extends LightningElement {
    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;

    //From https://github.com/trailheadapps/lwc-recipes/blob/main/force-app/main/default/lwc/recordViewFormDynamicContact/recordViewFormDynamicContact.js
    //Also https://www.sfdcblogs.com/post/record-view-form-in-lwc
}