import React from 'react';
import footerImage from '../image-removebg-preview.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={ footerImage } alt="Logo da Trybe" />
      </footer>
    );
  }
}

export default Footer;
