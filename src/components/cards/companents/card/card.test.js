import React from 'react';
import { shallow} from 'enzyme';
import {Card} from './';
import {describe, expect, it} from '@jest/globals';

describe('Card', () => {
    const posts = {
        'id': 447365,
        'title': 'Guardians of the Galaxy Vol. 3',
        'tagline': '',
        'vote_average': 0,
        'vote_count': 9,
        'release_date': '2020-05-01',
        'poster_path': 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
        'overview': 'The third film based on Marvel\'s Guardians of the Galaxy.',
        'budget': 0,
        'revenue': 0,
        'genres': [
            'Action',
            'Adventure',
            'Science Fiction'
        ],
        'runtime': null
    };
    it('should render correctly', () => {
        const component = shallow(<Card posts={posts}/>);
        expect(component).toMatchSnapshot();
    });


    it(' function getMovieInfo should be call', () => {
        const component = shallow(<Card posts={posts}/>);
        component.instance().getMovieInfo = jest.fn();
        component.find('Link').simulate('click');
        expect(component.instance().getMovieInfo).toHaveBeenCalled();
    });

    it('should render correctly with ClassName', () => {
        const component = shallow(<Card className="card" posts={posts}/>);
        expect(component.exists('.card')).toBe(true);
    });

});
