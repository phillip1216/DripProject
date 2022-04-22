import React, { useState } from 'react';
import '../style/LoadingStyle.css'

const Loading = ({ loadState }) => {
    let hidden = {
        opacity: "0",
        visibility: "hidden",
        transition: "opacity 500ms , visibility 500ms",
    };
    let active = {
        opacity: "1",
        transition: "opacity 500ms",
    };
    let spacing = {
        letterSpacing: "10px",
        transition: "02s all"
    }

    return (
        <div className='Loading'>
            <div>
                <h1 style={loadState ? spacing : null}>Drip</h1>
                <span style={loadState ? hidden : active}>Loading...</span>
            </div>
        </div >
    )
}
export default Loading