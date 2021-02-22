import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClasses = '';
    let assignedClasses = []
    if(props.show) {
        btnClasses = classes.Red;
    } 
    console.log('cp classes=',classes)
    console.log("props.persons.length=", props.persons.length);
    if(props.persons.length <=2 ) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1 ) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> This is working</p>
            <button className={btnClasses} onClick={props.click}>
                Toggle Person
            </button>
        </div>
    );
}

export default cockpit;
