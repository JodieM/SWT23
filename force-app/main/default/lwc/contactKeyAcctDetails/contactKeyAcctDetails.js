import { LightningElement, api, wire } from 'lwc'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import SITE_FIELD from '@salesforce/schema/Account.Site'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import WEB_FIELD from '@salesforce/schema/Account.Website'
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import CONT_FIELD from '@salesforce/schema/Contact.AccountId'

const ACCT_FIELDS = [CONT_FIELD]

export default class RecordViewFormDynamicContact extends LightningElement {
  // Flexipage provides recordId and objectApiName
  @api recordId //Contact
  @api objectApiName
  @api flexipageRegionWidth
  @wire(getRecord, { recordId: '$recordId', fields: ACCT_FIELDS })
  cont

  get accId () {
    return getFieldValue(this.cont.data, CONT_FIELD)
  }

  accountFields = [
    INDUSTRY_FIELD,
    TYPE_FIELD,
    RATING_FIELD,
    SITE_FIELD,
    WEB_FIELD,
    REVENUE_FIELD
  ]
  contactFields = [CONT_FIELD]

  get smallRegion () {
    return 'SMALL' === this.flexipageRegionWidth
  }

  get mediumRegion () {
    return 'MEDIUM' === this.flexipageRegionWidth
  }

  get largeRegion () {
    return 'LARGE' === this.flexipageRegionWidth
  }
}
