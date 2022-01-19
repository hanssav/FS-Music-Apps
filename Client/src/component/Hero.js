import React from 'react'
import { Image } from 'react-bootstrap'
import HeroImage from "../public/images/hero.png"

export default function Hero() {
    return (
        <div className="d-flex justify-content-center" style={{margin: 0, backgroundSize: "contain"}}>
            <Image fluid className='lg' src={HeroImage} style={{backgroundSize: "cover"}} />
        </div>
    )
}
