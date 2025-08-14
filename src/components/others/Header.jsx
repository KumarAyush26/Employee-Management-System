import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(props.data?.firstName || 'admin');
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser?.('');
  };

  return (
    <div className="flex items-center justify-between p-5 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg animate-fade-in">
      <h1 className="text-lg md:text-2xl font-medium text-gray-300">
        Hello <br />
        <span className="text-2xl md:text-3xl font-semibold text-white">{username}</span>
      </h1>
      <button onClick={logOutUser}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 shadow-md transition">
        Log Out
      </button>
    </div>
  );
};

export default Header;
