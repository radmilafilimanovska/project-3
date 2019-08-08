import React from 'react';

const Text = (props) => {
    return (
        <div className="text">
            <button className="btnText">...</button>
            <p className="textText">{props.text}</p>
            <p className="textPdf">Element Details - PDF</p>
        </div>
    )
}

export default Text;