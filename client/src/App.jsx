import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const getCurrentUser = () => {
    axios.get('http://127.0.0.1:3000/api/user')
      .then((data) => {
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
      hello!
    </div>
  );
};

export default App;
