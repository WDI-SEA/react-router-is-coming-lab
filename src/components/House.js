import { useParams, Link } from 'react-router-dom'

export default function House(props) {
    const { id } = useParams()
    // look for the id in the houses from props
    const house = props.houses.find(h => h.id.toString() === id)
    console.log(house)
    // if its not found, we will return an error page
    if (!house) {
        return <h1>404 not found</h1>
    }
    // if it is found, we will map a list of links to members
    const memberLinks = house.people.map(person => {
        return (
            <li key={`house-member${person.id}`}>
                <Link to={`/houses/${id}/members/${person.id}`}>{person.name}</Link>
            </li>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>GoT House of {house.name}</h2>
            </div>
            <ul className="list">
                {memberLinks}
            </ul>
        </div>
    )
}