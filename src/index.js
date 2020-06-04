import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const element1 = React.createElement(
    'div',
    {className:'question', key:'1'},
    'Hello! What is your name?'
);

class Answer extends React.Component {
    render() {
        return React.createElement('div', {className:'text'}, ` ${this.props.answer}`);
    }
}

Answer.propTypes = {
    answer: PropTypes.string
};

const element2 = React.createElement(
    Answer,
    {answer: 'Alena', key:'2'},
    null
);

class Question extends React.PureComponent {
    render() {
        return React.createElement('div', {}, `${this.props.question}`);
    }
}
Question.propTypes = {
    question: PropTypes.string
};

const element3 = React.createElement(
    Question,
    {question: 'Am I PureComponent?', key:'3'},
    null
);
const FunctionComponent = () => {
    return React.createElement('div', { key:'4'}, ' I am FunctionComponent');
};

ReactDOM.render( [element1, element2, element3, FunctionComponent()], document.getElementById('root') );

