import React, { useState ,useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const SignUp = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
 
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Sign-up successful!");
      console.log(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Wrapper className="section">
      <div className="login-card">
            <form action="#" onSubmit={handleSignUp} >
                <input type="text" placeholder='Enter your first name' required/>
                <input type="text" placeholder='Enter your last name' required/>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your email address' required />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter your password' required hidden/>
             <Button type='submit'>Sign Up</Button>
             </form>
            <h3>Already have an account?
              <NavLink to="/login">Sign In</NavLink>
            </h3>
            
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .login-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2.5rem;
    width: 65vw;
  }

  h3 {
    padding: 1rem;
    font-family: "Calibri";
  }
    
`;
export default SignUp;

