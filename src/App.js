import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

function App() {
const[userNameState, setUserNameState] = useState({
   people:[
       {name:"VIcky kumar paswan", age:"24"},
       { name:"Akshay Kumar",  age:"48"},
       { name:"Rani kumari", age:"17"}
   ] 
});
    
 const UserNameChangeHandler = (event) =>{
     setUserNameState({
         people:[
       {name: event.target.value , age:"27"},
       { name:"Akash Kumar",  age:"28"},
       { name:"Anjalee kumari", age:"27"}
   ] 
     })
     
 };   
    
   
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <button onClick={UserNameChangeHandler}>Change Test</button>
      <UserInput changed= {UserNameChangeHandler} username={userNameState.people[0].name} />
      <UserOutput username={userNameState.people[0].name} 
      age ={userNameState.people[0].age}/>
      <UserOutput  username={userNameState.people[1].name }
      age ={userNameState.people[1].age }/>
      <UserOutput username={userNameState.people[2].name }
      age ={userNameState.people[2].age }/>
      
      </header>
    </div>
  );
}

export default App;
