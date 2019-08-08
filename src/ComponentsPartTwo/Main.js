import React from 'react';
import { infoForElements, infoForSearch } from './Info.js';
import { infoForElementsMk, infoForSearchMk } from './InfoMk.js';
import Name from './Name.js';
import Text from './Text.js';
import SearchMain from './SearchMain.js';
import Caro from './Caro.js';
import ButtonX from './ButtonX.js'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoForElements: infoForElements,
            infoForSearch: infoForSearch,
            infoForElementsMk: infoForElementsMk,
            infoForSearchMk: infoForSearchMk,
            number: '',
            period: '',
            symbol: '',
            atomic_mass: '',
            name: '',
            image: '',
            info: [],
            text: '',
            images: []
        }
    }


    componentDidMount() {
        this.setState({
            infoForElements: this.state.infoForElements,
            infoForSearch: this.state.infoForSearch,
            infoForElementsMk: this.state.infoForElementsMk,
            infoForSearchMk: this.state.infoForSearchMk,
            number: this.state.infoForElements.number,
            period: this.state.period,
            symbol: this.state.symbol,
            atomic_mass: this.state.atomic_mass,
            name: this.state.name,
            image: this.state.image,
            info: this.state.info,
            text: this.state.text,
            images: this.state.images
        })
    }


    render() {

        const language = this.props.lang;
        // console.log(language);
        return (
            <div className="Main d-flex flex-column" style={{ height: '96vh', overflow: 'hidden' }}>
                <ButtonX />
                {
                    language == 'mk' ? <div className='d-flex'>
                        <Name number={this.state.infoForElementsMk[this.props.match.params.el].number} period={this.state.infoForElementsMk[this.props.match.params.el].period} symbol={this.state.infoForElementsMk[this.props.match.params.el].symbol} name={this.state.infoForElementsMk[this.props.match.params.el].name} atomic_mass={this.state.infoForElementsMk[this.props.match.params.el].atomic_mass} info={this.state.infoForElementsMk[this.props.match.params.el].info}
                            image={this.state.infoForElementsMk[this.props.match.params.el].image} />
                        <Text text={this.state.infoForElementsMk[this.props.match.params.el].text} />
                        <SearchMain overview={this.state.infoForSearchMk[this.props.match.params.el].overview} thermal={this.state.infoForSearchMk[this.props.match.params.el].thermal} physical={this.state.infoForSearchMk[this.props.match.params.el].physical} reactivity={this.state.infoForSearchMk[this.props.match.params.el].reactivity} safety={this.state.infoForSearchMk[this.props.match.params.el].safety} classifications={this.state.infoForSearchMk[this.props.match.params.el].classifications} electrical={this.state.infoForSearchMk[this.props.match.params.el].electrical} magnetic={this.state.infoForSearchMk[this.props.match.params.el].magnetic} abundances={this.state.infoForSearchMk[this.props.match.params.el].abundances} atomic={this.state.infoForSearchMk[this.props.match.params.el].atomic} nuclear={this.state.infoForSearchMk[this.props.match.params.el].nuclear} />
                    </div> : <div className='d-flex'>
                            <Name number={this.state.infoForElements[this.props.match.params.el].number} period={this.state.infoForElements[this.props.match.params.el].period} symbol={this.state.infoForElements[this.props.match.params.el].symbol} name={this.state.infoForElements[this.props.match.params.el].name} atomic_mass={this.state.infoForElements[this.props.match.params.el].atomic_mass} info={this.state.infoForElements[this.props.match.params.el].info}
                                image={this.state.infoForElements[this.props.match.params.el].image} />
                            <Text text={this.state.infoForElements[this.props.match.params.el].text} />
                            <SearchMain overview={this.state.infoForSearch[this.props.match.params.el].overview} thermal={this.state.infoForSearch[this.props.match.params.el].thermal} physical={this.state.infoForSearch[this.props.match.params.el].physical} reactivity={this.state.infoForSearch[this.props.match.params.el].reactivity} safety={this.state.infoForSearch[this.props.match.params.el].safety} classifications={this.state.infoForSearch[this.props.match.params.el].classifications} electrical={this.state.infoForSearch[this.props.match.params.el].electrical} magnetic={this.state.infoForSearch[this.props.match.params.el].magnetic} abundances={this.state.infoForSearch[this.props.match.params.el].abundances} atomic={this.state.infoForSearch[this.props.match.params.el].atomic} nuclear={this.state.infoForSearch[this.props.match.params.el].nuclear} />
                        </div>
                }
                <div>
                    <Caro />
                </div>
            </div>
        )
    }
}

export default Main;