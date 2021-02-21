import React from 'react';
import Person from './Person/Person'

const Persons = (props) => 
{
  console.log(props);
  return props.persons.map((person, index) => {
    return <Person
    name={person.name}
    age={person.age}
    click={(index)=>props.deletePerson(index)}
    key={person.id}
    changed={(event) => props.nameChange(event,person.id)}
    />
  });
}
export default Persons;