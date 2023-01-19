import { Link } from 'react-router-dom'

const Houses = (props) => {
    const housesArr = props.houses.map((house, i) => {
        return <li>
            <Link to={`/houses/${house.id}`} key={`house-${house.id}`}>
                {house.name}
            </Link>
        </li>
    })
    // in Houses.js
    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {housesArr}
            </ul>
        </div>
    )
}
export default Houses