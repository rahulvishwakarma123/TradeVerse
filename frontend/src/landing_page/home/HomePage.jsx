import React from 'react'
import Hero from './Hero.jsx'
import Awards from './Awards.jsx'
import Stats from './Stats.jsx'
import Pricing from './Pricing.jsx'
import OpenAccount from '../OpenAccount.jsx'
import Education from './Education.jsx'

const HomePage = () => {
    return (
        <>
            <div className="px-30">
                <Hero></Hero>
                <Awards></Awards>
                <Stats></Stats>
                <Pricing></Pricing>
                <Education></Education>
                <OpenAccount></OpenAccount>
            </div>
        </>
    )
}

export default HomePage