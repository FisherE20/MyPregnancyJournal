import React, { useState } from "react";
import axios from "axios"
// import Container from "../components/Container/index";
// import Col from "../components/Col/index";
// import Row from "../components/Row/index"


function SignIn() {
  const [signinusername, setUsername] = useState();
  const [signinpassword, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + signinusername);
    console.log("password is " + signinpassword);
  };

  const login = (e) => {
    e.preventDefault();
    axios.post(
     "/api/signin",
     {
        email: signinusername,
        password: signinpassword,
        
      }
    ).then((res) => {
      if (res.data != null && res.data.id != null) {
        localStorage.setItem("babyNickname", res.data.nickname)
        window.location="/home";
      } 

    });
  };
      
    
  //   // ).then((res) => console.log(res));

  //   let response = await fetch('/api/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: {
  //       username: signinusername,
  //       password: signinpassword
  //     }
  //   })
  //   return response.json();
  // };

  return (
      <div>
        <div className="mt-4">
          <h2>Sign In</h2>
        </div>
          <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="">
            <div className="medium-6 cell">
            <label>Username
            <input className="form-control" type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
            <div className="medium-6 cell">
            <label>Password
            <input className="form-control" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <a href="/home" className="button" onClick = {login} >Submit</a>
          <p>Not Registered? <a href="/SignUp">Create an Account</a></p>
          </div>
          </div>
            </form>
          </div>
        
    );
  }

export default SignIn;
