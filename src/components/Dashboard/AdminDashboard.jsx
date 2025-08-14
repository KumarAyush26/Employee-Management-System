import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full p-7 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
