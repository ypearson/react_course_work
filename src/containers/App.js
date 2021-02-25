import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

// onClick event
// https://reactjs.org/docs/events.html#mouse-events

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    //Could set this.state here
  }

  state = {
    persons:[
      {id:0, name: 'Max',       age: 28},
      {id:1, name: 'Manu',      age: 29},
      {id:2, name: 'Stephanie', age: 26},
    ],
    showPerson:    false,
    showCockpit:   true,
    changeCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {

    console.log("[App.js] getDerivatedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate")
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

    // This is scheduled, and may not execute immediately
    // this.state may be a older state than anticipated
    this.setState((prevState, props) => {

      return {
        persons:persons,
        changeCounter:prevState.changeCounter+1
         }
        });
    }

  deleteCockpitHandler = () => {
    const showCockpit = this.state.showCockpit;
    this.setState({showCockpit:!showCockpit})
    console.log(this.state);
  }
  deletePersonHandler = (personIndex) => {
    // console.log(personIndex);
    // const persons = this.state.persons.slice() copy
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated:true})
  };

  render() {
    console.log("[App.js] render");
    console.log(this.state);

    let persons = null;
    let cockpit = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            togglePerson={()=>this.togglePersonHandler()}
            nameChange={(event, id)=>this.nameChangeHandler(event, id)}
            isAuth={this.state.authenticated}
            />
      );
    }
    // console.log("classes=", classes);
    if(this.state.showCockpit) {
      cockpit=(
        <Cockpit
        title={this.props.appTitle}
        show={this.state.showPerson}
        personsLength={this.state.persons.length}
        click={this.togglePersonHandler}
        login={this.loginHandler}/>
      );
    }

    return (
        <Aux>
          <button onClick={this.deleteCockpitHandler}>Cockpit toggle</button>
          <AuthContext.Provider
            value={{
              authenticated:this.state.authenticated,
              login: this.loginHandler}}>
            {cockpit}
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
