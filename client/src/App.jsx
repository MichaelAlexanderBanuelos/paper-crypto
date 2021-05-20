import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './components/Homepage.jsx';

const App = () => {
  const [reccomended, setReccomended] = useState([]);
  const getReccomended = () => {
    axios.get('localhost:3000/api/stocks')
      .then((data) => setReccomended(data.data));
  }
  useEffect(() => {
    getReccomended();
  }, []);

  return (
    <div>
      <Homepage reccomended={reccomended} />
    </div>
  );
};

export default App;
