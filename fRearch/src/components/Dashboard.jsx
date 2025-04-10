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


// import React, { useState, useEffect } from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react';

// const CircularProgress = ({ percentage = 0, label, colorStart, colorEnd, id }) => {
//   const strokeWidth = 10;
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;
//   const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

//   useEffect(() => {
//     // Ensure percentage is a valid number between 0-100
//     const validPercentage = Math.min(100, Math.max(0, Number(percentage) || 0));
//     const offset = circumference - (validPercentage / 100) * circumference;
//     setStrokeDashoffset(offset);
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
//       <p className="text-lg font-bold text-gray-700" aria-live="polite">
//         {`${Math.round(percentage)}%`}
//       </p>
//     </div>
//   );
// };

// const Dashboard = ({ 
//   totalAuthors = 0, 
//   totalResearches = 0, 
//   progressAuthors = 0, 
//   progressResearches = 0 
// }) => {
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



//  import React, { useState, useEffect, useMemo } from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react';
// import PropTypes from 'prop-types';

// /**
//  * CircularProgress component displays a circular progress indicator with gradient colors
//  * @param {number} percentage - The completion percentage (0-100)
//  * @param {string} label - Accessibility label for the progress circle
//  * @param {string} colorStart - Starting color for the gradient
//  * @param {string} colorEnd - Ending color for the gradient
//  * @param {string} id - Unique identifier for SVG elements
//  * @returns {JSX.Element} Circular progress component
//  */
// const CircularProgress = ({ percentage = 0, label, colorStart, colorEnd, id }) => {
//   const strokeWidth = 10;
//   const radius = 50;
//   const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
//   const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

//   useEffect(() => {
//     // Clamp percentage between 0-100 and calculate offset
//     const clampedPercentage = Math.min(100, Math.max(0, Number(percentage)));
//     const offset = circumference - (clampedPercentage / 100) * circumference;
//     setStrokeDashoffset(offset);
//   }, [percentage, circumference]);

//   return (
//     <div className="flex flex-col items-center mb-6" role="progressbar" aria-valuenow={Math.round(percentage)} aria-valuemin="0" aria-valuemax="100">
//       <h3 className="text-sm font-semibold text-gray-700 mb-2">{label}</h3>
//       <svg 
//         className="w-24 h-24 transform -rotate-90"
//         width="120" 
//         height="120" 
//         viewBox="0 0 120 120"
//         aria-hidden="true"
//       >
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
//           stroke={`url(#gradient-${id})`}
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
//         />
//         <defs>
//           <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={colorStart} />
//             <stop offset="100%" stopColor={colorEnd} />
//           </linearGradient>
//         </defs>
//       </svg>
//       <span className="text-lg font-bold text-gray-700">
//         {`${Math.round(percentage)}%`}
//       </span>
//     </div>
//   );
// };

// CircularProgress.propTypes = {
//   percentage: PropTypes.number,
//   label: PropTypes.string.isRequired,
//   colorStart: PropTypes.string.isRequired,
//   colorEnd: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

// /**
//  * NavigationItem component for sidebar links
//  * @param {Object} props - Component props
//  * @param {React.ElementType} props.icon - Icon component
//  * @param {string} props.label - Navigation label
//  * @param {boolean} [props.active] - Whether the item is active
//  * @returns {JSX.Element} Navigation list item
//  */
// const NavigationItem = ({ icon: Icon, label, active = false }) => (
//   <li className={`mb-6 text-lg flex items-center gap-4 ${active ? 'font-bold' : ''}`}>
//     <Icon className="w-6 h-6 text-white" aria-hidden="true" />
//     <span>{label}</span>
//   </li>
// );

// NavigationItem.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   label: PropTypes.string.isRequired,
//   active: PropTypes.bool,
// };

