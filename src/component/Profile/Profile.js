import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <section>
          <h1>Users Profile</h1>
          <form className={classes.form}>
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

            <div className={classes.actions}>
              <button type="submit">Save Information</button>
            </div>
          </form>
        </section>
        <section>
          <h1>Change Password</h1>
          <form className={classes.form}>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input type="email" required id="password" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">New Password</label>
              <input type="email" required id="password" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Repeat your New Password</label>
              <input type="email" required id="password" />
            </div>
            <div className={classes.actions}>
              <button type="submit">Change Password</button>
            </div>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Profile;
