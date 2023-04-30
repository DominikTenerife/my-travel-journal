import React from "react"

import data from "./data.js"
import Card from "./components/Card"
import Header from "./components/Header"

export default function App () {
    console.log(data)
    const cards = data.map(item => {
        return (
            <Card 
            item = {item}
            />
        )
    })
    return (
        
        
        <div>
        < Header />
            {cards}
        </div>
    )
}
