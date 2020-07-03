import React from 'react';
import {shallow} from 'enzyme';
import {App} from './';
import {describe, expect, it} from '@jest/globals';

describe('App', () => {
    it('should render correctly', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });

});
