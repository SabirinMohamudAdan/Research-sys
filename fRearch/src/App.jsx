import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Research Management System</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-6 rounded-2xl shadow">
        <input className="border p-2 rounded" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="border p-2 rounded" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <textarea className="border p-2 rounded" placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)}></textarea>
        <button className="bg-blue-600 text-white p-2 rounded" type="submit">Submit</button>
      </form>

      <div className="mt-8 grid gap-4">
        {researches.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-white p-4 rounded-2xl shadow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">By {item.author}</p>
              <p className="text-gray-700 mt-1">{item.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;