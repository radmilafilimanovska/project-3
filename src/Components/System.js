import React from 'react';
import Elements from './Elements.js';
import Numbers from './Numbers.js';
import SearchBar from './SearchBar.js';
import { arr } from './Id.js';
import FooterLeft from './FooterLeft.js';
import FooterRight from './FooterRight.js';


let mySound = new Audio('klik.mp3');
class System extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: arr,
            id: 1,
            hoveredNubmer: '',
            soundOff: false
        }
        this.check = this.check.bind(this);
        this.uncheck = this.uncheck.bind(this);
    }


    componentDidMount() {
        this.setState({
            arr: this.state.arr,
            id: this.state.arr.id
        })
    }


    check(event) {
        console.log(event.target.id);
        this.setState({
            hoveredNubmer: event.target.id
        })
    }


    uncheck(event) {
        this.setState({
            hoveredNubmer: ''
        })
    }

    playSound = () => {
        if (this.state.soundOff == false) {
            mySound.play();
        }

    }

    muted = () => {
        this.setState({
            soundOff: !this.state.soundOff
        })

    }

    LanguageChange = () => {
        this.props.LanguageChange();
    }

    render() {
        return (
            <div id='System'>
                <SearchBar />
                <div className="text-center AC">
                    <h1 id="caption">{this.props.title}</h1>
                </div>
                <div className="numbers">
                    {this.state.arr.map((e) => {
                        return (
                            <div className="">
                                <Numbers id={e.id} playSound={() => this.playSound()} mycheck={this.check} myuncheck={this.uncheck} lang={this.props.lang} />
                            </div>
                        )
                    })}
                </div>
                <Elements class={this.props.class} playSound={() => this.playSound()} hoveredNum={this.state.hoveredNubmer} lang={this.props.lang} legend={this.props.legend} legendOne={this.props.legendOne} legendTwo={this.props.legendTwo} legendThree={this.props.legendThree} legendFour={this.props.legendFour} legendFive={this.props.legendFour} legendSix={this.props.legendSix} legendSeven={this.props.legendSeven} legendEight={this.props.legendEight} legendNine={this.props.legendNine} legendTen={this.props.legendTen} />
                <FooterLeft mute={() => this.muted()} soundOff={this.state.soundOff} button={this.props.button} LanguageChange={() => this.props.LanguageChange()} />
                <FooterRight />
            </div>
        )
    }
}


export default System;