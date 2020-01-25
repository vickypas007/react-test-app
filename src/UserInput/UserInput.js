import React from 'react';

const userInput =(props) =>{
    const style ={
        border:'2px solid green',
        padding:'10px',
        textAlign:'center'
    }
    return(
    <input style={style} type="text" onChange = {props.changed}
        value={props.username}
        />
    
    );
};

export default userInput;