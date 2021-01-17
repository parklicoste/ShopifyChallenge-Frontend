import React from 'react';
import {Modal, Button} from 'react-bootstrap'

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
                                <button onClick={(e)=>this.removeMovie(e,movie)}className="btn btn-sm btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className="row-md-6 mt-5 ml-5 pl-5" style={{alignItems: "center"}}>
                <button onClick={(e)=>this.clearAll()}  className="btn ml-5  btn-lg btn-primary"> Nominate</button>
            </div>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                      { this.props.nominations.length != 5 ?
                     <div><p className="text-danger">Error! Sorry, this operation is not permitted until there are 5 movies to nominate. if you dont wish to nominate then press close or cancel</p> </div> : 
                     <div><p className="text">Are you sure you want to nominate these movies</p> </div>}

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    { this.props.nominations.length != 5 ? <div></div> :
                    <Button variant="primary" type="submit" onClick={(e)=>{this.submit(e)}}>
                      Submit
                    </Button>}
                  </Modal.Footer>
              </Modal>
            
        </div>)

    }

}

export default  NominationList;
