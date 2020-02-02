import React from "react";
import "./Showcase.scss";
import * as Vibrant from 'node-vibrant'


function Showcase(props){

    /*
    Vibrant.from(props.content.core.attributes.coverImage.large).getPalette().then(function(palette) {
        console.log(palette);
    });
    */
   console.log(props.content) 

   const Categories = () => {
       let categoryList = []
       props.content.categories.map(category => {
            categoryList.push(
                <p key={category.id}>{category.attributes.slug}</p>
            )
       })
       return categoryList
   }

   const StreamingLinks = () => {
    let streamingLinksList = []
    props.content.streamingLinks.map(streamingLink => {
        streamingLinksList.push(
             <p key={streamingLink.id}>{streamingLink.attributes.url}</p>
         )
    })
    return streamingLinksList
}



   let categories = props.content.categories;
    return(
        <div className="card">
            <div className="card-left">
                <img src={props.content.core.attributes.posterImage.original} alt="card-img"/>
            </div>
            <div className="card-right">
                <div className="card-right-content">
                    <h1>{props.content.core.attributes.canonicalTitle}</h1>
                    <h2>2000 PG</h2>
                    <p>{props.content.core.attributes.synopsis}</p>
                    <div className="category">
                        <Categories />
                    </div>
                    <div className="category">
                        <StreamingLinks />
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Showcase;