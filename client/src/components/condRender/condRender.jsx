import React, {useState} from "react";
import "../../styles/condRender.css";

//import Login from "./Login";
//var userIsRegistered = true;
// const currentTime = new Date().getHours();
// console.log(currentTime);

function App(props) {
  const [headingText, setHeadingText] = useState("Hello")
  const [buttonBackColor, setButtonBackColor] = useState("white")
  const [fullAccount, setFullAccount] = useState({
    fName: "",
    lName: "",
    email: ""
  })
  const [headerName, setHeaderName] = useState("")
    function handleClick(){
      setHeaderName(name)
    }
  function checkEmpty(event){
    if(fullAccount.fName == ""){
      setHeadingText("Please fill the first name")
      event.preventDefault();
      return false;
    }else if(fullAccount.lName == ""){
      setHeadingText("Please fill the last name")
      event.preventDefault();
      return false;
    }else if(fullAccount.email == ""){
      setHeadingText("Please fill the email")
      event.preventDefault();
      return false;
    }
    else{
      setHeadingText("Submitted")
      return true;
    }
  }
  function changeStyle(isOver){
    setButtonBackColor(isOver ? "black" : "white");
  }
  function handleChange(event){
    const {value, name} = event.target;
    
    setFullAccount (prev =>{
        return{
          ...prev,
          [name]: value
        }  
    })
  }
  return (
    <div className="container">
        <h1>{headingText} {fullAccount.fName} {fullAccount.lName}</h1>
        <h2>{props.fruits} {fullAccount.email}</h2> 
        <form action="http://localhost:3000/addUser" method="POST" onSubmit={() => checkEmpty()}>
          <input 
            onChange={handleChange} 
            name="fName"
            type="text" id = "fname" placeholder="First name" 
            value={fullAccount.fName}
          />
           <input 
            onChange={handleChange} 
            name="lName"
            type="text" id = "lname" placeholder="Last name"  
            value={fullAccount.lName}
          />
           <input 
            onChange={handleChange} 
            name="email"
            type="text" id = "email" placeholder="Email"  
            value={fullAccount.email}
          />

          <button 
            id = "button-submit" type="submit"
            onClick={handleClick} 
            onMouseOver={() => changeStyle(true)} onMouseOut={() => changeStyle(false)} 
            style={{backgroundColor: buttonBackColor}}>
            Submit
          </button>
        </form>
        
        {/* {
            userIsRegistered ? <Login buttonText = "Login" LoggedIn = {true} onclickAction = ""/> : <Login buttonText = "Register" LoggedIn = {false}/>
        } */}
        <a href="/emojipedia">Get to emojis</a>
    </div>
  );
}

export default App;