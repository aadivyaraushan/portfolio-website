import React from 'react'
import "./About.scss" 

export default function Contact () {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="" className="img" />
                </div>
                <div className="shape" />
            </div>
            <div className="right">
                <h1 className="title">About me</h1>
                <p className="desc">
                    I'm a high schooler, newbie game developer, intermediate web developer
                    and debater who also does graphic design whenever he needs to. Along 
                    with this, I also adore innovation and I also have a YouTube 
                    channel that I post some cool games/code I've made on. 
                    I participate in competitions about innovation and debate 
                    extensively(a little too much). I find myself enjoying life the most
                    when I'm doing <b>creative work</b>.
                </p>
            </div>
        </div>
    )
}
