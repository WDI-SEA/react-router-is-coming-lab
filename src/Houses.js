import { Link } from 'react-router-dom'

export default function Houses(props) {

    const houses = props.gameOfThrones.map((house, i) => {
        return (
            <li key={`house-${i}`}>
                <Link to={`/houses/${house.id}`}>
                    {house.name}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {houses}
            </ul>
        </div>
    )
}