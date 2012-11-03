$.validator.setDefaults({
    highlight: function (element, errorClass, validClass) {
        var $element;
        if (element.type === 'radio') {
            $element = this.findByName(element.name);
        } else {
            $element = $(element);
        }
        $element.addClass(errorClass).removeClass(validClass);
        $element.parents("div.control-group").addClass("error");
    },
    unhighlight: function (element, errorClass, validClass) {
        var $element;
        if (element.type === 'radio') {
            $element = this.findByName(element.name);
        } else {
            $element = $(element);
        }
        $element.removeClass(errorClass).addClass(validClass);
        $element.parents("div.control-group").removeClass("error");
    },
    showErrors: function (errorMap, errorList) {

        $.each(this.successList, function (index, value) {
            $(value).popover('hide');
        });

        $.each(errorList, function (index, value) {
            var pop = $(value.element).popover({
                trigger: 'manual',
                content: value.message,
                title: 'Error'
            });

            pop.data('popover').options.content = value.message;

            $(value.element).popover('show');

        });

        this.defaultShowErrors();
    }
});

$(function () {
    $('form').each(function () {
        $(this).find('div.control-group').each(function () {
            if ($(this).find('.field-validation-error').length > 0) {
                $(this).addClass('error');
            }
        });
    });
});