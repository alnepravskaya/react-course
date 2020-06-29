import React from 'react';
import {shallow} from 'enzyme';
import {Radiogroup} from './';
import {describe, expect, it} from '@jest/globals';

describe('Radiogroup', () => {
    it('should render correctly', () => {
        const buttonsSortBy = [
            {title: 'Release date', value: 'release_date'},
            {title: 'Rating', value: 'vote_average'}
        ];
        const component = shallow(<Radiogroup buttons={buttonsSortBy}/>);
        expect(component).toMatchSnapshot();
    });
});
