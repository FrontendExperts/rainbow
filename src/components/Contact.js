import { React, useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import  Logo3 from "../assets/images/default.jpeg"
// import Logo2  from "../assets/images/logo.png"

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // ** start if condtion for form validation
  const [validationMessages, setValidationMessages] = useState({});
 // ** end validation

  const form = useRef();
  console.log('form');

  const sendEmail = async (e) => {
    e.preventDefault();


    // ** start if condtion for form validation
    if (await validateForm() ) {
    // ** end validation

    setLoading(true);

    emailjs.sendForm('service_z8yccea', 'template_937zgl4', form.current, 'JdfMFVJfFtl9pkWTd')
      .then((result) => {
          console.log(result.text);
          setValues({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          });
          setLoading(false);
          setStatus('SUCCESS');     
      }, (error) => {
          // console.log(error.text);
          console.log('FAILED...', error);
      });
      e.target.reset();
    }
  };



  function handleInput(e) {
    console.log(e);
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }
  


  const renderAlert = () => (
    <div className="success-msg my-4">
      <p>Your message submitted successfully</p>
    </div>
  )
  


  // ** start if condtion for form validation
  const validateForm = async() => {
    const { user_name,
    user_email,
    subject,
    message } = values;

    setValidationMessages({});
    let messages = {};

    if (user_name.length < 4) {
      messages.user_name=  "please enter min 4 charactor";
    }
    if (!user_name) {
        messages.user_name =  "please enter your name";
    }
    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(user_email)) messages.user_email =  "please enter valid email";
    if (!subject) {
      messages.subject =  "please enter your subject";
    } 
    if (message.length < 50) {
      messages.message =  "please enter min 50 character";
    }
    if (!message) {
        messages.message =  "please enter message";
    }
   
    setValidationMessages(messages);
    return !Object.keys(messages).length;
}
  // ** end form validation


  return (
    <>
      <section className="text-center">
        <div className="container">
        <h1>This is Contact Page</h1>
       
<br /><br />
       


<div className="col-lg-6 mx-auto">

      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
            <legend>Please fill in the form below</legend>
            <div class="mb-3">
            <input type="text"name="user_name" placeholder="Name" value={values.user_name} onChange={handleInput}  class="form-control" />
            <span className="error-message">{validationMessages.user_name}</span>
            </div>
           
            <div class="mb-3">
            <input type="email" className="form-control" pattern="[^ @]*@[^ @]*" placeholder="Email Address" name="user_email" value={values.user_email} onChange={handleInput} />
            <span className="error-message">{validationMessages.user_email}</span>
            </div>
            <div class="mb-3">
            <input type="text" className="form-control" placeholder="Subject" name="subject" value={values.subject} onChange={handleInput} />
            <span className="error-message">{validationMessages.subject}</span>
            </div> 
            <div class="mb-3">
              <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message" value={values.message} onChange={handleInput} ></textarea>
              <span className="error-message">{validationMessages.message}</span>
            </div>
            <button type="submit"  className="btn btn-info">{loading ? <> <span class="spinner-border"></span> Send Message</> : <>Send Message</> } </button>
        </fieldset>
        {status && renderAlert()}
        </form>

        </div>


        </div>
      </section>

   

   

      
    </>
  );
};


export default Contact;
