# use-label


Unlabelled controls cause problems for users of assistive technology, as it can be unclear what 
the purpose of the control is. Particularly in cases where the label is not near the control in 
the document order, the user may have no way of knowing what the control is for.

Assistive technology will speak the name of a form element only if it is labelled using one of 
the following techniques:

- `aria-labelledby` attribute
- `aria-label` attribute
- HTML `<label>`
- `alt` attribute, for `<img>` or `<input type='img'>` elements
- `title` attribute as a last resort.


## Options

*This rule takes no options*

## Passes

These elements are passed by this rule
```jsx harmony
// Good: Labeled using aria-labelledby
<div id="address_label">Enter your address</div>
<input aria-labelledby="address_label">

// Good: Labeled using aria-label 
<input aria-label="Enter your address">

//  Good: using label/for= 
<label for="address">Enter your address</label>
<input id="address">

// Good: using label-wrapped
// In this case both "Address:" and the contents of the text field will be read.
<label>
  Address:
  <input>
</label>

// Ok: using title attribute 
<input title="Enter your address">

// Good: video element has label
<video controls id="video">
  <source src="video.webm" type="video/webm"/>
</video>
<label for="video">Video of ducklings</label>
```

## Fails

These elements are *not* passed by this rule
```jsx harmony
// Bad: label not associated with control
<div>
  Enter your address:
  <input id="address">                    
</div>

// Bad: button has no text description
<button class="enter_site"></button>     

// Bad: placeholder is used in place of a label
<input placeholder="Enter your address">  
```

## See also

 - Google Audit defs [AX_TEXT_01](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_01)
 - WebAIM article [Advanced Form Labelling](https://webaim.org/techniques/forms/advanced)
 - WCAG 2.0 Techniques [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html)
 - WCAG 2.0 Techniques [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html)