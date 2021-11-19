
import React from 'react';
import Socials from '../Components/Socials.js';
import DCAHeader from '../Components/DCAHeader.js';
import DCAForm from '../Components/DCAForm.js';

import GlobalStyles from '../GlobalStyles';

export default function DCAPage() {
  const classes = GlobalStyles();
  return (
    <div className="DCA">
      <DCAHeader/>
      <Socials/>
      <DCAForm/>
    </div>
  );
}
