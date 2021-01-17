import React from 'react';

class MainNav extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            name: ""
        }
    
    }
   
    handleSearch = (event) =>{
        event.preventDefault();
        this.props.onMovieChange(this.state.name);
    }

    searchChange = event =>{
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
        
      }
    //   bg-light

    render(){
        return <div className="row mt-5 pl-5" >
        <div className="col-md-10">
            <nav className="navbar navbar-light ">
                    <div className="container-fluid">
                        {/* <h2 class="navbar-brand ">Movie Name</h2> */}
                        <form className="d-flex input-group" onSubmit={(e)=>{this.handleSearch(e)}}>
                            <h3 className="mr-2" style={{color: "black"}}>Movie name</h3>
                            <input type="name" className="form-control input-text mr-1" placeholder="Search movies...." value={this.state.name} onChange={(e)=>{this.searchChange(e)}} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

    </div>

    }

}

export default  MainNav;
