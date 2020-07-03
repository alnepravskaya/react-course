import React from 'react';
import {shallow} from 'enzyme';
import {Movie} from './';
import {describe, expect, it} from '@jest/globals';

describe('Movie', () => {
    it('should render correctly', () => {
        const selectedMovie = {
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
        const component = shallow(<Movie movie={selectedMovie}/>);
        expect(component).toMatchSnapshot();
    });

});
