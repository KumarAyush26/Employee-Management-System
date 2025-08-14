import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const task = { taskTitle, taskDescription, taskDate, asignTo, category, active: false, new: true, failed: false, completed: false };
    const updatedData = userData.map(emp =>
      emp.firstName === asignTo
        ? { ...emp, tasks: [...emp.tasks, task], taskCounts: { ...emp.taskCounts, newTask: emp.taskCounts.newTask + 1 } }
        : emp
    );
    setUserData(updatedData);

    setAsignTo('');
    setCategory('');
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
  };

  return (
    <div className="w-full mt-7">
      <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg animate-fade-in">
        <h2 className="text-xl font-semibold  mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Create New Task
        </h2>
        <form onSubmit={submitHandler} className="flex flex-wrap justify-between gap-6">
          {/* Left Side */}
          <div className="w-full md:w-[48%] space-y-4">
            <div>
              <label className="text-sm text-gray-300 block mb-1">Task Title</label>
              <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder="UI Design"
                className="w-full text-sm py-2 px-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Date</label>
              <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} type="date"
                className="w-full text-sm py-2 px-3 rounded-lg bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Assign to</label>
              <select value={asignTo} onChange={(e) => setAsignTo(e.target.value)}
                className="w-full text-sm py-2 px-3 rounded-lg bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-purple-500">
                <option value="">Select Employee</option>
                {userData.map((emp, idx) => (
                  <option key={idx} value={emp.firstName} className="bg-slate-800">
                    {emp.firstName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Category</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Development"
                className="w-full text-sm py-2 px-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[48%] flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Description</label>
            <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Brief task description..."
              className="w-full h-40 text-sm py-3 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 resize-none"></textarea>
            <button type="submit"
              className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-sm font-medium px-5 rounded-lg text-white hover:from-purple-600 hover:to-pink-600 transition shadow-lg hover:shadow-2xl">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
