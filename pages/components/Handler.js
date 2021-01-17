import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import MainNav from './MainNav';
import SearchResults from './SearchResults'
import axios from 'axios';
import NominationList from './NominationList';
import MaxLimit from './modals/MaxLimit'
import SearchError from './modals/SearchError';

const API =  'http://www.omdbapi.com/?i=tt3896198&apikey=ebc8a66b'

class Handler extends React.Component{

    constructor(props)
    {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            movie: "",
            searchResults: [],
            nominationsList: [],
            banned: [],
            showError: false,
            limitError: false
        }
    }
    componentDidMount(){
        let x=this.state.searchResults, parsedArray = []
        for(var i=0; i<x.length; i++){
            parsedArray.push({ Title: x[i].Title, Year: x[i].Year, imdbID: x[i].imdbID })
        }
        this.setState({
            searchResults: parsedArray
        })

    }

    fetchDataFromApi = (movie) =>{
        if(movie !== ""){
            axios.get(`${API}&s=${movie}`)
        .then((res)=>{
            console.log("API response is",res.data);
            if(res.data.Response === "True"){
                this.setState({
                    searchResults: res.data.Search
                })
                this.componentDidMount();
            }
            else{
                this.handleShow();
            }
          })
        .catch(err =>{
            console.log(err);
            });
        }
        
      }

    addMovies = (movie) =>{
        if(this.state.nominationsList.length ===  5){
            // alert("Error: Cannot add more than 5 movies");
            this.setState({
                limitError: true
            })
        }
        else {
            this.setState(prevState => ({
                nominationsList: [...prevState.nominationsList, movie],
                banned: [...prevState.nominationsList, movie.imdbID]
              }))
        }
      }

      removeMovies = (movie) =>{
        let x = this.state.nominationsList, y = this.state.banned
        x.splice(movie,1)
        y.splice(movie.imdbID, 1)
        this.setState({
            nominationsList: x
            })
        
      }
      clearAll = () =>{
        this.setState({
            movie: "",
            searchResults: [],
            nominationsList: [],
            banned: [],
            showError: false,
            limitError: false
        })
      }

      handleClose() {
        this.setState({ showError: false,
                        limitError: false});
      }
      
      handleShow() {
        this.setState({ showError: true });
      }
      
    

    render(){
        return <div className={styles.container}>
        <Head>
          <title>FrontEnd: Shopify Challenge</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          
        </Head>
        <div className="container-sm " >
            <h1 className="display-1 text-bold mt-5">
              Welcome to the <a href="https://github.com/parklicoste/ShopifyChallenge-Frontend/" target="_blank">Shoppies!</a>
            </h1>
            <MainNav onMovieChange={this.fetchDataFromApi} /> 
            <div className="container-lg">
                <div className="row justify-content-start">
                    <SearchResults searchResults={this.state.searchResults} banList={this.state.banned} updateMovies={this.addMovies}/>

                    <NominationList nominations={this.state.nominationsList} updateNominations={this.removeMovies} nominated={this.clearAll}/>
                </div>
            </div>
            <MaxLimit limitError={this.state.limitError} handleClose={this.handleClose} />
            <SearchError showError={this.state.showError} handleClose={this.handleClose}/>
        </div>
          
        <footer className={styles.footer}>
        <div className="card-footer text-muted justify-content-center">
            copyright@ Khushal Kumar Singh<br></br>
            Code uploaded on GitHub Parklicoste 
        </div>
        </footer>
      </div>
    }

}

export default  Handler;
