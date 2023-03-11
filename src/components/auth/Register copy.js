import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import swal from 'sweetalert';

const Register = () => {
  const [validation, setValidation] = useState({});
  const [file, setFile] = useState(null);

  let history = useNavigate();
  const [data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // ** start if condtion for form validation
    if (await validateForm()) {
      // ** end validation

      const sendData = {
        fname: data.fname,
        email: data.email,
        phone: data.phone,
        password: data.password,
      };

      console.log(sendData);

      axios
        .post(
          "http://localhost/ReactJS/react-auth0/public/backend/php/insert.php",
          sendData
        )
        .then((result) => {
          if (result.data.status === "Invalid") {
            alert("Invalid User");
            console.log(result.data.status);
          } else {
            history(`/profile`);
          }
        });
    }
  };

  // ** start if condtion for form validation
  const validateForm = async () => {
    const { fname, email, phone, password } = data;

    setValidation({});
    let messages = {};

    if (fname.length < 4) {
      messages.fname = "please enter min 4 charactor";
    }
    if (!fname) {
      messages.fname = "please enter your full name";
    }
    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      messages.email = "please enter valid email";
    }

    if (phone.length < 10) {
      messages.phone = "please enter min 10 number";
    }

    if (phone.length > 10) {
      messages.phone = "please enter max 10 number only";
    }

    if (!phone) {
      messages.phone = "please enter phone/mobile number";
    }

    if (password.length < 6) {
      messages.password = "please enter password min 6 character";
    }

    if (!password) {
      messages.password = "please enter password";
    }

    setValidation(messages);
    return !Object.keys(messages).length;
  };
  // ** end form validation



  // ** start file upload api 
  const UPLOAD_ENDPOINT =
    "http://192.168.40.137/ReactJS/react-auth0/public/backend/php/uploadFile.php";
    async function onSubmitImage(e) {
    e.preventDefault();
    let res = await uploadFile();
    console.log(res.data);
    // swal("Successfully Upload");
    // swal({
    //     title: "Upload",
    //     text: "Successfully",
    //     icon: "success",
    //     dangerMode: true,
    //   })
  }
  function onChange(e) {
    setFile(e.target.files[0]);
  }
  async function uploadFile() {
    const formData = new FormData();
    formData.append("avatar", file);
    return await axios.post(UPLOAD_ENDPOINT, formData);
  }
  // ** end file upload api 

  return (
    <>
      <section className="text-center">
        <div className="container">
          <h2>Register</h2>
          <p>Please fill in the form below</p>
          <div className="col-sm-6 m-auto">
            <form onSubmit={submitForm}>
              <fieldset>
                {/* <p>React File Upload Example - Tutsmake.com</p> */}

                <div className="form-row d-flex mb-3">
                  <div className="form-group me-2">
                    <input
                      type="file"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={onSubmitImage}
                    className="btn btn-submit"
                  >
                    Upload File
                  </button>
                </div>
                

                <div class="mb-3">
                  <input
                    type="text"
                    name="fname"
                    class="form-control"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={data.fname}
                  />
                  <span className="error-message">{validation.fname}</span>
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={data.email}
                  />
                  <span className="error-message">{validation.email}</span>
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    name="phone"
                    class="form-control"
                    placeholder="Enter mobile number"
                    onChange={handleChange}
                    value={data.phone}
                  />
                  <span className="error-message">{validation.phone}</span>
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Create password"
                    onChange={handleChange}
                    value={data.password}
                  />
                  <span className="error-message">{validation.password}</span>
                </div>
                {/* <div class="mb-3">
            <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
                
            </select>
            </div> */}
                {/* <div class="mb-3">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                <label class="form-check-label" for="disabledFieldsetCheck">
                Can't check this
                </label>
            </div>
            </div> */}
                <button type="submit" value="register" class="btn btn-primary">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
