import React from 'react';
import ScreenRow from '../components/ScreenRow';
const Screen =(props) =>{
    
        return(
            <div className="screen">
                <ScreenRow value={props.input}/>
                 <ScreenRow value={props.output}/>
            </div>
        );
}

export default Screen ;