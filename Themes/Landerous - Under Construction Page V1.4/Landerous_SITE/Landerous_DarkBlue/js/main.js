$(document).ready(function() {
    //Set default hint if nothing is entered
    setHints();
    
    //Bind JavaScript event on SignUp Button
    $('#signUp').click(function(){
        signUp($('#subscribe').val());
    });

    //Bind JavaScript event on Send Message Button
    $('#sendMessage').click(function(){    
        if(validateInput()){
            sendMail();
        }else
        {
            alert('Please fill all fields to send us message.');
        }
    });

    //Load initial site state (countdown, twitts)
    initialize();
});
var setHints = function()
{
    $('#subscribe').attachHint('Enter your email to be notified when more info is available');
    $('[name=contact_name]').attachHint('Name');
    $('[name=contact_email]').attachHint('Email');
    $('[name=contact_subject]').attachHint('Subject');
    $('[name=contact_message]').attachHint('Message');
};
var signUp = function(inputEmail)
{
    var isValid = true;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(inputEmail)){
        isValid = false;
        alert('Your email is not in valid format');
    }
    if(isValid){
        var params = {
            'action'    : 'SignUp',
            'email'     : inputEmail
        };
        $.ajax({
            type: "POST",
            url: "php/mainHandler.php",
            data: params,
            success: function(response){
                if(response){
                    var responseObj = jQuery.parseJSON(response);
                    if(responseObj.ResponseData)
                    {
                        $('#subscribe').val('');
						showMessage('You will be notified when we launch. Thank you!');

                    }
                }
            }
        });
    }
};
var initialize = function()
{
    var params = {
        'action'    : 'Initialize'
    };
    $.ajax({
        type: "POST",
        url: "php/mainHandler.php",
        data: params,
        success: function(response){
            if(response){
                var responseObj = jQuery.parseJSON(response);
                if(responseObj.ResponseData)
                {
                    $('ul.twitts').empty();
                    if(!jQuery.isEmptyObject(responseObj.ResponseData.Twitts)){
                        $('a.followUsURL').attr('href','http://twitter.com/#!/'+responseObj.ResponseData.Twitts[0].Name);
                        $.each(responseObj.ResponseData.Twitts, function(index, twitt){
                            var twitterTemplate = '<li>'
                            + '<a href="http://twitter.com/#!/{0}/status/{1}" target="_blank" class="twittURL">@{0}</a>'
                            + '{2}'
                            + '<span class="time">{3}</span>'
                            + '</li>';

                            $('ul.twitts').append(StringFormat(twitterTemplate, twitt.Name, twitt.StatusID, twitt.Text, twitt.Date));
                        });
                    }else
					{
						$.getJSON('http://twitter.com/statuses/user_timeline/'+twitterName+'.json?count=3&callback=?', function(data) {
						var i = 0;
							 $.each(data, function(index, twitt){
									var twitterTemplate = '<li>'
									+ '<a href="http://twitter.com/#!/{0}/status/{1}" target="_blank" class="twittURL">@{0}</a>'
									+ '{2}'
									+ '<span class="time">{3}</span>'
									+ '</li>';

								$('ul.twitts').append(StringFormat(twitterTemplate, twitterName, twitt.id_str, twitt.text, getFriendlyTwitterTime(twitt.created_at)));
								});
							});
					}

                    if(responseObj.ResponseData.Start_Date)
                    {
                        setInterval(function(){
                            var countDownObj = calculateTimeDifference(responseObj.ResponseData.Start_Date);
                            if(countDownObj){
                                $('#days').text(countDownObj.Days);
                                $('#hours').text(countDownObj.Hours);
                                $('#minutes').text(countDownObj.Minutes);
                                $('#seconds').text(countDownObj.Seconds);
                            }
                        }, 1000);
                    }
                }
            }
        }
    });
};
var getFriendlyTwitterTime = function(raw_time){
	var date = new Date((raw_time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;
			
	return day_diff == 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}
var validateInput = function(){
    var isValid = true;
    $('input, textarea').each(function(){
        if($(this).hasClass('required'))
        {
            if($(this).val()!=''){
                if($(this).hasClass('email'))
                {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if(!emailReg.test($(this).val())){
                        isValid = false;
                        alert('Your email is not in valid format');
                    }
                }
            }else
            {
                isValid = false;
            }
        }
    });
    return isValid;
};

var resetInput = function(){
    $('input, textarea').each(function() {
        $(this).val('').text('');
    });
};

var sendMail = function(){
    var params = {
        'action'    : 'SendMessage',
        'name'      : $('[name=contact_name]').val(),
        'email'     : $('[name=contact_email]').val(),
        'subject'   : $('[name=contact_subject]').val(),
        'message'   : $('[name=contact_message]').val()
    };
    $.ajax({
        type: "POST",
        url: "php/mainHandler.php",
        data: params,
        success: function(response){
            if(response){
                var responseObj = jQuery.parseJSON(response);
                if(responseObj.ResponseData)
                    $('label.sendingStatus').text(responseObj.ResponseData);
					showMessage('Your message was sent. Thank you!');

            }
            resetInput();
            $('#sendMail').removeAttr('disabled');
        },
        error: function (xhr, ajaxOptions, thrownError){
            //xhr.status : 404, 303, 501...
            var error = null;
            switch(xhr.status)
            {
                case "301":
                    error = "Redirection Error!";
                    break;
                case "307":
                    error = "Error, temporary server redirection!";
                    break;
                case "400":
                    error = "Bad request!";
                    break;
                case "404":
                    error = "Page not found!";
                    break;
                case "500":
                    error = "Server is currently unavailable!";
                    break;
                default:
                    error ="Unespected error, please try again later.";
            }
            if(error){
                $('label.sendingStatus').text(error);
            }
        }
    });
};

var calculateTimeDifference = function(startDate) {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var days = 0;

    var currentDate = new Date();
    startDate = new Date(startDate);
    
    var timeCounter = startDate - currentDate;
    if (isNaN(timeCounter))
    {
        return NaN;
    }
    else
    {
        days = Math.floor(timeCounter / day);
        timeCounter = timeCounter % day;

        hours = Math.floor(timeCounter / hour);
        timeCounter = timeCounter % hour;

        minutes = Math.floor(timeCounter / minute);
        timeCounter = timeCounter % minute;
        
        seconds = Math.floor(timeCounter / second);
    }

    var tDiffObj = {
        "Days" : days,
        "Hours" : hours,
        "Minutes" : minutes,
        "Seconds" : seconds
    };

    return tDiffObj;
};

var StringFormat = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var regExpression = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(regExpression, arguments[i + 1]);
    }
    return s;
}
var showMessage = function (msg) {
    alert(msg);
}
