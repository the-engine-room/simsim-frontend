// ------------------------------------
//
// Theme
//
// ------------------------------------

(function($) {

    if (typeof window.Theme == 'undefined') window.Theme = {};

    Theme = {

        settings: {
          included: false
        },

        /*
         * Theme init
         */

        init: function() {

            this.includes();
            this.selectLists();
            this.textareaLimit();
            this.formSuccess();
            this.mobileMenu();
            this.menuDropdown();
            this.mpAccordion();

        },

        mobileMenu: function() {

            $('.mobile-nav').click( function(e) {
              e.preventDefault();
              $('.mobile-nav-wrapper').css('display', 'block');
            });
            $('.mobile-nav-close').click(function(e){
              e.preventDefault();
              $('.mobile-nav-wrapper').hide();
            });

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
                // if it is the header, let's attach the mobile menu
                if($(this).data('include') === 'header' || $(this).data('include') === 'header-ar'){
                  $(this).load(file, function(){

                    $('.mobile-nav').click( function(e) {
                      e.preventDefault();
                      $('.mobile-nav-wrapper').show();
                    });
                    $('.mobile-nav-close').click(function(e){
                      e.preventDefault();
                      $('.mobile-nav-wrapper').hide();
                    });

                    $('.has-sub').click( function(e){
                        e.preventDefault();
                        if($(this).next('.sub').is(':visible')){
                          $(this).next('.sub').hide();
                        }
                        else {
                          $(this).next('.sub').show();
                        }
                    });

                  });
                }
                else {
                  $(this).load(file);
                }
            });

            return true;
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
        },
        menuDropdown: function() {
          $('.has-sub').click( function(e){
              e.preventDefault();
              if($(this).next('.sub').is(':visible')){
                $(this).next('.sub').hide();
              }
              else {
                $(this).next('.sub').show();
              }
          });
        },
        mpAccordion: function() {
          var detailsListElements = $('.profile-content .details ul li a');

          // if desktop
          if(window.innerWidth > 736){

            detailsListElements.click(function(e){
              e.preventDefault();

              $('.description').removeClass('active');
              $($(this).data('rel')).addClass('active');

              detailsListElements.parent().removeClass('active');
              $(this).parent().addClass('active');
            });
          }
          // its mobile
          else {
            detailsListElements.click(function(e){
              e.preventDefault();
              detailsListElements.siblings('.description').remove();

              detailsListElements.parent().removeClass('active');
              $(this).parent().addClass('active');

              var desc = $($(this).data('rel')).clone();
              desc.addClass('active');
              $(this).after(desc);

            });
          }
        }


    };

    module.exports = Theme;

})(jQuery);
