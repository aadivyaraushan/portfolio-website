import React from "react"
import "./topbar.scss"
import { useContext } from "react"
import { ThemeContext } from "../../context"

export default function Topbar({ menuOpen, setMenuOpen }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div class={"topbar " + (menuOpen && "active")}>
            <div class="wrapper">
                <div className="left">
                </div>
                <div className="right">                
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"  style={{backgroundColor: darkMode && "white"}}></span>
                        <span className="line2"  style={{backgroundColor: darkMode && "white"}}></span>
                        <span className="line3"  style={{backgroundColor: darkMode && "white"}}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
