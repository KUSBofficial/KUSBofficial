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
// jquery.rollover.js / ver.1.1

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
    $.fn.rollover = function() {
        return this.each(function() {
            // 画像名を取得
            var src = $(this).attr('src');
            //すでに画像名に「_on.」が付いていた場合、ロールオーバー処理をしない
            if (src.match('_on.')) return;
            // ロールオーバー用の画像名を取得（_onを付加）
            var src_on = src.replace(/^(.+)(\.[a-z]+)$/, "$1_on$2");
            // 画像のプリロード（先読み込み）
            $('<img>').attr('src', src_on);
            // スマホ対応
            var onMouseover = ('ontouchstart' in document) ? 'touchstart' : 'mouseenter';
            var onMouseout = ('ontouchstart' in document) ? 'touchend' : 'mouseleave';
            // ロールオーバー処理
            $(this).on(onMouseover,function() {
                 $(this).attr('src', src_on);
            });
            $(this).on(onMouseout,function() {
                 $(this).attr('src', src);
            });
       });
    };
});


}
/*
     FILE ARCHIVED ON 02:01:22 Jul 26, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:14:56 Feb 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 58.293
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.077
  RedisCDXSource: 0.984
  esindex: 0.008
  LoadShardBlock: 41.05 (3)
  PetaboxLoader3.datanode: 75.813 (4)
  CDXLines.iter: 14.448 (3)
  load_resource: 64.938
  PetaboxLoader3.resolve: 20.323
*/