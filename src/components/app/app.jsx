import React from "react";
import "./app.css";
import { Header } from "../header";
import { Navbar } from "../navbar";
import { Profile } from "../profile";

export const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};
