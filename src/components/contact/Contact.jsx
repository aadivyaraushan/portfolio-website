import React from 'react'
import "./Contact.scss" 
import Email from "../../img/email.png"
import Instagram from "../../img/instagram.png";
import { useRef, useState, useContext } from "react" 
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

export default function Contact () {
    
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => 
    {
        e.preventDefault();

        emailjs.sendForm('service_7w2gm06', 'template_lc3xmwd', formRef.current, 'user_eulgpND1W1qY9UDCQtFrS')
            .then((result) => {
            console.log(result.text);
            setDone(true);
            }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <div className="left">
                    <h1 className="title">Want to contact me about something?</h1>
                    <div className="info">
                        <div className="item">
                            <img src={Email} alt="" className="icon"/>
                            aadivya.raushan@gmail.com
                        </div>
                        <div className="item">
                            <img src={Instagram} alt="" className="icon" />
                            _kai_memes_
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} />
                        <button>Submit</button>
                        <br /> <br />
                        {done && "Thanks for the message!"}
                    </form>
                </div>
            </div>

            <div className="shape" />
        </div>
    )
}
