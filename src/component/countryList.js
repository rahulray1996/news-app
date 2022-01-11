import React from "react";
import './countryList.css'

const CountryList=(props)=>{
    return(
        <div className="container">
        <div>
        <h1>Here are some lists of countries. Click on any of this country name for top 20 news.</h1>
        </div>
        <ul>
        <li><button onClick={() => props.fetchNewData("in")}>India</button></li>
        <li><button onClick={() => props.fetchNewData('US')}>USA</button></li>
        <li><button onClick={() => props.fetchNewData('cn')}>China</button></li>
        <li><button onClick={() => props.fetchNewData('jp')}>Japan</button></li>
        <li><button onClick={() => props.fetchNewData('ae')}>United Arab Emirates</button></li>
        <li><button onClick={() => props.fetchNewData('de')}>Germany</button></li>
        <li><button onClick={() => props.fetchNewData('ca')}>Canada</button></li>
        <li><button onClick={() => props.fetchNewData('au')}>Australia</button></li>
        </ul>
        </div>
    );
};

export default CountryList;