// /**
//  * MetricCard component for displaying key metrics
//  * @param {Object} props - Component props
//  * @param {React.ElementType} props.icon - Icon component
//  * @param {string} props.title - Card title
//  * @param {number} props.value - Metric value
//  * @param {string} props.gradientFrom - Gradient start color
//  * @param {string} props.gradientTo - Gradient end color
//  * @returns {JSX.Element} Metric card component
//  */
// const MetricCard = ({ icon: Icon, title, value, gradientFrom, gradientTo }) => (
//   <article 
//     className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
//     aria-labelledby={`${title.toLowerCase().replace(' ', '-')}-title`}
//   >
//     <div className="flex items-center gap-6 mb-4">
//       <Icon className="w-8 h-8 text-white" aria-hidden="true" />
//       <h3 id={`${title.toLowerCase().replace(' ', '-')}-title`} className="text-2xl font-semibold text-white">
//         {title}
//       </h3>
//     </div>
//     <p className="text-white text-4xl font-bold">{value.toLocaleString()}</p>
//   </article>
// );

// MetricCard.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   title: PropTypes.string.isRequired,
//   value: PropTypes.number.isRequired,
//   gradientFrom: PropTypes.string.isRequired,
//   gradientTo: PropTypes.string.isRequired,
// };

// /**
//  * Dashboard component - Main application dashboard
//  * @param {Object} props - Component props
//  * @param {number} [props.totalAuthors=0] - Total authors count
//  * @param {number} [props.totalResearches=0] - Total researches count
//  * @param {number} [props.progressAuthors=0] - Authors progress percentage
//  * @param {number} [props.progressResearches=0] - Researches progress percentage
//  * @returns {JSX.Element} Dashboard component
//  */
// const Dashboard = ({ 
//   totalAuthors = 0, 
//   totalResearches = 0, 
//   progressAuthors = 0, 
//   progressResearches = 0 
// }) => {
//   const navItems = [
//     { icon: Home, label: 'Overview', active: true },
//     { icon: FileText, label: 'Researches' },
//     { icon: Users, label: 'Authors' },
//     { icon: Settings, label: 'Settings' },
//     { icon: HelpCircle, label: 'Help' },
//   ];

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar Navigation */}
//       <aside className="w-64 bg-blue-900 text-white p-6 flex-shrink-0">
//         <header className="mb-8 pt-4">
//           <h2 className="text-3xl font-bold">Dashboard</h2>
//         </header>
        
//         <nav aria-label="Main navigation">
//           <ul className="pt-8">
//             {navItems.map((item, index) => (
//               <NavigationItem 
//                 key={index}
//                 icon={item.icon}
//                 label={item.label}
//                 active={item.active}
//               />
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-8 bg-gray-50">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
//         </header>

//         {/* Metrics Section */}
//         <section className="grid md:grid-cols-2 gap-8 mb-10">
//           <MetricCard 
//             icon={Users}
//             title="Total Authors"
//             value={totalAuthors}
//             gradientFrom="indigo-500"
//             gradientTo="indigo-700"
//           />
          
//           <MetricCard 
//             icon={FileText}
//             title="Total Researches"
//             value={totalResearches}
//             gradientFrom="teal-500"
//             gradientTo="teal-700"
//           />
//         </section>

//         {/* Progress Indicators Section */}
//         <section className="grid md:grid-cols-2 gap-8">
//           <article className="bg-white p-6 rounded-2xl shadow-lg">
//             <CircularProgress
//               percentage={progressAuthors}
//               label="Authors Progress"
//               colorStart="#4C9BF0"
//               colorEnd="#1D4E89"
//               id="authors"
//             />
//           </article>
          
//           <article className="bg-white p-6 rounded-2xl shadow-lg">
//             <CircularProgress
//               percentage={progressResearches}
//               label="Researches Progress"
//               colorStart="#34D399"
//               colorEnd="#10B981"
//               id="researches"
//             />
//           </article>
//         </section>
//       </main>
//     </div>
//   );
// };

// Dashboard.propTypes = {
//   totalAuthors: PropTypes.number,
//   totalResearches: PropTypes.number,
//   progressAuthors: PropTypes.number,
//   progressResearches: PropTypes.number,
// };

