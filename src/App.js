import React, { Component } from 'react';
import classes from './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import styled from 'styled-components';

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

    // const StyledButton = styled.button`
    //   background-color: ${props => props.alt?'red':'green'};
    //   color: white;
    //   font: inherit;
    //   border: 1px solid green;
    //   padding: 8px;
    //   cursor: pointer;
    //   &:hover {
    //     background-color: ${props => props.alt?'salmon':'lightgreen'};
    //     color: black;
    //   }
    // `;

    let person = null;
    let btnClasses=[classes.Button];
    btnClasses.push(classes.Red);


    if (this.state.showPerson) {
      // style.backgroundColor = 'red';
      person = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
          name={person.name}
          age={person.age}
          click={()=>this.deletePersonHandler(index)}
          key={person.id}
          changed={(event) => this.nameChangeHandler(event,person.id)}
          />
        })}
      </div>);

      // style[':hover'].backgroundColor = 'salmon';
      // style[':hover'].color = 'black';
      }
      const assignedClasses = [];
      if(this.state.persons.length <=2) {
        assignedClasses.push(classes.red);
      }
      if(this.state.persons.length <=1) {
        assignedClasses.push(classes.bold);
      }
      console.log(assignedClasses);

    return (
      //<StyleRoot>
        <div className={classes.App}>
          <h1> Hi, I'm a react app.</h1>
          <p className={assignedClasses.join(' ')}> This is working</p>
          {/* <button onClick={this.switchNameHandler.bind(this, 'Maxi')}>Switch Name</button> */}
          {/* <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>
            Toggle Person
          </StyledButton> */}
          <button className={assignedClasses.join(' ')} onClick={this.togglePersonHandler}>
            Toggle Person
          </button>
          {person}
        </div>
      //</StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React app!'));
  }
}


// export default Radium(App);
export default App;
