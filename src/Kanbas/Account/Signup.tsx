import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input className="form-control" placeholder="username" /><br/>
      <input className="form-control" placeholder="password" type="password" /><br/>
      <input className="form-control" placeholder="verify password" type="password" /><br/>
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Sign up </Link><br />
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}
