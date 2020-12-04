// setTimeout(() => {

// jQuery(document).ready(function() {
// 	if(jQuery(window).width() < 768) {
// 		jQuery('.video-bg').remove();
// 	}
// })


// Select language
// jQuery('.selectpickerLanguage').selectpicker();


// ===== Scroll to Top ==== 
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 150) {
        jQuery('#return-to-top').fadeIn(700);
    } else {
        jQuery('#return-to-top').fadeOut(500);
    }

    if (!(jQuery('#booking-mask-wrapper').hasClass('no-slide'))) {
        if (jQuery(this).scrollTop() > 150) {
            jQuery('#booking-mask-wrapper').addClass('hide-check-date');
            // jQuery('body').addClass('hide-info');
        } else {
            jQuery('#booking-mask-wrapper').removeClass('hide-check-date');
            // jQuery('body').removeClass('hide-info');
        }
    }
});
jQuery('#return-to-top').click(function() {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 1000);
});

// Check Date 
jQuery(function($) {
    $.datepicker.regional['en-GB'] = {
        closeText: 'Done',
        prevText: 'Prev',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        weekHeader: 'Wk',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['en-GB']);
});

jQuery(document).on("ready", function() {

    if ($('#booking-mask-wrapper').hasClass("no-slide")) {
        $('#booking-mask-wrapper').addClass('hide-check-date');
    }
    /*Function to scroll the page to the content section, when arrow is clicked on home page main visual*/
    jQuery('#home_scroll_arrow').click(function() {
        $('html, body').animate({ scrollTop: ($('#main').offset().top - 70) }, 1000, 'easeInOutQuart');
    });

    /*Function of booking mask functionality*/
    jQuery('#booking-mask-wrapper .show-calendar').click(function() {
        if ($('#booking-mask-wrapper').hasClass("closed")) {
            $('#booking-mask-wrapper').toggleClass('open closed');
            $('html').addClass('overflow-hidden');
            $('#booking-mask-wrapper').removeClass('hide-check-date');
            $('#booking-mask-wrapper #date-in').parent().addClass('active');
            $("#booking-mask-wrapper #booking-content-area").slideToggle("500");
        }
    });
    jQuery('#booking-mask-wrapper #date-in').click(function() {
        if ($('#booking-mask-wrapper').hasClass("closed")) {
            $('#booking-mask-wrapper').toggleClass('open closed');
            $('html').addClass('overflow-hidden');
            $('#booking-mask-wrapper #date-in').parent().addClass('active');
            $("#booking-mask-wrapper #booking-content-area").slideToggle("500");
        }
    });
    jQuery('#booking-mask-wrapper #date-out').click(function() {
        if ((jQuery("#date-in").val() != "") && (jQuery('#booking-mask-wrapper').hasClass("closed"))) {
            jQuery('#booking-mask-wrapper').toggleClass('open closed');
            $('html').addClass('overflow-hidden');
            jQuery('#booking-mask-wrapper #date-out').parent().addClass('active');
            jQuery("#booking-mask-wrapper #booking-content-area").slideToggle("500");
        }
    });
    jQuery('#booking-close').click(function() {
        if ($('#booking-mask-wrapper').hasClass("no-slide")) {
            $('#booking-mask-wrapper').addClass('hide-check-date');
        }

        if ($('#date-out').hasClass("active") && ($('.dateout').hasClass("active")) == false) {
            jQuery("#booking-mask-wrapper").addClass("show-check");
        }

        if (($('.dateout').hasClass("active")) || ($('.datein ').hasClass("active"))) {
            jQuery("#booking-mask-wrapper").removeClass("show-check");
        }

        if ($('#booking-mask-wrapper').hasClass("open")) {
            $('#booking-mask-wrapper').toggleClass('open closed');
            $('html').removeClass('overflow-hidden');
            $('#booking-mask-wrapper #date-in, #booking-mask-wrapper #date-out').parent().removeClass('active');
            $("#booking-mask-wrapper #booking-content-area").slideToggle("500");
        }
    });

    /** SCROLL **/
    var bk = jQuery('.booking'),
        hdr = jQuery('.header'),
        bkBtn = 0,
        bkWpr = jQuery('.booking-wpr').outerHeight(),
        hdrScr = function() {
            var hH = hdr.outerHeight(),
                winPos = jQuery(window).scrollTop() + 110,
                bkTop = (bk.is('.open')) ? hH - (bkWpr + bkBtn) : hH - bkBtn;

            (winPos >= bkTop) ? hdr.addClass('fixed'): hdr.removeClass('fixed');
            /*((winPos - 70) >= bkTop) ? bk.addClass('fixed-bk') : bk.removeClass('fixed-bk');*/
        };

    /*Scroll the booking mask stiky*/
    // jQuery(window).scroll(function(){
    // 	var scrollcontrol = jQuery(window).scrollTop();
    // 	if(scrollcontrol>=110){
    // 		jQuery('.booking').addClass('fixed-bk');
    // 	}
    // 	else{
    // 		jQuery('.booking').removeClass('fixed-bk');
    // 	}
    // });
    /*Scroll the booking mask*/


    jQuery('.booking-button').on('click', function() {
        mqHdrScr();
    });
});

