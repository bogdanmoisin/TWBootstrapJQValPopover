/*!
 * Popover Error Messages with JQuery Validation and Twitter Bootstrap 
 * https://github.com/mdobie/TWBootstrapJQValPopover
 * 
 * Modified so that errors appear one field at a time
 * https://github.com/eternoendless/TWBootstrapJQValPopover
 */
$.validator.setDefaults({
  
  errorPlacement: function (error, element) {
    return true;
  },
  
  highlight: function (element, errorClass, validClass) {
    var $element;
    if (element.type === 'radio') {
      $element = this.findByName(element.name);
    } else {
      $element = $(element);
    }
    $element.addClass(errorClass).removeClass(validClass);
    $element.parents("div.form-group").addClass("has-error");
  },
  
  unhighlight: function (element, errorClass, validClass) {
    var $element;
    if (element.type === 'radio') {
      $element = this.findByName(element.name);
    } else {
      $element = $(element);
    }
    $element.removeClass(errorClass).addClass(validClass);
    $element.parents("div.form-group").removeClass("has-error");
  },
  
  showErrors: function (errorMap, errorList) {
    // delete messages from the fields that have already been validated
    $.each(this.successList, function (index, value) {
      $(value).popover('destroy');
    });

    var focused = false;
    
    // create a message for every non validated field
    $.each(errorList, function (index, value) {
      // show messages on focus
      var pop = $(value.element).popover({
        trigger: 'focus',
        content: value.message
      });

      if (!focused) {
        value.element.focus();
        focused = true;
      }

      // force show for the currently focused field
      if (document.activeElement == value.element) {
        $(value.element).popover('show');
      }

    });

    this.defaultShowErrors();
  }
});
