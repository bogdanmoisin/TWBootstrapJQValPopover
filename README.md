#Popover Error Messages with JQuery Validation and Twitter Bootstrap

Displays error messages as [Twitter Bootstrap Popovers] (http://twitter.github.com/bootstrap/javascript.html#popovers) instead of inline text.

Check out the blog post [here](http://www.mdobie.co.uk/2012/11/03/twitter-bootstrap-popovers-jquery-validation/).

##Usage

Include the `jquery.validate.bootstrap.js` along with the jquery validation scripts

###Basic
Display an required error message to the right of the input:

    <input type="text" data-val="true" data-val-required="Required"/>

###Default Values
Using the twitter bootstrap default values:

    <input type="text" title="Error Message Title"
        data-val="true" data-val-required="Required"
        data-placement="bottom" />

###Origional code and insperation:
 - https://github.com/theonlylawislove/TwitterBootstrapjQueryValidate
 - https://gist.github.com/3030983