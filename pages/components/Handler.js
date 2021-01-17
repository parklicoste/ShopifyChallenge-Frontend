import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import MainNav from './MainNav';
import SearchResults from './SearchResults'
import axios from 'axios';
import NominationList from './NominationList';

const API =  'http://www.omdbapi.com/?i=tt3896198&apikey=ebc8a66b'

class Handler extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            movie: "",
            searchResults: [],
            nominationsList: []
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
        axios.get(`${API}&s=${movie}`)
        .then((res)=>{
            console.log("API response is",res.data);
            if(res.data.Response){
                this.setState({
                    searchResults: res.data.Search
                })
                this.componentDidMount();
            }
            else{
                //I'll do alert thing
            }
          })
        .catch(err =>{
            console.log(err);
            });
      }

    addMovies = (movie) =>{
        if(this.state.nominationsList.length ===  5){
            alert("Error: Cannot add more than 5 movies");
        }
        else {
            this.setState(prevState => ({
                nominationsList: [...prevState.nominationsList, movie]
              }))
        }
      }
    

    render(){
        return <div className={styles.container}>
        <Head>
          <title>FrontEnd: Shopify Challenge</title>
          <link rel="icon" href="logo.ico" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          
        </Head>
        <div className="container-sm " >
            <h1 className="display-1 text-bold mt-5">
              Welcome to the <a href="https://github.com/parklicoste/ShopifyChallenge-Frontend/" target="_blank">Shoppies!</a>
            </h1>
            <MainNav onMovieChange={this.fetchDataFromApi} /> 
            <div className="container-lg">
                <div className="row justify-content-start">
                    <SearchResults searchResults={this.state.searchResults} updateMovies={this.addMovies}/>
                    <NominationList nominations={this.state.nominationsList}/>
                </div>
            </div>
        </div>
          
        <footer className={styles.footer}>
          
        </footer>
      </div>
    }

}

export default  Handler;
