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

/* ===================================================================

 * スマホ向けメインメニュー

=================================================================== */
$(function(){
	$(window).on('load resize', function(){
		var windowWidth = $(window).width();
		if ($('#main').css('float') == 'none') {
			$('nav h3').show();
			$('nav ul').hide();
		}else {
			$('nav h3').hide();
			$('nav ul').show();
		}
	});
	$('nav h3').click(function(){
		$(this).toggleClass("menuOpen").next().slideToggle();
	});
});


}
/*
     FILE ARCHIVED ON 05:12:10 Jul 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:14:56 Feb 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 85.708
  exclusion.robots: 0.115
  exclusion.robots.policy: 0.106
  RedisCDXSource: 1.431
  esindex: 0.008
  LoadShardBlock: 68.098 (3)
  PetaboxLoader3.datanode: 81.074 (4)
  CDXLines.iter: 14.188 (3)
  load_resource: 100.661
  PetaboxLoader3.resolve: 38.337
*/