import React from "react";
import './newsItem.css'

const NewsItem=(props)=> {
    return(
        <div className="newsitem">
            <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            </div>
            <img src={props.data.urlToImage} />
        </div>
    );
};

export default NewsItem;