jQuery(document).ready(function() {
    var newDate = new Date();

    var datestring = ("0" + newDate.getDate()).slice(-2) + "-" + ("0" + (newDate.getMonth() + 1)).slice(-2) + "-" + newDate.getFullYear();

    jQuery("#date-in").attr('value', datestring);
    jQuery("#date-out").attr('value', datestring);

    /** Booking mask functionality **/
    if (jQuery().datepicker) { // validation error
        jQuery(".date-helper").remove();
        jQuery('.dateInpicker').attr('data-altfield', '#date-in');
        jQuery('.dateOutpicker').attr('data-altfield', '#date-out');
    }

    function setDate(val) {
        if (val) {
            var date = jQuery.datepicker.parseDate("dd-mm-yy", val);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var usDate = day + '-' + month + '-' + year;

            date = jQuery.datepicker.parseDate("dd-mm-yy", usDate);
            return date;
        }
        return false;
    }

    var dp1 = 0,
        dp2 = 0,
        bookingMask = function(ac) {
            $ac = jQuery(ac);
            $ac.datepicker({
                firstDay: 7,
                dateFormat: 'dd-mm-yy',
                minDate: new Date(),
                beforeShowDay: function(date) {
                    var highliterCls = {
                            def: 'ini-highlight',
                            active: 'dp-highlight'
                        },
                        classFlag;
                    var date1 = setDate(jQuery("#date-in").val());
                    var date2 = setDate(jQuery("#date-out").val());
                    if (date1) {
                        if (date.getTime() == date1.getTime() || (date2 && date >= date1 && date <= date2 && !(date < date2))) {
                            classFlag = highliterCls.active;
                        } else if (date2 && date >= date1 && date <= date2) {
                            classFlag = highliterCls.def;
                        } else {
                            classFlag = "";
                        }
                    }
                    return [true, classFlag];
                },
                onSelect: function(dateText, inst) {

                    var date1 = setDate(jQuery("#date-in").val());
                    var date2 = setDate(jQuery("#date-out").val());

                    var date = jQuery.datepicker.parseDate("dd-mm-yy", dateText);
                    var day = date.getDate();
                    if (day < 10) {
                        var day2 = '0' + day;
                    } else {
                        var day2 = day;
                    }
                    var month = date.getMonth() + 1;
                    if (month < 10) {
                        var month2 = '0' + month;
                    } else {
                        var month2 = month;
                    }

                    var year = date.getFullYear();
                    var usDate = day + '-' + month + '-' + year;
                    var usDate2 = day2 + '' + month2 + '' + year;

                    if (dp1 == 0) {
                        jQuery("#date-in").val(dateText).parent().removeClass('active');
                        jQuery("#us-date-in").val(usDate);
                        jQuery("#bookingdate").val(usDate2);
                        jQuery(this).datepicker("option", "minDate", dateText);

                        // jQuery(".datein label").hide();

                        setTimeout(function() {
                            jQuery("#date-out").val("").parent().addClass("active");
                            jQuery("#us-date-out").val('');
                            dp1 = 1;
                            dp2 = 0;
                        }, 100);
                    } else if (dp1 == 1 && dp2 == 0) {
                        jQuery("#date-out").val(dateText).addClass("active");
                        jQuery("#date-in").parent().removeClass("active");
                        jQuery("#us-date-out").val(usDate);
                        jQuery(this).datepicker("option", "minDate", "today");
                        date2 = jQuery("#date-out").val(dateText);
                        // jQuery(".dateout label").hide();

                        setTimeout(function() {
                            dp1 = 0;
                            dp2 = 1;
                        }, 100);
                    }
                    jQuery("#date-out").parent().removeClass("active");
                },
                numberOfMonths: 1
            });
        }('#availability-checker #booking-content-area .calendardate');
    /** End Booking mask functionality **/

    // jQuery("#booking-form").submit(function (e) {
    // 	if (jQuery('#availability-checker #date-in').val() == "") {
    // 		var bookingMaskAlert = "Please select Check In!";
    // 		alert(bookingMaskAlert);
    // 		return false;
    // 	}
    // 	else {
    // 		if (jQuery('#availability-checker #date-out').val() == "") {
    // 			var bookingMaskAlert = "Please select Check Out!";
    // 			alert(bookingMaskAlert);
    // 			return false;
    // 		}
    // 		else {
    // 			if (jQuery('#availability-checker #adults').val() == "ADULTS") {
    // 				var bookingMaskAlert = "Please select Adults!";
    // 				alert(bookingMaskAlert);
    // 				return false;
    // 			}
    // 			else {
    // 				if (jQuery('#availability-checker #children').val() == "CHILDREN") {
    // 					var bookingMaskAlert = "Please select Children!";
    // 					alert(bookingMaskAlert);
    // 					return false;
    // 				}
    // 			}
    // 		}
    // 	}

    // 	if (jQuery('#availability-checker #date-in').val() != "" && jQuery('#availability-checker #date-out').val() != "") {
    // 		var bookingDateIn = jQuery('#availability-checker #date-in').val().split("/")
    // 		var bookingDateOut = jQuery('#availability-checker #date-out').val().split("/")

    // 		var bookDate = new Date(bookingDateIn[2], bookingDateIn[0] - 1, bookingDateIn[1]);
    // 		var bookDateOut = new Date(bookingDateOut[2], bookingDateOut[0] - 1, bookingDateOut[1]);

    // 		var dif = new Date(bookDateOut - bookDate);
    // 		var days = Math.floor(dif / 1000 / 60 / 60 / 24);

    // 		jQuery('#nightscount').val(days);
    // 	}
    // });
});

