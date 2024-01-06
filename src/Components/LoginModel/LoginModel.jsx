import React, { useState } from "react";
import "../../stylesheets/LoginModel.scss";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
// import { setUser } from "../../slices/userSlice";

const LoginModel = ({ isopen, setClose }) => {
  const [number, setNumber] = useState("");
  const [loginType, setLoginType] = useState(true);

  return isopen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Looks like you're new here!</p>
            <p className="Login-des">
              Sign up with your mobile number to get started{" "}
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="number"
            className="Login-input"
            placeholder="Enter Mobile Number "
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and
            <span style={{ color: "blue" }}> Privacy Policy.</span>{" "}
          </p>
          {loginType ? (
            <button
              className="Login-btn"
              // onClick={login}
            >
              Login
            </button>
          ) : (
            <button
              className="Login-btn"
              //  onClick={signup}
            >
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Existing User? Log in
            </p>
          )}
        </div>
        <div className="close" onClick={() => setClose(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default LoginModel;
