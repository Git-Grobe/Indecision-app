'use strict';

console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX from app.js!!!!'
    ),
    React.createElement(
        'p',
        null,
        'This is some info!'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'ah'
        ),
        React.createElement(
            'li',
            null,
            'no'
        ),
        React.createElement(
            'li',
            null,
            'oh'
        ),
        React.createElement(
            'li',
            null,
            'ya'
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Scott Grobe'
    ),
    React.createElement(
        'p',
        null,
        'Age: 35'
    ),
    React.createElement(
        'p',
        null,
        'Location: Randleman'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
