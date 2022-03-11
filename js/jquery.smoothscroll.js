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
// jquery.smoothscroll.js / ver.1.2

// Copyright (c) 2015 CoolWebWindow
// This code is released under the MIT License
// https://osdn.jp/projects/opensource/wiki/licenses%2FMIT_license

// Date: 2015-12-28
// Author: CoolWebWindow
// Mail: info@coolwebwindow.com
// Web: http://www.coolwebwindow.com

// Used jquery.js
// http://jquery.com/
/* =========================================================*/

$(function($){
    $.fn.smoothscroll = function(config) {
        // オプション
        var o = $.extend({
            easing    : 'swing', // 動作パターン
            speed     : 500,     // スクロールの速度
            margintop : 0,       // スクロール位置の変更
            headerfix : ''       // 固定されているヘッダーのセレクタ
        }, config);

        // #で始まるアンカーをクリックした場合に処理
        $('a[href^=#]',this).click(function() {
            // アンカーの値取得
            var href= $(this).attr('href');
            // 移動先を取得
            var target = $(href == '#' || href == '' ? 'body' : href);
            // 移動先を数値で取得
            if(o.headerfix != ''){
                var navHeight = o.headerfix.outerHeight(true);
                var position = target.offset().top - navHeight  - o.margintop;
            } else {
                var position = target.offset().top - o.margintop;
            }
            // スムーススクロール
            $('html,body').animate({scrollTop:position}, o.speed, o.easing);
            return false;
        });
    };
});


}
/*
     FILE ARCHIVED ON 09:51:39 Jul 20, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:14:56 Feb 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 90.844
  exclusion.robots: 0.136
  exclusion.robots.policy: 0.127
  RedisCDXSource: 2.45
  esindex: 0.009
  LoadShardBlock: 67.957 (3)
  PetaboxLoader3.datanode: 71.557 (4)
  CDXLines.iter: 18.12 (3)
  load_resource: 103.609
  PetaboxLoader3.resolve: 55.706
*/