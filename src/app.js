console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

var app = {
    title: 'Some Title',
    subtitle: 'Some subtitle',
    options: ['One' , 'Two'] 
};

var template = (
    <div>
        <h1>{app.title.toUpperCase() + '!'}</h1>
        {app.subtitle && <p>{app.subtitle + '!'}  </p>}
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
        <ol>
            <li>ah</li>
            <li>no</li>
            <li>oh</li>
            <li>ya</li>
        </ol>
    </div>
);

var userName = 'Scott';
var userAge = 35;
var userLocation = 'Durham'

var user = {
    name: 'Scott',
    age: 35,
    location: 'Durham'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {'Mercedes-Benz of ' + location}</p>;
    }
}


var template2 = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age + 1}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

  