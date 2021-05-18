import React from 'react';
import Holdings from './Holdings.jsx';

const Homepage = ({ reccomended }) => (
  <div>
    { reccomended.ma }
    <Holdings />
  </div>
);

export default Homepage;
