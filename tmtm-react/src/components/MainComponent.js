import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/MainComponent.css';
import Backdrop from "../images/backdrop.jpg";


let imgUrl = 'tmtm-react/src/images/backdrop.jpg';
let backgroundStyle = {
    root: {
        backgroundImage: 'url(' + {imgUrl} + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
};

class MainComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
            <img src={Backdrop} className={'background-image'}>
            </img>
        </header>
      </div>
    );
  }
}

export default MainComponent;
