import React from 'react'
import {movielist} from "../data"
import Etoile from './ratingetoilees'
import Form from './model'
import '../App.css'
function carbbyrating(props) {
    return (
         <div>
{/*       
                            <ul className="listem">
                                  {movielist.filter(el=>el.rating>=props.indexet).map((el,i)=> <ul className="itemmms" key={i}>
                                   <img className="imagess" src={el.lien} width='250px'height="250px"/><li className='title-movie'>{el.name}</li> 
                                   <li className='etoillle'><Etoile count={el.rating} /></li>
                                   </ul>  )}
                                   
                
                                    </ul>
                                    <Form className='form' handelSubmit={props.handelSubmit}/> */}
                      </div>
    )
}

export default carbbyrating
