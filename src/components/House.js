import { Link, useParams } from 'react-router-dom'

const House = (props) => {
    const { id } = useParams()
    const house = props.houses.find(house => house.id.toString() === id)
    // if no house can be found with that id
    if(!house) return <h3>That House has fallen.</h3>

    const members = house.people.map((person, i) => {
        return <li key={`member-${i}`}>
            <Link 
                to={`/houses/${house.id}/members/${person.id}`}
            >
                {person.name}
            </Link>
        </li>
    })
    // in House.js
    return (
        <div className="page">
            <div className="header">
                <h2>House {house.name}</h2>
            </div>
            <ul className="list">
                {members}
            </ul>
        </div>
    )
}
export default House