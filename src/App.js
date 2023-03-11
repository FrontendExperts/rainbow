import "./App.css";
import Header from "./components/layout/Header";
import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Hook } from "./components/Hook";
import Fatchapi from "./components/Fatchapi";
import { Footer } from "./components/layout/Footer";
import PageNotFound from "./components/Notfound";
import Signin from "./components/auth/Login";
import Register from "./components/auth/Register";
import { userContext, CountContext } from "./components/contexts/";
import { MyCounter } from "./components/MyCounter";
import Hotel from "./components/Hotel";
import { Helpsupport } from "./components/Help";

function App() {

  const [count, setCount] = useState(0);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  // user data by using database
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // for counter function
  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count ? count - 1 : count);
  }

  return (
    <>
      <BrowserRouter>
        <CountContext.Provider value={{ count, increaseCount, decreaseCount }}>
          <userContext.Provider value={{ user, setUser }}>

            <Header />
            <main className="my-5 mt-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Helpsupport />} />
                <Route path="/hook" element={<Hook />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/mycounter" element={<MyCounter />} />
                <Route path="/fatchapi" element={<Fatchapi />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={!user.fname ? <Signin /> : <Navigate to="/profile" />} />
                <Route path="/profile" element={user.fname ? <Profile /> : <Navigate to="/signin" />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
            <Footer />
          </userContext.Provider>
        </CountContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
