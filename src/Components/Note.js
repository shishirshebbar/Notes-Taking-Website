import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

const Note = ({id,text,date,handledeletenote}) => {
  return (
    <div className='Note'>
    <span>{text}</span>
    <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever onClick={()=>handledeletenote(id)} className = "delete" size = '1.5em'/>
    </div>
    </div>
  )
}

export default Note;