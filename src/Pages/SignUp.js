import React from "react";
import { Link } from "react-router-dom";
import signImg from "../component/images/Signup.png";
import classes from "./Login.module.css";

const SignUp = () => {
  const submitHandler = () => {};
  return (
    <React.Fragment>
      <div className={classes.container}>
        <img className={classes.image} src={signImg} alt="for design" />
        <div className={classes.main}>
          <h1>Sign to Jewelry</h1>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                required
                id="username"
                placeholder="your name"
              />
            </div>
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
            <div className={classes.control}>
              <label htmlFor="password">Repeat Password</label>
              <input
                type="email"
                required
                id="password"
                placeholder="repeat your password"
              />
            </div>
            <div className={classes.actions}>
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <h4>
            Already have an account?{" "}
            <Link to="/Login" className={classes.pink}>
              Login
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

export default SignUp;
