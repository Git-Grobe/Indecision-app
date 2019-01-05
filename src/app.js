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






let count = 0;

const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const reset = () => {
    console.log('reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);


console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

  