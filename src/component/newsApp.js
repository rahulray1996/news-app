import React from "react";
import NewsList from "./newsList";
import CountryList from "./countryList";
import "../App.css";

class NewsApp extends React.Component{
    constructor(props){
        super(props);
        this.state = { news: []} ;
    }

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=e5efeaeea4a54a73bfdc8a7ddacbd592'
        )
        .then((response)=>{
            console.log(response)
            return response.json();
        })
        .then((jsonResponse)=>{
            console.log(jsonResponse)
            this.setState({ news: jsonResponse.articles });
        });
    }

    fetchNewData=(country)=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=e5efeaeea4a54a73bfdc8a7ddacbd592`
        )
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
            this.setState({ news: jsonResponse.articles });
        });
    }

    render(){
        return(
            <div className="container">
                <CountryList fetchNewData={this.fetchNewData} />
                <NewsList news={this.state.news} /> 
                <div>
                <button>Next</button>
                </div>
            </div>
        );
    }
}

export default NewsApp;