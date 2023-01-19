import { useParams } from 'react-router-dom'

const Member = (props) => {
    const { houseId, memberId } = useParams()
    // console.log(houseId, memberId, "<<<<<")
    const house = props.houses.find(house => house.id.toString() === houseId)
    // console.log(house, ">>>")
    const member = house.people.find(person => person.id.toString() === memberId)
    // console.log(member, "]]]]")
    if(!member) return <h3>Member got KOed</h3>
    // in Member.js
    return (
        <div className="page">
            <div className="header">
                <h2><a
                href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}>{member.name}</a></h2>
            </div>
            <div className="desc">
                <p>{member.description}</p>
            </div>
        </div>
    )
}
export default Member