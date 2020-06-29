import React from 'react';
import {shallow} from 'enzyme';
import {ErrorBoundary} from './';
import {describe, expect, it} from '@jest/globals';

describe('errorBoundary', () => {
    it('should render correctly', () => {
        const component = shallow(<ErrorBoundary/>);
        expect(component).toMatchSnapshot();
    });

});
