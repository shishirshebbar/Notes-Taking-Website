import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handlesearchnote}) =>{
    return(
        <div className="search-note">
            <MdSearch className="search-icon" size = "1.3em"/>
            <input onChange={(event)=>handlesearchnote(event.target.value)} type="text" placeholder="Search"/>
        </div> 
    )

}

export default Search;