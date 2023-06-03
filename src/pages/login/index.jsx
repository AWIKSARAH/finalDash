import React, { useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";


export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const signIn = useSignIn()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    localStorage.setItem(name, value); // update localStorage with input values
  };
  // console.log(loginData);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email: loginData.email,
          password: loginData.password,
        }
      );

      const token = response.data.token;
      signIn(
        {
          token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: loginData.email }
        }
      )
      navigate("/home");
      // store token in localStorage
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-800" style={{ backgroundColor: '#181828' }} href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
      <header className="top-header"></header>

      {/* Dust particle */}
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      {/* Dust particle end */}

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      {/* END Lamp */}

      <section className="error">
        {/* Content */}
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title"></h1>
            <p className="message__text">

              <div className="LoginWrapper">
                <img
                  className="login--logo_above"
                  src={logo}
                  alt="logo of liban francais"
                  width={400}
                />
                <div className="ContentContainer">
                  <form className="login--form" onSubmit={handleLogin}>
                    <img
                      src={logo}
                      className="login--logo_bottom"
                      alt="logo of liban francais"
                      width={400}
                    />
                    <TextField
                      className="text-field"
                      helperText={loginData.email ? " " : "Please enter your email"}
                      label="email"
                      onChange={handleInputChange}
                      name="email"
                    />

                    <TextField
                      className="text-field"
                      id="filled-password-input"
                      label="Password"
                      name="password"
                      helperText={loginData.password ? " " : "Please enter your password"}
                      type="password"
                      onChange={handleInputChange}
                    />


                    <div className="error__nav e-nav">
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        className="login--button e-nav__link"
                      >
                        Login
                      </Button>          </div>
                  </form>
                </div>
              </div>
            </p>
          </div>

        </div>
        {/* END Content
      
      
      */}
      </section>
    </div>

  );
}
