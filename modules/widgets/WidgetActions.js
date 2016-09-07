'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by janos on 13/08/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _WidgetActionTypes = require('./WidgetActionTypes');

var _WidgetActionTypes2 = _interopRequireDefault(_WidgetActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetActions = function () {
	function WidgetActions(dispatcher) {
		_classCallCheck(this, WidgetActions);

		this._dispatcher = dispatcher;
	}

	_createClass(WidgetActions, [{
		key: 'widgetAdded',
		value: function widgetAdded(context, widget) {
			this._dispatcher.dispatch({
				type: _WidgetActionTypes2.default.WIDGET_ADDED_ACTION,
				widget: widget
			});
		}
	}]);

	return WidgetActions;
}();

exports.default = WidgetActions();