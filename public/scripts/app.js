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

var userName = 'Scott';
var userAge = 35;
var userLocation = 'Durham';

var user = {
    name: 'Scott',
    age: 35,
    location: 'Durham'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            'Mercedes-Benz of ' + location
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name.toUpperCase() + '!' : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age + 1
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
