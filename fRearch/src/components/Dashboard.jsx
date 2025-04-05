import React from 'react';
import { Users, FileText } from 'lucide-react'; // Importing icons from lucide-react

const Dashboard = ({ totalAuthors, totalResearches }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg mb-10">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Total Authors Card */}
        <div className="bg-blue-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-6 h-6 text-blue-700" />
            <h4 className="text-xl font-semibold text-blue-700">Total Authors</h4>
          </div>
          <p className="text-gray-700 text-lg font-bold">{totalAuthors}</p>
        </div>
        
        {/* Total Researches Card */}
        <div className="bg-green-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-6 h-6 text-green-700" />
            <h4 className="text-xl font-semibold text-green-700">Total Researches</h4>
          </div>
          <p className="text-gray-700 text-lg font-bold">{totalResearches}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
