import React from "react";
import "./Results.scss";
import Showcase from "../showcase/Showcase";
import axios from 'axios'

class Results extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           items: {
               core: [],
               categories: [],
               streamingLinks: []
           },
           isLoaded: false,
           error: null
        }
    }

    async componentDidMount(){
        const tempItems = {
            core: [],
            categories: [],
            streamingLinks: []
        }

        let animeId = 4676;
        let coreCall = await axios.get("https://kitsu.io/api/edge/anime/"+animeId);
        let categoryCall = await axios.get("https://kitsu.io/api/edge/anime/"+animeId+"/categories");
        let streamingLinkCall = await axios.get("https://kitsu.io/api/edge/anime/"+animeId+"/streaming-links");
        
        tempItems.core = coreCall.data.data;
        tempItems.categories = categoryCall.data.data;
        tempItems.streamingLinks = streamingLinkCall.data.data;

        this.setState({
            items: {
                core: coreCall.data.data,
                categories: categoryCall.data.data,
                streamingLinks: streamingLinkCall.data.data
            },
            isLoaded: true
        })  


    }

    

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Showcase content={this.state.items}/>
                </div>
            );
        }
    }
    
}

export default Results;

