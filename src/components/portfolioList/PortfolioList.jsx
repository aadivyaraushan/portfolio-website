import "./PortfolioList.scss"


const PortfolioList = ({id, title, active, setSelected}) => {
    
    return (
        <li 
        className={active ? "porfolioList active" : "portfolioList"} 
        onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}

export default PortfolioList
