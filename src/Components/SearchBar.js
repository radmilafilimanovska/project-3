import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { elements } from './Data'


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: elements,
            inputValue: '',
            items: [],
            filtered: []
        }
    }

    onInputChange = async (e) => {

        let val;
        let filteredElements = await this.state.elements.filter(elem => {
            val = e.target ? e.target.value : ""
            if (e.target.value == '') {
                return;
            }
            else if ((elem.name.toLowerCase().includes(e.target.value.toLowerCase())) || (elem.symbol.toLowerCase().includes(e.target.value.toLowerCase()))) {
                return elem;
            }
        })
        this.setState({ filtered: filteredElements, inputValue: val })
        await console.log(this.state.filtered)
    }
    Open = (id) => {
        if (id != undefined) {
            this.props.history.push(`/main/${id}`);
        }
    }

    render() {
        return (
            <div>

                <div class="ui mini icon input">
                    <input type="text" id='search-site' name='search-site' placeholder='Search...' onChange={this.onInputChange} style={{ color: 'white' }} />
                    <i className="fas fa-search fa-2x"></i>
                </div>

                <ul style={{
                    position: 'absolute', zIndex: 1, backgroundColor: 'black', top: '70px', right: '2px', width: '20%'
                }}>
                    {
                        this.state.filtered.map((e, index) => {
                            if (e.el !== undefined) {
                                if (((e.symbol.toLowerCase().includes(this.state.inputValue.toLowerCase())))) {
                                    return <div><Link to={`/main/${e.el}`}><li key={index} style={{ color: 'white', marginBottom: '10px' }}>{e.symbol}</li></Link>
                                        <Link to={`/main/${e.el}`}><li key={index} style={{ color: 'white', marginBottom: '10px' }}>{e.name}</li></Link></div>
                                }
                                return (
                                    <Link to={`/main/${e.el}`}><li key={index} style={{ color: 'white', marginBottom: '10px' }}>{e.name}</li></Link>
                                )
                            }
                            else {
                                if (((e.symbol.toLowerCase().includes(this.state.inputValue.toLowerCase())))) {
                                    return <div><li key={index} style={{ color: 'white', marginBottom: '10px' }}>{e.symbol}</li><li key={index} style={{ color: 'white', marginBottom: '10px' }}>{e.name}</li></div>
                                }
                                return (
                                    <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{e.name}</li>
                                )
                            }
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default SearchBar;