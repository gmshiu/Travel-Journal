import React from "react"
import Navbar from "./components/Navbar"
import Places from "./components/Places"
import Footer from "./components/Footer"
import data from "./data"
import "./style.css"

export default function App() {
    const places = data.map(item => {
        return (
            <Places
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
        <Navbar />
        <section className="places-list">
            {places}
        </section>
        <Footer />
        </div>
    )
}