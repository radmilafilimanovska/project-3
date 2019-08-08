import React from 'react';


const Name = (props) => {
    return (
        <div className="Name">

            <div className="d-flex">
                <div className="namename">
                    <p className="fontForSquare">
                        {props.number}
                    </p>
                    <p className="fontForSquareSymbol">
                        {props.symbol}
                    </p>
                    <p className="fontForSquare">
                        {props.atomic_mass}
                    </p>
                </div>

                <div className="wrapperImage">
                    <img className="imgName" src='/img/dot.png' />
                    <p className="nameOfElement">{props.name}</p>
                </div>

            </div>

            <div className="NameTwo d-flex">

                <ul className="unordered ulList">
                    <li className='colorWhite'>
                        {props.info[0][0]}
                    </li>
                    <li className='colorWhite'>
                        {props.info[1][0]}
                    </li>
                    <li className='colorWhite'>
                        {props.info[2][0]}
                    </li>
                    <li className='colorWhite'>
                        {props.info[3][0]}
                    </li>
                </ul>

                <ul className='ulList'>
                    <li className='colorWhite'>
                        {props.info[0][1]}
                    </li>
                    <li className='colorWhite'>
                        {props.info[1][1]}
                    </li>
                    <li className='colorWhite'>
                        {props.info[2][1]}
                    </li>
                    <li className='colorWhite'>
                        {props.info[3][1]}
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default Name;