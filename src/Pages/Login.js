import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../component/images/Login.jpg";
import classes from "./Login.module.css";

const Login = () => {
  const submitHandler = () => {};
  return (
    <React.Fragment>
      <div className={classes.container}>
        <img className={classes.image} src={LoginImg} alt="for design" />
        <div className={classes.main}>
          <h1>Login in to Jewelry</h1>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">E-mail</label>
              <input type="email" required id="email" placeholder="@mail.com" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="email"
                required
                id="password"
                placeholder="password"
              />
            </div>
            <div className={classes.actions}>
              <button type="submit">Login</button>
            </div>
          </form>
          <h4>
            Don't have an account?{" "}
            <Link to="/Sign-Up" className={classes.pink}>
              Sign Up
            </Link>
          </h4>
          <Link href="#" className={classes.Link}>
            <h5>Forgot Password?</h5>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
