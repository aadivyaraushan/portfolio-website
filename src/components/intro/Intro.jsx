import React from 'react'
import "./Intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from 'react'




export default function Intro() {

    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Leader", "Debater", "Web Developer", "Game Developer", "Graphic Designer", "Content Creator", "Creator."],
            typeSpeed: 70,
            loop: false,
        });
        return () => {
            
        }
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="shape"></div>
            <div className="wrapper">
                <h2>Hey, I'm</h2>
                <h1>Aadivya</h1>
                <h3>I'm a <span ref={textRef}></span></h3> 
                {/* 
                - creator(last one)
                - debater 
                - public speaker
                - web developer
                - game developer
                - content creator
                - 
                */}
            </div>
            <a href="#about">
                <img src="../../img/down.png" alt="" />
            </a>
        </div>
    )
}


