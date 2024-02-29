import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

function Footer() {
  return (
<div class="bg-dark mt-5"  data-bs-theme="dark">
     <div class="container-fluid text-center pt-5 pb-4">
    <p class="navbar-brand text-light">Copyright © Your Website 2018</p>
  </div>
  </div>
  );
}

export default Footer;
