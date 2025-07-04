import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";

const SignIn = () => {
  // const auth = getAuth();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Sign-in successful!",{position:'top-center'});
      console.log(userCredential.user);
      // window.location.href='/';
      navigate('/')
    } catch (error) {
      toast.error(error.message,{position:"top-center"});
    }
  };
  return (
    <Wrapper className="section">
      <div className="login-card">
        <form action="#" onSubmit={handleSignIn}>
          <input
            type="email"
            // className="input1"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            hidden
          />
          <Button type="submit">Sign In</Button>
        </form>

        <h3>
          Don't have an account?
          <NavLink to="/register">Register</NavLink>
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

  .input1 {
    text-transform: lowercase;
  }
  h3 {
    padding: 1rem;
    font-family: "Calibri";
  }
`;
export default SignIn;
