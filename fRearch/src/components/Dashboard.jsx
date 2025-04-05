import React from "react";
import { Users, FilePlus2 } from "lucide-react";

const Dashboard = ({ totalAuthors, totalResearches }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-4">
        <Users className="w-10 h-10 text-blue-700" />
        <div>
          <p className="text-sm text-gray-500">Total Authors</p>
          <h2 className="text-2xl font-bold text-blue-800">{totalAuthors}</h2>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-4">
        <FilePlus2 className="w-10 h-10 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Total Researches</p>
          <h2 className="text-2xl font-bold text-green-800">{totalResearches}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
