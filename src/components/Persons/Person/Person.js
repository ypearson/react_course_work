import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import withClass from './../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
// const person = (props) => {

    render() {
        let props = this.props;
        console.log("[Person.js] render");
        return (
            <Aux>
            {/* <div className={classes.Person}> */}
                <p key="1" onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
                <p key="2">{props.children}</p>
                <input key="3" onChange={props.changed} value={props.name}></input>
            {/* </div> */}
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);