const element1 = window.React.createElement(
    'div',
    {className:'question'},
    'Hello! What is your name?'
);

class Answer extends window.React.Component {
    render() {
        return window.React.createElement('div', {className:'text'}, ` ${this.props.answer}`);
    }
}

const element2 = window.React.createElement(
    Answer,
    {answer: 'Alena'},
    null
);

class Question extends window.React.PureComponent {
    render() {
        return window.React.createElement('div', null, ` ${this.props.question}`);
    }
}

const element3 = window.React.createElement(
    Question,
    {question: 'Am I PureComponent?'},
    null
);
const FunctionComponent = () => {
    return window.React.createElement('div', null, ' I am FunctionComponent');
};

window.ReactDOM.render( [element1, element2, element3, FunctionComponent()], document.body );

