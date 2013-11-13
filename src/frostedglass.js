/* global html2canvas,jQuery */

/**
 * 毛玻璃效果
 * @author TooBug<i@toobug.net>
 * @version 0.0.1
 */
(function($){

	'use strict';

	var frostedGlass = {};

	var init = function(){
		var dfd = $.Deferred();
		html2canvas(document.body, {
			onrendered: function(canvas) {
				var result = canvas.toDataURL('image/png');
				frostedGlass._background = result;
				dfd.resolve();
			}
		});
		return dfd;
	};

	frostedGlass.render = function($dom,$bgDom){

		var doRender = function(){

			var offset = $dom.offset();
			$bgDom.css({
				'background-image':'url(' + frostedGlass._background + ')',
				'background-position':'-'+offset.left+'px -'+offset.top+'px',
				'-webkit-filter': 'blur(5px)'
			});

		};

		if(!frostedGlass._background){

			init().done(function(){

				doRender($dom);

			});

		}else{
			doRender($dom);
		}
	};

	$(window).on('load',init);
	window.init = init;

	window.frostedGlass = frostedGlass;
	
})(jQuery);
