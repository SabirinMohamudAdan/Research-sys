import React from 'react';
import { FilePlus2 } from 'lucide-react';

const AddResearch = ({
  title,
  setTitle,
  author,
  setAuthor,
  summary,
  setSummary,
  handleSubmit,
}) => {
  // Local submit handler to check if inputs are filled
  const onSubmit = (e) => {
    e.preventDefault(); // prevent default submit
    if (!title.trim() || !author.trim() || !summary.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    handleSubmit(e); // call original handler if all inputs are filled
  };

  return (
    <section className="bg-white p-6 rounded-3xl shadow-lg mb-10">
      <div className="flex items-center gap-2 mb-4">
        <FilePlus2 className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Add New Research</h2>
      </div>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input
          className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
        <button className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-xl font-semibold transition">
          Submit Research
        </button>
      </form>
    </section>
  );
};

export default AddResearch;
