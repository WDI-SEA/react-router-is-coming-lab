import { useParams } from 'react-router-dom'

export default function Member(props) {
    const { houseId, memberId } = useParams()

    const house = props.gameOfThrones.find(house => house.id.toString() === houseId)
    const person = house.people.find(person => person.id.toString() === memberId)
    console.log(person)
    return (
        <div className="page">
            <div className="header">
                <h2>{person.name}</h2>
            </div>
            <div className="desc">
                <p>{person.description}</p>
            </div>
        </div>
    )
}