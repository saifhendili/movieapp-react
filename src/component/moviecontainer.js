import React, { Component } from 'react'
import {movielist} from "../data"
import Etoile from './ratingetoilees'
import Form from './model'
import Etl from './afficheretl'
import Carbbyrating from './carbbyrating'
import Card from './cardbytitle'
import '../App.css'



class moviecontainer extends Component {
    state={
        movielist ,
        search:"",
     
        indexet:'',
        etoile:['☆','☆','☆','☆','☆']
       
    }
  
    handelChange=(e)=>{
        this.setState({
            search:e.target.value.toLowerCase(),
            indexet:""

        
        }) }  
        handelSubmit = newMovie =>
         this.setState({
            movielist:[...this.state.movielist,newMovie]
        })
        handler=(i)=>this.setState({indexet:i+1})
        

    render() {
        return (
            <div >
                <header className="haidercontainer">
                    <div className="navsearch">
             <input className="inputsearch" type="text"value={this.state.search} onChange={this.handelChange} placeholder="Type movie name to search"/>   
             {/* <button className="serachbutton"onClick={this.changevue}>Search</button> */}
             </div>
             <div className="rating">
                 <p className='ratingetoile'>Minimum rating :</p>
              {  this.state.etoile.map((el,i)=><div className="stars">
              <p  key={i} className='search-etoile'onClick={() => this.handler(i)}>{this.state.indexet===''?'☆':<Etl index={i}count={this.state.indexet}star={this.state.etoile[i]} />}
                  </p>
                  </div>)}
             </div>
             </header>
             <main className="main">
               {
                 this.state.indexet===''?
                 <ul className="listem">
    

                 {this.state.movielist.filter(el=>el.name.toLowerCase().includes(this.state.search)?el:null).map((el,i)=> <ul className="itemmms" key={i}>
                     {
                     }
                 <img className="imagess" src={el.lien} width='250px'height="250px"/><li className='title-movie'>{el.name}</li> 
                 <li className='etoillle'><Etoile count={el.rating} /></li>
                 
                  </ul>  )}
                 

                          
                          <Form className='form' handelSubmit={this.handelSubmit}/>
                            </ul>
                            :
                            <div>
                            <ul className="listem">
                                  {this.state.movielist.filter(el=>el.rating>=this.state.indexet).map((el,i)=> <ul className="itemmms" key={i}>
                                   <img className="imagess" src={el.lien} width='250px'height="250px"/><li className='title-movie'>{el.name}</li> 
                                   <li className='etoillle'><Etoile count={el.rating} /></li>
                                   </ul>  )}
                                   
                
                                    </ul>
                                    <Form className='form' handelSubmit={this.handelSubmit}/>
                      </div>
            // <Card search={this.state.search}  handelSubmit={this.handelSubmit} />:
          
                // <Carbbyrating indexet={this.state.indexet}  handelSubmit={this.handelSubmit} />
              
          
    }   

             </main>
            </div>

        )
    }
}

export default moviecontainer