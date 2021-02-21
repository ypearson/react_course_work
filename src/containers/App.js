import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

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

    const personIndex = this.state.persons.findIndex(p=> {
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
    let btnClasses='';

    if (this.state.showPerson) {
      persons = (
        <Persons 
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            togglePerson={()=>this.togglePersonHandler()} 
            nameChange={(event, id)=>this.nameChangeHandler(event, id)}/>
      );

      btnClasses = classes.Red;
      }
      const assignedClasses = [];
      if(this.state.persons.length <=2) {
        assignedClasses.push(classes.red);
      }
      if(this.state.persons.length <=1) {
        assignedClasses.push(classes.bold);
      }

      console.log("classes=", classes);

    return (
        <div className={classes.App}>
          <h1> Hi, I'm a react app.</h1>
          <p className={assignedClasses.join(' ')}> This is working</p>
          <button className={btnClasses} onClick={this.togglePersonHandler}>
            Toggle Person
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
