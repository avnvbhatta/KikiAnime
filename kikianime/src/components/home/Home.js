import React from "react";
import "./Home.scss";

const imgArray = [ 
    "/images/unity.jpg",
    "/images/moodmate.png",
    "/images/sajjan.png",
    "/images/download.png"
]


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images: [],
            selectedImage: "",
            loaded: false
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                images: imgArray,
                selectedImage : imgArray[Math.floor(Math.random()*imgArray.length)],
                loaded: true
            })
        }, 2000);
        
    }

    getDiffImages(){
        let imagesDiv = [];
        for(let i=0; i<this.state.images.length; i++){
            imagesDiv.push(
                <img src={this.state.images[Math.floor(Math.random()*imgArray.length)]} alt=""/>
            )
        }
        return imagesDiv;
    }
    
    render(){
        return(
            <div>
                <div className="fill"></div>
                <p>This is the home component.</p>
                {
                    !this.state.loaded ? <p>Loading</p> : this.getDiffImages()
                }
            </div>
        )
    }
    
}

export default Home;