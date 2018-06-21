import React from 'react';
import '../styles/screen.css';
const ScreenRow=(props)=>{
    return(
        <div>
            <input type="text" value={props.value}/>
        </div>
    );
}

export default ScreenRow;