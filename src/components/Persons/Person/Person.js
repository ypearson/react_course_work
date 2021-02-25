import React, {Component, Fragment} from 'react';
import propTypes from 'prop-types';
import classes from './Person.css';
import withClass from './../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
// const person = (props) => {

    // runs after render()
    constructor(props) {
        super(props); //must call super!!
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
    // document.querySelector('input').focus(); // once rendered, set focus
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log(this.props);
        let props = this.props;
        console.log("[Person.js] render");
        return (
            <Aux>
            {/* <div className={classes.Person}> */}
                {this.props.isAuth ? <p>Authenticated!</p>:<p>Please login</p>}
                <p key="1" onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
                <p key="2">{props.children}</p>
                <input
                    key="3"
                    // ref={(inputEl)=>{this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={props.changed}
                    value={props.name}></input>
            {/* </div> */}
            </Aux>
        );
    }
}

// Issues warnings if data type is not as specified
Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func,
};

export default withClass(Person, classes.Person);