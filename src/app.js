console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

var app = {
    title: 'Some Title',
    subtitle: 'Some subtitle', 
};

var template = (
    <div>
        <h1>{app.title.toUpperCase() + '!'}</h1>
        <p>{app.subtitle + '!'}  </p>
        <ol>
            <li>ah</li>
            <li>no</li>
            <li>oh</li>
            <li>ya</li>
        </ol>
    </div>
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

  