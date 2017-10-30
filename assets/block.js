/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_EditQrCode__ = __webpack_require__(2);



var __ = wp.i18n.__;
var PanelBody = wp.components.PanelBody;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls,
    BlockDescription = _wp$blocks.BlockDescription,
    BlockAlignmentToolbar = _wp$blocks.BlockAlignmentToolbar,
    BlockControls = _wp$blocks.BlockControls,
    ColorPalette = _wp$blocks.ColorPalette,
    Editable = _wp$blocks.Editable,
    children = _wp$blocks.source.children;


registerBlockType('soerenwrede/qr-code-block', {

	title: __('QR Code'),

	category: 'common',

	icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Icon__["a" /* default */], null),

	keywords: [__('Barcode')],

	attributes: {
		data: {
			type: 'string',
			default: 'WordPress'
		},
		size: {
			type: 'integer',
			default: 200
		},
		color: {
			type: 'string',
			default: '#000000'
		},
		bgcolor: {
			type: 'string',
			default: '#ffffff'
		},
		margin: {
			type: 'integer',
			default: 1
		},
		ecclevel: {
			type: 'string',
			default: 'L'
		},
		caption: {
			type: 'array',
			source: children('figcaption')
		},
		align: {
			type: 'string',
			default: 'center'
		}
	},

	getEditWrapperProps: function getEditWrapperProps(attributes) {
		var align = attributes.align;

		if ('left' === align || 'right' === align || 'wide' === align || 'full' === align) {
			return { 'data-align': align };
		}
	},


	edit: function edit(props) {
		var attributes = props.attributes,
		    focus = props.focus,
		    setFocus = props.setFocus,
		    setAttributes = props.setAttributes,
		    className = props.className;
		var align = attributes.align,
		    size = attributes.size,
		    data = attributes.data,
		    margin = attributes.margin,
		    color = attributes.color,
		    bgcolor = attributes.bgcolor,
		    ecclevel = attributes.ecclevel,
		    caption = attributes.caption;


		var updateAlignment = function updateAlignment(nextAlign) {
			return setAttributes({ align: nextAlign });
		};

		var controls = focus && [wp.element.createElement(
			BlockControls,
			{ key: 'blockcontrols' },
			wp.element.createElement(BlockAlignmentToolbar, {
				value: align,
				onChange: updateAlignment
			})
		), wp.element.createElement(
			InspectorControls,
			{ key: 'inspector' },
			wp.element.createElement(
				BlockDescription,
				null,
				wp.element.createElement(
					'p',
					null,
					__('QR Code.')
				)
			),
			wp.element.createElement(InspectorControls.TextareaControl, {
				label: __('Data'),
				value: data,
				onChange: function onChange(newData) {
					return setAttributes({ data: newData });
				},
				help: __('Insert your data.')
			}),
			wp.element.createElement(InspectorControls.RangeControl, {
				label: __('Size'),
				value: size || 200,
				min: 10,
				max: 600,
				step: 10,
				onChange: function onChange(newSize) {
					return setAttributes({ size: newSize });
				},
				allowReset: true,
				help: __('Height and width in px.')
			}),
			wp.element.createElement(
				PanelBody,
				{ initialOpen: false, title: __('Colors') },
				wp.element.createElement(
					'h4',
					null,
					'Code'
				),
				wp.element.createElement(ColorPalette, {
					value: color,
					onChange: function onChange(colorValue) {
						return setAttributes({ color: colorValue });
					}
				}),
				wp.element.createElement(
					'h4',
					null,
					'Background'
				),
				wp.element.createElement(ColorPalette, {
					value: bgcolor,
					onChange: function onChange(colorValue) {
						return setAttributes({ bgcolor: colorValue });
					}
				})
			),
			wp.element.createElement(
				PanelBody,
				{ initialOpen: false, title: __('Margin') },
				wp.element.createElement(InspectorControls.RangeControl, {
					min: 1,
					value: margin,
					onChange: function onChange(newMargin) {
						return setAttributes({ margin: newMargin });
					},
					max: 10,
					allowReset: true
				})
			),
			wp.element.createElement(
				PanelBody,
				{ initialOpen: false, title: __('Error correction') },
				wp.element.createElement(InspectorControls.RadioControl, {
					label: 'ECC Level',
					selected: ecclevel,
					options: [{
						value: 'L',
						label: '7%'
					}, {
						value: 'M',
						label: '15%'
					}, {
						value: 'Q',
						label: '25%'
					}, {
						value: 'H',
						label: '30%'
					}],
					onChange: function onChange(newValue) {
						return setAttributes({ ecclevel: newValue });
					}
				})
			)
		)];

		var focusCaption = function focusCaption() {
			return setFocus({ editable: 'caption' });
		};

		var style = {
			margin: '0 auto'
		};

		return [controls, wp.element.createElement(
			'figure',
			{ key: 'audio', className: className },
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_EditQrCode__["a" /* default */], { attributes: attributes, className: className, key: 'block' }),
			(caption && caption.length || !!focus) && wp.element.createElement(Editable, {
				style: style,
				tagName: 'figcaption',
				placeholder: __('Write caption…'),
				value: caption,
				focus: focus && focus.editable === 'caption' ? focus : undefined,
				onFocus: focusCaption,
				onChange: function onChange(value) {
					return setAttributes({ caption: value });
				},
				inlineToolbar: true
			})
		)];
	},
	save: function save(props) {
		var attributes = props.attributes;
		var align = attributes.align,
		    caption = attributes.caption,
		    size = attributes.size,
		    data = attributes.data,
		    margin = attributes.margin,
		    color = attributes.color,
		    bgcolor = attributes.bgcolor,
		    ecclevel = attributes.ecclevel;


		return wp.element.createElement(
			'figure',
			{ className: align ? 'align' + align : null },
			wp.element.createElement('div', {
				style: { width: size, margin: '0 auto' },
				className: 'qr-code',
				'data-text': data,
				'data-margin': margin,
				'data-color': color,
				'data-bgcolor': bgcolor,
				'data-ecclevel': ecclevel
			}),
			caption && caption.length > 0 && wp.element.createElement(
				'figcaption',
				null,
				caption
			)
		);
	}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_wp$element$Component) {
	_inherits(Icon, _wp$element$Component);

	function Icon() {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	}

	_createClass(Icon, [{
		key: "render",
		value: function render() {
			return wp.element.createElement(
				"svg",
				{
					"aria-hidden": true,
					role: "img",
					focusable: "false",
					className: "dashicon",
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				},
				wp.element.createElement("path", { d: "M7.5 0h-7.5v7.5h7.5v-7.5zm-1.25 6.25h-5v-5h5v5zm-3.75-3.75h2.5v2.5h-2.5v-2.5zm-2.5 17.5h7.5v-7.5h-7.5v7.5zm1.25-6.25h5v5h-5v-5zm1.25 1.25h2.5v2.5h-2.5v-2.5zm10-15v7.5h7.5v-7.5h-7.5zm6.25 6.25h-5v-5h5v5zm-3.75-3.75h2.5v2.5h-2.5v-2.5zm-12.5 6.25h-2.5v2.5h3.75v-1.25h-1.25v-1.25zm6.25 2.5h2.5v2.5h-2.5v-2.5zm-5-2.5h2.5v1.25h-2.5v-1.25zm7.5 6.25h-2.5v1.25h1.25v1.25h1.25v-2.5zm-3.75-6.25v1.25h-1.25v1.25h2.5v-2.5h-1.25zm2.5-3.75h1.25v2.5h-1.25v-2.5zm1.25 5v1.25h2.5v-2.5h-3.75v1.25h1.25zm-2.5-2.5h1.25v1.25h-1.25v-1.25zm2.5 10h2.5v2.5h-2.5v-2.5zm-2.5 0h1.25v2.5h-1.25v-2.5zm2.5-3.75h1.25v1.25h-1.25v-1.25zm0-10v-2.5h-1.25v-1.25h-1.25v5h1.25v-1.25h1.25zm3.75 13.75h1.25v2.5h-1.25v-2.5zm0-2.5h2.5v1.25h-2.5v-1.25zm-1.25 1.25h1.25v1.25h-1.25v-1.25zm-1.25-1.25h1.25v1.25h-1.25v-1.25zm5-2.5v1.25h1.25v1.25h1.25v-2.5h-2.5zm1.25 3.75h-1.25v3.75h2.5v-2.5h-1.25v-1.25zm-6.25-3.75v1.25h3.75v-2.5h-2.5v1.25h-1.25zm2.5-3.75v1.25h2.5v1.25h2.5v-2.5h-5z", fill: "#444" })
			);
		}
	}]);

	return Icon;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var withInstanceId = wp.components.withInstanceId;


function renderQrCode(attributes, id) {
	var data = attributes.data,
	    margin = attributes.margin,
	    color = attributes.color,
	    bgcolor = attributes.bgcolor,
	    ecclevel = attributes.ecclevel;


	var svg = QRCode.generateSVG(data, {
		fillcolor: bgcolor,
		textcolor: color,
		margin: Number(margin),
		ecclevel: ecclevel
	});

	var element = document.getElementById(id);
	if (element) {
		element.innerHTML = '';
		element.appendChild(svg);
	}
}

function QrCode(_ref) {
	var instanceId = _ref.instanceId,
	    attributes = _ref.attributes;

	var id = 'qr-code-' + instanceId;
	var size = attributes.size;


	setTimeout(function () {
		renderQrCode(attributes, id);
	}, 0);
	return wp.element.createElement('div', { style: { width: size, margin: '0 auto' }, id: id });
}

/* harmony default export */ __webpack_exports__["a"] = (withInstanceId(QrCode));

/***/ })
/******/ ]);