"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by janos on 13/08/2016.
 */

var Registry = function () {
	function Registry() {
		_classCallCheck(this, Registry);

		this.widgets = {};
	}

	_createClass(Registry, [{
		key: "add",
		value: function add(widget) {
			this.widgets[widget.name] = widget;
		}
	}, {
		key: "get",
		value: function get(name) {
			return this.widgets[name];
		}
	}]);

	return Registry;
}();

exports.default = new Registry();