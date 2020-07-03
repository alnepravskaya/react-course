import React from 'react';
import {shallow} from 'enzyme';
import {Footer} from './';
import {describe, expect, it} from '@jest/globals';

describe('Footer', () => {
    it('should render correctly', () => {
        const component = shallow(<Footer/>);
        expect(component).toMatchSnapshot();
    });

});
