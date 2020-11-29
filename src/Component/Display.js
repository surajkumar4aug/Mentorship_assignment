import React from 'react'
import './Display.css'
function Display({no,title,body}) {
    return (
        <div className="Data">
             <div className="title">
            <h3>{no}.  Title:</h3>
             <h4 >{title}</h4>
             </div>
             <div className="body">
             <h4>Body:</h4>
             <p>{body}</p>
             </div>
        </div>
    );
   
}

export default Display
