import React from 'react';
// import { Button } from 'react-bootstrap';

class SearchResults extends React.Component{

    constructor(props)
    {
        super(props);
        
        this.state = {
            results: []
        }
    }

    addMovie = (event, movie) =>{
        event.preventDefault();
        console.log("my movie is:::::", movie)
        this.props.updateMovies(movie);
    }

   
    // checkBannedList = (id) =>{
    //     let x = this.props.banList;
    //     for(var i=0; i<x.length; i++){
    //         if(x[i] === id){
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    
    

    render(){
        return (<div className="col-md-6" >
            <div className="row-md-6" style={{textAlign: "center"}}>
                <h2 className="mt-5">Movies list</h2>
            </div>
            <div className="table-responsive  mt-5">
                <table className="table">
                    <thead><tr>
                        <th>Movie Title</th>
                        <th>Year of Release</th>
                        <th>Add</th>
                        </tr></thead>

                    <tbody>
                        {this.props.searchResults.map((movie, index)=>
                        <tr key={index}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <button disabled={(this.props.banList).includes(movie.imdbID)} onClick={(e)=>this.addMovie(e,movie)} className="btn btn-sm btn-primary">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            
        </div>)

    }

}

export default  SearchResults;
