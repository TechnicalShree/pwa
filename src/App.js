import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import { useEffect } from "react";
import firebase from "./firebase.js";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";
// import { vapid } from "./swDev";

function App() {
  useEffect(() => {
    const messaging = getMessaging(firebase);
    Notification.requestPermission()
      .then((permission) => {
        console.log("This is it :-", permission);
        return getToken(messaging, {
          vapidKey:
            "BFsj_BhdbjVUwTmm_A9Tr26eQ4LTbi0EgApsu-hyeJecXls3m7XHaqWozJdnNiJZArv3qjzWyrXVb5o4cGMaXUY",
        });
      })
      .then((token) => console.log("Token :- ", token))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/user">User</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
