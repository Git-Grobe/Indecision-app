'use strict';

console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

var app = {
    title: 'Some Title',
    subtitle: 'Some subtitle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        app.subtitle + '!',
        '  '
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

// var userName = 'Scott';
// var userAge = 35;
// var userLocation = 'Durham'

// var user = {
//     name: 'Scott',
//     age: 35,
//     location: 'Durham'
// };


// var template2 = (
//     <div>
//         <h1>{user.name.toUpperCase() + '!'}</h1>
//         <p>Age: {user.age + 1}</p>
//         <p>Location: {'Mercedes-Benz of ' + user.location }</p>
//     </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
