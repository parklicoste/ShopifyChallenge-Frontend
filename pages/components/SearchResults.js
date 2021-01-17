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

    
    

    render(){
        return (<div className="col-md-6" >
            <div className="row-md-6" style={{textAlign: "center"}}>
                <h2 className="mt-5">Movies list</h2>
            </div>
            <div className="table-responsive  mt-5">
                <table className="table">
                    <thead><tr>
                        <th>Movie</th>
                        <th>Year of Release</th>
                        <th>Add</th>
                        </tr></thead>

                    <tbody>
                        {this.props.searchResults.map((movie, index)=>
                        <tr key={index}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <button onClick={(e)=>this.addMovie(movie.Title, movie.Year)} className="btn btn-sm btn-primary">
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
