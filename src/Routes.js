import React from 'react';
import { Route, Switch } from 'react-router-dom';
import System from './Components/System.js';
import Main from './ComponentsPartTwo/Main.js';
import About from './Components/About.js';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    LanguageChange = () => {
        this.props.LanguageChange();
    }

    render() {
        return (

            <Switch>
                <Route exact path='/'  >
                    <System lang={this.props.lang} title={this.props.title} legend={this.props.legend} legendOne={this.props.legendOne} legendTwo={this.props.legendTwo} legendThree={this.props.legendThree} legendFour={this.props.legendFour} legendFive={this.props.legendFour} legendSix={this.props.legendSix} legendSeven={this.props.legendSeven} legendEight={this.props.legendEight} legendNine={this.props.legendNine} legendTen={this.props.legendTen} button={this.props.button} LanguageChange={() => this.LanguageChange()} />
                </Route>
                <Route path='/main/:el' lang={this.props.lang} render={props => <Main {...props} lang={this.props.lang} />} />
                <Route path='/about' component={About} />
            </Switch>
        )
    }
}

export default Routes;