// JS all page
var revapi;

jQuery(document).ready(function() {

    if ((jQuery('#date-checkin').length === 1) && (jQuery('#date-checkout').length === 1)) {
        function eventCheckIn(event) {
            var target = jQuery(event.target);
            if (target.is(".open-checkIn, .open-checkIn *")) {
                event.stopPropagation();
                jQuery('#date-checkin').data('dateRangePicker').open();
            } else {
                event.stopPropagation();
                jQuery('#date-checkin').data('dateRangePicker').close();
            }
        }

        function eventCheckOut(event) {
            var target = jQuery(event.target);
            if (target.is(".open-checkOut, .open-checkOut *")) {
                event.stopPropagation();
                jQuery('#date-checkout').data('dateRangePicker').open();
            } else {
                event.stopPropagation();
                jQuery('#date-checkout').data('dateRangePicker').close();
            }
        }
        jQuery('#date-checkin').dateRangePicker({
            startDate: new Date(),
            autoClose: true,
            singleDate: true,
            showShortcuts: false,
            singleMonth: true,
            selectForward: true,
        });

        jQuery('#date-checkout').dateRangePicker({
            startDate: new Date(),
            autoClose: true,
            singleDate: true,
            showShortcuts: false,
            singleMonth: true,
            selectForward: true,
        });

        $(document).ready(function() {
            jQuery('#booking-form-single').click(eventCheckIn);
            jQuery('#booking-form-single').click(eventCheckOut);
            $("#booking-form-single").off("click", ".open-checkIn", '.open-checkIn');

            $('.fancybox-thumbs').fancybox({
                prevEffect: 'none',
                nextEffect: 'none',

                closeBtn: true,
                arrows: true,
                nextClick: true,

                helpers: {
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                }
            });
        });
    }

    if ((jQuery('.slides').length === 1)) {
        jQuery('.slides').slick({
            dots: false,
            speed: 500,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear'
        });
    }

    // if ((jQuery('.tp-banner').length === 1)) {
    // 	revapi = jQuery('.tp-banner').revolution(
    // 		{
    // 			delay: 5000,
    // 			startwidth: 1920,
    // 			startheight: 850,
    // 			// navigationArrows: "none",
    // 			// navigationType:"none",
    // 			hideThumbs: 10,
    // 			fullScreen: "on",
    // 			fullScreenAlignForce: "on"
    // 		});
    // }

    if ((jQuery('#bannerFullscreen').length === 1)) {
        jQuery('#bannerFullscreen').modal('show');
    }

    if ((jQuery('.banner-mini').length === 1)) {
        jQuery('.close-banner').click(function() {
            if ($(this).hasClass('closer')) {
                jQuery('.banner-mini a').addClass('gone');
                $(this).removeClass('closer').html($(this).data('open'));
            } else {
                jQuery('.banner-mini a').removeClass('gone');
                $(this).addClass('closer').html($(this).data('close'));
            }

        });
    }

    if ((jQuery('.navigation-row').length === 1)) {
        jQuery('.fancybox-thumbs-1').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        jQuery('.fancybox-thumbs-2').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        jQuery('.fancybox-thumbs-3').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        jQuery('.fancybox-thumbs-4').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        jQuery('.fancybox-thumbs-5').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        jQuery('.fancybox-thumbs-6').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        jQuery('.fancybox-thumbs-7').fancybox({
            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: true,
            arrows: true,
            nextClick: true,

            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });
    }
});


