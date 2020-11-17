import React from 'react';


class Unit6 extends React.Component {
    constructor(props) {
        console.clear();
        console.log('constructor');
        console.log(props); //home 6.1
        super();
        this.state = {
            s1 : 0,
            s2 : props.p1 //home 6.2
        }
        console.log(this.state.s2);

        let s3 = 201; //home 6.2
        console.log(s3); //home 6.2
    }

    buttonHandler = () => {
        // console.log('work');
        let val = this.state.s1;
        val++;
        this.setState({ s1 : val });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state');
        return null;
        // return ({"s1" : props.arg})
    }

    componentDidMount() {
        console.log('component did mount');
    }
    componentDidUpdate() {
        console.log('component did update');
    }

    render (){
        console.log('render 1');
        return(
            <>
                {console.log('render 2')}
                <div>
                    <button onClick = {this.buttonHandler}>Push</button>
                </div>
                <div>
                    {this.state.s1}
                </div>
                <hr/>
                <div>
                    <p>home 6.3</p>
                    {this.state.s2}
                </div>
                <div>
                </div>
                <hr/>
            </>
        )
    }
}

export default Unit6;