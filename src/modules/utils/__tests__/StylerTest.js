/**
 * Created by janos on 05/09/2016.
 */

import Styler from '../Styler';

describe('Styler', () => {
	let styler;
	beforeEach(()=> {
		styler = new Styler({
			someClassName: {
				someAttribute: 'something',
				somethingElse: 'something else',
				$someCondition: {
					someAttribute: 'something else when someCondition is true'
				}
			}
		});
	});
	it('Should return the basic style when condition is false', () => {
		expect(styler.compose('someClassName', {$someCondition: false})).toEqual({
			someAttribute: 'something',
			somethingElse: 'something else'
		});
	});
	it('Should return the basic style when conditional part is undefined', () => {
		expect(styler.compose('someClassName')).toEqual({
			someAttribute: 'something',
			somethingElse: 'something else'
		});
	});
	it('Should return the basic style composed with conditional part if condition is true', () => {
		expect(styler.compose('someClassName', {$someCondition: true})).toEqual(
			{
				somethingElse: 'something else',
				someAttribute: 'something else when someCondition is true'
			});
	});
});
