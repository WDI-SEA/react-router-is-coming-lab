import { Link, useParams } from 'react-router-dom'

export default function House(props) {
    const { id } = useParams()

    const house = props.gameOfThrones.find(house => house.id.toString() === id)
    console.log('house', house)
    const people = house.people.map((person, i) => {
        return (
            <li key={`person-${i}`}>
                <Link to={`/houses/${id}/members/${person.id}`}>{person.name}</Link>
            </li>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                {people}
            </ul>
        </div>
    )
}