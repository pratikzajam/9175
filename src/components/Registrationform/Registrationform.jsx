import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Registrationform = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const yearOfStudyRef = useRef(null);
  const studentIdRef = useRef(null);

  const handleRegister = (event) => {
    event.preventDefault();
    submitForm();
  };

  const submitForm = async () => {
    try {
      // Extracting values from refs
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        yearOfStudy: yearOfStudyRef.current.value,
        studentId: studentIdRef.current.value,
      };

      const response = await axios.post("https://mit-backend-aruh.onrender.com/api/signup", formData);

      // Success toast
      toast.success(response.data.message || "Registration successful!");

      // Navigate to login page after a short delay (to allow the toast to display)
      setTimeout(() => {
        navigate("/login"); // Replace "/login" with your login route path
      }, 2000); // 2-second delay
    } catch (error) {
      // Error handling
      console.error(error);
      toast.error(
        error.response?.data?.message || "An error occurred during registration."
      );
    }
  };

  return (
    <section className="loginform">
      <div className="container-login">
        <div className="wrapper">
          <div className="heading-login">
            <h1>Sign Up</h1>
            <p>
              Already a user?{" "}
              <span>
                <Link to="/login">Login here</Link>
              </span>
            </p>
          </div>
          <form onSubmit={handleRegister} className="form">
            <label className="label">
              Name
              <input type="text" name="name" ref={nameRef} className="input" />
            </label>
            <label className="label">
              Email
              <input type="text" name="email" ref={emailRef} className="input" />
            </label>
            <label className="label">
              Password
              <input type="password" name="password" ref={passwordRef} className="input" />
            </label>
            <label className="label">
              Year Of Study
              <input type="text" name="yearOfStudy" ref={yearOfStudyRef} className="input" />
            </label>
            <label className="label">
              Student ID
              <input type="text" name="studentId" ref={studentIdRef} className="input" />
            </label>
            <p className="forgot-pass">
              By signing up you agree to our{" "}
              <span>
                <Link to="/termsNconditions">terms & conditions</Link>
              </span>
            </p>
            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Registrationform;
