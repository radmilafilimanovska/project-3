import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '60%',
        height: '60%',
        top: '16%',
        left: '19%',
        right: 'auto',
        bottom: 'auto',
        backgroundColor: 'black',
    }
};

const linksMk = {
    1: 'https://mk.wikipedia.org/wiki/%D0%90%D0%BB%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD_%D0%BC%D0%B5%D1%82%D0%B0%D0%BB',
    2: 'https://mk.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BD%D0%BE%D0%B0%D0%BB%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD_%D0%BC%D0%B5%D1%82%D0%B0%D0%BB',
    3: 'https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_3_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC',
    4: 'https://mk.wikipedia.org/wiki/Група_4_на_периодниот_систем',
    5: 'https://mk.wikipedia.org/wiki/Група_5_на_периодниот_систем',
    6: 'https://mk.wikipedia.org/wiki/Група_6_на_периодниот_систем',
    7: 'https://mk.wikipedia.org/wiki/Група_7_на_периодниот_систем',
    8: 'https://mk.wikipedia.org/wiki/Група_8_на_периодниот_систем',
    9: 'https://mk.wikipedia.org/wiki/Група_9_на_периодниот_систем',
    10: 'https://mk.wikipedia.org/wiki/Група_10_на_периодниот_систем',
    11: 'https://mk.wikipedia.org/wiki/Група_11_на_периодниот_систем',
    12: 'https://mk.wikipedia.org/wiki/Група_12_на_периодниот_систем',
    13: 'https://mk.wikipedia.org/wiki/Борова_група',
    14: 'https://mk.wikipedia.org/wiki/Јаглеродна_група',
    15: 'https://mk.wikipedia.org/wiki/Азотна_група',
    16: 'https://mk.wikipedia.org/wiki/Халкоген',
    17: 'https://mk.wikipedia.org/wiki/Халоген',
    18: 'https://mk.wikipedia.org/wiki/Благороден_гас',
}

const links = {
    1: 'https://en.wikipedia.org/wiki/Alkali_metal',
    2: 'https://en.wikipedia.org/wiki/Alkaline_earth_metal',
    3: 'https://en.wikipedia.org/wiki/Group_3_element',
    4: 'https://en.wikipedia.org/wiki/Group_4_element',
    5: 'https://en.wikipedia.org/wiki/Group_5_element',
    6: 'https://en.wikipedia.org/wiki/Group_6_element',
    7: 'https://en.wikipedia.org/wiki/Group_7_element',
    8: 'https://en.wikipedia.org/wiki/Group_8_element',
    9: 'https://en.wikipedia.org/wiki/Group_9_element',
    10: 'https://en.wikipedia.org/wiki/Group_10_element',
    11: 'https://en.wikipedia.org/wiki/Group_11_element',
    12: 'https://en.wikipedia.org/wiki/Group_12_element',
    13: 'https://en.wikipedia.org/wiki/Boron_group',
    14: 'https://en.wikipedia.org/wiki/Carbon_group',
    15: 'https://en.wikipedia.org/wiki/Pnictogen',
    16: 'https://en.wikipedia.org/wiki/Chalcogen',
    17: 'https://en.wikipedia.org/wiki/Halogen',
    18: 'https://en.wikipedia.org/wiki/Noble_gas',
}

Modal.setAppElement(document.getElementById('root'));

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        let lang = this.props.lang;
        return (
            <div className="Modal">
                <button className={`btn btnData btn-${this.props.id}`} id={this.props.id} onMouseEnter={this.props.playSound} onMouseOver={this.props.mycheck} onMouseOut={this.props.myuncheck} onClick={this.openModal}>
                    {this.props.id}
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button className="buttonModal" onClick={this.closeModal}>close</button>
                    <iframe src={lang == 'mk' ? linksMk[this.props.id] : links[this.props.id]}></iframe>
                </Modal>
            </div>
        )
    }
}
export default Numbers;