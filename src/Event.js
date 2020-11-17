import React from 'react';
import './Event.css';
import {useState} from 'react';


function Event() {

    // let a = 5;
    let textInput = React.createRef();
    let textOut = React.createRef();
    const [output, setOutput] = useState('hello');

    function f1(arg) {
        console.log('f1 work' + arg);
        alert('sdfs');
    }


    function task1() {
        console.log('task2');
    }


    // function f2() {
    //     console.log('move');
    //     alert('sdfsdddd');

    // }
    function showInput(e) {
        console.log('input');
        // console.log(this.value); //!
        // console.log(e.target.value);
        console.log(textInput.current.value);
        textOut.current.innerHTML=textInput.current.value;
        setOutput(textInput.current.value);
    }

    return(
        <>
            <div className="b-ev">
                <h2 className="ev">Event</h2>
                <section>
                    <h2>Button</h2>
                    <button onClick={() => f1(1)}>Push</button>
                </section>

                <section>
                    <h2>Double click + mouse move</h2>
                    <div className="test" onDoubleClick={() => f1(2)}></div>
                </section>

                <section>
                    <h2>Input</h2>
                    <input type="text" onInput={showInput} ref={textInput} defaultValue='hi' />
                    <p ref={textOut}></p>
                    <h3>{output}</h3>
                </section>
                
                <section className="home">
                    <h2>Button home1</h2>
                    <button className="task-1" onClick={() => task1()}>Push home1</button>
                </section>
            </div>
        </>
    );
}

export default Event;