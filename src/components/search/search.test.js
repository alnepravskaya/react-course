import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from './';
import {describe, expect, it} from '@jest/globals';

describe('Search', () => {
    it('should render correctly', () => {
        const component = shallow(<Search/>);
        expect(component).toMatchSnapshot();
    });

    it(' function changeActiveButtonSortBy should be call"', () => {
        const submit = jest.fn();
        const component = mount(<Search submit={submit}/>);
        const spy = jest.spyOn(component.instance(), 'changeActiveButtonSortBy');
        component.instance().forceUpdate();
        component.find('[data-key="vote_average"]').simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('change active button', () => {
        const submit = jest.fn();
        const component = mount(<Search submit={submit}/>);
        component.find('[data-key="release_date"]').simulate('click');
        expect(component.find('.active[data-key="release_date"]')).toHaveLength(1);
    });

    it('change input value in state', () => {
        const newValue = 'comedy';
        const component = mount(<Search/>);
        const input = component.find('.input');
        input.simulate('change', {target: {value: newValue}});
        expect(component.state().query).toEqual(newValue);
    });
});



