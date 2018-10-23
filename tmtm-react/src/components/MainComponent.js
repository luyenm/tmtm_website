import React, { Component } from 'react';
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
      <div className={'background-image'}>
      </div>
    );
  }
}

export default MainComponent;
