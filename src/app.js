console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

const app = {
    title: 'Some Title',
    subtitle: 'Some subtitle',
    options: ['One' , 'Two'] 
};

const template = (
    <div>
        <h1>{app.title.toUpperCase() + '!'}</h1>
        {app.subtitle && <p>{app.subtitle + '!'}  </p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        
        <ol>
            <li>ah</li>
            <li>no</li>
            <li>oh</li>
            <li>ya</li>
        </ol>
    </div>
);

const userName = 'Scott';
const userAge = 35;
const userLocation = 'Durham'

const user = {
    name: 'Scott',
    age: 35,
    location: 'Durham'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {'Mercedes-Benz of ' + location}</p>;
    }
}


const template2 = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age + 1}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

  