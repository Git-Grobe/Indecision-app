console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

var template = (
    <div>
        <h1>This is JSX from app.js!!!!</h1>
        <p>This is some info!</p>
        <ol>
            <li>ah</li>
            <li>no</li>
            <li>oh</li>
            <li>ya</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Scott Grobe</h1>
        <p>Age: 35</p>
        <p>Location: Randleman</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

  