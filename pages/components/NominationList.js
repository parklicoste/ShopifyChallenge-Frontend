import React from 'react';
import LessLimit from './modals/LessLimit'

class NominationList extends React.Component{

    constructor(props)
    {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }

    }

    handleClose() {
        this.setState({ show: false});
      }
      
      handleShow() {
        this.setState({ show: true });
      }

    removeMovie = (event, movie) =>{
        event.preventDefault();
        this.props.updateNominations(movie);
    }

    clearAll = () =>{
            this.handleShow();
    }

    submit = () =>{
        this.handleClose();
        this.props.nominated();
    }
    

    render(){
        return (<div className="col-md-6" >
            <div style={{height: "550px"}}>
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
                        {this.props.nominations === undefined ?
                        [].map((movie, index)=>
                        <tr key={index}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <button onClick={(e)=>this.removeMovie(e,movie)}className="btn btn-sm btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>) :
                        this.props.nominations.map((movie, index)=>
                        <tr key={index}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <button onClick={(e)=>this.removeMovie(e,movie)}className="btn btn-sm btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            </div>
            <div className="row-md-6 ml-5 pl-5 " style={{alignItems: "center"}}>
                <button onClick={(e)=>this.clearAll()}  className="btn ml-5  btn-lg btn-primary"> Nominate</button>
            </div>
            { this.props.nominations === undefined ? 
            <LessLimit show={this.state.show} handleClose={this.handleClose} limit={0} submit={this.submit}/> : <LessLimit show={this.state.show} handleClose={this.handleClose} limit={this.props.nominations.length} submit={this.submit}/>

    }
            
        </div>)

    }

}

export default  NominationList;
