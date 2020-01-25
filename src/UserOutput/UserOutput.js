import React from 'react';
import './UserOutput.css';
const userOutput =(props) =>{

    return(
    <div>
        <p className="UserOutput">UserName: {props.username} , Age ={props.age}</p>
        <p> this is second para</p>
        </div>
    );
};

export default userOutput;