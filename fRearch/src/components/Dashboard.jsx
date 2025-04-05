import React from 'react';
import { Users, FileText } from 'lucide-react'; // Importing icons from lucide-react

// A simple progress bar component
const ProgressBar = ({ percentage, label, color }) => (
  <div className="mb-4">
    <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
    <div className="bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Dashboard = ({ totalAuthors, totalResearches, progressAuthors, progressResearches }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      
      <div className="w-64 bg-blue-900 text-white h-screen p-6">
        <h2 className="text-3xl font-bold mb-8 pt-4">Dashboard</h2>
        <ul className='pt-20 pl-4'>
          <li className="mb-6 text-lg">Overview</li>
          <li className="mb-6 text-lg">Researches</li>
          <li className="mb-6 text-lg">Authors</li>
          <li className="mb-6 text-lg">Settings</li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-8">
      <header className="items-center gap-4 mb-8">
          
          <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
        </header>

       
        {/* Total counts section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        {/* Progress bars section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Authors Progress */}
          <div className="bg-blue-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">Authors Progress</h4>
            <ProgressBar
              percentage={progressAuthors}
              label="Authors Progress"
              color="bg-blue-600"
            />
          </div>

          {/* Researches Progress */}
          <div className="bg-green-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Researches Progress</h4>
            <ProgressBar
              percentage={progressResearches}
              label="Researches Progress"
              color="bg-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
