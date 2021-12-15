import React from 'react'
import "./Toggle.scss"
import { useContext } from "react"
import { ThemeContext } from "../../context"


const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

    return (
        <div className="t">
            <img src="https://cdn-icons-png.flaticon.com/512/606/606795.png" alt="" className="icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/606/606807.png" alt="" className="icon" />
            <div className="button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle
