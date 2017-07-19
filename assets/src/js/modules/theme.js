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
                    $(parent).toggleClass('active');
                    $(this).find('.dropdown-menu').toggleClass('hide');
                });                  
            });

        }
    };
    
    module.exports = Theme;

})(jQuery);