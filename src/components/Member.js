import { useParams } from 'react-router-dom'

export default function Member(props) {
    const { houseId, memberId } = useParams()
    // find the house from the url params
    const foundHouse = props.houses.find(house => house.id.toString() === houseId)
    // if the house is not found -- return a 404
    if (!foundHouse) {
        return <h1>404 house {houseId} is not a thing</h1>
    }
    // find the member from the url params in the houses's people array
    const foundMember = foundHouse.people.find(person => person.id.toString() === memberId)
    // if the memeber is not found -- return a 404
    if (!foundMember) {
        return <h1>404 member {memberId} is not something I can display</h1>
    }

    return (
        <div className="page">
            <div className="header">
                <h2>{foundMember.name}</h2>
            </div>
            <div className="desc">
                <p>{foundMember.description}</p>
            </div>
        </div>
    )
}