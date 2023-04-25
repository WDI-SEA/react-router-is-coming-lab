import { Link, useParams } from "react-router-dom"

export default function House(props) {
    const { id } = useParams()
    // in House.js
    const foundHouse = props.houses.find(house => house.id === Number(id))
    console.log(foundHouse)
    if (!foundHouse) {
        return <h1>house id {id} not valid.</h1>
    }
    const people = foundHouse.people.map(person => {
        return (
            <li key={`person ${person.id}`}>
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