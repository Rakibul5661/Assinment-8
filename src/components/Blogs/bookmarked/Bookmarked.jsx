import React from 'react';
import './Bookmarked.css'

const Bookmarked = (props) => {
    console.log(props)
    return (
        <div className='bookmark'>
            <h5>{props.item}</h5>
        </div>
    );
};

export default Bookmarked;