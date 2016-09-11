/**
 * Created by janos on 05/09/2016.
 */

import _ from 'lodash';

export default class Styler {

	constructor(styleObject) {
		this.styleObject = styleObject;
	}

	compose(styleName, conditionalStyle) {
		let conditionalKey;
		if (conditionalStyle) {
			conditionalKey = Object.keys(conditionalStyle)[0];
		}
		let result = _.cloneDeep(this.styleObject[styleName]);
		if (conditionalStyle && conditionalStyle[conditionalKey]) {
			_.merge(result, this.styleObject[styleName][conditionalKey]);
		}
		this._deleteConditionals(result, conditionalKey);
		return result;
	}

	_deleteConditionals(object, key) {
		if (key) {
			delete object[key];
		} else {
			Object.keys(object).forEach(key => {
				if (key.startsWith('$')) {
					delete object[key];
				}
			});
		}
	}
}
