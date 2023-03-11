import React from "react";
import { useState, useContext } from "react";
import {useNavigate } from "react-router-dom";
import { userContext } from "./contexts/";

const Profile = () => {
  const [auth, setAuth] = useState("");
  let navigate = useNavigate(); // Use for Navigate on Previous

  const { user, setUser } = useContext(userContext);

  // useEffect(() => {
  //   // var auth = localStorage.getItem('email');
  //   // setAuth(auth);

  // }, []);
  if (auth === null) {
    navigate(`/signin`);
  }

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  console.log(user);
  return (
    <>
      <section className="text-center">
        <div className="container">
        <h2 className="mb-5">User Information</h2>
          <div className="col-sm-4 mx-auto">
            <div className="profile-img">
          <img src={"http://192.168.1.4/ReactJS/The_Rainbow_Print/public/backend/php/" + user.img_name}
           alt={user.img_name} title="image"/>
           </div>
          <h5> <i class="fa fa-user"></i> : {user.fname}<br /> <br /><i class="fa fa-envelope"></i> : {user.email}</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