// export default Dashboard;



import React, { useState, useEffect, useMemo } from 'react';
import { Users, FileText, Settings, Home, HelpCircle, ChevronDown, Search, Bell } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * CircularProgress - Enhanced with animation and better accessibility
 */
const CircularProgress = ({ percentage = 0, label, colorStart, colorEnd, id }) => {
  const strokeWidth = 10;
  const radius = 50;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    // Animation effect
    const duration = 1000; // animation duration in ms
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentPercentage = progress * percentage;
      setAnimatedPercentage(currentPercentage);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [percentage]);

  useEffect(() => {
    const offset = circumference - (animatedPercentage / 100) * circumference;
    setStrokeDashoffset(offset);
  }, [animatedPercentage, circumference]);

  return (
    <div className="flex flex-col items-center mb-6" role="progressbar" aria-valuenow={Math.round(percentage)} aria-valuemin="0" aria-valuemax="100">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{label}</h3>
      <svg 
        className="w-24 h-24 transform -rotate-90"
        width="120" 
        height="120" 
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
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
        />
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor={colorEnd} />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-lg font-bold text-gray-700">
        {`${Math.round(animatedPercentage)}%`}
      </span>
    </div>
  );
};

CircularProgress.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string.isRequired,
  colorStart: PropTypes.string.isRequired,
  colorEnd: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

/**
 * NavigationItem - Enhanced with click handler and active state
 */
const NavigationItem = ({ icon: Icon, label, active = false, onClick }) => (
  <li 
    className={`mb-6 text-lg flex items-center gap-4 cursor-pointer transition-colors ${
      active ? 'font-bold bg-blue-800 px-4 py-2 rounded-lg' : 'hover:bg-blue-800 hover:bg-opacity-30 px-4 py-2 rounded-lg'
    }`}
    onClick={onClick}
  >
    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
    <span>{label}</span>
  </li>
);

NavigationItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

/**
 * MetricCard - Enhanced with hover effects and better typography
 */
const MetricCard = ({ icon: Icon, title, value, gradientFrom, gradientTo }) => (
  <article 
    className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
  >
    <div className="flex items-center gap-6 mb-4">
      <div className="p-3 bg-white bg-opacity-20 rounded-full">
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <h3 id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`} className="text-2xl font-semibold text-white">
        {title}
      </h3>
    </div>
    <p className="text-white text-4xl font-bold">{value.toLocaleString()}</p>
    <p className="text-white text-opacity-80 mt-2 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
  </article>
);

MetricCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  gradientFrom: PropTypes.string.isRequired,
  gradientTo: PropTypes.string.isRequired,
};

/**
 * Dashboard - Enhanced with state management and additional features
 */
const Dashboard = ({ 
  totalAuthors = 0, 
  totalResearches = 0, 
  progressAuthors = 0, 
  progressResearches = 0 
}) => {
  const [activeNavItem, setActiveNavItem] = useState('Overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);

  const navItems = useMemo(() => [
    { icon: Home, label: 'Overview' },
    { icon: FileText, label: 'Researches' },
    { icon: Users, label: 'Authors' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
  ], []);

  const handleNavClick = (label) => {
    setActiveNavItem(label);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-blue-900 text-white p-6 flex-shrink-0 sticky top-0 h-screen">
        <header className="mb-8 pt-4">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </header>
        
        <nav aria-label="Main navigation">
          <ul className="pt-8">
            {navItems.map((item) => (
              <NavigationItem 
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={activeNavItem === item.label}
                onClick={() => handleNavClick(item.label)}
              />
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        {/* Header with search and notifications */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Bell className="text-gray-600" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                U
              </div>
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Metrics Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <MetricCard 
            icon={Users}
            title="Total Authors"
            value={totalAuthors}
            gradientFrom="indigo-500"
            gradientTo="indigo-700"
          />
          
          <MetricCard 
            icon={FileText}
            title="Total Researches"
            value={totalResearches}
            gradientFrom="teal-500"
            gradientTo="teal-700"
          />
        </section>

        {/* Progress Indicators Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <article className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <CircularProgress
              percentage={progressAuthors}
              label="Authors Progress"
              colorStart="#4C9BF0"
              colorEnd="#1D4E89"
              id="authors"
            />
            <div className="mt-4 text-gray-600">
              <p className="text-sm">Target: 100 authors this quarter</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${progressAuthors}%` }}
                ></div>
              </div>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <CircularProgress
              percentage={progressResearches}
              label="Researches Progress"
              colorStart="#34D399"
              colorEnd="#10B981"
              id="researches"
            />
            <div className="mt-4 text-gray-600">
              <p className="text-sm">Target: 200 researches this quarter</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-teal-500 h-2 rounded-full" 
                  style={{ width: `${progressResearches}%` }}
                ></div>
              </div>
            </div>
          </article>
        </section>

        {/* Recent Activity Section */}
        <section className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="font-medium">New research added</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  totalAuthors: PropTypes.number,
  totalResearches: PropTypes.number,
  progressAuthors: PropTypes.number,
  progressResearches: PropTypes.number,
};

