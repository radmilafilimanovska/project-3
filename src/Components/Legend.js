import React from 'react';

const Legend = (props) => {
    return (
        <div className="legend text-center">
            <h2>{props.legend}</h2>

            <div className="text-left bor">
                <div className="d-flex justify-content-between">
                    <span className="font"><span><i className="fas fa-square AL"></i>{props.legendOne}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square AEM"></i>{props.legendTwo}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square"></i>{props.legendThree}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square L"></i>{props.legendFour}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square AC"></i>{props.legendFive}</span></span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="font"><span><i className="fas fa-square OM"></i>{props.legendSix}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square M"></i>{props.legendSeven}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square NM"></i>{props.legendEight}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square H"></i>{props.legendNine}</span></span>
                    <span className="padding-left font"><span><i className="fas fa-square NB"></i>{props.legendTen}</span></span>
                </div>
            </div>

        </div>
    )
}

export default Legend;