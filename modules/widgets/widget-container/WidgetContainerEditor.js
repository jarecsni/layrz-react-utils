'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by janos on 13/08/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var WidgetContainerEditor = function (_React$Component) {
	_inherits(WidgetContainerEditor, _React$Component);

	function WidgetContainerEditor() {
		_classCallCheck(this, WidgetContainerEditor);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetContainerEditor).call(this));

		_this.onChange = _this.onChange.bind(_this);
		_this.onSelectChange = _this.onSelectChange.bind(_this);
		_this.state = {
			widgets: [{ name: 'TextWidget' }],
			added: []
		};
		return _this;
	}

	_createClass(WidgetContainerEditor, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			// register with store
			this.onChange();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			// unregister
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			this.setState({
				// state coming from store
			});
		}
	}, {
		key: 'onSelectChange',
		value: function onSelectChange(e) {
			var selected = e.target.value;
			if (selected) {
				var newAdded = this.state.added.push(selected);
				this.setState({
					added: newAdded
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var currentlySelected = this.state.added;
			var options = this.state.widgets.map(function (w) {
				return _react2.default.createElement(
					'option',
					{ value: w.name },
					w.name
				);
			});
			options.splice(0, 0, _react2.default.createElement(
				'option',
				{ value: '', selected: true },
				'Add new widget'
			));
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					currentlySelected
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'select',
						{ onChange: this.onSelectChange },
						options
					)
				)
			);
		}
	}]);

	return WidgetContainerEditor;
}(_react2.default.Component);

exports.default = WidgetContainerEditor;