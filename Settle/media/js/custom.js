/*
   Theme Name: Dynamico 
   Version: 1.3
   Author: Pinte Catalin
   
   File: js/custom.js
*/
/****************************************************************************************
                                  CONFIGURATIONS
****************************************************************************************/
var miniLogoWidth = 30,
    $logoMenuFooterCentered = 1700, 
    $visibleMenu = true,
    
    /* FancyBox */
    $fancyBox_button = 'a.details',
    $fancyBox_overlayOpacity = 0.65,
    $fancyBox_overlayColor = '#000000',
    $fancyBox_onComplete = function () {
        Cufon.replace('h3');
        $('#fancybox-inner').css({
            'overflow': 'hidden'
        });
    },
    $fancyBox_width = 1024,
    $fancyBox_height = 650,

    /* Page Slider */
    $pageSlider_speed = 1100,
    $pageSlider_easing = 'easeInOutSine',

    /* Subpage Slider */
    $subPageSlider_speed = 600,
    $subPageSlider_easing = 'easeInOutSine',

    /* NivoSlider (Project Slider) */
    $slider_directionNav = true,
    $slider_pauseOnHover = true,
    $slider_pauseTime = 5000,
    $slider_slices = 20,
    $boxCols = 8,
    // For box animations
    $boxRows = 4,
    // For box animations
    $animSpeed = 1000,

    /* Twitter Feed  */
    $username = "thesettletweets",
    $join_text = "auto",
    $avatar_size = 38,
    $count = 1,
    $auto_join_text_default = "i said,",
    $auto_join_text_ed = "we",
    $auto_join_text_ing = "we were",
    $auto_join_text_reply = "we replied",
    $auto_join_text_url = "we were checking out",
    $loading_text = "loading tweets…",
    $contactSuccessMessage = 'This field is ok !';

/* Cookies  */
var $cookiePageSlider = $.cookie('PageSlider_settings'),
    $cookieLogoButtons = $.cookie('LogoButtons_settings'),
    $cookieBackground = $.cookie('Background_settings'),
    $cookiePageSytle = $.cookie('PageStyle_settings'),
    $cookieMenuSytle = $.cookie('MenuStyle_settings'),
    blogIDSort = 'asc',
    blogTitleSort = 'asc',
    blogCommentsSort = 'asc',
    blogIDSortSet = false,
    blogTitleSortSet = false,
    blogCommentsSortSet = false,
    portfolioPriceSort = 'asc',
    portfolioTitleSort = 'asc',
    portfolioIdSort = 'asc',
    portfolioPriceSortSet = false,
    portfolioTitleSortSet = false,
    portfolioIdSortSet = false,
    currentURL, currentURL2, menuHref, menuHref2, url, url2, murig;


/* Window is loaded */
$(window).bind("load", function () {

    if (getBrowserHeight() < 620) {
        $('.sprite-hide-tool').click();
    }
    $('#preloader').fadeOut('fast', function () {
        $(this).remove();
    });

    $('#slider').nivoSlider({
        directionNav: $slider_directionNav,
        pauseOnHover: $slider_pauseOnHover,
        pauseTime: $slider_pauseTime,
        slices: $slider_slices,
        boxCols: $boxCols,
        // For box animations
        boxRows: $boxRows,
        // For box animations
        animSpeed: $animSpeed
    });

    $("#prevButton, #nextButton").click(function (e) {
        // Prevent the link from being followed
        e.preventDefault();

        // Initialize variables 
        var buttonId = this.id,
            buttonClass = ("prevButton" == buttonId) ? ".nivo-prevNav" : ".nivo-nextNav";

        // Trigger the slider button
        $(".nivo-directionNav").find(buttonClass).click();
    });


    $(".tweet").tweet({
        join_text: $join_text,
        username: $username,
        avatar_size: $avatar_size,
        count: $count,
        auto_join_text_default: $auto_join_text_default,
        auto_join_text_ed: $auto_join_text_ed,
        auto_join_text_ing: $auto_join_text_ing,
        auto_join_text_reply: $auto_join_text_reply,
        auto_join_text_url: $auto_join_text_url,
        loading_text: $loading_text
    });


    $('.subPages>li').jScrollPane({
        showArrows: false
    });


    // Bind a callback that executes when document.location.hash changes.
    $(window).bind("hashchange", function (e) {

        url = $.bbq.getState("p");
        url2 = url.split('/');

        if ($('#pageSlider').find('li.visible').attr('id') == url2[0]) {
            goToSubPage("#" + url2[0], url2[1], $subPageSlider_speed);
            return false;
        }

        goToPage("#" + url2[0], url2[1], $pageSlider_speed);

    });

    // Since the event is only triggered when the hash changes, we need
    // to trigger the event now, to handle the hash the page may have
    // loaded with.

    currentURL = $.bbq.getState("p");
    if (currentURL) {
        currentURL2 = currentURL.split('/');
        goToPage("#" + currentURL2[0], currentURL2[1], 0);
    } else {

    }
 
if(!$("#logo-menu").hasClass('ah')){
    $("#logo-menu").dequeue().animate({top:0}, 700, "easeInOutSine", function(){
          $("#logo>img").addClass("animated");
    });
}

			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))) {
				 		var isTouchScreen = 1;
				 	}else{
				 		var isTouchScreen = 0;
				 	}
 
 
				$container.bind('touchstart', function(e){
					var cpos = dragPosition;					
					if(isTouchScreen){
									e = e.originalEvent.touches[0];
								}
					var sY = e.pageY;
					var sX = e.pageX;
 
 
					$container.bind('touchmove',function(ev){
						if(isTouchScreen){
							ev.preventDefault();
							ev = ev.originalEvent.touches[0];
						}						
 
						var top = cpos-(ev.pageY-sY);
						positionDrag(top);
 
					});
					$container.bind('touchend',function(ev){
						$container.unbind('touchmove touchend');
					});
});
});


