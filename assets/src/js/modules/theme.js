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
        }
    };
    
    module.exports = Theme;

})(jQuery);