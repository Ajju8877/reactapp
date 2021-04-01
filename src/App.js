import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import Admin from "./components/Admin";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user" component={User} />
        <Route exact path="/admin" component={Admin} />
      </Switch>

      <Footer />
    </div>
  );
}
