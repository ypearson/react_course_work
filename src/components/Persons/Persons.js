import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {
// const Persons = (props) =>
// {
  state = '';

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentsWillReceiveProps", props);
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }
  // Can prevent render() calls
  // Instead of checking all prop values, just use PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponetUpdate");
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.click    !== this.props.click   ||
  //     nextProps.changed  !== this.props.changed) {

  //     console.log("[Persons.js] shouldComponetUpdate TRUE"); // Update, its NOT the same
  //     return true;
  //   }
  //   else {
  //     console.log("[Persons.js] shouldComponetUpdate FALSE"); // Don't update, its the same
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message:'snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate");
    console.log("componentDidUpdate", snapshot);
  }

  componentWillUnmount() {
    // Clean up work done here
    console.log("[Persons.js] componentWillUnmount");

  }

  render() {
    console.log("[Persons.js] render");
    return  (
      this.props.persons.map((person, index) => {
      return <Person
      name={person.name}
      age={person.age}
      click={(index)=>this.props.deletePerson(index)}
      key={person.id}
      changed={(event) => this.props.nameChange(event,person.id)}
      />
      })
    );
  }
}

export default Persons;