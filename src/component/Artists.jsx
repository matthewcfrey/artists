import {useState, useEffect} from 'react'

import ArtistSelect from './ArtistSelect'
import ArtistShow from './ArtistShow'

const Artists = props => {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        fetch("http://www.randyconnolly.com/funwebdev/services/art/artists.php")
        .then(response => response.json())
        .then(data => setArtists(data))
      },[])

    return (
        <div>
            <ArtistSelect artists={artists}/>
            <ArtistShow artists={artists} setArtists={setArtists}/>
        </div>
    )
}

export default Artists