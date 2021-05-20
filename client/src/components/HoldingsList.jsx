import React from 'react';
import Holding from './Holdings';

const HoldingsList = ({ holdings }) => (
  <div>
    {holdings.map((holding) => <Holding holdings={holdings} />)}
  </div>
);

export default HoldingsList;
