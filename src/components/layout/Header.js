import { React, useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/";
import { MetaTitle, MetaDescription } from "../Meta";

// import LogoImage from "../../../public/./public/assets/images/trp-logo.png";

const Header = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const { user, setUser } = useContext(userContext);

  let navigate = useNavigate();

  const LogOut = () => {
    // localStorage.removeItem("email");
    // localStorage.clear();
    // setLoading(true);
    // navigate(`/signin`);
    setUser({});
  };

  //  useEffect(() => {
  //   console.log(count1,count2)
  // }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    //console.log(pathname)

    MetaTitle(
      pathname === "/"
        ? "Home Page Title"
        : pathname === "/about"
        ? "About New Page Title"
        : pathname === "/contact"
        ? "Contact us New Page Title"
        : pathname === "/hook"
        ? "Hook Page Title"
        : pathname === "/signin"
        ? "Login Page"
        : pathname === "/register"
        ? "Register Page"
        : pathname === "/profile"
        ? "Welcome To My Website {user}"
        : "Unknown Title"
    );
    MetaDescription(
      pathname === "/"
        ? "Home Page Description"
        : pathname === "/about"
        ? "About New Page Description"
        : pathname === "/hook"
        ? "Hook Page Description"
        : pathname === "/contact"
        ? "Contactus New Page Description"
        : pathname === "/signin"
        ? "This is Login Page"
        : pathname === "/register"
        ? "Register Page"
        : pathname === "/profile"
        ? "Welcome To My Website"
        : "Unknown Description"
    );
  }, [pathname]);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  // useEffect(() =>  {
  //   document.addEventListener("mousedown", () => {
  //     setIsActive(false)
  //   });

  // });

  return (
    <>

      <div className="topbar">
      <div class="container-fluid">
        <div className="tobar-content">
         <NavLink className="navbar-brand" to="/">
            <img className="img-fluid" src={'assets/images/trp-logo.png'} alt="logo" />
              {/* <img className="img-fluid" src={LogoImage} /> */}
            </NavLink>


            <div className="topright">
                <div className="call"></div>

            </div>


            <ul className="topbar-menu">
              <li>
              <NavLink
                  className="nav-link btn-help"
                  activeClassName="active"
                  to="/help"
                >
                  <i class="fa-regular fa-circle-question"></i>  Customer Support
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              {/* <li>
              <button type="button" className="btn-primary">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
              </li> */}
              {/* <li>
            
               <button type="button" className="whatsapp-btn">
              <i class="fa-brands fa-whatsapp"></i>
            </button> 
              </li> */}

              {user.fname ? (
                <>

                    <li class="nav-item dropdown">
                      <NavLink class="dropdown-toggle nav-link guest" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="me-2">Guest: {user.fname} </span>
                      </NavLink>

                      <ul class="nav-item dropdown-menu">
                        <li><NavLink
                                          className="nav-link"
                                          activeClassName="active"
                                          to="/profile"
                                        
                                        >
                                          My Account
                                        </NavLink>
                                      </li>
                                      <li className="nav-item" onClick={handleClick}>
                   
                   <button
                     className="btn btn-primary logout"
                     to=""
                     onClick={LogOut}
                   >
                     Logout
                   </button>
                 </li>
                      </ul>
                    </li>



                 

                 
                </>
              ) : (
                <>
                <li className="nav-item">
                  <NavLink 
                    to="/signin"
                  >
                    <button className="btn p-0">Login / Signup</button>
                  </NavLink>
                </li>
                </>
              )}




            </ul>

         
          </div> 
       </div> 


      </div>
      <nav class="navbar navbar-expand-lg bg-dark sticky-top">
        <div class="container-fluid">
          {/* <NavLink className="navbar-brand" to="/">
          <img className="img-fluid" src={'assets/images/trp-logo.png'} alt="logo" />
          </NavLink> */}
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={`navbar-toggler ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarSupportedContent"
            className={`collapse navbar-collapse justify-content-center ${
              isActive ? "active" : ""
            }`}
          >
            <ul className="navbar-nav text-white">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/fatchapi"
                  onClick={handleClick}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Printing Categories
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Graphic Design & Printing
                </NavLink>
              </li>

            

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Stationery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Labels & Stickers
                </NavLink>
              </li>


              {/* <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  activeClassName="active"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  to="/about"
                >
                   Dropdown button
                </NavLink>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Visiting Card
                </NavLink>
                </li>

                <li>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Wedding Card
                </NavLink>
                </li>
               
              </ul>
              </li> */}
















            


              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/fatchapi"
                  onClick={handleClick}
                >
                  Get Fatch API
                </NavLink>
              </li> */}

              <li className="nav-item d-none">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/hook"
                  onClick={handleClick}
                >
                  Child Counter
                </NavLink>
              </li>

              <li className="nav-item d-none">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/hotel"
                  onClick={handleClick}
                >
                  Hotel/Flight
                </NavLink>
              </li>


              <li className="nav-item d-none">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/mycounter"
                  onClick={handleClick}
                >
                  My Counter
                </NavLink>
              </li>
             
              <li className="nav-item online order">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  ONLINE ORDER
                </NavLink>
              </li>

            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
