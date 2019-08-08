import React from 'react';

class SearchMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='searchMain'>
                <input className='inputSearch' placeholder="Search" />
                <p>01.Overview</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.overview[0][0]}</span>
                        <span>{this.props.overview[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.overview[1][0]}</span>
                        <span>{this.props.overview[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.overview[2][0]}</span>
                        <span>{this.props.overview[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.overview[3][0]}</span>
                        <span>{this.props.overview[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.overview[4][0]}</span>
                        <span>{this.props.overview[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.overview[5][0]}</span>
                        <span>{this.props.overview[5][1]}</span>
                    </li>
                </ul>
                <p>02.Thermal properties</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[0][0]}</span>
                        <span>{this.props.thermal[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[1][0]}</span>
                        <span>{this.props.thermal[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[2][0]}</span>
                        <span>{this.props.thermal[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[3][0]}</span>
                        <span>{this.props.thermal[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[4][0]}</span>
                        <span>{this.props.thermal[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[5][0]}</span>
                        <span>{this.props.thermal[5][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[6][0]}</span>
                        <span>{this.props.thermal[6][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[7][0]}</span>
                        <span>{this.props.thermal[7][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[8][0]}</span>
                        <span>{this.props.thermal[8][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[9][0]}</span>
                        <span>{this.props.thermal[9][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[10][0]}</span>
                        <span>{this.props.thermal[10][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[11][0]}</span>
                        <span>{this.props.thermal[11][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.thermal[12][0]}</span>
                        <span>{this.props.thermal[12][1]}</span>
                    </li>
                </ul>
                <p>03.Physical properties</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[0][0]}</span>
                        <span>{this.props.physical[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[1][0]}</span>
                        <span>{this.props.physical[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[2][0]}</span>
                        <span>{this.props.physical[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[3][0]}</span>
                        <span>{this.props.physical[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[4][0]}</span>
                        <span>{this.props.physical[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[5][0]}</span>
                        <span>{this.props.physical[5][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[6][0]}</span>
                        <span>{this.props.physical[6][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[7][0]}</span>
                        <span>{this.props.physical[7][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[8][0]}</span>
                        <span>{this.props.physical[8][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[9][0]}</span>
                        <span>{this.props.physical[9][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[10][0]}</span>
                        <span>{this.props.physical[10][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[11][0]}</span>
                        <span>{this.props.physical[11][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.physical[12][0]}</span>
                        <span>{this.props.physical[12][1]}</span>
                    </li>
                </ul>
                <p>04.Reactivity</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.reactivity[0][0]}</span>
                        <span>{this.props.reactivity[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.reactivity[1][0]}</span>
                        <span>{this.props.reactivity[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.reactivity[2][0]}</span>
                        <span>{this.props.reactivity[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.reactivity[3][0]}</span>
                        <span>{this.props.reactivity[3][1]}</span>
                    </li>
                </ul>
                <p>05.Safety</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.safety[0][0]}</span>
                        <span>{this.props.safety[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.safety[1][0]}</span>
                        <span>{this.props.safety[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.safety[2][0]}</span>
                        <span>{this.props.safety[2][1]}</span>
                    </li>
                </ul>
                <p>06.Classifications</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[0][0]}</span>
                        <span>{this.props.classifications[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[1][0]}</span>
                        <span>{this.props.classifications[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[2][0]}</span>
                        <span>{this.props.classifications[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[3][0]}</span>
                        <span>{this.props.classifications[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[4][0]}</span>
                        <span>{this.props.classifications[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[5][0]}</span>
                        <span>{this.props.classifications[5][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[6][0]}</span>
                        <span>{this.props.classifications[6][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[7][0]}</span>
                        <span>{this.props.classifications[7][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.classifications[8][0]}</span>
                        <span>{this.props.classifications[8][1]}</span>
                    </li>
                </ul>
                <p>07.Electrical properties</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.electrical[0][0]}</span>
                        <span>{this.props.electrical[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.electrical[1][0]}</span>
                        <span>{this.props.electrical[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.electrical[2][0]}</span>
                        <span>{this.props.electrical[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.electrical[3][0]}</span>
                        <span>{this.props.electrical[3][1]}</span>
                    </li>
                </ul>
                <p>08.Magnetic properties</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.magnetic[0][0]}</span>
                        <span>{this.props.magnetic[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.magnetic[1][0]}</span>
                        <span>{this.props.magnetic[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.magnetic[2][0]}</span>
                        <span>{this.props.magnetic[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.magnetic[3][0]}</span>
                        <span>{this.props.magnetic[3][1]}</span>
                    </li>
                </ul>
                <p>09.Abundances</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.abundances[0][0]}</span>
                        <span>{this.props.abundances[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.abundances[1][0]}</span>
                        <span>{this.props.abundances[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.abundances[2][0]}</span>
                        <span>{this.props.abundances[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.abundances[3][0]}</span>
                        <span>{this.props.abundances[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.abundances[4][0]}</span>
                        <span>{this.props.abundances[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.abundances[5][0]}</span>
                        <span>{this.props.abundances[5][1]}</span>
                    </li>
                </ul>
                <p>10.Atomic dimensions and structure</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[0][0]}</span>
                        <span>{this.props.atomic[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[1][0]}</span>
                        <span>{this.props.atomic[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[2][0]}</span>
                        <span>{this.props.atomic[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[3][0]}</span>
                        <span>{this.props.atomic[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[4][0]}</span>
                        <span>{this.props.atomic[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[5][0]}</span>
                        <span>{this.props.atomic[5][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[6][0]}</span>
                        <span>{this.props.atomic[6][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.atomic[7][0]}</span>
                        <span>{this.props.atomic[7][1]}</span>
                    </li>
                </ul>
                <p>11.Nuclear properties</p>
                <ul className="unordered">
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[0][0]}</span>
                        <span>{this.props.nuclear[0][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[1][0]}</span>
                        <span>{this.props.nuclear[1][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[2][0]}</span>
                        <span>{this.props.nuclear[2][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[3][0]}</span>
                        <span>{this.props.nuclear[3][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[4][0]}</span>
                        <span>{this.props.nuclear[4][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[5][0]}</span>
                        <span>{this.props.nuclear[5][1]}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>{this.props.nuclear[6][0]}</span>
                        <span>{this.props.nuclear[6][1]}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default SearchMain;