export default Dashboard;




// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Users, FileText, Settings, Home, HelpCircle } from 'lucide-react';
// import PropTypes from 'prop-types';

// /**
//  * CircularProgress - A reusable circular progress indicator component
//  */
// const CircularProgress = React.memo(({ 
//   percentage = 0, 
//   label, 
//   colorStart, 
//   colorEnd, 
//   id 
// }) => {
//   const strokeWidth = 10;
//   const radius = 50;
//   const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
//   const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
//   const roundedPercentage = useMemo(() => Math.round(percentage), [percentage]);

//   useEffect(() => {
//     const clampedPercentage = Math.min(100, Math.max(0, Number(percentage)));
//     const offset = circumference - (clampedPercentage / 100) * circumference;
//     setStrokeDashoffset(offset);
//   }, [percentage, circumference]);

//   return (
//     <div 
//       className="flex flex-col items-center mb-6" 
//       role="progressbar" 
//       aria-valuenow={roundedPercentage} 
//       aria-valuemin="0" 
//       aria-valuemax="100"
//       aria-label={`${label}: ${roundedPercentage}%`}
//     >
//       <h3 className="text-sm font-semibold text-gray-700 mb-2">{label}</h3>
//       <svg 
//         className="w-24 h-24 transform -rotate-90"
//         width="120" 
//         height="120" 
//         viewBox="0 0 120 120"
//         aria-hidden="true"
//       >
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
//           stroke={`url(#gradient-${id})`}
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
//         />
//         <defs>
//           <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={colorStart} />
//             <stop offset="100%" stopColor={colorEnd} />
//           </linearGradient>
//         </defs>
//       </svg>
//       <span className="text-lg font-bold text-gray-700">
//         {`${roundedPercentage}%`}
//       </span>
//     </div>
//   );
// });

// CircularProgress.propTypes = {
//   percentage: PropTypes.number,
//   label: PropTypes.string.isRequired,
//   colorStart: PropTypes.string.isRequired,
//   colorEnd: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

// /**
//  * NavigationItem - Sidebar navigation item component
//  */
// const NavigationItem = React.memo(({ icon: Icon, label, active = false, onClick }) => (
//   <li 
//     className={`mb-6 text-lg flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity ${
//       active ? 'font-bold' : ''
//     }`}
//     onClick={onClick}
//   >
//     <Icon className="w-6 h-6 text-white" aria-hidden="true" />
//     <span>{label}</span>
//   </li>
// ));

// NavigationItem.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   label: PropTypes.string.isRequired,
//   active: PropTypes.bool,
//   onClick: PropTypes.func,
// };

// /**
//  * MetricCard - Dashboard metric card component
//  */
// const MetricCard = React.memo(({ icon: Icon, title, value, gradientFrom, gradientTo }) => {
//   const gradientClass = `bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`;
  
