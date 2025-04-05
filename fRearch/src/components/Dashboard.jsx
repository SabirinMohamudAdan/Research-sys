// import React from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react'; // More icons for the sidebar

// // A simple progress bar component
// const ProgressBar = ({ percentage, label, color }) => (
//   <div className="mb-4">
//     <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
//     <div className="bg-gray-200 rounded-full h-2.5">
//       <div
//         className={`h-2.5 rounded-full ${color}`}
//         style={{ width: `${percentage}%` }}
//       ></div>
//     </div>
//   </div>
// );

// const Dashboard = ({ totalAuthors, totalResearches, progressAuthors, progressResearches }) => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white h-screen p-6">
//         <h2 className="text-3xl font-bold mb-8 pt-4">Dashboard</h2>
//         <ul className="pt-20 pl-4">
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Home className="w-6 h-6 text-white" /> Overview
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <FileText className="w-6 h-6 text-white" /> Researches
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Users className="w-6 h-6 text-white" /> Authors
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Settings className="w-6 h-6 text-white" /> Settings
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <HelpCircle className="w-6 h-6 text-white" /> Help
//           </li>
//         </ul>
//       </div>

//       {/* Dashboard Content */}
//       <div className="flex-1 p-8 bg-gray-50">
//         <header className="items-center gap-4 mb-8">
//           <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
//         </header>

//         {/* Total counts section */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           {/* Total Authors Card */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
//             <div className="flex items-center gap-4 mb-4">
//               <Users className="w-6 h-6 text-blue-700" />
//               <h4 className="text-xl font-semibold text-blue-700">Total Authors</h4>
//             </div>
//             <p className="text-gray-700 text-lg font-bold">{totalAuthors}</p>
//           </div>

//           {/* Total Researches Card */}
//           <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
//             <div className="flex items-center gap-4 mb-4">
//               <FileText className="w-6 h-6 text-green-700" />
//               <h4 className="text-xl font-semibold text-green-700">Total Researches</h4>
//             </div>
//             <p className="text-gray-700 text-lg font-bold">{totalResearches}</p>
//           </div>
//         </div>

//         {/* Progress bars section */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Authors Progress */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-blue-700 mb-4">Authors Progress</h4>
//             <ProgressBar
//               percentage={progressAuthors}
//               label="Authors Progress"
//               color="bg-blue-600"
//             />
//           </div>

//           {/* Researches Progress */}
//           <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-green-700 mb-4">Researches Progress</h4>
//             <ProgressBar
//               percentage={progressResearches}
//               label="Researches Progress"
//               color="bg-green-600"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react'; // Icons for the sidebar

// // A simple circular progress component
// const CircularProgress = ({ percentage, label, colorStart, colorEnd }) => {
//   const strokeWidth = 10;
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center mb-6">
//       <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
//       <svg className="w-24 h-24 transform rotate-90" width="120" height="120" viewBox="0 0 120 120">
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="transparent"
//           stroke="#e6e6e6"
//           strokeWidth={strokeWidth}
//         />
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="transparent"
//           stroke={`url(#gradient)`} 
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//         />
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={colorStart} />
//             <stop offset="100%" stopColor={colorEnd} />
//           </linearGradient>
//         </defs>
//       </svg>
//       <p className="text-lg font-bold text-gray-700">{`${percentage}%`}</p>
//     </div>
//   );
// };

// const Dashboard = ({ totalAuthors, totalResearches, progressAuthors, progressResearches }) => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white h-screen p-6">
//         <h2 className="text-3xl font-bold mb-8 pt-4">Dashboard</h2>
//         <ul className="pt-20 pl-4">
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Home className="w-6 h-6 text-white" /> Overview
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <FileText className="w-6 h-6 text-white" /> Researches
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Users className="w-6 h-6 text-white" /> Authors
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Settings className="w-6 h-6 text-white" /> Settings
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <HelpCircle className="w-6 h-6 text-white" /> Help
//           </li>
//         </ul>
//       </div>

