import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
// const person = (props) => { 

    render() {
        let props = this.props;
        console.log("[Person.js] render");
        return (
            <div className={classes.Person}>
                <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
                <p>{props.children}</p>
                <input onChange={props.changed} value={props.name}></input>
            </div>
        );
    }
}

export default Person;