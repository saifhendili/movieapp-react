import React from 'react'
import {movielist} from "../data"
import Etoile from './ratingetoilees'
import Form from './model'
import '../App.css'


// handelSubmit = newMovie =>
// movielist=[...movielist,newMovie]

function card(props) {
  
    return (
        <div className="listem">
    
{/* 
{movielist.filter(el=>el.name.toLowerCase().includes(props.search)?el:null).map((el,i)=> <ul className="itemmms" key={i}>
    {
    }
<img className="imagess" src={el.lien} width='250px'height="250px"/><li className='title-movie'>{el.name}</li> 
<li className='etoillle'><Etoile count={el.rating} /></li>

 </ul>  )}




         }
         <Form className='form' handelSubmit={props.handelSubmit}/> */}
           </div>
    )
}

export default card
