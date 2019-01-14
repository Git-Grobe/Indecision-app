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
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
);
ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();