const React = require('react');
const ReactDOMServer = require('react-dom/server');


const element1 = React.createElement(
    'div',
    {className:'question'},
    'Hello! What is your name?'
)

class Answer extends React.Component {
    render() {
        return React.createElement('div', {className:'text'}, ` ${this.props.answer}`);
    }
}

const answer = React.createElement(
    Answer,
    {answer: 'Alena'},
    null
)


class Question extends React.PureComponent {
    render() {
        return React.createElement('div', null, ` ${this.props.question}`);
    }
}

const element3 = React.createElement(
    Question,
    {question: 'I am PureComponent'},
    null
)
const FunctionComponent = () => {
    return React.createElement('div', null, ` I am FunctionComponent`);
}



const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send(ReactDOMServer.renderToString([element1, answer, element3, FunctionComponent()]));
});

app.listen(8080);
