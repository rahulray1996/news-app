import React from "react";

const CountryList=(props)=>{
    return(
        <div>
            <button onClick={() => props.fetchNewData("in")}>India</button>
            <button onClick={() => props.fetchNewData('US')}>USA</button>
            <button onClick={() => props.fetchNewData('cn')}>China</button>
            <button onClick={() => props.fetchNewData('jp')}>Japan</button>
            <button onClick={() => props.fetchNewData('ae')}>United Arab Emirates</button>
            <button onClick={() => props.fetchNewData('de')}>Germany</button>
            <button onClick={() => props.fetchNewData('ca')}>Canada</button>
            <button onClick={() => props.fetchNewData('au')}>Australia</button>
        </div>
    );
};

export default CountryList;