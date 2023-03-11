import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts";
import { NavLink } from "react-router-dom";



const Signin = () => {
  const [validation, setValidation] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const { setUser } = useContext(userContext);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //*** additional async only for validation
  const submitForm = async (e) => {
    e.preventDefault();
    //   const sendData = {
    //     email:user.email,
    //     password:user.password
    // }

    // ** start if condtion for form validation
    if (await validateForm()) {
      // ** end validation
      setLoading(true);

      //  console.log(sendData)

      axios
        .post(
          "http://192.168.1.4/ReactJS/The_Rainbow_Print/public/backend/php/login.php",
          input
        )
        .then((result) => {
          setLoading(false);
          if (result.data.Status === "200") {
            // window.localStorage.setItem('email', result.data.email);
            console.log(result);
            setUser(result.data);
            navigate(`/profile`);
          } else {
            // alert('Invalid User');
            setErrorMessage(true);
          }
        });
    }
  };

  // ** start if condtion for form validation
  const validateForm = async () => {
    const { email, password } = input;

    setValidation({});
    let messages = {};

    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      messages.email = "please enter valid email";
    }

    if (!password) {
      messages.password = "please enter corract password";
    }

    setValidation(messages);
    return !Object.keys(messages).length;
  };

  return (
    <>
      <section className="text-center">
        <div className="container">
          <h2>Login</h2>
          <div className="col-sm-6 m-auto">
            <form onSubmit={submitForm}>
              <fieldset>
                <div class="mb-3">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={input.email}
                  />
                  <span className="error-message">{validation.email}</span>
                </div>

                <div class="mb-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Create password"
                    onChange={handleChange}
                    value={input.password}
                  />
                  <span className="error-message">{validation.password}</span>
                </div>
                <div className="d-block">
                  {errorMessage ? (
                    <p className="error-message text-center">
                      Please enter correct username or password
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <button type="submit" value="login" class="btn btn-primary">
                  {" "}
                  {loading ? (
                    <>
                      {" "}
                      <span class="spinner-border"></span> Submit
                    </>
                  ) : (
                    <>Submit</>
                  )}
                </button>
              </fieldset>
            </form>

            <div className="mt-4"><p>Not Registered? <NavLink to="/register">Register Here </NavLink></p> </div>

          
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
