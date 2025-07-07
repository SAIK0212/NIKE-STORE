import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";
import "../style/login.css";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Registration successful!.");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      <div className="form-header">
        <p className="form-title">{currentState}</p>
        <hr className="form-underline" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          className="form-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className="form-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="form-password-container">
        <input
          type={showPassword ? "text" : "password"}
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
  onClick={() => setShowPassword(!showPassword)}
  className="toggle-password"
>
  {showPassword ? (
    <svg viewBox="0 0 24 24">
      <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path>
      <circle cx="12" cy="12" r="2.5"></circle>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24">
      <path d="M12 5c-7 0-11 7-11 7s4 7 11 7c2.08 0 3.97-.5 5.6-1.38l2.46 2.46 1.42-1.42-19.8-19.8-1.42 1.42 3.28 3.28c-1.53.96-2.84 2.28-3.87 3.75C1 12 5 19 12 19c2.41 0 4.64-.64 6.6-1.73l1.46 1.46c-2.14 1.31-4.64 2.07-7.06 2.07-7 0-11-7-11-7s4-7 11-7c2.02 0 3.91.46 5.6 1.28L20.85 2 19.43.58 17.1 2.9C15.04 1.8 13.11 1 11 1z"/>
    </svg>
  )}
</span>

      </div>

      <div className="form-footer">
        {currentState === "Login" ? (
          <>
            <p onClick={() => navigate("/forgot-password")}>Forgot Your Password?</p>
            <p onClick={() => setCurrentState("Sign Up")}>Create Account</p>
          </>
        ) : (
          <>
            <p></p>
            <p onClick={() => setCurrentState("Login")}>Login Here</p>
          </>
        )}
      </div>

      <button className="form-button">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
