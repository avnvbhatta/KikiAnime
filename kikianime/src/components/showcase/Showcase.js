import React from "react";
import "./Showcase.scss";
import axios from 'axios'

class Showcase extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            vibrantPalette: {
                vibrant: "",
                lightVibrant: "",
                darkVibrant: "",
                muted: "",
                lightMuted: "",
                darkMuted: ""
            },
            isLoaded: false
        }
    }

    async componentDidMount(){
        let currentComponent = this;
        let res = await axios.post('https://vibrant-js.herokuapp.com/', {
            imgURL: this.props.content.core.attributes.posterImage.original,
        })
        .then(function (response) {
            currentComponent.setState({
                vibrantPalette: {
                    vibrant: response.data.Vibrant.rgb,
                    lightVibrant: response.data.LightVibrant.rgb,
                    darkVibrant: response.data.DarkVibrant.rgb,
                    muted: response.data.Muted.rgb,
                    lightMuted: response.data.LightMuted.rgb,
                    darkMuted: response.data.DarkMuted.rgb
                },
                isLoaded: true
            })
        })
        .catch(function (error) {
            console.log(error);
        });
        }

    Categories = () => {
        let categoryList = []
        this.props.content.categories.map(category => {
             categoryList.push(
                 <p key={category.id}>{category.attributes.slug}</p>
             )
        })
        return categoryList
    }
 
    StreamingLinks = () => {
     let streamingLinksList = []
     this.props.content.streamingLinks.map(streamingLink => {
         streamingLinksList.push(
              <p key={streamingLink.id}>{streamingLink.attributes.url}</p>
          )
     })
     return streamingLinksList
    }


    gradientStyle = () => {

        return { 
            background: "linear-gradient(rgb("+this.state.vibrantPalette.darkVibrant+"),rgb("+this.state.vibrantPalette.lightVibrant+" ))"
        }
    }

    render(){
        return(
            <div className="card">{console.log(this.state)}
                <div className="card-left" style={this.gradientStyle()}>
                    <img id="anime-profile" src={this.props.content.core.attributes.posterImage.original} alt="card-img"/>
                </div>
                <div className="card-right">
                    <div className="card-right-content">
                        <h1>{this.props.content.core.attributes.canonicalTitle}</h1>
                        <h2>2000 PG</h2>
                        <p>{this.props.content.core.attributes.synopsis}</p>
                        <div className="category">
                            {this.Categories()}
                        </div>
                        <div className="category">
                            {this.StreamingLinks()}
                        </div>
                    </div>
                    
    
                </div>
                <button onClick={()=> console.log("linear-gradient(rgb("+this.state.vibrantPalette.lightMuted+"),rgb("+this.state.vibrantPalette.darkMuted+" ))")}>view state</button>
            </div>
        )
    }


    
}

export default Showcase;