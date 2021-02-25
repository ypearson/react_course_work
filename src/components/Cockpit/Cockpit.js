import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    // toggleBtnRef.current.click();

    // https://reactjs.org/docs/hooks-reference.html#useeffect
    // The function passed to useEffect will run after the render is committed to the screen.

    useEffect(()=>{
        // runs after every render cycle
        // combines componentDidMount + componentDidUpdate
        console.log("[Cockpit.js] useEffect");
        // Http request...

        //simulated http request
        //const timer =
        // setTimeout(()=>{
        //     alert("Saved data to cloud");
        // },1000)

        // Should only click after render is done
        toggleBtnRef.current.click();

        // The function passed to useEffect may return a clean-up function
        return () => {
            // clearTimeout(timer);
            console.log("[Cockpit.js] Cleanup work in useEffect() 1");
        }
    },[]);//[props.persons]); // only rune the first time, and when its unmounted (removed)

    // Can use again....
    useEffect(()=>{
        alert("[Cockpit.js] useEffect Only once!!")
        return ()=>{
            console.log("[Cockpit.js] Cleanup work in useEffect() 2");
        }
    }); // no dependcies, runs every render cycle

    let btnClasses = '';
    let assignedClasses = []
    if(props.show) {
        btnClasses = classes.Red;
    }
    // console.log('cp classes=',classes);
    // console.log("props.persons.length=", props.persons.length);
    if(props.personsLength <=2 ) {
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1 ) {
        assignedClasses.push(classes.bold);
    }

    console.log("[Cockpit.js] About to return JSX...")
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> This is working</p>
            <button ref={toggleBtnRef} className={btnClasses} onClick={props.click}>
                Toggle Person
            </button>
            <button onClick={props.login}>Log In</button>
        </div>
    );
}

export default React.memo(cockpit);
