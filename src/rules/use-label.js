import {
    hiddenFromAT
} from '../util';

export default [{
    msg: 'You have an unlabeled element or control. Add `aria-label` or `aria-labelledby` attribute, or put some text in the element.',
    tagName: 'img', // a string or array of strings with the element names
     // which this test applies to (undefined means all elements)
    url: 'https://webaim.org/techniques/forms/advanced',
    AX: 'AX_TEXT_01', // the google chrome accessibility code (if applicable)
    test(tagName, props, children, ctx) {
        // this test returns true if an element passes, false if otherwise
        // ctx contains: React, ReactDOM, and the options passed to the test
    }
}];


export const pass = [];

export const fail = [];

export const description = `Unlabelled controls cause problems for users of assistive technology, as it can be unclear what 
the purpose of the control is. Particularly in cases where the label is not near the control in 
the document order, the user may have no way of knowing what the control is for.`;