//       {/* Dashboard Content */}
//       <div className="flex-1 p-8 bg-gray-50">
//         <header className="items-center gap-4 mb-8">
//           <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
//         </header>

//         {/* Total counts section */}
//         <div className="grid md:grid-cols-2 gap-8 mb-10">
//           {/* Total Authors Card */}
//           <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center gap-6 mb-4">
//               <Users className="w-8 h-8 text-white" />
//               <h4 className="text-2xl font-semibold text-white">Total Authors</h4>
//             </div>
//             <p className="text-white text-4xl font-bold">{totalAuthors}</p>
//           </div>

//           {/* Total Researches Card */}
//           <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center gap-6 mb-4">
//               <FileText className="w-8 h-8 text-white" />
//               <h4 className="text-2xl font-semibold text-white">Total Researches</h4>
//             </div>
//             <p className="text-white text-4xl font-bold">{totalResearches}</p>
//           </div>
//         </div>

//         {/* Progress Circles section */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Authors Progress Circle */}
//           <div className="bg-gradient-to-r from-indigo-200 to-indigo-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <CircularProgress
//               percentage={progressAuthors}
//               label="Authors Progress"
//               colorStart="#4C9BF0"
//               colorEnd="#1D4E89"
//             />
//           </div>

//           {/* Researches Progress Circle */}
//           <div className="bg-gradient-to-r from-teal-200 to-teal-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <CircularProgress
//               percentage={progressResearches}
//               label="Researches Progress"
//               colorStart="#34D399"
//               colorEnd="#10B981"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react'; // Icons for the sidebar

// // A simple circular progress component
// const CircularProgress = ({ percentage, label, colorStart, colorEnd }) => {
//   const strokeWidth = 10;
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;

//   // State to store the strokeDashoffset value
//   const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

//   useEffect(() => {
//     setStrokeDashoffset(circumference - (percentage / 100) * circumference);
//   }, [percentage]);

//   return (
//     <div className="flex flex-col items-center mb-6">
//       <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
//       <svg className="w-24 h-24 transform rotate-90" width="120" height="120" viewBox="0 0 120 120">
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="transparent"
//           stroke="#e6e6e6"
//           strokeWidth={strokeWidth}
//         />
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="transparent"
//           stroke={`url(#gradient)`} 
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//         />
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={colorStart} />
//             <stop offset="100%" stopColor={colorEnd} />
//           </linearGradient>
//         </defs>
//       </svg>
//       <p className="text-lg font-bold text-gray-700">{`${percentage}%`}</p>
//     </div>
//   );
// };

// const Dashboard = ({ totalAuthors, totalResearches, progressAuthors, progressResearches }) => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white h-screen p-6">
//         <h2 className="text-3xl font-bold mb-8 pt-4">Dashboard</h2>
//         <ul className="pt-20 pl-4">
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Home className="w-6 h-6 text-white" /> Overview
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <FileText className="w-6 h-6 text-white" /> Researches
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Users className="w-6 h-6 text-white" /> Authors
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <Settings className="w-6 h-6 text-white" /> Settings
//           </li>
//           <li className="mb-6 text-lg flex items-center gap-4">
//             <HelpCircle className="w-6 h-6 text-white" /> Help
//           </li>
//         </ul>
//       </div>

//       {/* Dashboard Content */}
//       <div className="flex-1 p-8 bg-gray-50">
//         <header className="items-center gap-4 mb-8">
//           <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
//         </header>

//         {/* Total counts section */}
//         <div className="grid md:grid-cols-2 gap-8 mb-10">
//           {/* Total Authors Card */}
//           <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center gap-6 mb-4">
//               <Users className="w-8 h-8 text-white" />
//               <h4 className="text-2xl font-semibold text-white">Total Authors</h4>
//             </div>
//             <p className="text-white text-4xl font-bold">{totalAuthors}</p>
//           </div>

//           {/* Total Researches Card */}
//           <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center gap-6 mb-4">
//               <FileText className="w-8 h-8 text-white" />
//               <h4 className="text-2xl font-semibold text-white">Total Researches</h4>
//             </div>
//             <p className="text-white text-4xl font-bold">{totalResearches}</p>
//           </div>
//         </div>

