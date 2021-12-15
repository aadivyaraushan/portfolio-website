import React from 'react'
import "./Portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList'
import {useState, useEffect} from 'react'
import {featuredPortfolio, webPortfolio, gamePortfolio, contentPortfolio, miscPortfolio} from "../../data.js"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]); 

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Apps Developed"
        },
        {
            id: "game",
            title: "Games Developed"
        },
        {
            id: "debate",
            title: "Competitions Participated In"
        },
        {
            id: "content",
            title: "Content Created"
        },
        {
            id: "misc",
            title: "Other Miscellaneous Development"
        }
    ]

    useEffect(() => {

        switch(selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "game":
                setData(gamePortfolio)
                break;
            case "content":
                setData(contentPortfolio);
                break;
            case "misc":
                setData(miscPortfolio);
                break;
            default:
                setData(featuredPortfolio)
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
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
