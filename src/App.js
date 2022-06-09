import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Quotes from "./components/Quotes";
import Button1 from "./components/Button1";
import ImageBox from "./components/ImageBox";
import Header from "./components/Header";
import Button2 from "./components/Button2";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main />
      <Quotes />
      <Button1 />
      <Button2 />
      <ImageBox />
    </div>
  );
}