// dropdown collapse popup close when click outsite
$(document).ready(function() {
    closeCollapsePopupWhenClickOutside('popupQuantity1');
})

function closeCollapsePopupWhenClickOutside(eleIdName) {
    if (document.getElementById(eleIdName) !== null) {
        // var specifiedElement = document.etElementById('popupQuantity1');
        var specifiedElement = document.getElementById(eleIdName);
        //I'm using "click" but it works with any event
        document.addEventListener('click', function(event) {
            var isClickInside = specifiedElement.contains(event.target);
            if (!isClickInside) {
                if ($('#' + eleIdName + '.in').length) {
                    $('#' + eleIdName).removeClass('in');
                }
            }
        });
    }
}

function customInputNumber() {
    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.btn-plus'),
            btnDown = spinner.find('.btn-minus'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // HTML:
    // <div class="quantity">
    //     <button class="btn-minus">-</button>
    //     <input type="number" class="inp-quantity" value="3" min="1" readonly="">
    //     <button class="btn-plus">+</button>
    // </div>
    // CSS:
}
$(document).ready(function() {
    // reset quantity
    customInputNumber();
    var arrQuantityInfo = ['quantity1', 'quantity2', 'quantity3'];
    $('.popup-quantity .quantity button').click(function() {
        for (var i = 0; i < arrQuantityInfo.length; i++) {
            console.log();
            if ($(this).parents('.item').hasClass(arrQuantityInfo[i])) {
                $(this).parents('.booking-info').find('.info .' + arrQuantityInfo[i]).text(parseInt($(this).parents('.quantity').find('.inp-quantity').val()));
            }
        }
    })
});

//start datepicker
jQuery(document).ready(function() {

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var today = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();
    var tomorrow = ((day + 1) < 10 ? '0' : '') + (day + 1) + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();

    $('.check-in').val(today);
    $('.check-out').val(tomorrow);

    // https://longbill.github.io/jquery-date-range-picker/

    function activeDaterangepickermaster(towInput, checkin, checkout) {
        towInput.dateRangePicker({
            autoClose: true,
            separator: ' to ',
            format: 'DD/MM/YYYY',
            selectForward: true,
            startDate: moment().endOf('day').format('DD/MM/YYYY'),
            getValue: function() {
                if (checkin.val() && checkout.val())
                    return checkin.val() + ' to ' + checkout.val();
                else
                    return '';
            },
            setValue: function(s, s1, s2) {
                checkin.val(s1);
                checkout.val(s2);
            }
        });

        // moment.locale(); 
        // if($('.date-picker-wrapper table.month2').length){
        //     $('.date-picker-wrapper table.month2 tbody td div').addClass('date-of-month-2');
        // }

        checkout.click(function() {
            towInput.data('dateRangePicker').open();

            $('.date-picker-wrapper .day.toMonth.valid').click(function() {
                var endDate = moment(parseInt($(this).attr('time'))).format('DD/MM/YYYY');
                towInput.data('dateRangePicker').setDateRange(checkin.val(), endDate, true);
                towInput.data('dateRangePicker').close();
            });
        });
    }
    // activeDaterangepickermaster($('#two-input'), $('#two-input .check-in'), $('#two-input .check-out'));

    if ($('#two-input').length) {
        $('#two-input').dateRangePicker({
            autoClose: true,
            separator: ' to ',
            format: 'DD/MM/YYYY',
            selectForward: true,
            startDate: moment().endOf('day').format('DD/MM/YYYY'),
            getValue: function() {
                if ($('#two-input .check-in').val() && $('#two-input .check-out').val())
                    return $('#two-input .check-in').val() + ' to ' + $('#two-input .check-out').val();
                else
                    return '';
            },
            setValue: function(s, s1, s2) {
                $('#two-input .check-in').val(s1);
                $('#two-input .check-out').val(s2);
            }
        });
        $('#two-input .check-out').click(function() {
            $('#two-input').data('dateRangePicker').open();

            $('.date-picker-wrapper .day.toMonth.valid').click(function() {
                var endDate = moment(parseInt($(this).attr('time'))).format('DD/MM/YYYY');
                $('#two-input').data('dateRangePicker').setDateRange($('#two-input .check-in').val(), endDate, true);
                $('#two-input').data('dateRangePicker').close();
            });
        });
    }


    // $('#two-input2').dateRangePicker({
    //     autoClose:true,
    //     separator : ' to ',
    //     format:'DD/MM/YYYY',
    //     selectForward: true,
    //     startDate: moment().endOf('day').format('DD/MM/YYYY'),
    //     getValue: function()
    //     {
    //         if ($('#two-input2 .check-in').val() && $('#two-input2 .check-out').val() )
    //             return $('#two-input2 .check-in').val() + ' to ' + $('#two-input2 .check-out').val();
    //         else
    //             return '';
    //     },
    //     setValue: function(s,s1,s2)
    //     {
    //         $('#two-input2 .check-in').val(s1);
    //         $('#two-input2 .check-out').val(s2);
    //     }
    // });
    // $('#two-input2 .check-out').click(function(){
    //     $('#two-input2').data('dateRangePicker').open();

    //     $('.date-picker-wrapper .day.toMonth.valid').click(function(){
    //         var endDate = moment(parseInt($(this).attr('time'))).format('DD/MM/YYYY');
    //         $('#two-input2').data('dateRangePicker').setDateRange($('#two-input2 .check-in').val(), endDate, true);
    //         $('#two-input2').data('dateRangePicker').close();
    //     });
    // });

    if ($('#two-input3').length) {
        $('#two-input3').dateRangePicker({
            singleMonth: true,
            showShortcuts: false,
            showTopbar: false,

            autoClose: true,
            separator: ' to ',
            format: 'DD/MM/YYYY',
            selectForward: true,
            startDate: moment().endOf('day').format('DD/MM/YYYY'),
            getValue: function() {
                if ($('#two-input3 .check-in').val() && $('#two-input3 .check-out').val())
                    return $('#two-input3 .check-in').val() + ' to ' + $('#two-input3 .check-out').val();
                else
                    return '';
            },
            setValue: function(s, s1, s2) {
                $('#two-input3 .check-in').val(s1);
                $('#two-input3 .check-out').val(s2);
            }
        });
        $('#two-input3 .check-out').click(function() {
            $('#two-input3').data('dateRangePicker').open();

            $('.date-picker-wrapper .day.toMonth.valid').click(function() {
                var endDate = moment(parseInt($(this).attr('time'))).format('DD/MM/YYYY');
                $('#two-input3').data('dateRangePicker').setDateRange($('#two-input3 .check-in').val(), endDate, true);
                $('#two-input3').data('dateRangePicker').close();
            });
        });
    }


    // $('#two-input4').dateRangePicker({
    //     singleMonth: true,
    //     showShortcuts: false,
    //     showTopbar: false,

    //     autoClose:true,
    //     separator : ' to ',
    //     format:'DD/MM/YYYY',
    //     selectForward: true,
    //     startDate: moment().endOf('day').format('DD/MM/YYYY'),
    //     getValue: function()
    //     {
    //         if ($('#two-input4 .check-in').val() && $('#two-input4 .check-out').val() )
    //             return $('#two-input2 .check-in').val() + ' to ' + $('#two-input4 .check-out').val();
    //         else
    //             return '';
    //     },
    //     setValue: function(s,s1,s2)
    //     {
    //         $('#two-input4 .check-in').val(s1);
    //         $('#two-input4 .check-out').val(s2);
    //     }
    // });

    // moment.locale(); 
    // if($('.date-picker-wrapper table.month2').length){
    //     $('.date-picker-wrapper table.month2 tbody td div').addClass('date-of-month-2');
    // }

    // $('#two-input4 .check-out').click(function(){
    //     $('#two-input4').data('dateRangePicker').open();

    //     $('.date-picker-wrapper .day.toMonth.valid').click(function(){
    //         var endDate = moment(parseInt($(this).attr('time'))).format('DD/MM/YYYY');
    //         $('#two-input4').data('dateRangePicker').setDateRange($('#two-input4 .check-in').val(), endDate, true);
    //         $('#two-input4').data('dateRangePicker').close();
    //     });
    // });

    if ($('.dates').length) {
        moment.locale();
    }
});


// Active Submenu
jQuery(document).ready(function() {
    var $window = jQuery(window);

    if ((jQuery('#nav-desktop .submenu > li').hasClass('active')) || (jQuery('#nav-mobile .submenu > li').hasClass('active'))) {
        jQuery(".submenu > li.active").parent('ul.submenu').closest("li").addClass("current");
    }

    jQuery('.specials-mobile').click(function() {
        jQuery('body').addClass('show-list-specials')
    })

    jQuery('.close-specials-mobile').click(function() {
        jQuery('body').removeClass('show-list-specials')
    })

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 991) {
            jQuery(".mouseover-img").mouseover(function() {
                var getLink = jQuery(this).attr('img-full');
                jQuery('.mobile-specials-news').css('opacity', '0.2');
                jQuery(this).parents('.wrapper-room-home').append(
                    '<div class="show-img-hover">' +
                    '<img src="' + getLink + '">' +
                    '</div>'
                )
                if (jQuery(this).parents('.wrapper-room-home').find('.show-img-hover').length == 2) {
                    jQuery(this).parents('.wrapper-room-home').find('.show-img-hover:last-child').remove();
                }
            }).mouseout(function() {
                jQuery('.show-img-hover').remove();
                jQuery('.mobile-specials-news').css('opacity', '1');
            });
        } else {
            jQuery(".mouseover-img").mouseover(function(event) {
                jQuery('.show-img-hover').remove();
            }).mouseout(function(event) {
                jQuery('.show-img-hover').remove();
            });
        }
    }
    checkWidth();
    jQuery(window).resize(function() {
        checkWidth();
    });
});

