import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
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
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponetUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message:'snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate");
    console.log("componentDidUpdate", snapshot);
  }

  render() {
    console.log("[Persons.js] render");
    return (
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