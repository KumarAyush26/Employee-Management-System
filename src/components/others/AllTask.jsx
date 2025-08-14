import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 mt-7 rounded-2xl shadow-lg border border-white/10 animate-fade-in">
      {/* Header */}
      <div className="mb-3 py-3 px-4 flex justify-between items-center rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
        <h2 className="w-1/5 text-xs md:text-sm font-semibold text-purple-300 tracking-wide">Employee Name</h2>
        <h3 className="w-1/5 text-xs md:text-sm font-semibold text-purple-300 tracking-wide">New Task</h3>
        <h5 className="w-1/5 text-xs md:text-sm font-semibold text-purple-300 tracking-wide">Active Task</h5>
        <h5 className="w-1/5 text-xs md:text-sm font-semibold text-purple-300 tracking-wide">Completed</h5>
        <h5 className="w-1/5 text-xs md:text-sm font-semibold text-purple-300 tracking-wide">Failed</h5>
      </div>

      {/* Data */}
      <div className="space-y-2">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="group py-3 px-4 flex justify-between items-center rounded-xl bg-white/5 backdrop-blur-md border border-white/5 hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300"
          >
            <h2 className="w-1/5 text-gray-200 font-medium">{elem.firstName}</h2>
            <h3 className="w-1/5 text-yellow-300 font-semibold">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-blue-300 font-semibold">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5 text-green-300 font-semibold">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-red-400 font-semibold">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {opacity: 0; transform: translateY(10px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AllTask;