//   return (
//     <article 
//       className={`${gradientClass} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
//       aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
//     >
//       <div className="flex items-center gap-6 mb-4">
//         <Icon className="w-8 h-8 text-white" aria-hidden="true" />
//         <h3 
//           id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`} 
//           className="text-2xl font-semibold text-white"
//         >
//           {title}
//         </h3>
//       </div>
//       <p className="text-white text-4xl font-bold">
//         {value.toLocaleString()}
//       </p>
//     </article>
//   );
// });

// MetricCard.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   title: PropTypes.string.isRequired,
//   value: PropTypes.number.isRequired,
//   gradientFrom: PropTypes.string.isRequired,
//   gradientTo: PropTypes.string.isRequired,
// };

// /**
//  * Dashboard - Main dashboard component
//  */
// const Dashboard = ({ 
//   totalAuthors = 0, 
//   totalResearches = 0, 
//   progressAuthors = 0, 
//   progressResearches = 0 
// }) => {
//   const [activeNavItem, setActiveNavItem] = useState('Overview');
  
//   const navItems = useMemo(() => [
//     { icon: Home, label: 'Overview' },
//     { icon: FileText, label: 'Researches' },
//     { icon: Users, label: 'Authors' },
//     { icon: Settings, label: 'Settings' },
//     { icon: HelpCircle, label: 'Help' },
//   ], []);

//   const handleNavClick = useCallback((label) => {
//     setActiveNavItem(label);
//     // Here you would typically add navigation logic
//     console.log(`Navigating to ${label}`);
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar Navigation */}
//       <aside className="w-64 bg-blue-900 text-white p-6 flex-shrink-0 sticky top-0 h-screen">
//         <header className="mb-8 pt-4">
//           <h2 className="text-3xl font-bold">Dashboard</h2>
//         </header>
        
//         <nav aria-label="Main navigation">
//           <ul className="pt-8">
//             {navItems.map((item) => (
//               <NavigationItem 
//                 key={item.label}
//                 icon={item.icon}
//                 label={item.label}
//                 active={activeNavItem === item.label}
//                 onClick={() => handleNavClick(item.label)}
//               />
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-8 max-w-7xl mx-auto">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
//           <p className="text-gray-600">Welcome to your research analytics dashboard</p>
//         </header>

//         {/* Metrics Section */}
//         <section className="grid md:grid-cols-2 gap-8 mb-10">
//           <MetricCard 
//             icon={Users}
//             title="Total Authors"
//             value={totalAuthors}
//             gradientFrom="indigo-500"
//             gradientTo="indigo-700"
//           />
          
//           <MetricCard 
//             icon={FileText}
//             title="Total Researches"
//             value={totalResearches}
//             gradientFrom="teal-500"
//             gradientTo="teal-700"
//           />
//         </section>

//         {/* Progress Indicators Section */}
//         <section className="grid md:grid-cols-2 gap-8">
//           <article className="bg-white p-6 rounded-2xl shadow-lg">
//             <CircularProgress
//               percentage={progressAuthors}
//               label="Authors Progress"
//               colorStart="#4C9BF0"
//               colorEnd="#1D4E89"
//               id="authors"
//             />
//           </article>
          
//           <article className="bg-white p-6 rounded-2xl shadow-lg">
//             <CircularProgress
//               percentage={progressResearches}
//               label="Researches Progress"
//               colorStart="#34D399"
//               colorEnd="#10B981"
//               id="researches"
//             />
//           </article>
//         </section>

//         {/* Additional Content Section */}
//         <section className="mt-12 bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
//           <p className="text-gray-600">Dashboard content for {activeNavItem} will appear here</p>
//         </section>
//       </main>
//     </div>
//   );
// };

// Dashboard.propTypes = {
//   totalAuthors: PropTypes.number,
//   totalResearches: PropTypes.number,
//   progressAuthors: PropTypes.number,
//   progressResearches: PropTypes.number,
// };

// export default Dashboard;
