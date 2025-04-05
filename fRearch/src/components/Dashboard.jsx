import React from 'react';

const Dashboard = ({ totalAuthors, totalResearches }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg mb-10">
      <h3 className="text-2xl font-semibold text-gray-800">Dashboard</h3>
      <p className="text-gray-700">Total Authors: {totalAuthors}</p>
      <p className="text-gray-700">Total Researches: {totalResearches}</p>
    </div>
  );
};

export default Dashboard;