//         {/* Progress Circles section */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Authors Progress Circle */}
//           <div className="bg-gradient-to-r from-indigo-200 to-indigo-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <CircularProgress
//               percentage={progressAuthors}
//               label="Authors Progress"
//               colorStart="#4C9BF0"
//               colorEnd="#1D4E89"
//             />
//           </div>

//           {/* Researches Progress Circle */}
//           <div className="bg-gradient-to-r from-teal-200 to-teal-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <CircularProgress
//               percentage={progressResearches}
//               label="Researches Progress"
//               colorStart="#34D399"
//               colorEnd="#10B981"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react';

// const CircularProgress = ({ percentage, label, colorStart, colorEnd, id }) => {
//   const strokeWidth = 10;
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;
//   const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

//   useEffect(() => {
//     // Animate the progress
//     setStrokeDashoffset(circumference - (percentage / 100) * circumference);
//   }, [percentage, circumference]);

//   return (
//     <div className="flex flex-col items-center mb-6">
//       <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
//       <svg 
//         className="w-24 h-24 transform -rotate-90" 
//         width="120" 
//         height="120" 
//         viewBox="0 0 120 120"
//         aria-labelledby={`progress-title-${id}`}
//       >
//         <title id={`progress-title-${id}`}>{`${percentage}% ${label}`}</title>
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="transparent"
//           stroke="#e6e6e6"
//           strokeWidth={strokeWidth}
//           aria-hidden="true"
//         />
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="transparent"
//           stroke={`url(#gradient-${id})`}
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
//           aria-hidden="true"
//         />
//         <defs>
//           <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={colorStart} />
//             <stop offset="100%" stopColor={colorEnd} />
//           </linearGradient>
//         </defs>
//       </svg>
//       <p className="text-lg font-bold text-gray-700" aria-live="polite">{`${percentage}%`}</p>
//     </div>
//   );
// };

// const Dashboard = ({ totalAuthors, totalResearches, progressAuthors, progressResearches }) => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white h-screen p-6">
//         <h2 className="text-3xl font-bold mb-8 pt-4">Dashboard</h2>
//         <nav aria-label="Main navigation">
//           <ul className="pt-20 pl-4">
//             <li className="mb-6 text-lg flex items-center gap-4">
//               <Home className="w-6 h-6 text-white" /> Overview
//             </li>
//             <li className="mb-6 text-lg flex items-center gap-4">
//               <FileText className="w-6 h-6 text-white" /> Researches
//             </li>
//             <li className="mb-6 text-lg flex items-center gap-4">
//               <Users className="w-6 h-6 text-white" /> Authors
//             </li>
//             <li className="mb-6 text-lg flex items-center gap-4">
//               <Settings className="w-6 h-6 text-white" /> Settings
//             </li>
//             <li className="mb-6 text-lg flex items-center gap-4">
//               <HelpCircle className="w-6 h-6 text-white" /> Help
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Dashboard Content */}
//       <main className="flex-1 p-8 bg-gray-50">
//         <header className="items-center gap-4 mb-8">
//           <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
//         </header>

//         {/* Total counts section */}
//         <div className="grid md:grid-cols-2 gap-8 mb-10">
//           {/* Total Authors Card */}
//           <article className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center gap-6 mb-4">
//               <Users className="w-8 h-8 text-white" />
//               <h3 className="text-2xl font-semibold text-white">Total Authors</h3>
//             </div>
//             <p className="text-white text-4xl font-bold">{totalAuthors}</p>
//           </article>

//           {/* Total Researches Card */}
//           <article className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center gap-6 mb-4">
//               <FileText className="w-8 h-8 text-white" />
//               <h3 className="text-2xl font-semibold text-white">Total Researches</h3>
//             </div>
//             <p className="text-white text-4xl font-bold">{totalResearches}</p>
//           </article>
//         </div>

