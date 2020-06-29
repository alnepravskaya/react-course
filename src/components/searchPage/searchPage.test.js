import React from 'react';
import {mount} from 'enzyme';
import SearchPage from './';
import Search from '../search/';
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

    it('function submitHandler should be call', () => {
        const component = mount(<SearchPage/>);
        component.instance().submitHandler = jest.fn();
        component.find('form').simulate('submit');
        expect(component.instance().submitHandler).toHaveBeenCalled();
    });

    it('cards should  be array', () => {
        const component = mount(<SearchPage/>);
        expect(component.instance().state.cards).toBeInstanceOf(Array);
    });

    it('cards should  be array1', () => {
        const component = mount(<SearchPage/>);
        component.instance().getMoviesList({query:''});
        expect(component.instance().state.cards.length).toBe(0);
    });

});

