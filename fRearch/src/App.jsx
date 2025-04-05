import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { LayoutDashboard, FilePlus2, Users } from "lucide-react";

function App() {
  const [researches, setResearches] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");

  const fetchResearches = async () => {
    const res = await axios.get("http://localhost:5000/api/research");
    setResearches(res.data);
  };

  useEffect(() => {
    fetchResearches();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/research", { title, summary, author });
    setTitle("");
    setSummary("");
    setAuthor("");
    fetchResearches();
  };

  const uniqueAuthors = new Set(researches.map((r) => r.author));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-4 mb-8">
          <LayoutDashboard className="w-8 h-8 text-blue-700" />
          <h1 className="text-3xl font-bold text-blue-800">Research Dashboard</h1>
        </header>

        {/* DASHBOARD INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-4">
            <Users className="w-10 h-10 text-blue-700" />
            <div>
              <p className="text-sm text-gray-500">Total Authors</p>
              <h2 className="text-2xl font-bold text-blue-800">{uniqueAuthors.size}</h2>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-4">
            <FilePlus2 className="w-10 h-10 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Total Researches</p>
              <h2 className="text-2xl font-bold text-green-800">{researches.length}</h2>
            </div>
          </div>
        </div>

        <section className="bg-white p-6 rounded-3xl shadow-lg mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FilePlus2 className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Add New Research</h2>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
            <textarea className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)}></textarea>
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-xl font-semibold transition">Submit Research</button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">All Researches</h2>
          <div className="grid gap-4">
            {researches.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">By {item.author}</p>
                  <p className="text-gray-700">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;