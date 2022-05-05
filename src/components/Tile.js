import React, { useState } from 'react'
import hogs from '../porkers_data'
import TileComponent from './TileComponent'

function TileContainer() {

    const [greased, setGreased]= useState(false)
    const [sort, setSort] = useState("None")

    function handleFilterClick() {
        setGreased(!greased)
    }

    const filterAndSortHogs = () => {
        const filtered = hogs.filter((hog)=> {
            if (greased) {
                return hog.greased
            } else {
                return true
            }
        }
        )

            if (sort === "None") {
                return filtered
            } else if (sort === "Name") {
                return filtered.sort((a,b) => {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                })
            } else {
                return filtered.sort((a,b) => {
                if (a.weight > b.weight) {
                    return 1
                } else {
                    return -1
                }
            })
            }
    
}

   const hogTiles = filterAndSortHogs().map((hog) => {
       return  <TileComponent 
        key={hog.name} 
        hog={hog}
       />
    })

    function handleSortChange(event) {
        setSort(event.target.value)
    }
    return(
        <>
            <label for="sort">Sort By:</label>
            <select onChange={handleSortChange} name="sort">
                <option>None</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
            <button onClick={handleFilterClick}>{greased ? "All Hogs" : "Greased Hogs Only"}</button>
            <div className='ui grid container'>
                {hogTiles}
            </div>
        </>

    )
}


export default TileContainer