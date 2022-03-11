var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* =========================================================*/
// jquery.scrollshow.js / ver.1.1

// Copyright (c) 2014 CoolWebWindow
// This code is released under the MIT License
// http://www.coolwebwindow.com/jquery-plugin/rules/

// Date: 2015-12-28
// Author: CoolWebWindow
// Mail: info@coolwebwindow.com
// Web: http://www.coolwebwindow.com

// Used jquery.js
// http://jquery.com/
/* =========================================================*/

$(function($){
    $.fn.scrollshow = function(config) {
        // オプション
        var o = $.extend({
            position : 400 // 表示位置
        }, config);

        var $element = $(this);

        // 要素の非表示
        if ($(window).scrollTop() < o.position){
            $element.hide();
        }
        // スクロールすると表示させる
        $(window).scroll(function(){
            if ($(this).scrollTop() >= o.position) {
                $element.not(':animated').fadeIn();
            } else {
                $element.not(':animated').fadeOut();
            }
        });
    };
});


}
/*
     FILE ARCHIVED ON 08:29:26 Jul 23, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:14:56 Feb 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 152.088
  exclusion.robots: 0.258
  exclusion.robots.policy: 0.241
  cdx.remote: 0.156
  esindex: 0.018
  LoadShardBlock: 117.394 (3)
  PetaboxLoader3.resolve: 88.121 (3)
  PetaboxLoader3.datanode: 59.022 (4)
  CDXLines.iter: 22.681 (3)
  load_resource: 44.476
*/