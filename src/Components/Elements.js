import React from 'react';
import { elements } from './Data.js';
import { elementsMk } from './DataMk.js';
import Legend from './Legend.js';
import Element from './Element.js';


class Elements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: elements,
            elementsMk: elementsMk,
            number: 1,
            symbol: '',
            name: '',
            atomic_mass: '',
            shells: [],
            class: 1,
            el: 0,
        }
        this.hoveredElement = this.hoveredElement.bind(this);
        this.unhoveredElement = this.unhoveredElement.bind(this);
    }


    componentDidMount() {
        this.setState({
            elementsMk: this.state.elementsMk,
            elements: this.state.elements,
            number: this.state.elements.number,
            symbol: this.state.elements.symbol,
            name: this.state.elements.name,
            atomic_mass: this.state.elements.atomic_mass,
            shells: this.state.elements.shells,
            class: this.state.elements.class,
            el: this.state.elements.el,
        })
    }

    hoveredElement = (event) => {
        // console.log('gdfgdfgdf');
        this.setState({
            elements: elements,
            number: '',
            atomic_mass: '',
            shells: [],
            class: '',
            symbol: event.target.symbol,
            name: event.target.name,
        })
    }

    unhoveredElement = () => {
        this.setState({
            number: this.state.elements.number,
            symbol: this.state.elements.symbol,
            name: this.state.elements.name,
            atomic_mass: this.state.elements.atomic_mass,
            shells: this.state.elements.shells,
            class: this.state.elements.class,
        })
    }
    play = () => {
        this.props.playSound();
    }

    render() {
        const language = this.props.lang;
        return (
            <div className='padding5'>
                <Legend legend={this.props.legend} legendOne={this.props.legendOne} legendTwo={this.props.legendTwo} legendThree={this.props.legendThree} legendFour={this.props.legendFour} legendFive={this.props.legendFour} legendSix={this.props.legendSix} legendSeven={this.props.legendSeven} legendEight={this.props.legendEight} legendNine={this.props.legendNine} legendTen={this.props.legendTen} />
                {
                    language == 'mk' ? this.state.elementsMk.map((e) => {
                        return (
                            <Element key={e.number} play={() => this.play()} hoveredElement={this.hoveredElement} hoveredNum={this.props.hoveredNum} number={e.number} class={e.class} shells={e.shells} symbol={e.symbol} name={e.name} atomic_mass={e.atomic_mass} el={e.el} />
                        )
                    }) : this.state.elements.map((e) => {
                        return (
                            <Element key={e.number} play={() => this.play()} hoveredElement={this.hoveredElement} hoveredNum={this.props.hoveredNum} number={e.number} class={e.class} shells={e.shells} symbol={e.symbol} name={e.name} atomic_mass={e.atomic_mass} el={e.el} />
                        )
                    })
                }
                <div className='Element text-center lan'>
                    <span className='text-small'>57-71</span>
                    <span className='text-small'>Lanthanides</span>
                </div>
                <div className='Element text-center act'>
                    <span className='text-small'>89-103 </span>
                    <span className='text-small'>Actinides</span>
                </div>
            </div>
        )
    }
}


export default Elements;