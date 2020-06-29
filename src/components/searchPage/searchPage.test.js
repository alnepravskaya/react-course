import React from 'react';
import {mount} from 'enzyme';
import SearchPage from './';
import Search from '../search/';
import Cards from '../cards';
import {describe, expect, it} from '@jest/globals';

describe('SearchPage', () => {
    it('should render correctly', () => {
        const component = mount(<SearchPage/>);
        expect(component).toMatchSnapshot();
    });

    it('should contain Search component on SearchPage', () => {
        const component = mount(<SearchPage/>);
        const search = component.find(Search);
        expect(search.exists()).toBe(true);
    });

});

