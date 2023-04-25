import { Link } from "react-router-dom"

export default function Houses(props) {
    // in Houses.js
    const housesListItems = props.houses.map(house => {
        return (
            <li key={`house ${house.id}`}>
                <Link to={`/houses/${house.id}`}>{house.name}</Link>
            </li>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
               {housesListItems}
            </ul>
        </div>
    )
}