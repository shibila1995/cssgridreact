import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Quotes from "./components/Quotes"
import ButtonText from "./components/ButtonText"
import ImageBox from "./components/ImageBox"
import Header from "./components/Header"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Quotes/>
            <ButtonText/>
            <Header/>
            <ImageBox/>
        </div>
    )
}