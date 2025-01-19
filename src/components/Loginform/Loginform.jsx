import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import "./loginform.css";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const { updateUser } = useUser();

  // Handle login form submission
  async function handleLogin(event) {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      return toast.error("Please enter both email and password.");
    }

    try {
      setIsLoading(true); // Set loading to true when login starts

      // Send POST request to login API
      const response = await axios.post("https://mit-backend-aruh.onrender.com/api/login", {
        email,
        password,
      });

      // Handle successful login
      if (response.data.status === "success") {
        toast.success(response.data.message);

        // Store the token (for example, in localStorage)
        localStorage.setItem("authToken", response.data.data.token);

        // Store the user object in context
        updateUser(response.data.data.user);

        // Store the user object in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.data.user));

        // Redirect to the home page or any other page after successful login
        navigate("/"); // Replace "/dashboard" with the desired route
      }
    } catch (error) {
      // Handle error (e.g., invalid credentials)
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false); // Set loading to false after the request completes
    }
  }

  return (
    <section className="loginform">
      <div className="container-login">
        <div className="wrapper">
          <div className="heading-login">
            <h1>Sign In</h1>
            <p>
              New User ?{" "}
              <span>
                <Link to="/registration">Create an account</Link>
              </span>
            </p>
          </div>
          <form onSubmit={handleLogin} className="form">
            <label className="label">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </label>
            <p className="forgot-pass">
              Forgot Password ?{" "}
              <span>
                <Link to="/forgot-password">Click here to reset</Link>
              </span>
            </p>
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="loader"></span> // Add loader icon
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginform;
