import React, { useRef } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../component/images/Login.jpg";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
const Login = () => {
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  let history = useHistory();

  const handleFormSubmit = () => {
    // console.log(this.state);
    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;
    if (enteredEmail === "test@gmail.com" && enteredPassword === "1234") {
      localStorage.setItem("isLogin", 1);
      history.push("/jewelerys");
    }
  };

  // const submitHandler = () => {};
  return (
    <React.Fragment>
      <div className={classes.container}>
        <img className={classes.image} src={LoginImg} alt="for design" />
        <div className={classes.main}>
          <h1>Login in to Jewelry</h1>
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <div className={classes.control}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                required
                id="email"
                placeholder="@mail.com"
                ref={enteredEmailRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                placeholder="password"
                ref={enteredPasswordRef}
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
          <Link to="#" href="#" className={classes.Link}>
            <h5>Forgot Password?</h5>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
