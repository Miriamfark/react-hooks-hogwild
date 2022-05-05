import React, { useState } from "react";

function TileComponent({ hog }) {

        const [isClicked, setIsClicked] = useState(false)
        const [isHidden, setIsHidden] = useState(true)
    
        function handleTileClick() {
           setIsClicked(!isClicked)
           setIsHidden(!isHidden)
        }

    return(
        <div onClick={handleTileClick} className="pigTile, ui sixteen wide column">
            <h1>{hog.name}</h1>
            <img src={hog.image} />
            {isClicked ? <p>Specialty:{hog.specialty} Weight:{hog.weight} Greased:{hog.greased ? "Greased" : "Not Greased "}</p> : null }
        </div>
    )
}

export default TileComponent