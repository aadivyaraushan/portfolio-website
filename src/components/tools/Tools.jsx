import React from 'react'
import "./Tools.scss"
import ToolsList from '../toolsList/ToolsList'
import {useState, useEffect} from 'react'
import {gameTools, webTools, contentTools} from "../../data.js"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]); 

    const list = [
        {
            id: "game",
            title: "Game Development",
        },
        {
            id: "web",
            title: "Web Development"
        },
        {
            id: "content",
            title: "Content Creation"
        }
    ]

    useEffect(() => {

        switch(selected) {
            case "game":
                setData(gameTools)
                break;
            case "web":
                setData(webTools)
                break;
            case "content":
                setData(contentTools);
                break;
            default:
                setData(webTools)
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Tools</h1>
            <ul>
                {list.map(item => (
                    <ToolsList 
                    title={item.title} 
                    id={item.id} 
                    active={selected ===item.id}
                    setSelected={setSelected}
                    />
                ))}
            </ul>
            
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
            <div className="shape" />
        </div>
    );
}
