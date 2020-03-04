import React ,{ Fragment } from "react";
// import {movielist} from "../data"
import Etoile from "./ratingetoilees";
import Form from "./model";
import "../App.css";

// handelSubmit = newMovie =>
// movielist=[...movielist,newMovie]

const Cardbytitle = (props)=> {
  console.log( "props movies" , props.movies);
  return (
    <Fragment >
      {
 props.movies.filter(el =>
          el.name.toLowerCase().includes(props.search) 
        )
        .map((el, i) => (
          <ul className="itemmms" key={i}>
            
            <img
              className="imagess"
              src={el.lien}
              width="250px"
              height="250px"
            />
            <li className="title-movie">{el.name}</li>
            <li className="etoillle">
              <Etoile count={el.rating} />
            </li>
          </ul>
        ))}
    </Fragment>
  );
}

export default Cardbytitle;
