import IndividualArtist from "./IndividualArtist"

const ArtistShow = props => {

    const handleClick = () =>{
        const newArtists = [...props.artists]
        newArtists.push({FirstName:'rick'})
        props.setArtists(newArtists)
    }

    return (
        <div>
            <ul>
                {props.artists.map(a =>
                    <IndividualArtist key={a.FirstName} a={a.FirstName}/>
                )}
            </ul>
            <button onClick={handleClick}>Add Rick</button>
        </div>
        
    )
}

export default ArtistShow