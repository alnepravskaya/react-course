import React from 'react';
import {shallow, mount} from 'enzyme';
import MoviePage from './';
import Movie from './components/movie';
import {describe, expect, it} from '@jest/globals';

describe('MoviePage', () => {
    it('should render correctly', () => {
        const component = shallow(<MoviePage required={true} match={{params: {id: 1}, isExact: true, path: '', url: ''}}/>);
        expect(component).toMatchSnapshot();
    });

});
