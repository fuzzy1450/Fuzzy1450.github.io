/* 
 * jQuery input History. Similar to what you get on irc clients or a shell using up/down arrows.
 *
 * It takes only one argument: A callback that is called when enter is pressed before clearing the line.
 * Usage: $('input').inputHistory(function(value) { alert('enter has been pressed content is : ' + value + !'});
 *
 * Copyright (c) 2014, Alex Duchesne <alex@alexou.net>
 * 
 * Licensed under the MIT license:
 * 	http://opensource.org/licenses/MIT
 */
 
(function($) {
	$.inputHistory = function(element, callback) {

		var plugin = this;
		var input = $(element);

		plugin.callback = callback || function () {};
		var history = plugin.history = [];
		var pos = plugin.pos = 0;

		plugin.init = function() {
			input.on('keydown', function(e) {
				switch (e.keyCode) {
					case 13: /* enter */
						if (input.val().trim() == '') return;
						if (plugin.callback(input.val()) !== false) {
							history.push(input.val());
							pos = history.length;
							input.val('');
						}
						break;

					case 38: /* up */
						if (pos > 0) pos--;
						input.val(history[pos] || '').attr('selectionStart', input.val().length);
						break;

					case 40: /* down */
						if (pos >= history.length) return;
						pos++;
						input.val(history[pos] || '').attr('selectionStart', input.val().length);
						break;
				}
			});
		}
		plugin.init();
	}

	$.fn.inputHistory = function(callback) {
		return this.each(function() {
			if (undefined == $(this).data('inputHistory')) {
				$(this).data('inputHistory', new $.inputHistory(this, callback));
			}
		});
	}
}) (jQuery);