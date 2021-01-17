import React from 'react';

class NominationList extends React.Component{

    constructor(props)
    {
        super(props);

    }

    
    

    render(){
        return (<div className="col-md-6" >
            <div className="row-md-6" style={{textAlign: "center"}}>
                <h2 className="mt-5">Nominations list</h2>
            </div>
            <div className="table-responsive  mt-5">
                <table className="table">
                    <thead><tr>
                        <th>Movie Title</th>
                        <th>Year of Release</th>
                        <th>Delete</th>
                        </tr></thead>

                    <tbody>
                        {this.props.nominations.map((movie, index)=>
                        <tr key={index}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <button onClick={(e)=>this.addMovie(movie)} className="btn btn-sm btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>)

    }

}

export default  NominationList;
