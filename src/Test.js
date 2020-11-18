import React from 'react';
import Test2 from './Test2';
import {useState} from 'react';


function Test() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);
    const [st1, setSt1] = useState([]); //home 5.1
    const [st2, setSt2] = useState([]); //home 5.2
    const [st3, setSt3] = useState([]); //home 5.3

    let myRef = React.createRef();
    let textRef = React.createRef();  //home5.1

    // dalFOcr
    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }

    let addComment = () => {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myRef.current.value='';
    }

    //home 5.1
    let task1 = () => {
        let inputValue = textRef.current.value;
        let textInput = [...st1, inputValue];
        setSt1(textInput);
        textRef.current.value='';

    }
    //home5.2
    function taks2() {
        let currentSt2 = st2;
        currentSt2++;
        setSt2(currentSt2);
    }
    //home5.3
    function taks3(e) {
        let currentSt3 = st3;
        currentSt3=e.target.value;
        setSt3(currentSt3);
    }
    

    return(
        <>
            <h1>State (function)</h1>
            <div>
                <button onClick = {handler}>This button change state</button>
            </div>
            <div>
                {count % 2 === 0 ? 'even' : 'odd'}
            </div>
            <div>
                {count}
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    {comment.map( (item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
            <hr />

            <Test2 />

            <hr />
            <div>
                <button onClick = {task1}>Home Unit 5.1</button>
            </div>
            <div>
                <input type="text" ref={textRef} />
            </div>
            <div>
                {st1}
            </div>


            <hr />
            <div>
                <p>Home Unit 5.2</p>
            </div>
            <div className="test" onMouseEnter={() => taks2()}></div>
            <div>
                {st2}
            </div>

            <hr />
            <div>
                <p>Home Unit 5.3</p>
            </div>
            <input type="text" onInput={taks3} />
            <div>
                {st3}
            </div>

        </>
    )
}

export default Test;