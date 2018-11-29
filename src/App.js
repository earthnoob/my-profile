import React from 'react';

import Globals from './Globals/Globals';
import Introduction from './Introduction/Introduction';
// import AboutMe from './AboutMe/AboutMe';

let App = (props) => (
  <Globals>
    <Introduction />
    <AboutMe />
    {/*<Goals />
    <Troubles />
    <Skills />
    <Info />*/}
  </Globals>
);

export default App;
