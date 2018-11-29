import React from 'react';

import Container from '../Container/Container';
import './Introduction.css';

export default function Introduction() {
  return (
    <Container customStyles={styles}>
      <h1 className="intro">Hi, I'm Lâm.</h1>
      <h1 className="intro">I'm a</h1>
      {occupations.map(val => <span className="occupations">{val}</span>)}
      <nav>
        {menu.map(item => <p className="menu-item">{item.toUpperCase()}</p>)}
      </nav>
    </Container>
  );
}

let occupations = ['Programmer', 'Artist', 'Dreamer'];

let menu = ['About', 'My Goals', 'My Troubles', 'My Skills', 'Contacts'];

let styles = {
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '15%'
};
