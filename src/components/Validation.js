import React, { useState } from "react";

function Validation(props) {
    const [validationMessages, setValidationMessages] = useState([]);
    const [formData, setFormData] = useState({});
    const handleChange = ({ target }) => {
     setFormData({ ...formData, [target.name]: target.value });
    }
    const handleClick = (evt) => {
        validateForm();
        if (validationMessages.length > 0) {
            evt.preventDefault();
        }
        console.log({"Name" : formData.fullName,"Contact": formData.contact })
    }
    const validateForm = () => {
        const { fullName, contact } = formData;
        setValidationMessages({});
        let messages = {};
        if (!fullName) {
            messages.fullName=  "Name is required";
        }
        if (!contact) {
            messages.contact=  "Contact is required";
            // messages.push("Contact is required");
        }
        setValidationMessages(messages);
    }
    return (
        <div >
            <form>
                <label>Name</label>
                <input value={formData.fullName || ''} onChange={handleChange} type="text" name="fullName" />
                <span className="btn-danger">{validationMessages.fullName}</span>


                <label>Contact</label>
                <input value={formData.contact || ''} onChange={handleChange} type="text" name="contact" />
                <span className="btn-danger">{validationMessages.contact}</span>

                <button type="button" onClick={handleClick}>Save</button>
            </form>
            <br></br>

            {/* <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                <ul>
                    {validationMessages.map(vm => <li key={vm}>{vm}</li>)}
                </ul>
            </div> */}
        </div>);
}

export default Validation;
