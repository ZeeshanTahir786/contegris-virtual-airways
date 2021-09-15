import React from 'react'
import FlightCard from '../Card';
import Image1 from "../../../assests/images/Madina.jpg"
import Image2 from "../../../assests/images/manchester-3.jpg"
import Image3 from "../../../assests/images/sharjah_green.jpg"
import Image4 from "../../../assests/images/Madina.jpg"

const Cards = () => {
    return (
        <div style={{ display: "grid", gridAutoFlow: "column", gridColumn: "4", paddingTop: "400px" }}>
            {cardLenght.map((prod) => {
                return <FlightCard
                    key={prod.id}
                    title={prod.title}
                    description={prod.description}
                    image={prod.image} />
            })}
        </div>
    )
}

export default Cards;

const cardLenght = [
    {
        id: 1,
        title: "Saudi Arabia",
        description: "Manchester is commonly known as England's second city. Once the world's first industrialized city, it is now a major cultural hub, famous for its architecture, musical exports, scientific and engineering firsts, extensive libraries and glorious sporting history. ",
        image: Image1
    },
    {
        id: 2,
        title: "Manchester",
        description: "Round Trip To Islamabad Manchester is commonly known as England's second city. Once the world's first industrialized city, it is now a major cultural hub, famous for its architecture, musical exports, scientific and engineering firsts, extensive libraries and glorious sporting history.",
        image: Image2
    },
    {
        id: 3,
        title: "Sharjah",
        description: "Round Trip To Islamabad Manchester is commonly known as England's second city. Once the world's first industrialized city, it is now a major cultural hub, famous for its architecture, musical exports, scientific and engineering firsts, extensive libraries and glorious sporting history.",
        image: Image3
    },
    {
        id: 4,
        title: "Toronto",
        description: "Round Trip To Islamabad Manchester is commonly known as England's second city. Once the world's first industrialized city, it is now a major cultural hub, famous for its architecture, musical exports, scientific and engineering firsts, extensive libraries and glorious sporting history.",
        image: Image4
    }
]