import React, { useEffect, useState } from 'react';
import Homepage from './components/Homepage.jsx';
import axios from 'axios';

const App = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const getCurrentUser = () => {
    axios.get('http://127.0.0.1:3000/api/user/1')
      .then((data) => {
        console.log(data);
        setCurrentUser(data.data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default App;
