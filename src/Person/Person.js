import React from 'react';
import Radium from 'radium';
import styled from 'styled-components';

// import './Person.css';

// ES6

// React component provided by 3rd party library
// style.div returns a react styled div
const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
    width: 450px;
}`

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )
};

// export default Radium(person);
export default person;