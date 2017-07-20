// ------------------------------------
//
// Theme
//
// ------------------------------------

(function($) {

    if (typeof window.Theme == 'undefined') window.Theme = {};

    Theme = {

        settings: {},

        /*
         * Theme init
         */

        init: function() {

            this.selectLists();
            this.includes();
            this.textareaLimit();
            this.formSuccess();

        },

        selectLists: function() {
            $('.dropdown-wrapper').each(function(){
                var parent = $(this);
                var select = $(this).find('.select-content');
                // onClick new options list of new select
                select.text($(this).find('.dropdown-menu > li.selected').text());
                var newOptions = $(this).find('.dropdown-menu > li');
                newOptions.click(function() {
                    $(select).text($(this).text());
                    $('.dropdown-menu > li').removeClass('selected');
                    $(this).addClass('selected');
                });
                var dropdown = $(this).find('.dropdown');
                dropdown.click(function() {
                    $('.dropdown').not(this).find('.dropdown-menu').addClass('hide');
                    $('.dropdown').not(this).closest('.dropdown-wrapper').removeClass('active');
                    $(parent).toggleClass('active');
                    $(this).find('.dropdown-menu').toggleClass('hide');
                }); 
            });
        },

        includes: function() {
            var includes = $('[data-include]');
            jQuery.each(includes, function(){
                var file = 'inc/' + $(this).data('include') + '.html';
                $(this).load(file);
            });
        },

        textareaLimit: function() {
            var maxLength = 700;
            $('textarea#message').keyup(function() {
                var length = $(this).val().length;
                var length = maxLength-length;
                $('.charsleft #chars').text(length);
            });
        },

        formSuccess: function() {
            var success = $('.form-success');

            $('.post-question form input[type="submit"]').click(function(e) {
                e.preventDefault();
                window.scrollTo(0, 0);
                var headerHeight = $('header.primary').outerHeight();
                var mainHeight = $('main').outerHeight();
                var height = headerHeight + mainHeight + 5;
                success.height(height);
                success.addClass('active');
                $('.form-success .modal').css('top', headerHeight);
            });

            $('.form-success button, .form-success').click(function(e){
                $(success).removeClass('active');
            });

            $('.form-success .modal').click(function(e) {
                e.stopPropagation();
            });
        }
    };
    
    module.exports = Theme;

})(jQuery);