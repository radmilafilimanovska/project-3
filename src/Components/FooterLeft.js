import React from 'react';



class FooterLeft extends React.Component {
    constructor() {
        super()

    }




    render() {
        console.log(this.props)
        return (
            <div className="FooterLeft">
                <div className="d-flex justify-content footerLevo">
                    <button className="circle en" onClick={this.props.LanguageChange}>{this.props.button}</button>
                    <button className="circle icon" onClick={this.props.mute}>
                        {this.props.soundOff ? <i className="fas fa-volume-off"></i> :
                            <i className="fas fa-volume-up"></i>}
                    </button>
                </div>
            </div >
        )
    }
}

export default FooterLeft;