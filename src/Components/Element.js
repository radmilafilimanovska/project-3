import React from 'react';
import { withRouter } from 'react-router-dom';


class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false }
    }

    Open = (el) => {
        if (el != undefined) {
            this.props.history.push(`/main/${this.props.el}`);
        }
    }
    onmouseover = (e) => {
        this.setState({
            hovered: true
        });
        this.props.hoveredElement(e)
    }
    onmouseout = () => {
        this.setState({
            hovered: false
        })
    }

    render() {


        return (
            <div onClick={() => this.Open(this.props.el)} onMouseEnter={(e) => this.onmouseover(e)} onMouseOver={this.props.play} onMouseLeave={() => this.onmouseout()} className={`Element element-${this.props.number} element-${this.props.class}-${this.props.hoveredNum} hov`}>
                <div className="d-flex justify-content-between">
                    <div className={"number " + (this.state.hovered ? 'hidden' : '')}>
                        {this.props.number}
                    </div>
                    <div className={"shells " + (this.state.hovered ? 'hidden' : '')}>
                        {this.props.shells}
                    </div>
                </div>

                <div className="text-center">
                    <div className="symbol">
                        {this.props.symbol}
                    </div>
                    <div className="name">
                        {this.props.name}
                    </div>
                </div>
                <div className={"mass " + (this.state.hovered ? 'hidden' : '')}>
                    {this.props.atomic_mass}
                </div>
            </div>
        )
    }
}


export default withRouter(Element);