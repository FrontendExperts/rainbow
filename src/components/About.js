import React, {useState} from 'react'

const About = () => {

    const [toggle, setToggle] = useState()
    const [popupStyle, showPopup] = useState("hide");


    const showPopupMsg = () => {
    showPopup("login-popup");    
    setTimeout(() => showPopup("hide"), 3000);
  };

  return (
    <section className='text-center'>
    <div className='container'>
        <h2>This is About Page </h2>

       { toggle ? 
       <>
        <img className="img-fluid" src={'assets/images/default.jpeg'} alt="logo" /> <br />
       <p className='mt-5'>est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla</p>
       </>
       : null

       }
      <button className='btn btn-primary' onClick={()=> setToggle(!toggle)}>Toggle Button</button>

      <button className="btn btn-primary offset-1 " onClick={showPopupMsg}>
        Popup
      </button> 
      <div className={popupStyle}>
        <div className="modal-content">
          <h4>Popup title</h4>
          <p>this is a popup message</p>
        </div>
      </div>


    </div>
 </section>
  )
}
export default About