jQuery(document).ready(function() {
    // set img height
    function setEachHeightFromWidth(wrapImg, x, y) {
        if (wrapImg.length) {
            setTimeout(function() {
                wrapImg.each(function() {
                    var heightItem = $(this).width() / x * y;
                    $(this).attr('style', 'height:' + heightItem + 'px;');
                    $(this).find('img').attr('style', 'min-height:' + heightItem + 'px;max-height:' + heightItem + 'px;');
                });
            }, 500);
        }
    }

    function activeSetEachHeightFromWidth() {
        setEachHeightFromWidth($('.introduce .multicol-image'), 3, 2);
    }
    activeSetEachHeightFromWidth();
    jQuery(window).resize(function() {
        activeSetEachHeightFromWidth();
    });

    function setAllHeightFromWidth(wrapImg, x, y) {
        if (wrapImg.length) {
            setTimeout(function() {
                var heightItem = wrapImg.width() / x * y;
                wrapImg.height(heightItem);
                wrapImg.find('img').attr('style', 'min-height:' + heightItem + 'px;max-height:' + heightItem + 'px;' + 'object-fit: cover;');
            }, 500);
        }
    }

    // function activeSetAllHeightFromWidth(){
    // 	setAllHeightFromWidth($('.page-detail .slider-nav-for .slider-for .wrap-img'), 3, 2);
    // 	setAllHeightFromWidth($('.page-detail .slider-nav-for .slider-nav .wrap-img'), 3, 2);
    // 	setAllHeightFromWidth($('.page-detail .slider .wrap-img'), 3, 2);
    // 	setAllHeightFromWidth($('.sec-promotions .slider .wrap-img'), 3, 2);
    // 	setAllHeightFromWidth($('.sec-other .slider .wrap-img'), 3, 2);

    // 	if($(window).width() > 575) {
    // 		setAllHeightFromWidth($('.sec-gallery .tab-content .wrap-img'), 3, 2);
    // 	};

    // 	if($(window).width() < 768) {
    // 		setAllHeightFromWidth($('.show-room-home .show-img .showing-img'), 3, 2);
    // 		setAllHeightFromWidth($('.show-room-home .show-img .mouseover-img'), 3, 2);
    // 	}
    // }

    // activeSetAllHeightFromWidth();
    // jQuery(window).resize(function() {
    // 	activeSetAllHeightFromWidth();
    // });

    //set Gallery light box
    function setGalleryLightBox() {
        if ($('.show-galery-id').length) {
            $('.show-galery-id').each(function(index) {
                $(this).attr('id', 'show-gallery-' + index);
                if (jQuery('#show-gallery-' + index).length && window.lightGallery) lightGallery(document.getElementById('show-gallery-' + index));
            });
        }
    }

    setGalleryLightBox();

    // slider
    var prevArrow = '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>';
    var nextArrow = '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>';
    // slider home
    if ($('.slider-home').length === 1) {
        $('.slider-home .slider').slick({
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            // prevArrow: $('.slick-control .btn-prev'),
            // nextArrow: $('.slick-control .btn-next'),
            speed: 700,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            pauseOnHover: false,
        });
    }

    // rooms slider nav for
    if ($('.sec-room .slider-nav-for').length) {
        $(".sec-room .slider-nav-for").each(function(index) {
            $(this).attr('id', 'slider' + index);
            $(this).find('.slider-for').slick({
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                arrows: true,
                asNavFor: $(this).find('.slider-nav'),
            });

            $(this).find('.slider-nav').slick({
                arrows: false,
                asNavFor: $(this).find('.slider-for'),
                slidesToShow: 3,
                focusOnSelect: true,
            });
        });
    }

    // slider promo
    if ((jQuery('.sec-promo .slider').length)) {
        jQuery('.sec-promo .slider').slick({
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 1000,
            autoplay: true,
            slidesToShow: 1,
        });
    }
    if ((jQuery('.sec-promo .item .slider-img').length)) {
        jQuery('.sec-promo .item .slider-img').slick({
            dots: true,
            arrows: false,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 700,
            autoplay: true,
            slidesToShow: 1,
        });
        $('.sec-promo .item .slider-img').each(function() {
            if ($(this).find('.slick-slide').length === 1) {
                $(this).find('.slick-dots').addClass('d-none');
            }
        })
    }

    // slider services
    if ((jQuery('.service .service-list.slider').length)) {
        jQuery('.service .service-list.slider').slick({
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 1000,
            autoplay: true,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        });
    }

    // slider news
    if ((jQuery('.news .news-list.slider').length)) {
        jQuery('.news .news-list.slider').slick({
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 1000,
            autoplay: true,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        });
    }

    // slider testi
    if ((jQuery('.testi.slider').length)) {
        jQuery('.testi.slider').slick({
            dots: true,
            arrows: false,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 700,
            autoplay: true,
            slidesToShow: 1,
        });
    }
    // slider InfoDetail
    if ((jQuery('.sliderService').length)) {
        jQuery('.sliderService').slick({
            dots: true,
            arrows: false,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 700,
            autoplay: true,
            slidesToShow: 1,
        });
    }
    // -------------------------------------------------
    // page detail slider
    if ($('.page-detail .top-content .slider').length) {
        $('.page-detail .top-content .slider').slick({
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            arrows: true,
            speed: 500,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 1000,
            cssEase: 'linear',
        });
    }

    // slider other slider
    if ((jQuery('.sec-other .slider-other').length)) {
        jQuery('.sec-other .slider-other').slick({
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 1000,
            autoplay: true,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        });
    }

    // slider other item img
    if (jQuery('.sec-other .item .slider').length) {
        jQuery('.sec-other .item .slider').slick({
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            arrows: true,
            speed: 500,
            fade: true,
            autoplay: false,
            slidesToShow: 1,
            autoplaySpeed: 1000,
            cssEase: 'linear',
        });
    }

    // set background image
    $('body *').each(function() {
        if ($(this).hasClass('has-bg-src')) {
            if ($(this).attr('data-bg-src') != 0) {
                $(this).css('background-image', 'url(' + $(this).attr('data-bg-src') + ')');
            }
        }
    });
});

