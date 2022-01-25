import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="row" style={({ maxWidth: "100%" }, { margin: "10px" })}>
        <div className="col-md-6 user-profile">
          <div className="row">
            <h1>Users Profile</h1>
            <div className="col-md-12">
              <form action="">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="username">Your Password</label>
                    <input
                      type="password"
                      required
                      id="old-password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      required
                      id="password"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password-confirmation">
                      Repeat your New Password
                    </label>
                    <input
                      type="password"
                      required
                      id="password-confirmation"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <div className={classes.actions}>
                      <button type="submit">Save Information</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 user-profile">
          <div className="row">
            <h1>Change Password</h1>
            <div className="col-md-12">
              <form action="">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="old-password">Your Password</label>
                    <input
                      type="password"
                      required
                      id="old-password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      required
                      id="password"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password-confirmation">
                      Repeat your New Password
                    </label>
                    <input
                      type="password"
                      required
                      id="password-confirmation"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <div className={classes.actions}>
                      <button type="submit">Change Password</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
