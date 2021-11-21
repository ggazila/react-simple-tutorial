import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const message = 'Hello!';
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {
                    message === 'Hello!' ? 'The message was "Hello!"' : message
                }
                <WelcomeMessage myprop={'some-message'}>Here is some message</WelcomeMessage>
                <CounterWithNameAndSideEffect/>
                <Counter setCount={setCount} count={count}/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function WelcomeMessage({myprop, children}) {
    return (<div>
        <p>{myprop}</p>
        <p>{children}</p>
    </div>)
}

const Counter = ({setCount, count}) => {

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

const CounterWithNameAndSideEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times`);
    }, [])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default App;