/* Document is ready */
$(function () {

				
				
    
    $('a[href=#]').attr('href', 'javascript:void(0)');

    /* Pagination */
    $('.testimonials').paginate({
        limit: 2,
        content: 'li'
    });

    /* CONTACT FORM VALIDATION */
    $("#contact_form").validate({
        debug: false,
        errorElement: "div",
        errorContainer: $("#warning, #summary"),
        errorPlacement: function (error, element) {

            if (element.attr('id') == 'message') error.css({
                'position': 'absolute',
                'top': element.prev().position().top - 7,
                'left': element.prev().position().left + element.prev().width() + 20
            });

            else error.css({
                'position': 'absolute',
                'top': element.position().top,
                'left': element.position().left + element.width() + 20
            });
            element.after(error);

        },
        success: function (label) {
            label.text($contactSuccessMessage).addClass("success");
        },
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength: 40
            },
            title: {
                required: true,
                minlength: 4,
                maxlength: 100
            },
            message: {
                required: true,
                minlength: 10,
                maxlength: 500
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
            $(".sendingStatus").css({
                'display': 'table'
            }).animate({
                'opacity': 1
            }).find('li.sending').css({
                'display': 'table-cell'
            }).animate({
                'opacity': 1
            });

            $.ajax({
                type: "POST",
                url: "process_form.php",
                // php file with mai function 
                data: $("#contact_form").serialize(),
                success: function (msg) {

                    $(':input', '#contact_form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                    $("#contact_form div.error").add($("#contact_form div.success")).remove();

                    if (msg == "ok") {
                        $(".sendingStatus>li").css({
                            'display': 'none',
                            'opacity': 0
                        });
                        $(".sendingStatus>li.success").css({
                            'display': 'table-cell'
                        }).animate({
                            'opacity': 1
                        });
                    } else {
                        $(".sendingStatus>li").animate({
                            'opacity': 0
                        }).css({
                            'display': 'none'
                        });
                        $(".sendingStatus>li.error").css({
                            'display': 'table-cell'
                        }).animate({
                            'opacity': 1
                        });
                    }


                }

            });

            return false;
        }
    });


    if (parseInt($.browser.version.replace('.', '').replace('.', '')) < 192 || $.browser.opera || $.browser.msie) {
        $('.columns li:last-child').css({
            'background': 0,
            'margin': 0,
            'padding': 0,
            'padding-left': 20
        });
        $('#contact .columns li:last-child').css({
            'background': 0,
            'margin': 0,
            'padding': 0,
            'padding-left': 25,
            'width': 430
        });
        $('#contact .image').css({
            'width': 400
        });
        $('.socials li:last-child').removeAttr('style');
        $('.skills dd').add('.skills dt').css({ 'padding-bottom':0 });
    }

    $(".cb-enabled").click(function () {
        var parent = $(this).parents('.switch');
        $('.cb-disabled', parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox', parent).attr('checked', true);
    });

    $(".cb-disabled").click(function () {
        var parent = $(this).parents('.switch');
        $('.cb-enabled', parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox', parent).attr('checked', false);
    });

function fancyBox_create(){   
    $($fancyBox_button).fancybox({
        'overlayOpacity': $fancyBox_overlayOpacity,
        'overlayColor': $fancyBox_overlayColor,
        'onComplete': $fancyBox_onComplete,
        'autoDimensions'	: false,
		'width'   : $fancyBox_width,
		'height'  : $fancyBox_height

    });
} 
fancyBox_create();


    if ($cookiePageSlider == "vertical") {
        $("input[name=pageSliderVariant][value=vertical").attr("checked", "checked");
        $("#pageSlider").removeAttr("class").addClass("vertical");
        $("label[for=pageSliderVariant1]").addClass("selected")
    } else if ($cookiePageSlider == "horisontal") {
        $("input[name=pageSliderVariant][value=horisontal").attr("checked", "checked");
        $("#pageSlider").removeAttr("class").addClass("horisontal");
        $("label[for=pageSliderVariant2]").addClass("selected");
    } else if ($cookiePageSlider == "none") {
        $pageSlider_speed = 0;
        $subPageSlider_speed = 0;
        $("input[name=pageSliderVariant][value=none]").attr("checked", "checked");
        $("#pageSlider").removeAttr("class").addClass("horisontal");
        $("label[for=pageSliderVariant3]").addClass("selected")
    } else {
        $("input[name=pageSliderVariant][value=horisontal]").attr("checked", "checked");
        $("#pageSlider").removeAttr("class").addClass("horisontal");
        $("label[for=pageSliderVariant2]").addClass("selected")
    }
    if ($cookieLogoButtons != null) {
        $("body").removeClass("blue").removeClass("gray").addClass($cookieLogoButtons);
        $("#color_chooser>li").removeClass("active");
        $("#color_chooser>li." + $cookieLogoButtons).addClass("active")
    }
    if ($cookieBackground != null) {
        $("body").removeClass("Background1").removeClass("Background2").removeClass("Background3").removeClass("Background4").addClass($cookieBackground);
        $("#background_chooser>li").removeClass("active").find("img[alt=" + $cookieBackground + "]").parent().addClass("active")
    }
    if ($cookiePageSytle != null) {
        $("input[name=pageStyleVariant][value=" + $cookiePageSytle + "]").attr("checked", "checked");
        $("body").removeClass("light").removeClass("dark").addClass($cookiePageSytle);
        $("label[for=" + $("input[name=pageStyleVariant][value=" + $cookiePageSytle + "]").attr('id') + "]").addClass("selected");
    } else {
        $("input[name=pageStyleVariant][value=dark]").attr("checked", "checked");
        $("label[for=pageStyleVariant1]").addClass("selected");
    }
if(!$("#logo-menu").hasClass("ah")){    
    if ($cookieMenuSytle != null) {
        $("input[name=menuStyleVariant][value=" + $cookieMenuSytle + "]").attr("checked", "checked");
        
        if($cookieMenuSytle=="fixed") { $("#logo-menu").removeClass("ah");   }else{ $("#logo-menu").addClass("ah");if($("#logo>img").attr("src")=="images/logo.png"){ $("#logo>img").attr("src","images/logo2.png"); $("#logo").css("height",50);  } };
        $("label[for=" + $("input[name=menuStyleVariant][value=" + $cookieMenuSytle + "]").attr('id') + "]").addClass("selected");
        
    } else {
        $("input[name=menuStyleVariant][value=fixed]").attr("checked", "checked");
        $("#logo-menu").removeClass("ah");
        $("label[for=menuStyleVariant1]").addClass("selected");
    }
}

    $('a[href=#]').attr('href', 'javascript:void(0)');

     
if($("#logo-menu").hasClass("ah")){
    $('#logo').css({
        'width': miniLogoWidth
    });
    $('#menu').css({
        'display': 'none'
    });


    $('#logo-menu').hover(function (q) {
        if (location.hash == '#p=index' || location.hash == '') {
            $('#slider').data('nivoslider').stop();
        }

        $("#menu").delay(100).hoverFlow(q.type, {
            'width': 'show'
        }, 300, 'easeInOutQuad');
        $('#logo').hoverFlow(q.type, {
            'width': ($('#logo img').width() != null) ? $('#logo img').width() : 'auto'
        }, 150, 'easeInOutQuad');
        q.preventDefault();
    }, function (q) {
        $("#menu").delay(200).hoverFlow(q.type, {
            'width': 'hide'
        }, 400, 'easeInOutQuad');
        $('#logo').delay(500).hoverFlow(q.type, {
            'width': miniLogoWidth
        }, 250, 'easeInOutQuad');

        if (location.hash == '#p=index' || location.hash == '') {
            $('#slider').data('nivoslider').start();
        }
        q.preventDefault();
    });
    
     
     Cufon.replace('#menu>ul>li>a', {	 textShadow: '1px 1px 1px rgba(255,255,255,.25)' });
     $("#logo>img").attr("src","images/logo2.png");
     
     
}else{
     //src changed to "../media/images" on 3.23.12 for local dev server reasons. Previously: images/logo.png
     $("#logo>img").attr("src","../media/images/logo.png");
     $("#logo-menu").css({ "top": -($("#logo-menu #logo>img").height() ) });
     $("#footer").css({ 'background':0,'border':0, 'box-shadow':'0 0 0 0', '-webkit-box-shadow':'0 0 0 0', '-moz-box-shadow':'0 0 0 0', 'color':'#111111'   }).addClass("centered");
     $("#footer>div").css({ 'background':0,'border':0 });
     $("#footer a").addClass("shadow");
     $("#footer .footer_controls").appendTo("#logo-menu").css({'top':15});
     $(".footer_controls>li:last-child").hide();
     $(".footer_controls").addClass("topbar");
     // added "../media/" before images urls for next two lines 4/1/12
     $(".footer_controls .arrow").css({'top':-25, 'right':'45px', 'background':'url(../media/images/footer_arrow_up.png) 0 0 no-repeat' });
     $("body.light .footer_controls .arrow").css({'top':-25, 'right':'45px', 'background':'url(../media/images/footer_arrow-light_up.png) 0 0 no-repeat' });
     $(".footer_controls>li>div").css({'right':-50 });
     
     Cufon.replace('#menu>ul>li>a', {	hover: true, textShadow: '1px 1px 1px rgba(0,0,0, .99)'  });

}

    Cufon.replace('h2,h3,.settings b, dl.skills');
    Cufon.replace('.Tbutton', {	hover: true,  });
    Cufon.replace('#logo, #extra, #menu>ul>li>ul>li>a, body.light .subPages h3, body.light .footer_controls h3,  body.light h2,  body.light .settings b, body.light dl.skills, body.light .Tbutton', {
        textShadow: '1px 1px 1px rgba(255,255,255,.25)'
    });
     
    Cufon.replace('.ribbon h2',{
         textShadow: '1px 1px 2px rgba(255,255,255,.35)'
    });  



    $("#menu>ul>li").hover(function (q) {

        $(this).find('ul').delay(100).hoverFlow(q.type, {
            'height': 'show',
            'opacity': 1
        }, 250, 'easeInOutQuad');

        q.preventDefault();
    }, function (q) {
        $(this).find('ul').hoverFlow(q.type, {
            'height': 'hide',
            'opacity': 0
        }, 250, 'easeInOutQuad');

        q.preventDefault();
    });



    $('a').live("click", function (event) {


        if ($(this).attr('href')) {
            menuHref = $(this).attr('href').substr(1);
            if (menuHref) {
                menuHref2 = menuHref.split('/');
            }


            if ($('#pageSlider>ul>li#' + menuHref2[0]).length != 0) {

                // Push this URL "state" onto the history hash.
                $.bbq.pushState({
                    p: menuHref
                });

                // Prevent the default click behavior.
                return false;
            }


            if ($('.subPages>li#' + menuHref2[0]).length != 0) {
                var plb = location.hash.split('='),
                    plb2 = plb[1].split('/');

                // Push this URL "state" onto the history hash.
                $.bbq.pushState({
                    p: plb2[0] + "/" + menuHref2[0]
                });

                // Prevent the default click behavior.
                return false;
            }

        }
    });

    if ($('#portfolio').length != 0) {
        var $pane = $('#portfolio .subPages>li').jScrollPane({
            showArrows: false
        }).data('jsp');
    } else {
        var $pane = '';
    }

    if ($('#blog').length != 0) {
        var $pane2 = $('#blog .subPages>li').jScrollPane({
            showArrows: false
        }).data('jsp');
    } else {
        var $pane2 = '';
    }




    $("#contact_form a.close").click(function () {
        $(this).parent().parent().animate({
            'opacity': 0
        }, 500, 'easeInOutQuad', function () {
            $(this).css({
                'display': 'none'
            })
        });
        $(".sendingStatus>li").css({
            'display': 'none',
            'opacity': 0
        });
    });


    function checkGridHeight() {
        if ($(".projects-grid").length != 0) {
            if ($(".projects-grid").height() > 450) {
                $(".projects-grid").addClass("smaller")
            } else {
                $(".projects-grid").removeClass("smaller")
            }
            $(".projects-grid>li").hover(function (a) {
                if ($(this).parent().hasClass("projects-grid")) {
                    $(this).find("img").hoverFlow(a.type, {
                        opacity: .3
                    }, 300, "easeInOutQuad");
                    $(".projects-grid>li").click(function () {
fancyBox_create();
                        return false
                    })
                }
            }, function (a) {
                $(this).find("img").hoverFlow(a.type, {
                    opacity: 1
                }, 300, "easeInOutQuad")
            })
        }
    }


    $(".projects_controls>a").click(function () {
        var controlLink = $(this);
        var sssas = location.hash.split('/');
        if (!sssas[1]) {
            sssas[1] = 'all';
        }

        $(".projects_controls a").removeClass('active');
        controlLink.addClass('active');

        if (controlLink.attr('id') === 'list_view') {

            $(".projects-grid").removeClass('projects-grid').removeClass('smaller').addClass('projects');
            $('.projects>li').removeAttr('style');
            $('.projects>li>img').removeAttr('style');
            checkGridHeight();
            $('.sidemenu a[data-value=' + sssas[1] + ']').click();

        } else {

            $(".projects").removeClass('projects').addClass('projects-grid');
            $(".projects-grid>li").removeAttr('style');
            checkGridHeight();
            $('.sidemenu a[data-value=' + sssas[1] + ']').click();
        }



    });

    $('.portfolio_sort .SortType').click(function () {
        var xhrs23 = $(this);

        var $careButonApasat2 = $(this).parent().find('.sort').attr('data-value');

        if ($careButonApasat2 == 'price') {

            if (portfolioPriceSort == 'asc') {
                portfolioPriceSortSet = false;
                portfolioPriceSort = 'desc';
                xhrs23.removeClass('desc').addClass('asc').attr('title', 'ASC');
            } else {
                portfolioPriceSortSet = true;
                portfolioPriceSort = 'asc';
                xhrs23.removeClass('asc').addClass('desc').attr('title', 'DESC');
            }

            xhrs23.parent().find('.sort').click();
        }
        if ($careButonApasat2 == 'title') {

            if (portfolioTitleSort == 'asc') {
                portfolioTitleSortSet = false;
                portfolioTitleSort = 'desc';
                xhrs23.removeClass('desc').addClass('asc').attr('title', 'ASC');
            } else {
                portfolioTitleSortSet = true;
                portfolioTitleSort = 'asc';
                xhrs23.removeClass('asc').addClass('desc').attr('title', 'DESC');
            }

            xhrs23.parent().find('.sort').click();
        }

        if ($careButonApasat2 == 'id') {

            if (portfolioIdSort == 'asc') {
                portfolioIdSortSet = false;
                portfolioIdSort = 'desc';
                xhrs23.removeClass('desc').addClass('asc').attr('title', 'ASC');
            } else {
                portfolioIdSortSet = true;
                portfolioIdSort = 'asc';
                xhrs23.removeClass('asc').addClass('desc').attr('title', 'DESC');
            }

            xhrs23.parent().find('.sort').click();
        }

    });

    /*bind radiobuttons in the form*/
    var $filterType = $('.portfolio_filter'),
        $filterSort = $('.portfolio_sort'),
        $filteredData, /*get the first collection*/
        $applications = $('.projects'),

        /*clone applications to get a second collection*/
        $data = $applications.clone();

    /*attempt to call Quicksand on every control cclick*/

    if ($applications) {
        $filterType.find("li>a").add($filterSort.find("li>.sort")).click(function (a) {
            $(this).parent().parent().find("li").removeClass("active");
            $(this).parent().addClass("active");
            if (!$.browser.opera) {
                var b = location.hash.split("="),
                    c = b[1].split("/");
                $.bbq.pushState({
                    p: c[0] + "/" + $filterType.find("li.active a").attr("data-value")
                })
            } else {
                var d = "opera"
            }
            if ($filterType.hasClass("clicked") || d == "opera") {
                $filterType.removeClass("clicked");
                if ($filterSort.find("li.active .sort").attr("data-value") == null) {
                    var e = $filteredData.sorted({
                        by: function (a) {
                            return $(a).attr("data-id")
                        }
                    })
                }
                if ($filterType.find("li.active a").attr("data-value") == "all") {
                    if ($data.children().length > 6) {
                        $(".projects-grid").addClass("smaller")
                    }
                    $filteredData = $data.children()
                } else {
                    $filteredData = $data.find("li." + $filterType.find("li.active a").attr("data-value"))
                }
            }
            if ($filterSort.find("li.active .sort").attr("data-value") == "price") {
                var e = $filteredData.sorted({
                    by: function (a) {
                        return parseFloat($(a).find(".price span").text())
                    },
                    reversed: portfolioPriceSortSet
                })
            }
            if ($filterSort.find("li.active .sort").attr("data-value") == "title") {
                var e = $filteredData.sorted({
                    by: function (a) {
                        return $(a).find("h3").text().toLowerCase()
                    },
                    reversed: portfolioTitleSortSet
                })
            }
            if ($filterSort.find("li.active .sort").attr("data-value") == "id") {
                var e = $filteredData.sorted({
                    by: function (a) {
                        return $(a).attr("data-id")
                    },
                    reversed: portfolioIdSortSet
                })
            }
            $applications.quicksand(e, {
                duration: 800,
                easing: "easeInOutQuad",
                useScaling: false,
                enhancement: function () {
                    Cufon.replace("#portfolio h3");
                    if ($("body").hasClass("light")) {
                        Cufon.replace(".subPages h3", {
                            textShadow: "1px 1px 1px rgba(255,255,255,.35)"
                        })
                    }
                    $pane.reinitialise();
                    checkGridHeight();
fancyBox_create();
                }
            });
            a.preventDefault()
        })
    }

    /*Sort Controls*/
    portfolioIdSort = "desc", portfolioTitleSort = "desc", portfolioPriceSort = "desc";
    $(".blog_sort .SortType").click(function () {
        var a = $(this);
        var b = $(this).parent().find(".sort").attr("data-value");
        if (b == "id") {
            if (blogIDSort == "asc") {
                blogIDSortSet = false;
                blogIDSort = "desc";
                a.removeClass("desc").addClass("asc").attr("title", "ASC")
            } else {
                blogIDSortSet = true;
                blogIDSort = "asc";
                a.removeClass("asc").addClass("desc").attr("title", "DESC")
            }
            a.parent().find(".sort").click()
        }
        if (b == "title") {
            if (blogTitleSort == "asc") {
                blogTitleSortSet = false;
                blogTitleSort = "desc";
                a.removeClass("desc").addClass("asc").attr("title", "ASC")
            } else {
                blogTitleSortSet = true;
                blogTitleSort = "asc";
                a.removeClass("asc").addClass("desc").attr("title", "DESC")
            }
            a.parent().find(".sort").click()
        }
        if (b == "comments") {
            if (blogCommentsSort == "asc") {
                blogCommentsSortSet = false;
                blogCommentsSort = "desc";
                a.removeClass("desc").addClass("asc").attr("title", "ASC")
            } else {
                blogCommentsSortSet = true;
                blogCommentsSort = "asc";
                a.removeClass("asc").addClass("desc").attr("title", "DESC")
            }
            a.parent().find(".sort").click()
        }
    });


    /* bind radiobuttons in the form*/
    var $filterType2 = $('.blog_filter'),
        $filterSort2 = $('.blog_sort'),
        $filteredData2, /* get the first collection*/
        $applications2 = $('.blog'),
        /*clone applications to get a second collection*/
        $data2 = $applications2.clone(); /* attempt to call Quicksand on every control cclick*/


    $filterType2.find("li>a").add($filterSort2.find(".sort")).click(function (a) {
        var b = $(this).parent().parent().attr("class");
        $(this).parent().parent().find("li.active").removeClass("active");
        $(this).parent().addClass("active");
        var c = location.hash.split("="),
            d = c[1].split("/");
        $.bbq.pushState({
            p: d[0] + "/" + $filterType2.find("li.active a").attr("data-value")
        });
        if ($filterType2.hasClass("clicked")) {
            $filterType2.removeClass("clicked");
            if ($filterType2.find("li.active a").attr("data-value") == "all") {
                $filteredData2 = $data2.children()
            } else {
                $filteredData2 = $data2.find("li." + $filterType2.find("li.active a").attr("data-value"))
            }
        }
        if ($filterSort2.find("li.active .sort").attr("data-value") == null) {
            var e = $filteredData2.sorted({
                by: function (a) {
                    return $(a).attr("data-id")
                }
            })
        }
        if ($filterSort2.find("li.active .sort").attr("data-value") == "id") {
            var e = $filteredData2.sorted({
                by: function (a) {
                    return $(a).attr("data-id")
                },
                reversed: blogIDSortSet
            })
        }
        if ($filterSort2.find("li.active .sort").attr("data-value") == "comments") {
            var e = $filteredData2.sorted({
                by: function (a) {
                    return parseFloat($(a).find("a.comments").text())
                },
                reversed: blogCommentsSortSet
            })
        }
        if ($filterSort2.find("li.active .sort").attr("data-value") == "title") {
            var e = $filteredData2.sorted({
                by: function (a) {
                    return $(a).find("h3").text().toLowerCase()
                },
                reversed: blogTitleSortSet
            })
        }
        $applications2.quicksand(e, {
            duration: 800,
            easing: "easeInOutSine",
            enhancement: function () {
                Cufon.replace("#blog h3");
                if ($("body").hasClass("light")) {
                    Cufon.replace(".subPages h3, dd, dt", {
                        textShadow: "1px 1px 1px rgba(255,255,255,.35)"
                    })
                }
                $pane2.reinitialise();
fancyBox_create();
                $("#search").val("");
                $("#searchCount").removeClass("none").hide()
            }
        });
        a.preventDefault()
    });
    blogIDSort = "desc", blogTitleSort = "desc", blogCommentsSort = "desc";


    /*Search*/

    function query(a) {
        if (val = this.val()) {
            return $(a + ':contains("' + val + '")')
        } else {
            return false
        }
    }
    var Search = function (a) {
            this.callbacks = {};
            a(this)
        };
    Search.prototype.all = function (a) {
        this.callbacks.all = a
    };
    Search.prototype.reset = function (a) {
        this.callbacks.reset = a
    };
    Search.prototype.empty = function (a) {
        this.callbacks.empty = a
    };
    Search.prototype.results = function (a) {
        this.callbacks.results = a
    };
    $.fn.search = function a(b, c) {
        function e() {
            if (result = query.call($(this), b)) {
                d.all && d.all.call(this, result);
                var a = result.size() > 0 ? "results" : "empty";
                return d[a] && d[a].call(this, result)
            } else {
                d.all && d.all.call(this, $(b));
                return d.reset && d.reset.call(this)
            }
        }
        var a = new Search(c);
        var d = a.callbacks;
        $(this).live("keypress", e);
        $(this).live("keydown", e);
        $(this).live("keyup", e);
        $(this).bind("blur", e)
    }

    $('#search').search('.blog>li', function (on) {
        on.all(function (results) {
            var size = results ? results.size() : 0
            $('#searchCount').text(size + ' results');

        });

        on.reset(function () {
            $('#searchCount').removeClass('none').hide();
            $('.blog>li').show();

        });

        on.empty(function () {
            $('#searchCount').addClass('none');
            $('.blog>li').hide();

        });

        on.results(function (results) {
            $('#searchCount').removeClass('none').show();
            $('.blog>li').hide();

            results.show();

        });
    });

    function addEvent(a, b, c) {
        if (a.addEventListener) {
            a.addEventListener(b, c, false)
        } else if (a.attachEvent) {
            a["e" + b + c] = c;
            a[b + c] = function () {
                a["e" + b + c](window.event)
            };
            a.attachEvent("on" + b, a[b + c])
        }
    }

    function dynamicLayout() {
        var a = getBrowserWidth(),
            b = getBrowserHeight();
if($("#logo-menu").hasClass("ah")){
        if (a > 1035) {
            if ($("body").hasClass("mini")) {
                $("body").removeClass("mini");
                $(".subPages>li").jScrollPane({
                    showArrows: false
                }).data("jsp").reinitialise()
            }
			var wwhere = (a - $(".page").width()) / 2;
            $("#pageSlider").attr("class") == "vertical" ? $("#pageSlider").removeAttr("style").css({
                "margin-left": wwhere
            }) : $(".page").removeAttr("style").css({
                "margin-left": wwhere
            });
		
		if(a > $logoMenuFooterCentered ){
			$('#logo-menu').css({ 'left': wwhere, "margin-left":15  });
            if(!$('#footer').hasClass("centered")) {$('#footer').addClass("centered");}

            
        }else{  
            $('#logo-menu').removeAttr("style");
            if($('#footer').hasClass("centered")){ $("#footer").removeClass("centered");}
          }
          
        }
        
        if (b > 675) {
            $("#pageSlider").attr("class") == "vertical" ? $(".page").removeAttr("style").css({
                "padding-top": (b - $(".page").height() - $("#footer[class=visible]").height()) / 2
            }) : $("#pageSlider").css({
                "margin-top": ((b - $("#pageSlider").height() - $("#footer[class=visible]").height()) / 2) - 10, "padding-top":0
            });
        } else {
            $("#pageSlider").css({
                "margin-top": "0px"
            });
            $(".page").css({
                "padding-top": "0px"
            })
        }
        
        if($("#footer").hasClass("centered")){
            if (b < 800) {
               
                if($('#pageSlider[class=vertical]')){  $("body").add($('#pageSlider[class=vertical]')).css({'min-height':700});}
                $("#pageSlider").attr("class") == "vertical" ? $(".page").removeAttr("style").css({
                    "padding-top": $("#logo-menu").height() + 25
                }) : $("#pageSlider").css({
                    "margin-top": $("#logo-menu").height() + 25, "padding-top":0
                });
            }
        }
        
        if (a < 1290) {
            var c;
            $("#pageSlider").attr("class") != "vertical" ? c = $(".page").css("margin-left") : c = $("#pageSlider").css("margin-left");
            $("#logo-menu").css({'top':'23px','margin-left': '18px','left': c});            
           if (b < 810) {
              $("#logo-menu").css({top: "23px","left": "18px",'margin-left':0});
            }
            if (a < 1260) {
               if (b < 800) {
                $("#logo-menu").css({'top':'23px','margin-left': '18px','left': c});
               
                if($('#pageSlider[class=vertical]')){  $("body").add($('#pageSlider[class=vertical]')).css({'min-height':700});}
                $("#pageSlider").attr("class") == "vertical" ? $(".page").removeAttr("style").css({
                    "padding-top": $("#logo-menu").height() + 23
                }) : $("#pageSlider").css({
                    "margin-top": $("#logo-menu").height() + 23, "padding-top":0
                })
            }
            }
            
            $("#footer").addClass('centered');
            
            if (a < 1035)  {
                $("#logo-menu").css({top: "23px","left": "18px",'margin-left':0});
                $(".page").add($("#logo-menu")).removeAttr("style");
                $("#pageSlider").attr("class") == "vertical" ? $(".page").removeAttr("style").css({
                    "padding-top": $("#logo-menu").height() + 25
                }) : $("#pageSlider").css({
                    "margin-top": $("#logo-menu").height() + 25, "padding-top":0
                });
                $("body").addClass("mini");

                $(".subPages>li").jScrollPane({
                    showArrows: false
                });
   	        var isiPad = navigator.userAgent.match(/iPad/i) != null;
                if(isiPad){
                
                   $(".page").css({"width":'1000px', "margin-left":-1 });
       
                   
                }
            }
        } else {
            if(a < $logoMenuFooterCentered){
            
            $("#logo-menu[style]").removeAttr("style");

            }
            
            if($("#pageSlider[class=vertical]")){$("#pageSlider[class=vertical]").add($('body')).css({ 'min-height':610 });}
               

        }
}
else{

                
            if(a>1035){
            if ($("body").hasClass("mini")) {
                $("body").removeClass("mini");
                $(".subPages>li").jScrollPane({
                    showArrows: false
                }).data("jsp").reinitialise()
            }
            var wwhere = (a - $(".page").width()) / 2;
            $("#pageSlider").attr("class") == "vertical" ? $("#pageSlider").removeAttr("style").css({
                "margin-left": wwhere
            }) : $(".page").removeAttr("style").css({
                "margin-left": wwhere
            });
            
            $("#logo-menu .arrow").css({"margin-left": wwhere});
            $(".footer_controls").css({"padding-right": wwhere - 10});

                        

                
            }else{
                $("#logo-menu .arrow").css({'margin-left':0});
                 $(".footer_controls").css({"padding-right": 10});
                $(".page").add($("#logo-menu")).removeAttr("style");
                $("#pageSlider").attr("class") == "vertical" ? $(".page").removeAttr("style").css({
                    "padding-top": $("#logo-menu").height() + 25
                }) : $("#pageSlider").css({
                    "margin-top": $("#logo-menu").height() + 25, "padding-top":0
                });
                $("body").addClass("mini");
                $(".subPages>li").jScrollPane({
                    showArrows: false
                });
    	        var isiPad = navigator.userAgent.match(/iPad/i) != null;
                if(isiPad){
                
                   $(".page").css({"width":'1000px', "margin-left":-1 });
            
                   
                }
   
                
            }
        if (b > 675) {
            var wwhere2 =((b - $(".page").height()) / 2) + 20
            $("#pageSlider").attr("class") == "vertical" ? $(".page").removeAttr("style").css({
                "padding-top": wwhere2
            }) : $("#pageSlider").css({
                "margin-top": wwhere2, "padding-top":0
            });
        } else {
            $("#pageSlider").css({
                "margin-top": "28px"
            });
            $(".page").css({
                "padding-top": "28px"
            })
        }
}


    }
if(!$("#logo-menu").hasClass("ah")){
    $(".footer_controls>li>a").click(function () {
        var a = $(this);
        $(".footer_controls div.visible").dequeue().animate({
            opacity: 0
        }, 200, "easeInOutQuad", function () {
            $(this).css({
                display: "none",
                top: 0
            }).removeClass("visible")
        });
        a.next("div").css({"display": "block", "height": $(".setting").height() }).dequeue().animate({
            opacity: 1,
            top: 60,
        }, 400, "easeInOutQuad").addClass("visible")
    });
}
else{
  $(".footer_controls>li>a").click(function () {
        var a = $(this);
        $(".footer_controls div.visible").dequeue().animate({
            opacity: 0
        }, 200, "easeInOutQuad", function () {
            $(this).css({
                display: "none",
                bottom: 0
            }).removeClass("visible")
        });
        a.next("div").css("display", "block").dequeue().animate({
            opacity: 1,
            bottom: 50
        }, 400, "easeInOutQuad").addClass("visible")
    });
}
    
    $(".sprite-hide_tool").click(function () {
        $("#showTool").animate({
            bottom: 45
        });
        $("#footer").animate({
            bottom: -50
        }).removeClass("visible");
        dynamicLayout()
    });
    $("#showTool").click(function () {
        $("#showTool").animate({
            bottom: -50
        });
        $("#footer").animate({
            bottom: 0
        }).addClass("visible");
        dynamicLayout()
    });
    $(".footer_controls>li>div>a.close").click(function () {
        
        if($("#logo-menu").hasClass("ah")){
        $(this).parent().animate({
            opacity: 0,
            bottom: 0
        }, 300, "easeInOutQuad", function () {
            $(this).css({
                display: "none"
            })
        }).removeClass("visible");
        }
        else{
                $(this).parent().animate({
            opacity: 0,
            top: 0
        }, 300, "easeInOutQuad", function () {
            $(this).css({
                display: "none"
            })
        }).removeClass("visible");
        }
    });
    
    
    $("#color_chooser>li").click(function () {
        $("#color_chooser>li").removeClass("active");
        $("body").removeClass("blue").removeClass("gray").addClass($(this).attr("class"));
        $.cookie("LogoButtons_settings", $(this).attr("class"), {
            expires: 90
        });
        $(this).addClass("active")
    });
    $("#background_chooser>li").click(function () {
        $("#background_chooser>li").removeClass("active");
        $.cookie("Background_settings", $(this).find("img").attr("alt"), {
            expires: 90
        });
        $(this).addClass("active");
        $("body").removeClass("Background1").removeClass("Background2").removeClass("Background3").removeClass("Background4").addClass($(this).find("img").attr("alt"))
    });
    $("input[name=pageSliderVariant]").click(function () {

        $.cookie("PageSlider_settings", $(this).attr("value"), {
            expires: 90
        });
        location.reload();
    });
    $("input[name=pageStyleVariant]").click(function () {
        if ($(this).attr("value") == "light") {
            $("body").removeClass("light").addClass($(this).attr("value"));
            Cufon.replace("h3, h2, dd, dt, .Tbutton", {
                textShadow: "1px 1px 1px rgba(255,255,255,.35)"
            });
            Cufon.replace(".footer_controls>li>div h3,.footer_controls>li>div b", {
                textShadow: "1px 1px 1px rgba(255,255,255,.25)"
            });
            
             $(".footer_controls .arrow").css({'top':-25, 'right':'45px', 'background':'url(images/footer_arrow-light_up.png) 0 0 no-repeat' });
    
        }
        if ($(this).attr("value") == "dark") {
            $("body").removeClass("light");
            Cufon.replace("h3, h2,.footer_controls>li>div b, dd, dt, .Tbutton");
            Cufon.replace(".ribbon h2", {
                textShadow: "1px 1px 1px rgba(255,255,255,.25)"
            });
             $(".footer_controls .arrow").css({'top':-25, 'right':'45px', 'background':'url(images/footer_arrow_up.png) 0 0 no-repeat' });
        }
        $.cookie("PageStyle_settings", $(this).attr("value"), {
            expires: 90
        });
        
       

        
    });
    $("input[name=menuStyleVariant]").click(function () {

        $.cookie("MenuStyle_settings", $(this).attr("value"), {
            expires: 90
        });
        location.reload();
    });
    
    addEvent(window, "load", dynamicLayout);
    addEvent(window, "resize", dynamicLayout);

    /*End of Document ready*/
});



function getBrowserHeight() {
    if (window.innerHeight) {
        return window.innerHeight
    } else if (document.documentElement && document.documentElement.clientHeight != 0) {
        return document.documentElement.clientHeight
    } else if (document.body) {
        return document.body.clientHeight
    }
    return 0
}
function getBrowserWidth() {
    if (window.innerWidth) {
        return window.innerWidth
    } else if (document.documentElement && document.documentElement.clientWidth != 0) {
        return document.documentElement.clientWidth
    } else if (document.body) {
        return document.body.clientWidth
    }
    return 0
}(function (a) {
    a.fn.sorted = function (b) {
        var c = {
            reversed: false,
            by: function (a) {
                return a.text()
            }
        };
        a.extend(c, b);
        $data = a(this);
        arr = $data.get();
        arr.sort(function (b, d) {
            var e = c.by(a(b));
            var f = c.by(a(d));
            if (c.reversed) {
                return e < f ? 1 : e > f ? -1 : 0
            } else {
                return e < f ? -1 : e > f ? 1 : 0
            }
        });
        return a(arr)
    }
})(jQuery);


function goToPage(hrefValue0, hrefValue1, animation_speed) {
    $('#pageSlider').scrollTo(hrefValue0, animation_speed, {
        easing: $pageSlider_easing,
        onAfter: function () {
            $('#pageSlider li').removeClass('visible');
            $('#pageSlider').find('#' + hrefValue0).addClass('visible');
            if (hrefValue1) goToSubPage(hrefValue0, hrefValue1, (animation_speed != 0) ? $subPageSlider_speed : 0);

        }
    });

    if ($("#" + hrefValue0 + " #slider").length == 1) {
        $('#slider').data('nivoslider').start();

    } else {
        $('#slider').data('nivoslider').stop();
    }

}

function goToSubPage(hrefValue0, hrefValue1, animation_speed2) {
    if ($(hrefValue0 + ' .subPages').find('li#' + hrefValue1).length != 0) {
        $(hrefValue0 + " .sidemenu li").removeClass();
        $(hrefValue0 + " .sidemenu").find('a[href=#' + hrefValue1 + ']').parent().addClass('active');
        $(hrefValue0 + ' .subPages').scrollTo('#' + hrefValue1, animation_speed2, {
            easing: $subPageSlider_easing
        });

    }
    if ($(hrefValue0 + ' .portfolio_filter').find('a[data-value=' + hrefValue1 + ']').length != 0) {
        $('.portfolio_filter').addClass('clicked');
        $(hrefValue0 + ' .portfolio_filter').find('a[data-value=' + hrefValue1 + ']').trigger('click');
    }
    if ($(hrefValue0 + ' .blog_filter').find('a[data-value=' + hrefValue1 + ']').length != 0) {
        $('.blog_filter').addClass('clicked');
        $(hrefValue0 + ' .blog_filter').find('a[data-value=' + hrefValue1 + ']').trigger('click');
    }
}