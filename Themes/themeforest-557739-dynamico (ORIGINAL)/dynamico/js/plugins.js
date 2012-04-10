/*jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/*/
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
/* Get the value of a cookie with the given name*/
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};
/*
 * jQuery Nivo Slider v2.6
 * http://nivo.dev7studios.com
 *
 * Copyright 2011, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * March 2010
 */

(function($){var NivoSlider=function(element,options){var settings=$.extend({},$.fn.nivoSlider.defaults,options);var vars={currentSlide:0,currentImage:'',totalSlides:0,randAnim:'',running:false,paused:false,stop:false};var slider=$(element);slider.data('nivo:vars',vars);slider.css('position','relative');slider.addClass('nivoSlider');var kids=slider.children();kids.each(function(){var child=$(this);var link='';if(!child.is('img')){if(child.is('a')){child.addClass('nivo-imageLink');link=child;}
child=child.find('img:first');}
var childWidth=child.width();if(childWidth==0)childWidth=child.attr('width');var childHeight=child.height();if(childHeight==0)childHeight=child.attr('height');if(childWidth>slider.width()){slider.width(childWidth);}
if(childHeight>slider.height()){slider.height(childHeight);}
if(link!=''){link.css('display','none');}
child.css('display','none');vars.totalSlides++;});if(settings.startSlide>0){if(settings.startSlide>=vars.totalSlides)settings.startSlide=vars.totalSlides-1;vars.currentSlide=settings.startSlide;}
if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');slider.append($('<div class="nivo-caption"><p></p></div>').css({display:'none',opacity:settings.captionOpacity}));var processCaption=function(settings){var nivoCaption=$('.nivo-caption',slider);if(vars.currentImage.attr('title')!=''&&vars.currentImage.attr('title')!=undefined){var title=vars.currentImage.attr('title');if(title.substr(0,1)=='#')title=$(title).html();if(nivoCaption.css('display')=='block'){nivoCaption.find('p').fadeOut(settings.animSpeed,function(){$(this).html(title);$(this).fadeIn(settings.animSpeed);});}else{nivoCaption.find('p').html(title);}
nivoCaption.fadeIn(settings.animSpeed);}else{nivoCaption.fadeOut(settings.animSpeed);}}
processCaption(settings);var timer=0;if(!settings.manualAdvance&&kids.length>1){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
if(settings.directionNav){slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+settings.prevText+'</a><a class="nivo-nextNav">'+settings.nextText+'</a></div>');
/*if(settings.directionNavHide){$('.nivo-directionNav',slider).hide();slider.hover(function(){$('.nivo-directionNav',slider).show();},function(){$('.nivo-directionNav',slider).hide();});}*/
$('a.nivo-prevNav').live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');});$('a.nivo-nextNav').live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');});}
if(settings.controlNav){var nivoControl=$('<div class="nivo-controlNav"></div>');slider.append(nivoControl);for(var i=0;i<kids.length;i++){if(settings.controlNavThumbs){var child=kids.eq(i);if(!child.is('img')){child=child.find('img:first');}
if(settings.controlNavThumbsFromRel){nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('rel')+'" alt="" /></a>');}else{nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('src').replace(settings.controlNavThumbsSearch,settings.controlNavThumbsReplace)+'" alt="" /></a>');}}else{nivoControl.append('<a class="nivo-control" rel="'+i+'">'+(i+1)+'</a>');}}
$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');$('.nivo-controlNav a',slider).live('click',function(){if(vars.running)return false;if($(this).hasClass('active'))return false;clearInterval(timer);timer='';slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');vars.currentSlide=$(this).attr('rel')-1;nivoRun(slider,kids,settings,'control');});}
if(settings.keyboardNav){$(window).keypress(function(event){if(event.keyCode=='37'){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');}
if(event.keyCode=='39'){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');}});}
if(settings.pauseOnHover){slider.hover(function(){vars.paused=true;clearInterval(timer);timer='';},function(){vars.paused=false;if(timer==''&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}});}
slider.bind('nivo:animFinished',function(){vars.running=false;$(kids).each(function(){if($(this).is('a')){$(this).css('display','none');}});if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
if(timer==''&&!vars.paused&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
settings.afterChange.call(this);});var createSlices=function(slider,settings,vars){for(var i=0;i<settings.slices;i++){var sliceWidth=Math.round(slider.width()/settings.slices);if(i==settings.slices-1){slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:(slider.width()-(sliceWidth*i))+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}else{slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:sliceWidth+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}}}
var createBoxes=function(slider,settings,vars){var boxWidth=Math.round(slider.width()/settings.boxCols);var boxHeight=Math.round(slider.height()/settings.boxRows);for(var rows=0;rows<settings.boxRows;rows++){for(var cols=0;cols<settings.boxCols;cols++){if(cols==settings.boxCols-1){slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:(slider.width()-(boxWidth*cols))+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}else{slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:boxWidth+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}}}}
var nivoRun=function(slider,kids,settings,nudge){var vars=slider.data('nivo:vars');if(vars&&(vars.currentSlide==vars.totalSlides-1)){settings.lastSlide.call(this);}
if((!vars||vars.stop)&&!nudge)return false;settings.beforeChange.call(this);if(!nudge){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}else{if(nudge=='prev'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}
if(nudge=='next'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}}
vars.currentSlide++;if(vars.currentSlide==vars.totalSlides){vars.currentSlide=0;settings.slideshowEnd.call(this);}
if(vars.currentSlide<0)vars.currentSlide=(vars.totalSlides-1);if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if(settings.controlNav){$('.nivo-controlNav a',slider).removeClass('active');$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');}
processCaption(settings);$('.nivo-slice',slider).remove();$('.nivo-box',slider).remove();if(settings.effect=='random'){var anims=new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade','boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');vars.randAnim=anims[Math.floor(Math.random()*(anims.length+1))];if(vars.randAnim==undefined)vars.randAnim='fade';}
if(settings.effect.indexOf(',')!=-1){var anims=settings.effect.split(',');vars.randAnim=anims[Math.floor(Math.random()*(anims.length))];if(vars.randAnim==undefined)vars.randAnim='fade';}
vars.running=true;if(settings.effect=='sliceDown'||settings.effect=='sliceDownRight'||vars.randAnim=='sliceDownRight'||settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'top':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUp'||settings.effect=='sliceUpRight'||vars.randAnim=='sliceUpRight'||settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'bottom':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUpDown'||settings.effect=='sliceUpDownRight'||vars.randAnim=='sliceUpDown'||settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var v=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);if(i==0){slice.css('top','0px');i++;}else{slice.css('bottom','0px');i=0;}
if(v==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;v++;});}
else if(settings.effect=='fold'||vars.randAnim=='fold'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;$('.nivo-slice',slider).each(function(){var slice=$(this);var origWidth=slice.width();slice.css({top:'0px',height:'100%',width:'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='fade'||vars.randAnim=='fade'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':slider.width()+'px'});firstSlice.animate({opacity:'1.0'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInRight'||vars.randAnim=='slideInRight'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInLeft'||vars.randAnim=='slideInLeft'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1','left':'','right':'0px'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){firstSlice.css({'left':'0px','right':''});slider.trigger('nivo:animFinished');});}
else if(settings.effect=='boxRandom'||vars.randAnim=='boxRandom'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var boxes=shuffle($('.nivo-box',slider));boxes.each(function(){var box=$(this);if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=20;i++;});}
else if(settings.effect=='boxRain'||vars.randAnim=='boxRain'||settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var rowIndex=0;var colIndex=0;var box2Darr=new Array();box2Darr[rowIndex]=new Array();var boxes=$('.nivo-box',slider);if(settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){boxes=$('.nivo-box',slider)._reverse();}
boxes.each(function(){box2Darr[rowIndex][colIndex]=$(this);colIndex++;if(colIndex==settings.boxCols){rowIndex++;colIndex=0;box2Darr[rowIndex]=new Array();}});for(var cols=0;cols<(settings.boxCols*2);cols++){var prevCol=cols;for(var rows=0;rows<settings.boxRows;rows++){if(prevCol>=0&&prevCol<settings.boxCols){(function(row,col,time,i,totalBoxes){var box=$(box2Darr[row][col]);var w=box.width();var h=box.height();if(settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){box.width(0).height(0);}
if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3,'',function(){slider.trigger('nivo:animFinished');});},(100+time));}else{setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3);},(100+time));}})(rows,prevCol,timeBuff,i,totalBoxes);i++;}
prevCol--;}
timeBuff+=100;}}}
var shuffle=function(arr){for(var j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);return arr;}
var trace=function(msg){if(this.console&&typeof console.log!="undefined")
console.log(msg);}
this.stop=function(){if(!$(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=true;trace('Stop Slider');}}
this.start=function(){if($(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=false;trace('Start Slider');}}
settings.afterLoad.call(this);return this;};$.fn.nivoSlider=function(options){return this.each(function(key,value){var element=$(this);if(element.data('nivoslider'))return element.data('nivoslider');var nivoslider=new NivoSlider(this,options);element.data('nivoslider',nivoslider);});};$.fn.nivoSlider.defaults={effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:'.jpg',controlNavThumbsReplace:'_thumb.jpg',keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:'Prev',nextText:'Next',beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};$.fn._reverse=[].reverse;})(jQuery);

/* CUFON @version 1.09*/
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());
/*Cufon Font */
Cufon.registerFont({"w":142,"face":{"font-family":"Bebas Neue","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 0 0 0 0 0 0 0 0","ascent":"252","descent":"-108","x-height":"3","bbox":"-18 -323 261.294 64","underline-thickness":"18","underline-position":"-18","unicode-range":"U+0020-U+00FF"},"glyphs":{" ":{"w":55},"!":{"d":"49,-56r-30,0r-5,-91r0,-105r40,0r0,105xm15,-38r38,0r0,38r-38,0r0,-38","w":68},"\"":{"d":"20,-178r-6,-74r39,0r-6,74r-27,0xm70,-178r-6,-74r39,0r-6,74r-27,0","w":117},"#":{"d":"71,0r8,-72r-24,0r-7,72r-33,0r8,-72r-18,0r3,-28r18,0r7,-66r-18,0r3,-28r18,0r6,-58r32,0r-6,58r23,0r7,-58r32,0r-6,58r18,0r-3,28r-18,0r-7,66r18,0r-2,28r-19,0r-7,72r-33,0xm65,-166r-7,66r24,0r7,-66r-24,0","w":147},"$":{"d":"13,-188v0,-34,14,-55,42,-61r0,-19r32,0r0,19v30,6,45,30,43,69r-37,0v1,-20,-3,-35,-20,-35v-13,0,-20,7,-20,25v0,52,77,54,77,126v0,34,-15,56,-43,62r0,18r-32,0r0,-18v-33,-7,-46,-36,-43,-79r38,0v-1,22,0,44,20,44v13,0,21,-7,21,-25v0,-52,-78,-54,-78,-126"},"%":{"d":"37,-215r0,86v0,11,5,16,13,16v8,0,13,-5,13,-16r0,-86v0,-11,-5,-16,-13,-16v-8,0,-13,5,-13,16xm50,-90v-55,2,-38,-73,-38,-123v0,-26,13,-41,38,-41v55,-2,39,73,39,123v0,26,-14,41,-39,41xm50,0r100,-252r23,0r-99,252r-24,0xm162,-122r0,86v0,11,5,16,13,16v8,0,13,-5,13,-16r0,-86v0,-11,-5,-16,-13,-16v-8,0,-13,5,-13,16xm175,3v-55,0,-38,-74,-38,-123v0,-26,13,-41,38,-41v55,-2,38,74,38,124v0,26,-13,40,-38,40","w":225},"&":{"d":"59,3v-58,0,-59,-120,-17,-136v-46,-20,-35,-130,32,-119r45,0r0,36v-35,1,-65,-12,-65,40v0,28,17,28,41,27r0,-28r40,0r0,28r10,0r0,36r-10,0v2,38,-4,82,4,113r-40,0v-2,-5,-3,-9,-4,-20v-7,15,-18,23,-36,23xm54,-81v0,23,-1,48,21,48v30,0,17,-51,20,-80v-27,-2,-41,2,-41,32","w":149},"'":{"d":"19,-178r-6,-74r38,0r-5,74r-27,0","w":64},"(":{"d":"17,-197v-1,-45,22,-57,68,-55r0,32v-19,-1,-29,0,-28,23r0,142v-1,23,9,24,28,23r0,32v-46,2,-68,-10,-68,-55r0,-142","w":90,"k":{"\u00ff":-2,"\u00fd":-2,"\u00dd":-2,"y":-2,"w":-1,"t":-3,"Y":-2,"W":-1,"T":-3,"v":-1,"V":-1}},")":{"d":"6,-252v45,-2,67,10,67,55r0,142v1,45,-21,57,-67,55r0,-32v18,1,28,-1,28,-23r0,-142v0,-22,-9,-24,-28,-23r0,-32","w":90},"*":{"d":"11,-220r53,27r-9,-59r32,0r-9,59r54,-27r10,31r-59,10r42,42r-26,19r-28,-53r-27,53r-26,-19r42,-42r-59,-10"},"+":{"d":"85,-91r45,0r0,28r-117,0r0,-28r44,0r0,-29r-44,0r0,-28r44,0r0,-41r28,0r0,41r45,0r0,28r-45,0r0,29"},",":{"d":"30,0r-16,0r0,-38r39,0v4,34,-8,53,-18,74r-16,0","w":66,"k":{"\u00ff":29,"\u00fd":29,"\u00fc":2,"\u00fb":2,"\u00fa":2,"\u00f9":2,"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00e7":4,"\u00df":2,"\u00dd":29,"\u00dc":2,"\u00db":2,"\u00da":2,"\u00d9":2,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":29,"w":14,"u":2,"t":22,"s":2,"o":4,"g":4,"c":4,"Y":29,"W":14,"U":2,"T":22,"S":2,"O":4,"G":4,"C":4,"v":22,"q":4,"V":22,"Q":4}},"-":{"d":"13,-108r0,-36r72,0r0,36r-72,0","w":97,"k":{"x":5,"v":4,"X":5,"V":4,"T":12,"W":1,"Y":6,"\u00dd":6,"t":12,"w":1,"y":6,"\u00fd":6,"\u00ff":6,"A":4,"\u00c0":4,"\u00c1":4,"\u00c2":4,"\u00c3":4,"\u00c4":4,"\u00c5":4,"a":4,"\u00e0":4,"\u00e1":4,"\u00e2":4,"\u00e3":4,"\u00e4":4,"\u00e5":4,"Z":4,"z":4}},".":{"d":"14,-38r39,0r0,38r-39,0r0,-38","w":66,"k":{"\u00ff":29,"\u00fd":29,"\u00fc":2,"\u00fb":2,"\u00fa":2,"\u00f9":2,"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00e7":4,"\u00df":2,"\u00dd":29,"\u00dc":2,"\u00db":2,"\u00da":2,"\u00d9":2,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":29,"w":14,"u":2,"t":22,"s":2,"o":4,"g":4,"c":4,"Y":29,"W":14,"U":2,"T":22,"S":2,"O":4,"G":4,"C":4,"v":22,"q":4,"V":22,"Q":4}},"\/":{"d":"2,0r99,-252r34,0r-99,252r-34,0","w":137,"k":{"\/":65}},"0":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63"},"1":{"d":"39,-192r0,-28v31,0,37,-15,43,-32r27,0r0,252r-40,0r0,-192r-30,0"},"2":{"d":"93,-190v2,-40,-43,-38,-41,-4r0,27r-38,0v-4,-52,10,-89,59,-88v39,0,59,23,59,63v0,83,-86,112,-78,156r75,0r0,36r-115,0v-15,-101,74,-109,79,-190"},"3":{"d":"51,-149v32,4,40,-8,40,-41v0,-40,-43,-38,-41,-4r0,16r-38,0v-3,-48,15,-77,59,-77v66,0,79,100,32,122v47,23,38,136,-32,136v-47,0,-63,-33,-59,-84r38,0v-1,22,-1,51,20,48v19,4,21,-24,21,-48v0,-29,-14,-34,-40,-32r0,-36"},"4":{"d":"5,-46r0,-36r72,-170r43,0r0,170r19,0r0,36r-19,0r0,46r-39,0r0,-46r-76,0xm41,-82r40,0r0,-93"},"5":{"d":"13,-81r37,0v-1,23,-1,48,21,48v31,0,20,-51,20,-80v0,-18,-7,-25,-20,-25v-15,-1,-23,12,-21,32r-37,0r7,-146r104,0r0,36r-69,0r-3,60v24,-35,79,-18,79,39v0,62,3,120,-59,120v-47,0,-63,-33,-59,-84"},"6":{"d":"72,3v-86,0,-60,-114,-60,-192v0,-42,19,-66,60,-66v41,0,61,26,59,70r-37,0v2,-20,-5,-36,-21,-34v-29,-4,-21,48,-22,77v21,-40,81,-24,81,35v0,59,-2,110,-60,110xm72,-128v-29,0,-20,43,-21,70v0,18,8,25,21,25v29,0,20,-43,21,-70v0,-18,-8,-25,-21,-25"},"7":{"d":"12,-252r119,0r0,35r-59,217r-39,0r58,-216r-79,0r0,-36"},"8":{"d":"109,-133v44,32,31,147,-38,136v-70,10,-82,-104,-37,-136v-45,-25,-30,-133,37,-122v66,-10,82,94,38,122xm49,-85v0,25,1,56,22,52v21,4,23,-26,23,-52v0,-20,-9,-28,-23,-28v-14,0,-22,8,-22,28xm71,-219v-18,0,-22,19,-22,43v0,20,9,27,22,27v18,0,23,-17,23,-41v0,-23,-10,-29,-23,-29"},"9":{"d":"71,-255v86,0,60,114,60,192v0,42,-20,66,-61,66v-41,0,-61,-26,-59,-70r38,0v-1,20,4,36,20,34v29,4,21,-48,22,-77v-21,40,-89,24,-81,-35v-4,-60,3,-110,61,-110xm71,-124v28,0,20,-43,20,-70v0,-18,-7,-25,-20,-25v-29,0,-20,43,-21,70v0,18,8,25,21,25"},":":{"d":"14,-38r39,0r0,38r-39,0r0,-38xm14,-175r39,0r0,38r-39,0r0,-38","w":66,"k":{"\u00ff":7,"\u00fd":7,"\u00dd":7,"y":7,"t":13,"Y":7,"T":13}},";":{"d":"30,0r-16,0r0,-38r39,0v4,34,-8,53,-18,74r-16,0xm14,-175r39,0r0,38r-39,0r0,-38","w":66,"k":{"\u00ff":7,"\u00fd":7,"\u00dd":7,"y":7,"t":13,"Y":7,"T":13}},"<":{"d":"128,-69r-117,-43r0,-28r117,-43r0,28r-80,29r80,29r0,28"},"=":{"d":"13,-111r117,0r0,28r-117,0r0,-28xm13,-169r117,0r0,28r-117,0r0,-28"},">":{"d":"132,-112r-118,43r0,-28r81,-29r-81,-29r0,-28r118,43r0,28"},"?":{"d":"78,-56r-35,0v-12,-63,41,-72,41,-138v0,-18,-7,-25,-20,-25v-23,0,-19,29,-19,52r-38,0v-4,-52,10,-89,59,-88v39,0,58,23,58,63v0,72,-55,76,-46,136xm41,-38r39,0r0,38r-39,0r0,-38","w":129},"@":{"d":"171,-46v-18,0,-30,-6,-31,-23v-22,39,-76,23,-68,-34v6,-41,10,-90,48,-90v15,0,25,8,30,22r2,-21r34,0r-10,105v-1,6,1,9,7,9v20,0,29,-45,29,-82v0,-45,-22,-76,-72,-76v-64,0,-98,51,-98,133v0,93,95,120,159,70r-3,34v-24,16,-47,21,-74,21v-81,0,-115,-51,-115,-126v0,-89,43,-162,132,-162v76,0,101,47,101,105v0,89,-43,115,-71,115xm131,-158v-22,0,-21,33,-24,53v-2,17,5,24,16,24v23,0,22,-36,24,-57v2,-14,-6,-20,-16,-20","w":248},"A":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0","w":146,"k":{"v":9,"V":9,"?":11}},"B":{"d":"14,-252v65,-2,119,-6,119,67v0,26,-8,43,-26,51v49,19,43,146,-30,134r-63,0r0,-252xm97,-61v0,-39,-5,-59,-43,-52r0,77v24,0,43,5,43,-25xm93,-176v0,-33,-8,-45,-39,-40r0,67v24,1,39,0,39,-27","w":146,"k":{"x":1,"v":1,"X":1,"V":1,".":2,",":2,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5}},"C":{"d":"92,-94r37,0v4,55,-7,97,-59,97v-86,0,-59,-117,-59,-195v0,-40,20,-63,59,-63v48,-1,63,35,59,88r-37,0v1,-24,2,-52,-21,-52v-13,0,-20,7,-20,25r0,136v0,18,7,25,20,25v26,0,21,-36,21,-61","w":138,"k":{"x":4,"X":4,".":2,",":2,"Y":4,"\u00dd":4,"y":4,"\u00fd":4,"\u00ff":4}},"D":{"d":"14,0r0,-252v64,-2,127,-5,122,62v-6,77,28,194,-59,190r-63,0xm96,-192v1,-28,-18,-24,-42,-24r0,180v23,0,42,4,42,-24r0,-132","w":146,"k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"E":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0","w":132},"F":{"d":"54,-216r0,76r51,0r0,36r-51,0r0,104r-40,0r0,-252r105,0r0,36r-65,0","w":123,"k":{"}":-2,"]":-2,".":25,",":25,")":-2,"A":5,"\u00c0":5,"\u00c1":5,"\u00c2":5,"\u00c3":5,"\u00c4":5,"\u00c5":5,"\u00c6":14,"a":5,"\u00e0":5,"\u00e1":5,"\u00e2":5,"\u00e3":5,"\u00e4":5,"\u00e5":5,"\u00e6":14,"J":7,"Z":4,"j":7,"z":4}},"G":{"d":"74,-104r0,-36r55,0v0,67,12,143,-59,143v-86,0,-59,-117,-59,-195v0,-40,20,-63,59,-63v48,-1,63,35,59,88r-37,0v1,-24,2,-52,-21,-52v-13,0,-20,7,-20,25r0,136v0,18,7,25,20,25v29,0,20,-44,21,-71r-18,0","w":140,"k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"H":{"d":"54,-108r0,108r-40,0r0,-252r40,0r0,108r45,0r0,-108r40,0r0,252r-40,0r0,-108r-45,0","w":153},"I":{"d":"14,0r0,-252r40,0r0,252r-40,0","w":68},"J":{"d":"4,0r0,-36v21,1,36,1,36,-24r0,-192r40,0r0,189v-2,58,-32,68,-76,63","w":92,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"K":{"d":"105,0r-39,-100v-18,20,-11,64,-12,100r-40,0r0,-252r40,0r0,110r53,-110r38,0r-55,112r55,140r-40,0","w":149,"k":{"q":3,"Q":3,"C":3,"\u00c7":3,"G":3,"O":3,"\u00d2":3,"\u00d3":3,"\u00d4":3,"\u00d5":3,"\u00d6":3,"\u00d8":3,"c":3,"\u00e7":3,"g":3,"o":3,"\u00f2":3,"\u00f3":3,"\u00f4":3,"\u00f5":3,"\u00f6":3,"\u00f8":3,"S":2,"U":1,"\u00d9":1,"\u00da":1,"\u00db":1,"\u00dc":1,"s":2,"\u00df":2,"u":1,"\u00f9":1,"\u00fa":1,"\u00fb":1,"\u00fc":1}},"L":{"d":"14,0r0,-252r40,0r0,216r65,0r0,36r-105,0","w":122,"k":{"}":-3,"v":12,"]":-3,"V":12,"?":11,")":-3,"T":18,"W":6,"Y":22,"\u00dd":22,"-":14,"\u00ad":14,"t":18,"w":6,"y":22,"\u00fd":22,"\u00ff":22,"J":-2,"j":-2}},"M":{"d":"69,-252r29,179r27,-179r55,0r0,252r-37,0r0,-181r-27,181r-38,0r-29,-178r0,178r-35,0r0,-252r55,0","w":194},"N":{"d":"99,0r-49,-183r0,183r-36,0r0,-252r50,0r40,151r0,-151r36,0r0,252r-41,0","w":153},"O":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"P":{"d":"14,-252v63,-3,118,-3,118,62v0,63,-11,103,-78,95r0,95r-40,0r0,-252xm92,-192v1,-27,-15,-24,-38,-24r0,85v22,0,38,4,38,-23r0,-38","w":135,"k":{"x":4,"X":4,".":29,",":29,"Y":1,"\u00dd":1,"y":1,"\u00fd":1,"\u00ff":1,"A":5,"\u00c0":5,"\u00c1":5,"\u00c2":5,"\u00c3":5,"\u00c4":5,"\u00c5":5,"\u00c6":11,"a":5,"\u00e0":5,"\u00e1":5,"\u00e2":5,"\u00e3":5,"\u00e4":5,"\u00e5":5,"\u00e6":11,"J":6,"j":6}},"Q":{"d":"99,-2v-112,34,-86,-102,-88,-190v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,14,-2,26,-7,35v2,6,8,5,15,5r0,35v-20,1,-35,-5,-40,-17xm51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25","k":{"\u00ff":5,"\u00fd":5,"\u00dd":5,"y":5,"Y":5}},"R":{"d":"138,0r-41,0v-13,-28,21,-119,-43,-103r0,103r-40,0r0,-252v70,-3,119,-4,119,78v0,26,-8,43,-26,51v41,13,17,82,31,123xm93,-165v0,-36,-3,-59,-39,-51r0,77v23,1,39,1,39,-26","w":144,"k":{"v":1,"V":1,"Y":4,"\u00dd":4,"y":4,"\u00fd":4,"\u00ff":4}},"S":{"d":"9,-192v0,-40,20,-63,59,-63v42,0,60,27,58,73r-37,0v11,-39,-40,-54,-40,-12v0,52,77,62,77,134v0,40,-20,63,-59,63v-46,1,-63,-31,-59,-81r38,0v-1,22,-1,45,20,45v13,0,21,-7,21,-25v0,-52,-78,-62,-78,-134","w":134,"k":{"x":3,"X":3,".":2,",":2,"Y":3,"\u00dd":3,"y":3,"\u00fd":3,"\u00ff":3,"\u00c6":1,"\u00e6":1}},"T":{"d":"4,-216r0,-36r122,0r0,36r-41,0r0,216r-40,0r0,-216r-41,0","w":129,"k":{"}":-3,"]":-3,";":13,":":13,".":22,",":22,")":-3,"-":12,"\u00ad":12,"A":14,"\u00c0":14,"\u00c1":14,"\u00c2":14,"\u00c3":14,"\u00c4":14,"\u00c5":14,"\u00c6":18,"a":14,"\u00e0":14,"\u00e1":14,"\u00e2":14,"\u00e3":14,"\u00e4":14,"\u00e5":14,"\u00e6":18,"J":11,"j":11}},"U":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"V":{"d":"44,-252r30,206r30,-206r37,0r-39,252r-59,0r-39,-252r40,0","w":144,"k":{"\u00e6":17,"\u00e5":9,"\u00e4":9,"\u00e3":9,"\u00e2":9,"\u00e1":9,"\u00e0":9,"\u00c6":17,"\u00c5":9,"\u00c4":9,"\u00c3":9,"\u00c2":9,"\u00c1":9,"\u00c0":9,"\u00ad":4,"j":9,"a":9,"J":9,"A":9,"-":4,"}":-1,"]":-1,".":22,",":22,")":-1}},"W":{"d":"117,0r-15,-134r-14,134r-55,0r-28,-252r39,0r21,199r19,-199r38,0r20,200r21,-200r34,0r-28,252r-52,0","w":202,"k":{"}":-1,"]":-1,".":14,",":14,")":-1,"-":1,"\u00ad":1,"A":5,"\u00c0":5,"\u00c1":5,"\u00c2":5,"\u00c3":5,"\u00c4":5,"\u00c5":5,"\u00c6":9,"a":5,"\u00e0":5,"\u00e1":5,"\u00e2":5,"\u00e3":5,"\u00e4":5,"\u00e5":5,"\u00e6":9,"J":5,"j":5}},"X":{"d":"110,-252r37,0r-42,122r44,130r-41,0r-33,-100r-33,100r-37,0r45,-130r-42,-122r41,0r30,93","w":154,"k":{"\u00f8":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"\u00e7":5,"\u00df":3,"\u00d8":5,"\u00d6":5,"\u00d5":5,"\u00d4":5,"\u00d3":5,"\u00d2":5,"\u00c7":5,"\u00ad":5,"s":3,"o":5,"g":5,"c":5,"S":3,"O":5,"G":5,"C":5,"-":5,"q":5,"Q":5}},"Y":{"d":"51,0r0,-84r-50,-168r42,0r30,115r30,-115r38,0r-50,168r0,84r-40,0","k":{"}":-2,"q":5,"]":-2,"Q":5,";":7,":":7,".":29,",":29,")":-2,"C":5,"\u00c7":5,"G":5,"O":5,"\u00d2":5,"\u00d3":5,"\u00d4":5,"\u00d5":5,"\u00d6":5,"\u00d8":5,"-":6,"\u00ad":6,"c":5,"\u00e7":5,"g":5,"o":5,"\u00f2":5,"\u00f3":5,"\u00f4":5,"\u00f5":5,"\u00f6":5,"\u00f8":5,"A":18,"\u00c0":18,"\u00c1":18,"\u00c2":18,"\u00c3":18,"\u00c4":18,"\u00c5":18,"\u00c6":23,"a":18,"\u00e0":18,"\u00e1":18,"\u00e2":18,"\u00e3":18,"\u00e4":18,"\u00e5":18,"\u00e6":23,"J":13,"j":13,"S":3,"s":3,"\u00df":3}},"Z":{"d":"12,-252r112,0r0,35r-75,181r75,0r0,36r-116,0r0,-35r76,-181r-72,0r0,-36","w":133,"k":{"-":5,"\u00ad":5}},"[":{"d":"17,0r0,-252r65,0r0,32r-25,0r0,188r25,0r0,32r-65,0","w":90,"k":{"\u00ff":-2,"\u00fd":-2,"\u00dd":-2,"y":-2,"w":-1,"t":-3,"Y":-2,"W":-1,"T":-3,"v":-1,"V":-1}},"\\":{"d":"36,-252r99,252r-34,0r-99,-252r34,0","w":137},"]":{"d":"73,-252r0,252r-65,0r0,-32r26,0r0,-188r-26,0r0,-32r65,0","w":90},"^":{"d":"7,-140r50,-112r28,0r50,112r-31,0r-33,-76r-32,76r-32,0"},"_":{"d":"0,32r0,-28r180,0r0,28r-180,0","w":180},"`":{"d":"10,-306r43,0r26,42r-30,0","w":90},"a":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"b":{"d":"14,-252v65,-2,119,-6,119,67v0,26,-8,43,-26,51v49,19,43,146,-30,134r-63,0r0,-252xm97,-61v0,-39,-5,-59,-43,-52r0,77v24,0,43,5,43,-25xm93,-176v0,-33,-8,-45,-39,-40r0,67v24,1,39,0,39,-27","w":146,"k":{"x":1,"v":1,"X":1,"V":1,".":2,",":2,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5}},"c":{"d":"92,-94r37,0v4,55,-7,97,-59,97v-86,0,-59,-117,-59,-195v0,-40,20,-63,59,-63v48,-1,63,35,59,88r-37,0v1,-24,2,-52,-21,-52v-13,0,-20,7,-20,25r0,136v0,18,7,25,20,25v26,0,21,-36,21,-61","w":138,"k":{"x":4,"X":4,".":2,",":2,"Y":4,"\u00dd":4,"y":4,"\u00fd":4,"\u00ff":4}},"d":{"d":"14,0r0,-252v64,-2,127,-5,122,62v-6,77,28,194,-59,190r-63,0xm96,-192v1,-28,-18,-24,-42,-24r0,180v23,0,42,4,42,-24r0,-132","w":146,"k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"e":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0","w":132},"f":{"d":"54,-216r0,76r51,0r0,36r-51,0r0,104r-40,0r0,-252r105,0r0,36r-65,0","w":123,"k":{"}":-2,"]":-2,".":25,",":25,")":-2,"A":5,"\u00c0":5,"\u00c1":5,"\u00c2":5,"\u00c3":5,"\u00c4":5,"\u00c5":5,"\u00c6":14,"a":5,"\u00e0":5,"\u00e1":5,"\u00e2":5,"\u00e3":5,"\u00e4":5,"\u00e5":5,"\u00e6":14,"J":7,"Z":4,"j":7,"z":4}},"g":{"d":"74,-104r0,-36r55,0v0,67,12,143,-59,143v-86,0,-59,-117,-59,-195v0,-40,20,-63,59,-63v48,-1,63,35,59,88r-37,0v1,-24,2,-52,-21,-52v-13,0,-20,7,-20,25r0,136v0,18,7,25,20,25v29,0,20,-44,21,-71r-18,0","w":140,"k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"h":{"d":"54,-108r0,108r-40,0r0,-252r40,0r0,108r45,0r0,-108r40,0r0,252r-40,0r0,-108r-45,0","w":153},"i":{"d":"14,0r0,-252r40,0r0,252r-40,0","w":68},"j":{"d":"4,0r0,-36v21,1,36,1,36,-24r0,-192r40,0r0,189v-2,58,-32,68,-76,63","w":92,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"k":{"d":"105,0r-39,-100v-18,20,-11,64,-12,100r-40,0r0,-252r40,0r0,110r53,-110r38,0r-55,112r55,140r-40,0","w":149,"k":{"q":3,"Q":3,"C":3,"\u00c7":3,"G":3,"O":3,"\u00d2":3,"\u00d3":3,"\u00d4":3,"\u00d5":3,"\u00d6":3,"\u00d8":3,"c":3,"\u00e7":3,"g":3,"o":3,"\u00f2":3,"\u00f3":3,"\u00f4":3,"\u00f5":3,"\u00f6":3,"\u00f8":3,"S":2,"U":1,"\u00d9":1,"\u00da":1,"\u00db":1,"\u00dc":1,"s":2,"\u00df":2,"u":1,"\u00f9":1,"\u00fa":1,"\u00fb":1,"\u00fc":1}},"l":{"d":"14,0r0,-252r40,0r0,216r65,0r0,36r-105,0","w":122,"k":{"}":-3,"v":12,"]":-3,"V":12,"?":11,")":-3,"T":18,"W":6,"Y":22,"\u00dd":22,"-":14,"\u00ad":14,"t":18,"w":6,"y":22,"\u00fd":22,"\u00ff":22,"J":-2,"j":-2}},"m":{"d":"69,-252r29,179r27,-179r55,0r0,252r-37,0r0,-181r-27,181r-38,0r-29,-178r0,178r-35,0r0,-252r55,0","w":194},"n":{"d":"99,0r-49,-183r0,183r-36,0r0,-252r50,0r40,151r0,-151r36,0r0,252r-41,0","w":153},"o":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"p":{"d":"14,-252v63,-3,118,-3,118,62v0,63,-11,103,-78,95r0,95r-40,0r0,-252xm92,-192v1,-27,-15,-24,-38,-24r0,85v22,0,38,4,38,-23r0,-38","w":135,"k":{"x":4,"X":4,".":29,",":29,"Y":1,"\u00dd":1,"y":1,"\u00fd":1,"\u00ff":1,"A":5,"\u00c0":5,"\u00c1":5,"\u00c2":5,"\u00c3":5,"\u00c4":5,"\u00c5":5,"\u00c6":11,"a":5,"\u00e0":5,"\u00e1":5,"\u00e2":5,"\u00e3":5,"\u00e4":5,"\u00e5":5,"\u00e6":11,"J":6,"j":6}},"q":{"d":"99,-2v-112,34,-86,-102,-88,-190v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,14,-2,26,-7,35v2,6,8,5,15,5r0,35v-20,1,-35,-5,-40,-17xm51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25","k":{"\u00ff":5,"\u00fd":5,"\u00dd":5,"y":5,"Y":5}},"r":{"d":"138,0r-41,0v-13,-28,21,-119,-43,-103r0,103r-40,0r0,-252v70,-3,119,-4,119,78v0,26,-8,43,-26,51v41,13,17,82,31,123xm93,-165v0,-36,-3,-59,-39,-51r0,77v23,1,39,1,39,-26","w":144,"k":{"v":1,"V":1,"Y":4,"\u00dd":4,"y":4,"\u00fd":4,"\u00ff":4}},"s":{"d":"9,-192v0,-40,20,-63,59,-63v42,0,60,27,58,73r-37,0v11,-39,-40,-54,-40,-12v0,52,77,62,77,134v0,40,-20,63,-59,63v-46,1,-63,-31,-59,-81r38,0v-1,22,-1,45,20,45v13,0,21,-7,21,-25v0,-52,-78,-62,-78,-134","w":134,"k":{"x":3,"X":3,".":2,",":2,"Y":3,"\u00dd":3,"y":3,"\u00fd":3,"\u00ff":3,"\u00c6":1,"\u00e6":1}},"t":{"d":"4,-216r0,-36r122,0r0,36r-41,0r0,216r-40,0r0,-216r-41,0","w":129,"k":{"}":-3,"]":-3,";":13,":":13,".":22,",":22,")":-3,"-":12,"\u00ad":12,"A":14,"\u00c0":14,"\u00c1":14,"\u00c2":14,"\u00c3":14,"\u00c4":14,"\u00c5":14,"\u00c6":18,"a":14,"\u00e0":14,"\u00e1":14,"\u00e2":14,"\u00e3":14,"\u00e4":14,"\u00e5":14,"\u00e6":18,"J":11,"j":11}},"u":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"v":{"d":"44,-252r30,206r30,-206r37,0r-39,252r-59,0r-39,-252r40,0","w":144,"k":{"\u00e6":17,"\u00e5":9,"\u00e4":9,"\u00e3":9,"\u00e2":9,"\u00e1":9,"\u00e0":9,"\u00c6":17,"\u00c5":9,"\u00c4":9,"\u00c3":9,"\u00c2":9,"\u00c1":9,"\u00c0":9,"\u00ad":4,"j":9,"a":9,"J":9,"A":9,"-":4,"}":-1,"]":-1,".":22,",":22,")":-1}},"w":{"d":"117,0r-15,-134r-14,134r-55,0r-28,-252r39,0r21,199r19,-199r38,0r20,200r21,-200r34,0r-28,252r-52,0","w":202,"k":{"}":-1,"]":-1,".":14,",":14,")":-1,"-":1,"\u00ad":1,"A":5,"\u00c0":5,"\u00c1":5,"\u00c2":5,"\u00c3":5,"\u00c4":5,"\u00c5":5,"\u00c6":9,"a":5,"\u00e0":5,"\u00e1":5,"\u00e2":5,"\u00e3":5,"\u00e4":5,"\u00e5":5,"\u00e6":9,"J":5,"j":5}},"x":{"d":"110,-252r37,0r-42,122r44,130r-41,0r-33,-100r-33,100r-37,0r45,-130r-42,-122r41,0r30,93","w":154,"k":{"\u00f8":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"\u00e7":5,"\u00df":3,"\u00d8":5,"\u00d6":5,"\u00d5":5,"\u00d4":5,"\u00d3":5,"\u00d2":5,"\u00c7":5,"\u00ad":5,"s":3,"o":5,"g":5,"c":5,"S":3,"O":5,"G":5,"C":5,"-":5,"q":5,"Q":5}},"y":{"d":"51,0r0,-84r-50,-168r42,0r30,115r30,-115r38,0r-50,168r0,84r-40,0","k":{"}":-2,"q":5,"]":-2,"Q":5,";":7,":":7,".":29,",":29,")":-2,"C":5,"\u00c7":5,"G":5,"O":5,"\u00d2":5,"\u00d3":5,"\u00d4":5,"\u00d5":5,"\u00d6":5,"\u00d8":5,"-":6,"\u00ad":6,"c":5,"\u00e7":5,"g":5,"o":5,"\u00f2":5,"\u00f3":5,"\u00f4":5,"\u00f5":5,"\u00f6":5,"\u00f8":5,"A":18,"\u00c0":18,"\u00c1":18,"\u00c2":18,"\u00c3":18,"\u00c4":18,"\u00c5":18,"\u00c6":23,"a":18,"\u00e0":18,"\u00e1":18,"\u00e2":18,"\u00e3":18,"\u00e4":18,"\u00e5":18,"\u00e6":23,"J":13,"j":13,"S":3,"s":3,"\u00df":3}},"z":{"d":"12,-252r112,0r0,35r-75,181r75,0r0,36r-116,0r0,-35r76,-181r-72,0r0,-36","w":133,"k":{"-":5,"\u00ad":5}},"{":{"d":"37,-126v30,9,22,37,25,68v2,23,7,27,25,26r0,32v-35,3,-55,-5,-60,-40v-4,-25,8,-72,-23,-70r0,-32v31,2,19,-45,23,-70v5,-35,25,-43,60,-40r0,32v-50,-6,-2,83,-50,94","w":92,"k":{"\u00ff":-2,"\u00fd":-2,"\u00dd":-2,"y":-2,"w":-1,"t":-3,"Y":-2,"W":-1,"T":-3,"v":-1,"V":-1}},"|":{"d":"76,23r0,-298r32,0r0,298r-32,0","w":180},"}":{"d":"56,-126v-30,-9,-23,-36,-25,-68v-1,-23,-7,-27,-25,-26r0,-32v35,-3,55,5,60,40v4,25,-8,72,23,70r0,32v-31,-2,-19,45,-23,70v-5,35,-25,43,-60,40r0,-32v50,7,1,-84,50,-94","w":92},"~":{"d":"22,-102r-19,-18v28,-54,60,-23,94,-10v8,0,13,-5,24,-20r19,19v-29,54,-61,21,-95,9v-8,0,-12,5,-23,20"},"\u00a0":{"w":55},"\u00a1":{"d":"19,-196r30,0r5,91r0,105r-40,0r0,-105xm53,-214r-38,0r0,-38r38,0r0,38","w":68},"\u00a2":{"d":"55,5r0,-18v-59,-9,-42,-99,-42,-164v0,-34,14,-56,42,-62r0,-18r32,0r0,18v34,6,47,35,44,79r-37,0v1,-22,0,-44,-21,-44v-13,0,-20,6,-20,24r0,108v0,18,7,24,20,24v24,0,22,-29,21,-53r37,0v3,46,-6,83,-44,88r0,18r-32,0"},"\u00a3":{"d":"16,-76r0,-30r24,0v-9,-25,-26,-42,-26,-86v0,-40,20,-63,59,-63v48,-1,62,36,58,88r-37,0v0,-23,3,-52,-20,-52v-13,0,-20,7,-20,25v0,45,17,61,24,88r44,0r0,30r-41,0v-2,18,-10,31,-21,40r69,0r0,36r-118,0r0,-35v19,0,33,-15,34,-41r-29,0"},"\u00a5":{"d":"102,-252r38,0r-46,154r30,0r0,20r-33,0r0,16r33,0r0,20r-33,0r0,42r-40,0r0,-42r-32,0r0,-20r32,0r0,-16r-32,0r0,-20r29,0r-45,-154r41,0r29,111"},"\u00a6":{"d":"76,-148r0,-127r32,0r0,127r-32,0xm76,23r0,-127r32,0r0,127r-32,0","w":180},"\u00a7":{"d":"13,-113v0,-18,7,-35,24,-44v-39,-22,-31,-103,34,-98v44,3,61,22,58,62r-37,0v1,-17,-4,-29,-20,-29v-13,0,-20,7,-20,20v0,30,78,20,78,86v0,18,-9,36,-26,45v41,21,33,101,-33,97v-46,-3,-62,-24,-58,-67r37,0v-11,36,40,49,40,14v0,-30,-77,-20,-77,-86xm50,-114v0,14,10,21,22,27v12,-2,20,-14,20,-27v0,-14,-10,-21,-23,-27v-12,2,-19,14,-19,27"},"\u00a8":{"d":"-2,-301r37,0r0,37r-37,0r0,-37xm55,-301r37,0r0,37r-37,0r0,-37","w":90},"\u00a9":{"d":"146,-111r26,0v3,37,-6,64,-41,64v-53,0,-39,-64,-41,-114v0,-29,14,-44,41,-44v32,-1,44,22,41,57r-26,0v1,-15,1,-32,-14,-32v-9,0,-14,4,-14,17r0,74v0,13,5,17,14,17v17,0,14,-22,14,-39xm7,-126v0,-75,54,-129,125,-129v71,0,126,54,126,129v0,75,-55,129,-126,129v-71,0,-125,-54,-125,-129xm33,-126v0,60,42,104,99,104v57,0,100,-44,100,-104v0,-60,-43,-104,-100,-104v-57,0,-99,44,-99,104","w":264},"\u00aa":{"d":"11,-154v0,-35,20,-46,51,-47v0,-13,2,-31,-10,-30v-11,-2,-13,11,-12,24r-24,0v-2,-29,9,-47,37,-47v55,0,28,85,34,134r-21,0r-2,-17v-10,31,-53,23,-53,-17xm11,-103r76,0r0,25r-76,0r0,-25xm62,-182v-23,2,-26,12,-26,25v0,21,26,22,26,3r0,-28","w":100},"\u00ab":{"d":"28,-219r36,0r-22,93r22,98r-36,0r-22,-98xm86,-219r36,0r-22,93r22,98r-36,0r-22,-98","w":127},"\u00ac":{"d":"9,-140r125,0r0,77r-29,0r0,-49r-96,0r0,-28"},"\u00ad":{"d":"13,-108r0,-36r72,0r0,36r-72,0","w":97,"k":{"x":5,"v":4,"X":5,"V":4,"T":12,"W":1,"Y":6,"\u00dd":6,"t":12,"w":1,"y":6,"\u00fd":6,"\u00ff":6,"A":4,"\u00c0":4,"\u00c1":4,"\u00c2":4,"\u00c3":4,"\u00c4":4,"\u00c5":4,"a":4,"\u00e0":4,"\u00e1":4,"\u00e2":4,"\u00e3":4,"\u00e4":4,"\u00e5":4,"Z":4,"z":4}},"\u00ae":{"d":"7,-126v0,-75,54,-129,125,-129v71,0,126,54,126,129v0,75,-55,129,-126,129v-71,0,-125,-54,-125,-129xm33,-126v0,60,42,104,99,104v57,0,100,-44,100,-104v0,-60,-43,-104,-100,-104v-57,0,-99,44,-99,104xm179,-49r-29,0v-7,-17,12,-72,-30,-60r0,60r-27,0r0,-154v43,-1,82,-5,82,44v0,18,-5,29,-18,35v27,8,12,51,22,75xm148,-153v1,-22,-8,-27,-28,-25r0,43v16,0,27,1,28,-18","w":264},"\u00af":{"d":"1,-296r88,0r0,30r-88,0r0,-30","w":90},"\u00b0":{"d":"5,-219v0,-20,16,-36,36,-36v20,0,36,16,36,36v0,20,-16,35,-36,35v-20,0,-36,-15,-36,-35xm23,-219v0,10,8,17,18,17v10,0,18,-7,18,-17v0,-10,-8,-18,-18,-18v-10,0,-18,8,-18,18","w":82},"\u00b1":{"d":"85,-189r0,49r49,0r0,28r-49,0r0,49r-28,0r0,-49r-48,0r0,-28r48,0r0,-49r28,0"},"\u00b2":{"d":"65,-213v1,-24,-27,-25,-26,-3r0,17r-24,0v-3,-33,7,-56,38,-55v25,0,37,14,37,40v0,53,-55,70,-50,98r48,0r0,23r-73,0v-9,-63,47,-69,50,-120","w":100},"\u00b3":{"d":"50,-113v12,3,13,-16,13,-31v0,-19,-9,-21,-25,-20r0,-22v19,3,25,-5,25,-27v0,-14,-5,-18,-13,-18v-12,-1,-14,12,-13,26r-24,0v-2,-30,9,-49,37,-49v42,0,51,64,20,77v31,14,25,87,-20,87v-30,0,-39,-22,-37,-54r24,0v-1,15,-1,33,13,31","w":100},"\u00b4":{"d":"37,-306r41,0r-38,42r-28,0","w":90},"\u00b6":{"d":"128,-252r0,275r-29,0r0,-246r-19,0r0,246r-29,0r1,-118v-41,1,-47,-46,-47,-95v0,-67,59,-65,123,-62"},"\u00b7":{"d":"14,-145r39,0r0,38r-39,0r0,-38","w":66},"\u00b8":{"d":"44,64v-17,0,-32,-9,-31,-28r23,0v-1,7,3,10,8,10v6,0,9,-4,9,-10v1,-8,-7,-11,-17,-10r0,-31r18,0r0,19v14,0,23,8,23,21v0,22,-15,29,-33,29","w":90},"\u00b9":{"d":"23,-214r0,-18v19,0,24,-9,28,-20r17,0r0,160r-25,0r0,-122r-20,0","w":100},"\u00ba":{"d":"50,-231v-24,2,-13,50,-13,74v0,12,5,16,13,16v24,-2,13,-50,13,-74v0,-12,-5,-16,-13,-16xm50,-118v-47,0,-38,-52,-38,-96v0,-25,13,-40,38,-40v47,0,39,51,39,96v0,25,-14,40,-39,40xm12,-103r77,0r0,25r-77,0r0,-25","w":100},"\u00bb":{"d":"64,-219r36,0r22,93r-22,98r-36,0r22,-98xm6,-219r35,0r23,93r-23,98r-35,0r22,-98","w":127},"\u00bc":{"d":"23,-214r0,-18v19,0,24,-9,28,-20r17,0r0,160r-25,0r0,-122r-20,0xm58,0r99,-252r23,0r-99,252r-23,0xm134,-28r0,-23r45,-108r28,0r0,108r12,0r0,23r-12,0r0,29r-25,0r0,-29r-48,0xm156,-51r26,0r0,-59","w":225},"\u00bd":{"d":"23,-214r0,-18v19,0,24,-9,28,-20r17,0r0,160r-25,0r0,-122r-20,0xm47,0r99,-252r24,0r-100,252r-23,0xm190,-120v0,-14,-5,-18,-13,-18v-14,0,-14,18,-13,33r-24,0v-2,-33,6,-57,37,-56v25,0,38,14,38,40v0,53,-55,71,-50,99r48,0r0,22r-73,0v-9,-63,48,-69,50,-120","w":225},"\u00be":{"d":"50,-113v12,3,13,-16,13,-31v0,-19,-9,-21,-25,-20r0,-22v19,3,25,-5,25,-27v0,-14,-5,-18,-13,-18v-12,-1,-14,12,-13,26r-24,0v-2,-30,9,-49,37,-49v42,0,51,64,20,77v31,14,25,87,-20,87v-30,0,-39,-22,-37,-54r24,0v-1,15,-1,33,13,31xm61,0r100,-252r23,0r-99,252r-24,0xm134,-28r0,-23r45,-108r28,0r0,108r12,0r0,23r-12,0r0,29r-25,0r0,-29r-48,0xm156,-51r26,0r0,-59","w":225},"\u00bf":{"d":"51,-196r35,0v15,62,-42,72,-41,138v0,18,7,25,20,25v23,0,20,-29,20,-52r37,0v4,52,-9,89,-58,88v-39,0,-58,-23,-58,-63v0,-72,57,-78,45,-136xm88,-214r-38,0r0,-38r38,0r0,38","w":129,"k":{"\u00ff":11,"\u00fd":11,"\u00dd":11,"y":11,"w":7,"t":15,"Y":11,"W":7,"T":15,"v":11,"V":11}},"\u00c0":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm24,-306r43,0r26,42r-30,0","w":146,"k":{"v":9,"V":9,"?":11}},"\u00c1":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm80,-306r41,0r-39,42r-28,0","w":146,"k":{"v":9,"V":9,"?":11}},"\u00c2":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm57,-264r-36,0r33,-42r38,0r34,42r-36,0r-17,-21","w":146,"k":{"v":9,"V":9,"?":11}},"\u00c3":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm107,-305r20,15v-17,39,-45,23,-72,16v-7,0,-10,3,-15,12r-21,-15v17,-38,45,-24,72,-16v7,0,11,-3,16,-12","w":146,"k":{"v":9,"V":9,"?":11}},"\u00c4":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm26,-301r37,0r0,37r-37,0r0,-37xm84,-301r36,0r0,37r-36,0r0,-37","w":146,"k":{"v":9,"V":9,"?":11}},"\u00c5":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm43,-293v0,-17,13,-30,30,-30v17,0,30,13,30,30v0,17,-13,30,-30,30v-17,0,-30,-13,-30,-30xm73,-305v-15,0,-13,23,0,23v6,0,12,-5,12,-11v0,-6,-6,-12,-12,-12","w":146,"k":{"v":9,"V":9,"?":11}},"\u00c6":{"d":"91,0r0,-46r-40,0r-12,46r-38,0r68,-252r130,0r0,36r-69,0r0,70r55,0r0,36r-55,0r0,74r69,0r0,36r-108,0xm60,-80r31,0r0,-121","w":208},"\u00c7":{"d":"68,64v-17,0,-32,-9,-31,-28r23,0v-1,7,3,10,8,10v6,0,9,-4,9,-10v1,-8,-7,-11,-17,-10r0,-24v-75,-5,-49,-120,-49,-194v0,-40,20,-63,59,-63v48,-1,63,35,59,88r-37,0v1,-24,2,-52,-21,-52v-13,0,-20,7,-20,25r0,136v0,18,7,25,20,25v26,0,21,-36,21,-61r37,0v3,52,-6,95,-51,97r0,11v14,0,23,8,23,21v0,22,-15,29,-33,29","w":138,"k":{"x":4,"X":4,".":2,",":2,"Y":4,"\u00dd":4,"y":4,"\u00fd":4,"\u00ff":4}},"\u00c8":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm19,-306r43,0r26,42r-30,0","w":132},"\u00c9":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm75,-306r41,0r-39,42r-28,0","w":132},"\u00ca":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm51,-264r-36,0r34,-42r38,0r33,42r-35,0r-17,-21","w":132},"\u00cb":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm21,-301r37,0r0,37r-37,0r0,-37xm78,-301r37,0r0,37r-37,0r0,-37","w":132},"\u00cc":{"d":"14,0r0,-252r40,0r0,252r-40,0xm-14,-306r42,0r26,42r-30,0","w":68},"\u00cd":{"d":"14,0r0,-252r40,0r0,252r-40,0xm41,-306r41,0r-39,42r-28,0","w":68},"\u00ce":{"d":"14,0r0,-252r40,0r0,252r-40,0xm18,-264r-36,0r33,-42r38,0r34,42r-36,0r-17,-21","w":68},"\u00cf":{"d":"14,0r0,-252r40,0r0,252r-40,0xm-13,-301r37,0r0,37r-37,0r0,-37xm45,-301r36,0r0,37r-36,0r0,-37","w":68},"\u00d0":{"d":"14,0r0,-110r-13,0r0,-32r13,0r0,-110v64,-2,127,-5,122,62v-6,77,28,194,-59,190r-63,0xm96,-192v1,-28,-18,-24,-42,-24r0,74r24,0r0,32r-24,0r0,74v23,0,42,4,42,-24r0,-132","w":146,"k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d1":{"d":"99,0r-49,-183r0,183r-36,0r0,-252r50,0r40,151r0,-151r36,0r0,252r-41,0xm110,-305r20,15v-17,39,-44,23,-71,16v-7,0,-11,3,-16,12r-20,-15v17,-39,44,-23,71,-16v7,0,11,-3,16,-12","w":153},"\u00d2":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm22,-306r43,0r26,42r-30,0","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d3":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm78,-306r41,0r-39,42r-28,0","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d4":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm54,-264r-35,0r33,-42r38,0r33,42r-35,0r-17,-21","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d5":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm105,-305r20,15v-17,39,-44,23,-71,16v-7,0,-11,3,-16,12r-20,-15v17,-39,44,-23,71,-16v7,0,11,-3,16,-12","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d6":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm24,-301r37,0r0,37r-37,0r0,-37xm82,-301r36,0r0,37r-36,0r0,-37","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d7":{"d":"33,-183r38,38r38,-38r20,19r-39,38r39,38r-20,19r-38,-38r-38,38r-19,-19r38,-38r-38,-38"},"\u00d8":{"d":"15,9r9,-26v-25,-38,-8,-117,-13,-175v-5,-55,53,-77,96,-54r7,-19r14,4r-10,26v26,37,8,117,13,175v5,55,-53,77,-96,54r-7,19xm51,-194r0,104r40,-112v-6,-24,-40,-24,-40,8xm51,-50v5,25,41,24,41,-8r0,-104","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00d9":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm23,-306r43,0r26,42r-30,0","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00da":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm79,-306r41,0r-39,42r-28,0","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00db":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm55,-264r-35,0r33,-42r38,0r34,42r-36,0r-17,-21","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00dc":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm25,-301r37,0r0,37r-37,0r0,-37xm83,-301r37,0r0,37r-37,0r0,-37","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00dd":{"d":"51,0r0,-84r-50,-168r42,0r30,115r30,-115r38,0r-50,168r0,84r-40,0xm80,-306r41,0r-39,42r-28,0","k":{"}":-2,"q":5,"]":-2,"Q":5,";":7,":":7,".":29,",":29,")":-2,"C":5,"\u00c7":5,"G":5,"O":5,"\u00d2":5,"\u00d3":5,"\u00d4":5,"\u00d5":5,"\u00d6":5,"\u00d8":5,"-":6,"\u00ad":6,"c":5,"\u00e7":5,"g":5,"o":5,"\u00f2":5,"\u00f3":5,"\u00f4":5,"\u00f5":5,"\u00f6":5,"\u00f8":5,"A":18,"\u00c0":18,"\u00c1":18,"\u00c2":18,"\u00c3":18,"\u00c4":18,"\u00c5":18,"\u00c6":23,"a":18,"\u00e0":18,"\u00e1":18,"\u00e2":18,"\u00e3":18,"\u00e4":18,"\u00e5":18,"\u00e6":23,"J":13,"j":13,"S":3,"s":3,"\u00df":3}},"\u00de":{"d":"14,0r0,-252r40,0r0,29v65,-7,78,29,78,95v0,47,-27,66,-78,62r0,66r-40,0xm92,-163v1,-27,-15,-24,-38,-24r0,85v22,0,38,3,38,-24r0,-37","w":135,"k":{"\u00ff":3,"\u00fd":3,"\u00e6":7,"\u00e5":1,"\u00e4":1,"\u00e3":1,"\u00e2":1,"\u00e1":1,"\u00e0":1,"\u00dd":3,"\u00c6":7,"\u00c5":1,"\u00c4":1,"\u00c3":1,"\u00c2":1,"\u00c1":1,"\u00c0":1,"z":4,"y":3,"j":3,"a":1,"Z":4,"Y":3,"J":3,"A":1,"x":7,"X":7,".":29,",":29}},"\u00df":{"d":"9,-192v0,-40,20,-63,59,-63v42,0,60,27,58,73r-37,0v11,-39,-40,-54,-40,-12v0,52,77,62,77,134v0,40,-20,63,-59,63v-46,1,-63,-31,-59,-81r38,0v-1,22,-1,45,20,45v13,0,21,-7,21,-25v0,-52,-78,-62,-78,-134xm144,-192v0,-40,19,-63,58,-63v42,0,62,27,59,73r-38,0v10,-38,-39,-55,-39,-12v0,52,77,62,77,134v0,40,-20,63,-59,63v-46,1,-63,-31,-59,-81r37,0v-1,23,0,45,21,45v13,0,20,-7,20,-25v0,-52,-77,-62,-77,-134","w":269,"k":{"x":3,"X":3,".":2,",":2,"Y":3,"\u00dd":3,"y":3,"\u00fd":3,"\u00ff":3,"\u00c6":1,"\u00e6":1}},"\u00e0":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm24,-306r43,0r26,42r-30,0","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"\u00e1":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm80,-306r41,0r-39,42r-28,0","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"\u00e2":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm57,-264r-36,0r33,-42r38,0r34,42r-36,0r-17,-21","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"\u00e3":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm107,-305r20,15v-17,39,-45,23,-72,16v-7,0,-10,3,-15,12r-21,-15v17,-38,45,-24,72,-16v7,0,11,-3,16,-12","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"\u00e4":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm26,-301r37,0r0,37r-37,0r0,-37xm84,-301r36,0r0,37r-36,0r0,-37","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"\u00e5":{"d":"102,-252r41,252r-40,0r-7,-46r-49,0r-7,46r-36,0r40,-252r58,0xm71,-207r-19,127r38,0xm43,-293v0,-17,13,-30,30,-30v17,0,30,13,30,30v0,17,-13,30,-30,30v-17,0,-30,-13,-30,-30xm73,-305v-15,0,-13,23,0,23v6,0,12,-5,12,-11v0,-6,-6,-12,-12,-12","w":146,"k":{"v":9,"V":9,"?":11,"T":14,"W":5,"Y":18,"\u00dd":18,"-":4,"\u00ad":4,"t":14,"w":5,"y":18,"\u00fd":18,"\u00ff":18}},"\u00e6":{"d":"130,-216r0,70r55,0r0,36r-55,0r0,74r69,0r0,36r-108,0r0,-46r-40,0r-12,46r-38,0r68,-252r130,0r0,36r-69,0xm60,-80r31,0r0,-121","w":208},"\u00e7":{"d":"68,64v-17,0,-32,-9,-31,-28r23,0v-1,7,3,10,8,10v6,0,9,-4,9,-10v1,-8,-7,-11,-17,-10r0,-24v-75,-5,-49,-120,-49,-194v0,-40,20,-63,59,-63v48,-1,63,35,59,88r-37,0v1,-24,2,-52,-21,-52v-13,0,-20,7,-20,25r0,136v0,18,7,25,20,25v26,0,21,-36,21,-61r37,0v3,52,-6,95,-51,97r0,11v14,0,23,8,23,21v0,22,-15,29,-33,29","w":138,"k":{"x":4,"X":4,".":2,",":2,"Y":4,"\u00dd":4,"y":4,"\u00fd":4,"\u00ff":4}},"\u00e8":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm19,-306r43,0r26,42r-30,0","w":132},"\u00e9":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm75,-306r41,0r-39,42r-28,0","w":132},"\u00ea":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm51,-264r-36,0r34,-42r38,0r33,42r-35,0r-17,-21","w":132},"\u00eb":{"d":"54,-216r0,70r54,0r0,36r-54,0r0,74r68,0r0,36r-108,0r0,-252r108,0r0,36r-68,0xm21,-301r37,0r0,37r-37,0r0,-37xm78,-301r37,0r0,37r-37,0r0,-37","w":132},"\u00ec":{"d":"14,0r0,-252r40,0r0,252r-40,0xm-14,-306r42,0r26,42r-30,0","w":68},"\u00ed":{"d":"14,0r0,-252r40,0r0,252r-40,0xm41,-306r41,0r-39,42r-28,0","w":68},"\u00ee":{"d":"14,0r0,-252r40,0r0,252r-40,0xm18,-264r-36,0r33,-42r38,0r34,42r-36,0r-17,-21","w":68},"\u00ef":{"d":"14,0r0,-252r40,0r0,252r-40,0xm-13,-301r37,0r0,37r-37,0r0,-37xm45,-301r36,0r0,37r-36,0r0,-37","w":68},"\u00f0":{"d":"14,0r0,-110r-13,0r0,-32r13,0r0,-110v64,-2,127,-5,122,62v-6,77,28,194,-59,190r-63,0xm96,-192v1,-28,-18,-24,-42,-24r0,74r24,0r0,32r-24,0r0,74v23,0,42,4,42,-24r0,-132","w":146,"k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f1":{"d":"99,0r-49,-183r0,183r-36,0r0,-252r50,0r40,151r0,-151r36,0r0,252r-41,0xm110,-305r20,15v-17,39,-44,23,-71,16v-7,0,-11,3,-16,12r-20,-15v17,-39,44,-23,71,-16v7,0,11,-3,16,-12","w":153},"\u00f2":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm22,-306r43,0r26,42r-30,0","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f3":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm78,-306r41,0r-39,42r-28,0","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f4":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm54,-264r-35,0r33,-42r38,0r33,42r-35,0r-17,-21","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f5":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm105,-305r20,15v-17,39,-44,23,-71,16v-7,0,-11,3,-16,12r-20,-15v17,-39,44,-23,71,-16v7,0,11,-3,16,-12","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f6":{"d":"51,-194r0,136v0,18,7,25,20,25v13,0,21,-7,21,-25r0,-136v0,-18,-8,-25,-21,-25v-13,0,-20,7,-20,25xm71,3v-87,0,-60,-117,-60,-195v0,-40,21,-63,60,-63v87,0,60,117,60,195v0,40,-21,63,-60,63xm24,-301r37,0r0,37r-37,0r0,-37xm82,-301r36,0r0,37r-36,0r0,-37","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f7":{"d":"52,-90r38,0r0,38r-38,0r0,-38xm52,-200r38,0r0,38r-38,0r0,-38xm9,-140r125,0r0,28r-125,0r0,-28"},"\u00f8":{"d":"24,-17v-25,-38,-8,-117,-13,-175v-5,-55,53,-77,96,-54r7,-19r14,4r-10,26v26,37,8,117,13,175v5,55,-53,77,-96,54r-7,19r-13,-4xm51,-194r0,104r40,-112v-6,-24,-40,-24,-40,8xm51,-50v5,25,41,24,41,-8r0,-104","k":{"x":5,"X":5,".":4,",":4,"Y":5,"\u00dd":5,"y":5,"\u00fd":5,"\u00ff":5,"\u00c6":1,"\u00e6":1}},"\u00f9":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm23,-306r43,0r26,42r-30,0","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00fa":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm79,-306r41,0r-39,42r-28,0","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00fb":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm55,-264r-35,0r33,-42r38,0r34,42r-36,0r-17,-21","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00fc":{"d":"13,-252r39,0r0,194v0,18,8,25,21,25v13,0,20,-7,20,-25r0,-194r38,0r0,192v0,40,-20,63,-59,63v-39,0,-59,-23,-59,-63r0,-192xm25,-301r37,0r0,37r-37,0r0,-37xm83,-301r37,0r0,37r-37,0r0,-37","w":143,"k":{".":2,",":2,"\u00c6":1,"\u00e6":1}},"\u00fd":{"d":"51,0r0,-84r-50,-168r42,0r30,115r30,-115r38,0r-50,168r0,84r-40,0xm80,-306r41,0r-39,42r-28,0","k":{"}":-2,"q":5,"]":-2,"Q":5,";":7,":":7,".":29,",":29,")":-2,"C":5,"\u00c7":5,"G":5,"O":5,"\u00d2":5,"\u00d3":5,"\u00d4":5,"\u00d5":5,"\u00d6":5,"\u00d8":5,"-":6,"\u00ad":6,"c":5,"\u00e7":5,"g":5,"o":5,"\u00f2":5,"\u00f3":5,"\u00f4":5,"\u00f5":5,"\u00f6":5,"\u00f8":5,"A":18,"\u00c0":18,"\u00c1":18,"\u00c2":18,"\u00c3":18,"\u00c4":18,"\u00c5":18,"\u00c6":23,"a":18,"\u00e0":18,"\u00e1":18,"\u00e2":18,"\u00e3":18,"\u00e4":18,"\u00e5":18,"\u00e6":23,"J":13,"j":13,"S":3,"s":3,"\u00df":3}},"\u00fe":{"d":"14,0r0,-252r40,0r0,29v65,-7,78,29,78,95v0,47,-27,66,-78,62r0,66r-40,0xm92,-163v1,-27,-15,-24,-38,-24r0,85v22,0,38,3,38,-24r0,-37","w":135,"k":{"\u00ff":3,"\u00fd":3,"\u00e6":7,"\u00e5":1,"\u00e4":1,"\u00e3":1,"\u00e2":1,"\u00e1":1,"\u00e0":1,"\u00dd":3,"\u00c6":7,"\u00c5":1,"\u00c4":1,"\u00c3":1,"\u00c2":1,"\u00c1":1,"\u00c0":1,"z":4,"y":3,"j":3,"a":1,"Z":4,"Y":3,"J":3,"A":1,"x":7,"X":7,".":29,",":29}},"\u00ff":{"d":"51,0r0,-84r-50,-168r42,0r30,115r30,-115r38,0r-50,168r0,84r-40,0xm26,-301r36,0r0,37r-36,0r0,-37xm83,-301r37,0r0,37r-37,0r0,-37","k":{"}":-2,"q":5,"]":-2,"Q":5,";":7,":":7,".":29,",":29,")":-2,"C":5,"\u00c7":5,"G":5,"O":5,"\u00d2":5,"\u00d3":5,"\u00d4":5,"\u00d5":5,"\u00d6":5,"\u00d8":5,"-":6,"\u00ad":6,"c":5,"\u00e7":5,"g":5,"o":5,"\u00f2":5,"\u00f3":5,"\u00f4":5,"\u00f5":5,"\u00f6":5,"\u00f8":5,"A":18,"\u00c0":18,"\u00c1":18,"\u00c2":18,"\u00c3":18,"\u00c4":18,"\u00c5":18,"\u00c6":23,"a":18,"\u00e0":18,"\u00e1":18,"\u00e2":18,"\u00e3":18,"\u00e4":18,"\u00e5":18,"\u00e6":23,"J":13,"j":13,"S":3,"s":3,"\u00df":3}}}});
/* hoverFlow - A Solution to Animation Queue Buildup in jQuery */
(function($){$.fn.hoverFlow=function(c,d,e,f,g){if($.inArray(c,['mouseover','mouseenter','mouseout','mouseleave'])==-1){return this}var h=typeof e==='object'?e:{complete:g||!g&&f||$.isFunction(e)&&e,duration:e,easing:g&&f||f&&!$.isFunction(f)&&f};h.queue=false;var i=h.complete;h.complete=function(){$(this).dequeue();if($.isFunction(i)){i.call(this)}};return this.each(function(){var b=$(this);if(c=='mouseover'||c=='mouseenter'){b.data('jQuery.hoverFlow',true)}else{b.removeData('jQuery.hoverFlow')}b.queue(function(){var a=(c=='mouseover'||c=='mouseenter')?b.data('jQuery.hoverFlow')!==undefined:b.data('jQuery.hoverFlow')===undefined;if(a){b.animate(d,h)}else{b.queue([])}})})}})(jQuery);
/* jQuery.ScrollTo - Easy element scrolling using jQuery */
(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/*Mouse Weel*/
(function($){var types=['DOMMouseScroll','mousewheel'];$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false)}}else{this.onmousewheel=handler}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false)}}else{this.onmousewheel=null}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}});function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(event.wheelDelta){delta=event.wheelDelta/120}if(event.detail){delta=-event.detail/3}deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta}if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120}if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120}args.unshift(event,delta,deltaX,deltaY);return $.event.handle.apply(this,args)}})(jQuery);
/*mWeel*/
(function($){var mwheelI={pos:[-260,-260]},minDif=3,doc=document,root=doc.documentElement,body=doc.body,longDelay,shortDelay;function unsetPos(){if(this===mwheelI.elem){mwheelI.pos=[-260,-260];mwheelI.elem=false;minDif=3}}$.event.special.mwheelIntent={setup:function(){var jElm=$(this).bind('mousewheel',$.event.special.mwheelIntent.handler);if(this!==doc&&this!==root&&this!==body){jElm.bind('mouseleave',unsetPos)}jElm=null;return true},teardown:function(){$(this).unbind('mousewheel',$.event.special.mwheelIntent.handler).unbind('mouseleave',unsetPos);return true},handler:function(e,d){var pos=[e.clientX,e.clientY];if(this===mwheelI.elem||Math.abs(mwheelI.pos[0]-pos[0])>minDif||Math.abs(mwheelI.pos[1]-pos[1])>minDif){mwheelI.elem=this;mwheelI.pos=pos;minDif=250;clearTimeout(shortDelay);shortDelay=setTimeout(function(){minDif=10},200);clearTimeout(longDelay);longDelay=setTimeout(function(){minDif=3},1500);e=$.extend({},e,{type:'mwheelIntent'});return $.event.handle.apply(this,arguments)}}};$.fn.extend({mwheelIntent:function(fn){return fn?this.bind("mwheelIntent",fn):this.trigger("mwheelIntent")},unmwheelIntent:function(fn){return this.unbind("mwheelIntent",fn)}});$(function(){body=doc.body;$(doc).bind('mwheelIntent.mwheelIntentDefault',$.noop)})})(jQuery);

/*jScrollPane*/

/*!
 * jScrollPane - v2.0.0beta9 - 2011-02-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta10, Last updated: 2011-02-04*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2010 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue. 
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta10 - (in progress)
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

	$.fn.jScrollPane = function(settings)
	{
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s)
		{
			var settings, jsp = this, pane, cata=20, paneWidth, paneHeight, container, contentWidth, contentHeight,
				percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
				verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
				verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
				horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
				reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
				wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

			originalPadding = elem.css('paddingTop') + ' ' +
								elem.css('paddingRight') + ' ' +
								elem.css('paddingBottom') + ' ' +
								elem.css('paddingLeft');
			originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
										(parseInt(elem.css('paddingRight'), 10) || 0);

			function initialise(s)
			{

				var clonedElem, tempWrapper, /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
						hasContainingSpaceChanged, originalScrollTop, originalScrollLeft;

				settings = s;

				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();
					elem.css(
						{
							overflow: 'hidden',
							padding: 0
						}
					);
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();

					elem.width(paneWidth);
					
					pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							'width': paneWidth + 'px',
							'height': paneHeight + 'px'
						}
					).append(pane).appendTo(elem);

					/*
					// Move any margins from the first and last children up to the container so they can still
					// collapse with neighbouring elements as they would before jScrollPane 
					firstChild = pane.find(':first-child');
					lastChild = pane.find(':last-child');
					elem.css(
						{
							'margin-top': firstChild.css('margin-top'),
							'margin-bottom': lastChild.css('margin-bottom')
						}
					);
					firstChild.css('margin-top', 0);
					lastChild.css('margin-bottom', 0);
					*/
				} else {
					elem.css('width', '');

					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if (hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + 'px',
							height: paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;
					
					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
				}

				// Unfortunately it isn't that easy to find out the width of the element as it will always report the
				// width as allowed by its container, regardless of overflow settings.
				// A cunning workaround is to clone the element, set its position to absolute and place it in a narrow
				// container. Now it will push outwards to its maxium real width...
				clonedElem = pane.clone(false, false).css('position', 'absolute');
				tempWrapper = $('<div style="width:1px; position: relative;" />').append(clonedElem);
				$('body').append(tempWrapper);
				contentWidth = Math.max(pane.outerWidth(), clonedElem.outerWidth());
				tempWrapper.remove();
				
				contentHeight = pane.outerHeight();
				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;

				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);
				// Ipad Iphone
				if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))) {
				 		var isTouchScreen = 1;
				 	}else{
				 		var isTouchScreen = 0;
				 	}
				var dragPosition = 0;
				
				container.bind('touchstart', function(e){
					var cpos = dragPosition;					
					if(isTouchScreen){
						e = e.originalEvent.touches[0];
					}
					var sY = e.pageY;
					var sX = e.pageX;
					
					
					container.bind('touchmove',function(ev){
						if(isTouchScreen){
							ev.preventDefault();
							ev = ev.originalEvent.touches[0];
						}						
						
						var top = cpos-(sY-ev.pageY);
						positionDragY(top);

					});
					container.bind('touchend',function(ev){
						container.unbind('touchmove touchend');
					});
});
				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass('jspScrollable');
					pane.css({
						top: 0,
						width: container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass('jspScrollable');

					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if (isMaintainingPositon) {
						scrollToX(lastContentX, false);
						scrollToY(lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();
					
					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}
					
					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(
						function()
						{
							initialise(settings);
						},
						settings.autoReinitialiseDelay
					);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}

				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
				originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll()
			{
				if (isScrollableV) {

					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);

					verticalBar = container.find('>.jspVerticalBar');
					verticalTrack = verticalBar.find('>.jspTrack');
					verticalDrag = verticalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
							'mousedown.jsp', getArrowScroll(0, -1)
						).bind('click.jsp', nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
							'mousedown.jsp', getArrowScroll(0, 1)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}

					verticalTrackHeight = paneHeight;
					container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
						function()
						{
							verticalTrackHeight -= $(this).outerHeight();
						}
					);


					verticalDrag.hover(
						function()
						{
							verticalDrag.addClass('jspHover');
						},
						function()
						{
							verticalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							verticalDrag.addClass('jspActive');

							var startY = e.pageY - verticalDrag.position().top;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragY(e.pageY - startY, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar()
			{
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth - cata);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				if (verticalBar.position().left === 0) {
					pane.css('margin-left', scrollbarWidth + 'px');
				}
			}

			function initialiseHorizontalScroll()
			{
				if (isScrollableH) {

					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);

					horizontalBar = container.find('>.jspHorizontalBar');
					horizontalTrack = horizontalBar.find('>.jspTrack');
					horizontalDrag = horizontalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
							'mousedown.jsp', getArrowScroll(-1, 0)
						).bind('click.jsp', nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
							'mousedown.jsp', getArrowScroll(1, 0)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(
						function()
						{
							horizontalDrag.addClass('jspHover');
						},
						function()
						{
							horizontalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							horizontalDrag.addClass('jspActive');

							var startX = e.pageX - horizontalDrag.position().left;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragX(e.pageX - startX, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar()
			{
				container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
					function()
					{
						horizontalTrackWidth -= $(this).outerWidth();
					}
				);

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars()
			{
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
						function()
						{
							horizontalTrackWidth += $(this).outerWidth();
						}
					);
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append(
						$('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
					);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if (isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition); // To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2)
			{
				var p1 = "before", p2 = "after", aTemp;
				
				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele)
			{
				return function()
				{
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele)
			{
				arrow = $(arrow).addClass('jspActive');

				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function()
					{
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
						isFirst = false;
					};

				doScroll();

				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(
					eve,
					function()
					{
						arrow.removeClass('jspActive');
						scrollTimeout && clearTimeout(scrollTimeout);
						scrollTimeout = null;
						ele.unbind(eve);
					}
				);
			}

			function initClickOnTrack()
			{
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageY - offset.top - verticalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageY - offset.top - verticalDragHeight / 2,
											contentDragY = paneHeight * settings.scrollPagePercent,
											dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
										if (direction < 0) {
											if (verticalDragPosition - dragY > pos) {
												jsp.scrollByY(-contentDragY);
											} else {
												positionDragY(pos);
											}
										} else if (direction > 0) {
											if (verticalDragPosition + dragY < pos) {
												jsp.scrollByY(contentDragY);
											} else {
												positionDragY(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
				
				if (isScrollableH) {
					horizontalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageX - offset.left - horizontalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageX - offset.left - horizontalDragWidth / 2,
											contentDragX = paneWidth * settings.scrollPagePercent,
											dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
										if (direction < 0) {
											if (horizontalDragPosition - dragX > pos) {
												jsp.scrollByX(-contentDragX);
											} else {
												positionDragX(pos);
											}
										} else if (direction > 0) {
											if (horizontalDragPosition + dragX < pos) {
												jsp.scrollByX(contentDragX);
											} else {
												positionDragX(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
			}

			function removeClickOnTrack()
			{
				if (horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if (verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag()
			{
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if (verticalDrag) {
					verticalDrag.removeClass('jspActive');
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass('jspActive');
				}
			}

			function positionDragY(destY, animate)
			{
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY)
			{
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY;

				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY/ dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);

				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate)
			{
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}

				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX)
			{
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX;

				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);

				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom)
			{
				if (settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight)
			{
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function scrollToY(destY, animate)
			{
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate)
			{
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate)
			{
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth= e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);
				
				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jspPane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while (!e.is('.jspPane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}

				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) { // element is above viewport
					destY = eleTop - settings.verticalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
				}
				if (destY) {
					scrollToY(destY, animate);
				}
				
				viewportLeft = contentPositionX();
	            maxVisibleEleLeft = viewportLeft + paneWidth;
	            if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
	                destX = eleLeft - settings.horizontalGutter;
	            } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
	                destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
	            }
	            if (destX) {
	                scrollToX(destX, animate);
	            }

			}

			function contentPositionX()
			{
				return -pane.position().left;
			}

			function contentPositionY()
			{
				return -pane.position().top;
			}

			function initMousewheel()
			{
				container.unbind(mwEvent).bind(
					mwEvent,
					function (event, delta, deltaX, deltaY) {
						var dX = horizontalDragPosition, dY = verticalDragPosition;
						jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				);
			}

			function removeMousewheel()
			{
				container.unbind(mwEvent);
			}

			function nil()
			{
				return false;
			}

			function initFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp').bind(
					'focus.jsp',
					function(e)
					{
						scrollToElement(e.target, false);
					}
				);
			}

			function removeFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp');
			}
			
			function initKeyboardNav()
			{
				var keyDown, elementHasScrolled;
				// IE also focuses elements that don't have tabindex set.
				pane.focus(
					function()
					{
						elem.focus();
					}
				);
				
				elem.attr('tabindex', 0)
					.unbind('keydown.jsp keypress.jsp')
					.bind(
						'keydown.jsp',
						function(e)
						{
							if (e.target !== this){
								return;
							}
							var dX = horizontalDragPosition, dY = verticalDragPosition;
							switch(e.keyCode) {
								case 40: // down
								case 38: // up
								case 34: // page down
								case 32: // space
								case 33: // page up
								case 39: // right
								case 37: // left
									keyDown = e.keyCode;
									keyDownHandler();
									break;
								case 35: // end
									scrollToY(contentHeight - paneHeight);
									keyDown = null;
									break;
								case 36: // home
									scrollToY(0);
									keyDown = null;
									break;
							}

							elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
							return !elementHasScrolled;
						}
					).bind(
						'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
						function(e)
						{
							if (e.keyCode == keyDown) {
								keyDownHandler();
							}
							return !elementHasScrolled;
						}
					);
				
				if (settings.hideFocus) {
					elem.css('outline', 'none');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', false);
					}
				}
				
				function keyDownHandler()
				{
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40: // down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38: // up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34: // page down
						case 32: // space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33: // page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39: // right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37: // left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}

					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}
			
			function removeKeyboardNav()
			{
				elem.attr('tabindex', '-1')
					.removeAttr('tabindex')
					.unbind('keydown.jsp keypress.jsp');
			}

			function observeHash()
			{
				if (location.hash && location.hash.length > 1) {
					var e, retryInt;
					try {
						e = $(location.hash);
					} catch (err) {
						return;
					}

					if (e.length && pane.find(location.hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if (container.scrollTop() === 0) {
							retryInt = setInterval(
								function()
								{
									if (container.scrollTop() > 0) {
										scrollToElement(location.hash, true);
										$(document).scrollTop(container.position().top);
										clearInterval(retryInt);
									}
								},
								50
							);
						} else {
							scrollToElement(location.hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks()
			{
				$('a.jspHijack').unbind('click.jsp-hijack').removeClass('jspHijack');
			}

			function hijackInternalLinks()
			{
				unhijackInternalLinks();
				$('a[href^=#]').addClass('jspHijack').bind(
					'click.jsp-hijack',
					function()
					{
						var uriParts = this.href.split('#'), hash;
						if (uriParts.length > 1) {
							hash = uriParts[1];
							if (hash.length > 0 && pane.find('#' + hash).length > 0) {
								scrollToElement('#' + hash, true);
								// Need to return false otherwise things mess up... Would be nice to maybe also scroll
								// the window to the top of the scrollpane?
								return false;
							}
						}
					}
				);
			}
			
			// Init touch on iPad, iPhone, iPod, Android
			function initTouch()
			{
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;
  
				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
					'touchstart.jsp',
					function(e)
					{
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					}
				).bind(
					'touchmove.jsp',
					function(ev)
					{
						if(!moving) {
							return;
						}
						
						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition, dY = verticalDragPosition;
						
						jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
						
						moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;
						
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				).bind(
					'touchend.jsp',
					function(e)
					{
						moving = false;
						/*if(moved) {
							return false;
						}*/
					}
				).bind(
					'click.jsp-touchclick',
					function(e)
					{
						if(moved) {
							moved = false;
							return false;
						}
					}
				);
			}
			
			function destroy(){
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass('jspScrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			// Public API
			$.extend(
				jsp,
				{
					// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
					// was initialised). The settings object which is passed in will override any settings from the
					// previous time it was initialised - if you don't pass any settings then the ones from the previous
					// initialisation will be used.
					reinitialise: function(s)
					{
						s = $.extend({}, settings, s);
						initialise(s);
					},
					// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
					// that it can be seen within the viewport. If stickToTop is true then the element will appear at
					// the top of the viewport, if it is false then the viewport will scroll as little as possible to
					// show the element. You can also specify if you want animation to occur. If you don't provide this
					// argument then the animateScroll value from the settings object is used instead.
					scrollToElement: function(ele, stickToTop, animate)
					{
						scrollToElement(ele, stickToTop, animate);
					},
					// Scrolls the pane so that the specified co-ordinates within the content are at the top left
					// of the viewport. animate is optional and if not passed then the value of animateScroll from
					// the settings object this jScrollPane was initialised with is used.
					scrollTo: function(destX, destY, animate)
					{
						scrollToX(destX, animate);
						scrollToY(destY, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToX: function(destX, animate)
					{
						scrollToX(destX, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToY: function(destY, animate)
					{
						scrollToY(destY, animate);
					},
					// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentX: function(destPercentX, animate)
					{
						scrollToX(destPercentX * (contentWidth - paneWidth), animate);
					},
					// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentY: function(destPercentY, animate)
					{
						scrollToY(destPercentY * (contentHeight - paneHeight), animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollBy: function(deltaX, deltaY, animate)
					{
						jsp.scrollByX(deltaX, animate);
						jsp.scrollByY(deltaY, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByX: function(deltaX, animate)
					{
						var destX = contentPositionX() + deltaX,
							percentScrolled = destX / (contentWidth - paneWidth);
						positionDragX(percentScrolled * dragMaxX, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByY: function(deltaY, animate)
					{
						var destY = contentPositionY() + deltaY,
							percentScrolled = destY / (contentHeight - paneHeight);
						positionDragY(percentScrolled * dragMaxY, animate);
					},
					// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragX: function(x, animate)
					{
						positionDragX(x, animate);
					},
					// Positions the vertical drag at the specified y position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragY: function(y, animate)
					{
						positionDragX(y, animate);
					},
					// This method is called when jScrollPane is trying to animate to a new position. You can override
					// it if you want to provide advanced animation functionality. It is passed the following arguments:
					//  * ele          - the element whose position is being animated
					//  * prop         - the property that is being animated
					//  * value        - the value it's being animated to
					//  * stepCallback - a function that you must execute each time you update the value of the property
					// You can use the default implementation (below) as a starting point for your own implementation.
					animate: function(ele, prop, value, stepCallback)
					{
						var params = {};
						params[prop] = value;
						ele.animate(
							params,
							{
								'duration'	: settings.animateDuration,
								'ease'		: settings.animateEase,
								'queue'		: false,
								'step'		: stepCallback
							}
						);
					},
					// Returns the current x position of the viewport with regards to the content pane.
					getContentPositionX: function()
					{
						return contentPositionX();
					},
					// Returns the current y position of the viewport with regards to the content pane.
					getContentPositionY: function()
					{
						return contentPositionY();
					},
					// Returns the width of the content within the scroll pane.
					getContentWidth: function()
					{
						return contentWidth();
					},
					// Returns the height of the content within the scroll pane.
					getContentHeight: function()
					{
						return contentHeight();
					},
					// Returns the horizontal position of the viewport within the pane content.
					getPercentScrolledX: function()
					{
						return contentPositionX() / (contentWidth - paneWidth);
					},
					// Returns the vertical position of the viewport within the pane content.
					getPercentScrolledY: function()
					{
						return contentPositionY() / (contentHeight - paneHeight);
					},
					// Returns whether or not this scrollpane has a horizontal scrollbar.
					getIsScrollableH: function()
					{
						return isScrollableH;
					},
					// Returns whether or not this scrollpane has a vertical scrollbar.
					getIsScrollableV: function()
					{
						return isScrollableV;
					},
					// Gets a reference to the content pane. It is important that you use this method if you want to
					// edit the content of your jScrollPane as if you access the element directly then you may have some
					// problems (as your original element has had additional elements for the scrollbars etc added into
					// it).
					getContentPane: function()
					{
						return pane;
					},
					// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
					// animateScroll value from settings is used instead.
					scrollToBottom: function(animate)
					{
						positionDragY(dragMaxY, animate);
					},
					// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
					// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
					// contents of your scroll pane will work then call this function.
					hijackInternalLinks: function()
					{
						hijackInternalLinks();
					},
					// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
					// initialised.
					destroy: function()
					{
							destroy();
					}
				}
			);
			
			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
		
		// Apply default speed
		$.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});

		var ret;
		this.each(
			function()
			{
				var elem = $(this), jspApi = elem.data('jsp');
				if (jspApi) {
					jspApi.reinitialise(settings);
				} else {
					jspApi = new JScrollPane(elem, settings);
					elem.data('jsp', jspApi);
				}
				ret = ret ? ret.add(elem) : elem;
			}
		);
		return ret;
	};

	$.fn.jScrollPane.defaults = {
		showArrows					: false,
		maintainPosition			: true,
		clickOnTrack				: true,
		autoReinitialise			: false,
		autoReinitialiseDelay		: 500,
		verticalDragMinHeight		: 0,
		verticalDragMaxHeight		: 99999,
		horizontalDragMinWidth		: 0,
		horizontalDragMaxWidth		: 99999,
		animateScroll				: false,
		animateDuration				: 300,
		animateEase					: 'linear',
		hijackInternalLinks			: false,
		verticalGutter				: 4,
		horizontalGutter			: 4,
		mouseWheelSpeed				: 0,
		arrowButtonSpeed			: 0,
		arrowRepeatFreq				: 50,
		arrowScrollOnHover			: false,
		trackClickSpeed				: 0,
		trackClickRepeatFreq		: 70,
		verticalArrowPositions		: 'split',
		horizontalArrowPositions	: 'split',
		enableKeyboardNavigation	: true,
		hideFocus					: false,
		keyboardSpeed				: 0,
		initialDelay                : 300,        // Delay before starting repeating
		speed						: 30,		// Default speed when others falsey
		scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

})(jQuery,this);

/*QIUCKSAND*/
/*

Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/

(function ($) {
    $.fn.quicksand = function (collection, customOptions) {     
        var options = {
            duration: 750,
            easing: 'swing',
            attribute: 'data-id', // attribute to recognize same items within source and dest
            adjustHeight: 'auto', // 'dynamic' animates height during shuffling (slow), 'auto' adjusts it before or after the animation, false leaves height constant
            useScaling: true, // disable it if you're not using scaling effect or want to improve performance
            enhancement: function(c) {}, // Visual enhacement (eg. font replacement) function for cloned elements
            selector: '> *',
            dx: 0,
            dy: 0
        };
        $.extend(options, customOptions);
        
        if ($.browser.msie || (typeof($.fn.scale) == 'undefined')) {
            // Got IE and want scaling effect? Kiss my ass.
            options.useScaling = false;
        }
        
        var callbackFunction;
        if (typeof(arguments[1]) == 'function') {
            var callbackFunction = arguments[1];
        } else if (typeof(arguments[2] == 'function')) {
            var callbackFunction = arguments[2];
        }
    
        
        return this.each(function (i) {
            var val;
            var animationQueue = []; // used to store all the animation params before starting the animation; solves initial animation slowdowns
            var $collection = $(collection).clone(); // destination (target) collection
            var $sourceParent = $(this); // source, the visible container of source collection
            var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation
            
            var destHeight;
            var adjustHeightOnCallback = false;
            
            var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations
            var offsets = []; // coordinates of every source collection item            
            
            var $source = $(this).find(options.selector); // source collection items
            
            // Replace the collection and quit if IE6
            if ($.browser.msie && $.browser.version.substr(0,1)<7) {
                $sourceParent.html('').append($collection);
                return;
            }

            // Gets called when any animation is finished
            var postCallbackPerformed = 0; // prevents the function from being called more than one time
            var postCallback = function () {
                
                if (!postCallbackPerformed) {
                    postCallbackPerformed = 1;
                    
                    // hack: 
                    // used to be: $sourceParent.html($dest.html()); // put target HTML into visible source container
                    // but new webkit builds cause flickering when replacing the collections
                    $toDelete = $sourceParent.find('> *');
                    $sourceParent.prepend($dest.find('> *'));
                    $toDelete.remove();
                         
                    if (adjustHeightOnCallback) {
                        $sourceParent.css('height', destHeight);
                    }
                    options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection
                    if (typeof callbackFunction == 'function') {
                        callbackFunction.call(this);
                    }                    
                }
            };
            
            // Position: relative situations
            var $correctionParent = $sourceParent.offsetParent();
            var correctionOffset = $correctionParent.offset();
            if ($correctionParent.css('position') == 'relative') {
                if ($correctionParent.get(0).nodeName.toLowerCase() == 'body') {

                } else {
                    correctionOffset.top += (parseFloat($correctionParent.css('border-top-width')) || 0);
                    correctionOffset.left +=( parseFloat($correctionParent.css('border-left-width')) || 0);
                }
            } else {
                correctionOffset.top -= (parseFloat($correctionParent.css('border-top-width')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('border-left-width')) || 0);
                correctionOffset.top -= (parseFloat($correctionParent.css('margin-top')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('margin-left')) || 0);
            }
            
            // perform custom corrections from options (use when Quicksand fails to detect proper correction)
            if (isNaN(correctionOffset.left)) {
                correctionOffset.left = 0;
            }
            if (isNaN(correctionOffset.top)) {
                correctionOffset.top = 0;
            }
            
            correctionOffset.left -= options.dx;
            correctionOffset.top -= options.dy;

            // keeps nodes after source container, holding their position
            $sourceParent.css('height', $(this).height());
            
            // get positions of source collections
            $source.each(function (i) {
                offsets[i] = $(this).offset();
            });
            
            // stops previous animations on source container
            $(this).stop();
            var dx = 0; var dy = 0;
            $source.each(function (i) {
                $(this).stop(); // stop animation of collection items
                var rawObj = $(this).get(0);
                if (rawObj.style.position == 'absolute') {
                    dx = -options.dx;
                    dy = -options.dy;
                } else {
                    dx = options.dx;
                    dy = options.dy;                    
                }

                rawObj.style.position = 'absolute';
                rawObj.style.margin = '0';

                rawObj.style.top = (offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy) + 'px';
                rawObj.style.left = (offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx) + 'px';
            });
                    
            // create temporary container with destination collection
            var $dest = $($sourceParent).clone();
            var rawDest = $dest.get(0);
            rawDest.innerHTML = '';
            rawDest.setAttribute('id', '');
            rawDest.style.height = 'auto';
            rawDest.style.width = $sourceParent.width() + 'px';
            $dest.append($collection);      
            // insert node into HTML
            // Note that the node is under visible source container in the exactly same position
            // The browser render all the items without showing them (opacity: 0.0)
            // No offset calculations are needed, the browser just extracts position from underlayered destination items
            // and sets animation to destination positions.
            $dest.insertBefore($sourceParent);
            $dest.css('opacity', 0.0);
            rawDest.style.zIndex = -1;
            
            rawDest.style.margin = '0';
            rawDest.style.position = 'absolute';
            rawDest.style.top = offset.top - correctionOffset.top + 'px';
            rawDest.style.left = offset.left - correctionOffset.left + 'px';
            
            
    
            

            if (options.adjustHeight === 'dynamic') {
                // If destination container has different height than source container
                // the height can be animated, adjusting it to destination height
                $sourceParent.animate({height: $dest.height()}, options.duration, options.easing);
            } else if (options.adjustHeight === 'auto') {
                destHeight = $dest.height();
                if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
                    // Adjust the height now so that the items don't move out of the container
                    $sourceParent.css('height', destHeight);
                } else {
                    //  Adjust later, on callback
                    adjustHeightOnCallback = true;
                }
            }
                
            // Now it's time to do shuffling animation
            // First of all, we need to identify same elements within source and destination collections    
            $source.each(function (i) {
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    
                    val = options.attribute($(this));
                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                if (destElement.length) {
                    // The item is both in source and destination collections
                    // It it's under different position, let's move it
                    if (!options.useScaling) {
                        animationQueue.push(
                                            {
                                                element: $(this), 
                                                animation: 
                                                    {top: destElement.offset().top - correctionOffset.top, 
                                                     left: destElement.offset().left - correctionOffset.left, 
                                                     opacity: 1.0
                                                    }
                                            });

                    } else {
                        animationQueue.push({
                                            element: $(this), 
                                            animation: {top: destElement.offset().top - correctionOffset.top, 
                                                        left: destElement.offset().left - correctionOffset.left, 
                                                        opacity: 1.0, 
                                                        scale: '1.0'
                                                       }
                                            });

                    }
                } else {
                    // The item from source collection is not present in destination collections
                    // Let's remove it
                    if (!options.useScaling) {
                        animationQueue.push({element: $(this), 
                                             animation: {opacity: '0.0'}});
                    } else {
                        animationQueue.push({element: $(this), animation: {opacity: '0.0', 
                                         scale: '0.0'}});
                    }
                }
            });
            
            $collection.each(function (i) {
                // Grab all items from target collection not present in visible source collection
                
                var sourceElement = [];
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    val = options.attribute($(this));
                    $source.each(function() {
                        if (options.attribute(this) == val) {
                            sourceElement = $(this);
                            return false;
                        }
                    });                 

                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    sourceElement = $source.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                
                var animationOptions;
                if (sourceElement.length === 0) {
                    // No such element in source collection...
                    if (!options.useScaling) {
                        animationOptions = {
                            opacity: '1.0'
                        };
                    } else {
                        animationOptions = {
                            opacity: '1.0',
                            scale: '1.0'
                        };
                    }
                    // Let's create it
                    d = destElement.clone();
                    var rawDestElement = d.get(0);
                    rawDestElement.style.position = 'absolute';
                    rawDestElement.style.margin = '0';
                    rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
                    rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';
                    d.css('opacity', 0.0); // IE
                    if (options.useScaling) {
                        d.css('transform', 'scale(0.0)');
                    }
                    d.appendTo($sourceParent);
                    
                    animationQueue.push({element: $(d), 
                                         animation: animationOptions});
                }
            });
            
            $dest.remove();
            options.enhancement($sourceParent); // Perform custom visual enhancements during the animation
            for (i = 0; i < animationQueue.length; i++) {
                animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
            }
        });
    };
})(jQuery);
/*PAGINATE*/
($.fn.paginate=function(options){var options=jQuery.extend({content:'TBODY TR',limit:5},options);return this.each(function(){var page={};page.parent=$(this),page.content=(page.parent.is('TABLE'))?page.parent.find(options.content):page.parent.children(options.content),page.total=Math.ceil(page.content.size()/options.limit),page.display=page.content.css('display'),page.prev=0,page.next=2;page.content.slice(options.limit).css('display','none').addClass('ui-helper-hidden');$(document.createElement("DIV")).addClass("link-container")[(page.parent.is('TABLE'))?'insertAfter':'appendTo'](this);page.linkContainer=(page.parent.is('TABLE'))?page.parent.next('.link-container:first'):page.parent.find('.link-container:first');$(document.createElement("A")).addClass("pagination-link previous ui-state-default").attr('href','previous').attr('title','Previous page').attr('rel','nofollow').text('<').appendTo(page.linkContainer);for(var num=0;num<page.total;num++){var offset=num+1,min=(offset*options.limit)-(options.limit),max=(offset*options.limit);$(document.createElement("A")).addClass("pagination-link numeric ui-state-default").attr('href',offset).attr('title','Page '+offset+'').attr('rel','nofollow').text(offset).appendTo(page.linkContainer);page[offset]=page.content.slice(min,[max])};$(document.createElement("A")).addClass("pagination-link next ui-state-default").attr('href','next').attr('title','Next page').attr('rel','nofollow').text('>').appendTo(page.linkContainer);page.wraps=page.linkContainer.find('.paginationWrap');page.anchors=page.linkContainer.find('A');page.anchors.bind('mouseenter mouseleave',function(e){this.self=$(this);(e.type==='mouseenter')?this.self.addClass('ui-state-hover'):this.self.removeClass('ui-state-hover')}).eq(1).addClass('ui-state-active');page.anchors.bind('click',function(e){e.preventDefault();if($(this).is('.ui-state-active')){return false}this.siblings=$(this).siblings('.ui-state-active:first');if($(this).is('.previous')){if(page.prev===0){return false};this.link=$(this).siblings('A[href= '+page.prev+']');this.link.add(this.siblings).toggleClass('ui-state-active');page.content.css('display','none').addClass('ui-helper-hidden');page[page.prev].css('display',page.display).removeClass('ui-helper-hidden');page.prev--,page.next--}else if($(this).is('.next')){if(page.next===(page.total+1)){return false};this.link=$(this).siblings('A[href= '+page.next+']');this.link.add(this.siblings).toggleClass('ui-state-active');page.content.css('display','none').addClass('ui-helper-hidden');page[page.next].css('display',page.display).removeClass('ui-helper-hidden');page.prev++,page.next++}else{this.link=$(this);this.link.add(this.siblings).toggleClass('ui-state-active');this.offset=parseInt(this.link.attr('href'));page.content.css('display','none').addClass('ui-helper-hidden');page[this.offset].css('display',page.display).removeClass('ui-helper-hidden');page.prev=this.offset-1,page.next=this.offset+1}});return this})});
/*Twitter*/
(function($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
      outro_text: null,                         // [string]   do you want text AFTER your tweets?
      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
      auto_join_text_default: "i said,",        // [string]   auto text for non verb: "i said" bullocks
      auto_join_text_ed: "i",                   // [string]   auto text for past tense: "i" surfed
      auto_join_text_ing: "i am",               // [string]   auto tense for present tense: "i was" surfing
      auto_join_text_reply: "i replied to",     // [string]   auto tense for replies: "i replied to" @someone "with"
      auto_join_text_url: "i was looking at",   // [string]   auto tense for urls: "i was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null ,                  // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join}{text}",   // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2["tweet_time"] - tweet1["tweet_time"];
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    $.fn.extend({
      linkUrl: replacer(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        return "<a href=\""+url+"\">"+match+"</a>";
      }),
      linkUser: replacer(/@(\w+)/gi, "@<a href=\"http://"+s.twitter_url+"/$1\">$1</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+((s.username && s.username.length == 1) ? '&from='+s.username.join("%2BOR%2B") : '')+'">#$1</a>'),
      capAwesome: replacer(/\b(awesome)\b/gi, '<span class="awesome">$1</span>'),
      capEpic: replacer(/\b(epic)\b/gi, '<span class="epic">$1</span>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function relative_time(date) {
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
      var r = '';
      if (delta < 60) {
        r = delta + ' seconds ago';
      } else if(delta < 120) {
        r = 'a minute ago';
      } else if(delta < (45*60)) {
        r = (parseInt(delta / 60, 10)).toString() + ' minutes ago';
      } else if(delta < (2*60*60)) {
        r = 'an hour ago';
      } else if(delta < (24*60*60)) {
        r = '' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        r = 'a day ago';
      } else {
        r = (parseInt(delta / 86400, 10)).toString() + ' days ago';
      }
      return 'about ' + r;
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .*/im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .*/i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }

    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+"&callback=?";
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/favorites/"+s.username[0]+".json?page="+s.page+"&count="+count+"&callback=?";
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+'&callback=?';
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+'&callback=?';
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      o.avatar_size = s.avatar_size;
      o.avatar_url = item.profile_image_url || item.user.profile_image_url;
      o.retweet = typeof(item.retweeted_status) != 'undefined';
      o.tweet_time = parse_date(item.created_at);
      o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = relative_time(o.tweet_time);
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([o.tweet_raw_text]).linkUrl().linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart().capAwesome().capEpic()[0];

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
      return o;
    }

    return this.each(function(i, widget){
      var list = $('<ul class="tweet_list">').appendTo(widget);
      var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
      var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
      var loading = $('<p class="loading">'+s.loading_text+'</p>');

      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      if (s.loading_text) $(widget).append(loading);
      $(widget).bind("tweet:load", function(){
        $.getJSON(build_api_url(), function(data){
          if (s.loading_text) loading.remove();
          if (s.intro_text) list.before(intro);
          list.empty();

          var tweets = $.map(data.results || data, extract_template_data);
          tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
          list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
              children('li:first').addClass('tweet_first').end().
              children('li:odd').addClass('tweet_even').end().
              children('li:even').addClass('tweet_odd');

          if (s.outro_text) list.after(outro);
          $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
          if (s.refresh_interval) {
            window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
          }
        });
      }).trigger("tweet:load");
    });
  };
})(jQuery);


/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);


/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
'"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
"function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
"image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);



/*jQuery validation plug-in 1.7*/
(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}var validator=$.data(this[0],'validator');if(validator){return validator;}validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){validator.submitButton=this;});}this.submit(function(event){if(validator.settings.debug)event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm);if(validator.submitButton){hidden.remove();}return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!=Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.errorsFor(element).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)this.element(element);else if(element.parentNode.name in this.submitted)this.element(element.parentNode);},highlight:function(element,errorClass,validClass){$(element).addClass(errorClass).removeClass(validClass);},unhighlight:function(element,errorClass,validClass){$(element).removeClass(errorClass).addClass(validClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");validator.settings[eventType]&&validator.settings[eventType].call(validator,this[0]);}$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",delegate).validateDelegate(":radio, :checkbox, select, option","click",delegate);if(this.settings.invalidHandler)$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name)[0];}var rules=$(element).rules();var dependencyMismatch=false;for(method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method",e);throw e;}}if(dependencyMismatch)return;if(this.objectLength(rules))this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)return arguments[i];}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length)this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))return this.findByName(element.name).filter(':checked').length;}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}if(rules.messages){delete rules.messages;}return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(previous.old!==value){previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=(previous.message=response||validator.defaultMessage(element,"remote"));errors[element.name]=$.isFunction(message)?message(value):message;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}else if(this.pending[element.name]){return"pending";}return previous.valid;},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))return"dependency-mismatch";if(/[^0-9-]+/.test(value))return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)nDigit-=9;}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var ajax=$.ajax;var pendingRequests={};$.ajax=function(settings){settings=$.extend(settings,$.extend({},$.ajaxSettings,settings));var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};})(jQuery);;(function($){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){this.addEventListener(original,handler,true);},teardown:function(){this.removeEventListener(original,handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};function handler(e){e=$.event.fix(e);e.type=fix;return $.event.handle.call(this,e);}});};$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});})(jQuery);
