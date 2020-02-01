import React from "react";
import "./Results.scss";
import Showcase from "../showcase/Showcase";


class Results extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           items: {
               core: [],
               genres: [],
               categories: [],
               streamingLinks: []
           },
           isLoaded: false,
           error: null
        }
    }

    componentDidMount(){
        let fetchURL = "https://kitsu.io/api/edge/anime/11469";
        //Fetch for core data
        fetch(fetchURL)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                items: {
                    core: result.data
                }
            });

            //Fetch for genres
            fetch(this.state.items.core.relationships.genres.links.related)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: {
                            genres: result.data
                        }
                    });
                }
            )

            //Fetch for categories
            fetch(this.state.items.core.relationships.categories.links.related)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: {
                            categories: result.data
                        }
                    });
                }
            )

            //Fetch for streaming links
            fetch(this.state.items.core.relationships.streamingLinks.links.related)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: {
                            streamingLinks: result.data
                        }
                    });
                }
            )
            this.setState({
                isLoaded: true
            })
            }
        )
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
                    <Showcase props={this.state}/>
                </div>
            );
        }
    }
    
}

export default Results;