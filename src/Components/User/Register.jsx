import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../../Assests/logo-login.svg";
import cross from "../../Assests/cross-log.svg";

const Register = ({ setShowSign, setShowLogin, setShowRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const sendNewUser = async (number) => {
    try {
      const response = await fetch(
        "https://api.interakt.ai/v1/public/message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic MGRiYUtNMDNSRlFteUJ2VGJTSkVzTVhBNnl6X2sxX2phc2JldjU3OWhSUTo=",
          },
          body: JSON.stringify({
            countryCode: "+91",
            phoneNumber: number,
            type: "Template",
            template: {
              name: "dash_msg12",
              languageCode: "en",
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Something went Wrong");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  async function registerUser(event) {
    event.preventDefault();

    if (!email || !password || !mobile || !name) {
      alert("Please Enter All Details!!!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          mobile,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      try {
        await sendNewUser(mobile);
      } catch (err) {
        console.log(err);
      }
      alert("Successfully registered");

      Cookies.set("user_name", data.newUser.name);
      Cookies.set("user_email", data.newUser.email);
      localStorage.setItem("user_name", data.user.name);
      localStorage.setItem("user_email", data.user.email);
      setShowSign(false);
      setShowLogin(false);

      window.location.reload();
    } else {
      alert(data.error);
    }
  }
  const handlenumchange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setMobile(value);
    }
  };
  return (
    <div className="login-cont">
      <form onSubmit={registerUser} className="login-inner-cont">
        <div className="l-logo-cont">
          <img src={logo} alt="logo" />

          <div className="l-cross-cont" onClick={() => setShowSign(false)}>
            <img src={cross} alt="cross" />
          </div>
        </div>
        <div className="inp-conts">
          <div className="inp-cont">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="l-inp"
            />
          </div>
          <div className="inp-cont">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="l-inp"
            />
          </div>
          <div className="inp-cont">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password(min 6 letters)"
              className="l-inp"
            />
          </div>
          <div className="inp-cont">
            <input
              type="tel"
              value={mobile}
              onChange={handlenumchange}
              placeholder="Phone Number"
              className="l-inp"
            />
          </div>
        </div>
        <button type="submit" className="l-btn">
          SignUp
        </button>
        <div className="l-new">
          Already have an Account?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowSign(false);
              setShowLogin(true);
            }}
          >
            Login
          </b>
        </div>
      </form>
    </div>
  );
};

export default Register;
