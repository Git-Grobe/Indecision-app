'use strict';

console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

var app = {
    title: 'Some Title',
    subtitle: 'Some subtitle',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title.toUpperCase() + '!'
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle + '!',
        '  '
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