// }, 500);


// start gallery image

if (jQuery('#showGalleryImagesDetail').length) {
    jQuery('#showGalleryImagesDetail').lightGallery({
        showThumbByDefault: false,
        download: false,
        fullScreen: false,
        zoom: false,
        scale: false,
        autoplayControls: false
    });
}


//Map Contact

var CONTACT = {
    Lat: 12.23708071809997,
    Lng: 109.19522265297871,
    Title: "Grand Gosia Hotel",
    iconFrom: "https://botonblue.com/botonblue/image/from.png",
    iconTo: "https://botonblue.com/botonblue/image/to.png"
};
$(function() {
    var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
    var costaNt = new google.maps.LatLng(CONTACT.Lat, CONTACT.Lng);
    var directionsService = new google.maps.DirectionsService();

    var myOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: costaNt
    }
    var map = new google.maps.Map(document.getElementById("directions_map"), myOptions);

    var markerCostaNT = new google.maps.Marker({
        position: costaNt,
        Map: map,
        title: CONTACT.Title
    });

    var infoCostaNT = new google.maps.InfoWindow({
        content: $('#botonblue-contact-maps').html()
    });

    google.maps.event.addListener(markerCostaNT, 'click', function() {
        infoCostaNT.open(map, markerCostaNT);
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));


    var input = $("input[type='text'][id$='txtCusAddress']")[0];
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });


    $(input).bind('keypress', function(e) {
        var theEvent = e || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        if (theEvent.keyCode === 13) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();

            return false;
        }
    });

    function calcRoute() {
        var start = input.value;
        var end = costaNt;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(CONTACT.iconFrom);
        markerCostaNT.setIcon(CONTACT.iconTo);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        infowindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;"><strong>' +
            input.value + '</strong><br/>' + address + '</div>');
        infowindow.open(map, marker);

        calcRoute();
    });
});