import React from 'react';
import { Navbar, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainNav extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            search:''
        }
    }

    searchChange = event =>{
        this.setState({
          search:event.target.value
        })
      }
    

    render(){
        return <div className="row mt-5">
        <div className="col-md-10">
            <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        {/* <h2 class="navbar-brand ">Movie Name</h2> */}
                        <form className="d-flex input-group">
                        <a className="h3 mr-2" style={{color: "black"}}>Movie Name</a>
                        <input type="text" className="form-control input-text mr-1" placeholder="Search movies...." value={this.state.search} onChange={(e)=>{this.searchChange(e)}} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <button className="btn btn-outline-success" type="submit" onClick={(e)=>{this.handleSearch(e, this.state.search)}}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="row">
                <h3>My search is {this.state.search}</h3>
            </div>
    </div>

    }

}

export default  MainNav;
