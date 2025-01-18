import { Link } from "react-router-dom";
import { useRef } from "react"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Registrationform = () => {
  function handleRegister(event) {
    event.preventDefault();
    submitForm();
  }

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const yearOfStudyRef = useRef(null);
  const studentIdRef = useRef(null);

  let submitForm = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name: nameRef,
        email:emailRef,
        password: passwordRef,
        yearOfStudy: yearOfStudyRef,
        studentId: studentIdRef,
      });
     
      toast.success(response.data.message || "Registration successful!");
    } catch (error) {
   
      console.log(error)
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
              Already a user ?{" "}
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
              <input type="text" name="email" ref={emailRef}  className="input" />
            </label>
            <label className="label">
              Password
              <input type="password" name="password" ref={passwordRef}  className="input" />
            </label>
            <label className="label">
              Year Of Study
              <input type="text" name="yearOfStudy" ref={yearOfStudyRef}  className="input" />
            </label>
            <label className="label">
              Student ID
              <input type="text" name="studentId"  ref={studentIdRef}  className="input" />
            </label>
            <p className="forgot-pass">
              By signing up you agree to our{" "}
              <span>
                <Link to="/termsNconditions">terms & conditions</Link>
              </span>
            </p>
            <button className="submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
      {/* Render the ToastContainer */}
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
