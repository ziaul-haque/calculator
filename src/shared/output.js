import React from 'react';
import OutputRow from './output-row';

const Output =(props)=>{
    return (
        <div>
            <OutputRow value={props.input} textSize={{fontSize: '20px'}}/>
            <OutputRow value={props.result}/>
        </div>
    );
};

export default Output;