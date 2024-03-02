const ArtistSelect = props => {

    return (
        <div>
            <select>
                {props.artists.map((a,idx) =>
                    <option key={idx + a.FirstName} value={idx}>{a.FirstName}</option>
                )}
            </select><br></br>
        </div>
    )
}

export default ArtistSelect