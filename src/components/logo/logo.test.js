import React from 'react';
import {mount, shallow} from 'enzyme';
import {Logo} from './';
import {describe, expect, it} from '@jest/globals';

describe('Logo', () => {
    it('should render correctly', () => {
        const component = shallow(<Logo/>);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with ClassName', () => {
        const component = mount(<Logo className="logo"/>);
        expect(component.exists('.logo')).toBe(true);
    });
});
