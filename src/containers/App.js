import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// onClick event
// https://reactjs.org/docs/events.html#mouse-events

class App extends Component {
  state = {
    persons:[
      {id:0, name: 'Max',       age: 28},
      {id:1, name: 'Manu',      age: 29},
      {id:2, name: 'Stephanie', age: 26},
    ],
    showPerson: false
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  deletePersonHandler = (personIndex) => {
    console.log(personIndex);
    // const persons = this.state.persons.slice() copy
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons 
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            togglePerson={()=>this.togglePersonHandler()} 
            nameChange={(event, id)=>this.nameChangeHandler(event, id)}/>
      );
    }
    
    console.log("classes=", classes);

    let cockpit=(
      <Cockpit
      title={this.props.appTitle} 
      show = {this.state.showPerson}
      persons={this.state.persons} 
      click={this.togglePersonHandler}></Cockpit>
    );

    return (
        <div className={classes.App}>
          {cockpit}
          {persons}
        </div>
    );
  }
}

export default App;
