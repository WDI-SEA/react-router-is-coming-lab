import { useParams } from "react-router-dom"

export default function Member(props) {
    const { houseId, memberId } = useParams()

    // find the house
    const foundHouse = props.houses.find(house => house.id === Number(houseId))
    // do error page if house invalid
    if (!foundHouse) {
        return <h1> house id {houseId} is not a house id.</h1>
    }
    // find member 
    const foundMember = foundHouse.people.find(person => person.id === Number(memberId))
    // do error page if member invalid
    if (!foundMember) {
        return <h1>house is {houseId} is good, but member id {memberId} is not so good 🤦‍♂️</h1>
    }
    // in Member.js
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