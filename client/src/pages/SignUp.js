import React, { useState } from "react";
import axios from "axios";
// import Container from "../components/Container/index";
// import Col from "../components/Col/index";
// import Row from "../components/Row/index";

function Signup() {
  const [signupusername, setUsername] = useState();
  const [signupemail, setEmail] = useState();
  const [signuppassword, setPassword] = useState();
  const [duedate, setDuedate] = useState();
  const [nickname, setNickname] = useState();
  

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("username is " + signupusername);
  //   console.log("email is " + signupemail);
  //   console.log("password is " + signuppassword);
  //   console.log("duedate is " + duedate);
  //   console.log("nickname is " + nickname);
  // };

  const register = (e) => {
    e.preventDefault();
    axios.post(
     "/api/signup",
     {
        username: signupusername,
        email: signupemail,
        password: signuppassword,
        duedate: duedate,
        nickname: nickname
      }
    ).then((res) => console.log(res));
  };

  return (
    <div>
      <div classNameName="mt-4">
        <h2>Sign Up</h2>
      </div>
        <form onSubmit={register}>
        <div classNameName="grid-container">
          <div classNameName="">
          <div classNameName="medium-6 cell">
          <label>Username
          <input classNameName="form-control" type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div classNameName="medium-6 cell">
          <label>Email
          <input classNameName="form-control" type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
          <div classNameName="medium-6 cell">
          <label>Password
          <input classNameName="form-control" type="text" secureTextEntry placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div classNameName="medium-6 cell">
          <label>Baby's Nickname 
          <input classNameName="form-control" type="text" placeholder="Optional" name="nickname" onChange={(e) => setNickname(e.target.value)} />
          </label>
        </div>
        <div classNameName="medium-6 cell">
          <label>Due Date
          <input classNameName="form-control" type="text" placeholder="Optional" name="duedate" onChange={(e) => setDuedate(e.target.value)} />
          </label>
        </div>
      </div>
      <a href="/" classNameName="button" onClick={register}>Submit</a>
      </div> 
      
          </form>
      </div>
  );
}

export default Signup;
