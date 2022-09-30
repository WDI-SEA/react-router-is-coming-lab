import { Link } from 'react-router-dom'

export default function Houses(props) {
    const houseLinks = props.houses.map(house => {
        return (
            <li key={`houses-${house.id}`}>
                <Link to={`/houses/${house.id}`}>{house.name}</Link>
            </li>
        )
    })

    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {houseLinks}
            </ul>
        </div>
    )
}