//         {/* Progress Circles section */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Authors Progress Circle */}
//           <article className="bg-gradient-to-r from-indigo-200 to-indigo-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <CircularProgress
//               percentage={progressAuthors}
//               label="Authors Progress"
//               colorStart="#4C9BF0"
//               colorEnd="#1D4E89"
//               id="authors"
//             />
//           </article>

//           {/* Researches Progress Circle */}
//           <article className="bg-gradient-to-r from-teal-200 to-teal-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <CircularProgress
//               percentage={progressResearches}
//               label="Researches Progress"
//               colorStart="#34D399"
//               colorEnd="#10B981"
//               id="researches"
//             />
//           </article>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react';

const CircularProgress = ({ percentage = 0, label, colorStart, colorEnd, id }) => {
  const strokeWidth = 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

  useEffect(() => {
    // Ensure percentage is a valid number between 0-100
    const validPercentage = Math.min(100, Math.max(0, Number(percentage) || 0));
    const offset = circumference - (validPercentage / 100) * circumference;
    setStrokeDashoffset(offset);
  }, [percentage, circumference]);

  return (
    <div className="flex flex-col items-center mb-6">
      <h5 className="text-sm font-semibold text-gray-700 mb-2">{label}</h5>
      <svg 
        className="w-24 h-24 transform -rotate-90"
        width="120" 
        height="120" 
        viewBox="0 0 120 120"
        aria-labelledby={`progress-title-${id}`}
      >
        <title id={`progress-title-${id}`}>{`${percentage}% ${label}`}</title>
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          aria-hidden="true"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke={`url(#gradient-${id})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
          aria-hidden="true"
        />
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor={colorEnd} />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-lg font-bold text-gray-700" aria-live="polite">
        {`${Math.round(percentage)}%`}
      </p>
    </div>
  );
};

const Dashboard = ({ 
  totalAuthors = 0, 
  totalResearches = 0, 
  progressAuthors = 0, 
  progressResearches = 0 
}) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white h-screen p-6">
        <h2 className="text-3xl font-bold mb-8 pt-4">Dashboard</h2>
        <nav aria-label="Main navigation">
          <ul className="pt-20 pl-4">
            <li className="mb-6 text-lg flex items-center gap-4">
              <Home className="w-6 h-6 text-white" /> Overview
            </li>
            <li className="mb-6 text-lg flex items-center gap-4">
              <FileText className="w-6 h-6 text-white" /> Researches
            </li>
            <li className="mb-6 text-lg flex items-center gap-4">
              <Users className="w-6 h-6 text-white" /> Authors
            </li>
            <li className="mb-6 text-lg flex items-center gap-4">
              <Settings className="w-6 h-6 text-white" /> Settings
            </li>
            <li className="mb-6 text-lg flex items-center gap-4">
              <HelpCircle className="w-6 h-6 text-white" /> Help
            </li>
          </ul>
        </nav>
      </div>

      {/* Dashboard Content */}
      <main className="flex-1 p-8 bg-gray-50">
        <header className="items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
        </header>

        {/* Total counts section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Total Authors Card */}
          <article className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-6 mb-4">
              <Users className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-semibold text-white">Total Authors</h3>
            </div>
            <p className="text-white text-4xl font-bold">{totalAuthors}</p>
          </article>

          {/* Total Researches Card */}
          <article className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-6 mb-4">
              <FileText className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-semibold text-white">Total Researches</h3>
            </div>
            <p className="text-white text-4xl font-bold">{totalResearches}</p>
          </article>
        </div>

        {/* Progress Circles section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Authors Progress Circle */}
          <article className="bg-gradient-to-r from-indigo-200 to-indigo-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <CircularProgress
              percentage={progressAuthors}
              label="Authors Progress"
              colorStart="#4C9BF0"
              colorEnd="#1D4E89"
              id="authors"
            />
          </article>

          {/* Researches Progress Circle */}
          <article className="bg-gradient-to-r from-teal-200 to-teal-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <CircularProgress
              percentage={progressResearches}
              label="Researches Progress"
              colorStart="#34D399"
              colorEnd="#10B981"
              id="researches"
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;