import { useState } from "react";

const AddNotes = ({handleaddnote}) => {
    const[notetext,setnotetext]  = useState('');
    const characterlimit  = 100;//Ensuring the character limit
    const handleChange = (event)=>{
        if(characterlimit-event.target.value.length>=0)//Ensures that the characters added do not exceed the limit and does not display in negative number
            {
        setnotetext(event.target.value);
        }
    } 
    const handlesaveclick = ()=>{
        if(notetext.trim().length>0)//Ensures that an empty note is not added
       {
        handleaddnote(notetext);   
        setnotetext('');//Reset the note
        }    
    }
    return(
        <div className="new-note">
            <textarea
                rows="8"
                cols="10"
                placeholder="Enter a note to add"
                value={notetext}
                onChange={handleChange}></textarea>
        <div className="footer-note">
                <small>{characterlimit-notetext.length} Remaining</small>
                <button className="submit" onClick={handlesaveclick}>Submit</button>
            </div>
            </div>
    )
}
export default AddNotes;