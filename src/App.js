import React from 'react';
import './App.css';
import Routes from './Routes.js';
import LocalizedStrings from "react-localization";


let strings = new LocalizedStrings({
  mk: {
    button: "МК",
    title: "Периодичен систем",
    legend: "Легенда",
    legendOne: "Алкални метали",
    legendTwo: "Aлкално земни метали",
    legendThree: "Транзициони метали",
    legendFour: "Лантантиди",
    legedFive: "Актиниди",
    legendSix: "Други метали",
    legendSeven: "Металоиди",
    legendEight: "Неметали",
    legendNine: "Халогени",
    legendTen: "Благородни гасови",
  },
  en: {
    button: "EN",
    title: " The Periodic Table of Elements",
    legend: "Legend",
    legendOne: "Alkali Metals",
    legendTwo: "Alkali Earth Metals",
    legendThree: "Transition Metals",
    legendFour: "Lanthantides",
    legedFive: "Actinides",
    legendSix: "Other Metals",
    legendSeven: "Metalloids",
    legendEight: "Non-Metals",
    legendNine: "Halogens",
    legendTen: "Noble Gases",
  }
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'mk'
    }
  }

  LanguageChange = () => {
    if (this.state.language == 'mk') {
      this.setState({
        language: 'en',
      })
    } else if (this.state.language == 'en') {
      this.setState({
        language: 'mk'
      })
    }
  }


  render() {
    strings.setLanguage(this.state.language);
    return (
      <div className='container-fluid' >
        <Routes lang={this.state.language} title={strings.title} button={strings.button} legend={strings.legend} legendOne={strings.legendOne} legendTwo={strings.legendTwo} legendThree={strings.legendThree} legendFour={strings.legendFour} legendFive={strings.legendFour} legendSix={strings.legendSix} legendSeven={strings.legendSeven} legendEight={strings.legendEight} legendNine={strings.legendNine} legendTen={strings.legendTen} button={strings.button} LanguageChange={() => this.LanguageChange()} />
      </div>
    );
  }
}

export default App;
