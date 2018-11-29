import React from 'react';

import Container from '../Container/Container';
import './AboutMe.css';

export default function Aboutme() {
  return (
    <Container customStyles={styles}>
      <div style={{background: 'red', flex: 1}}></div>
      <div style={{background: 'blue', flex: 1}}></div>
    </Container>
      
  )
}

let styles = {
  flexWrap: 'wrap',
};
