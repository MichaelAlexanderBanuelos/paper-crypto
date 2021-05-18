import React, { useEffect, useState } from 'react';
import Homepage from './components/Homepage.jsx';
import axios from 'axios';

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
