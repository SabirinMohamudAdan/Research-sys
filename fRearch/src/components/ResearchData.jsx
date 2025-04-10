// import { useEffect, useState } from "react";
// import axios from "axios";

// const useResearchData = () => {
//   const [researches, setResearches] = useState([]);
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [author, setAuthor] = useState("");

//   const fetchResearches = async () => {
//     const res = await axios.get("http://localhost:5000/api/research");
//     setResearches(res.data);
//   };

//   useEffect(() => {
//     fetchResearches();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/research", {
//       title,
//       summary,
//       author,
//     });
//     setTitle("");
//     setSummary("");
//     setAuthor("");
//     fetchResearches();
//   };

//   const uniqueAuthors = new Set(researches.map((r) => r.author));

//   return {
//     researches,
//     title,
//     setTitle,
//     summary,
//     setSummary,
//     author,
//     setAuthor,
//     handleSubmit,
//     uniqueAuthors,
//   };
// };

// export default useResearchData;

import { useEffect, useState } from "react";
import axios from "axios";

const useResearchData = () => {
  const [researches, setResearches] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResearches = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("http://localhost:5000/api/researches"); // Changed endpoint to match backend
      setResearches(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch researches");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResearches();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !summary || !author) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.post("http://localhost:5000/api/researches", { // Changed endpoint to match backend
        title,
        summary,
        author,
      });
      setTitle("");
      setSummary("");
      setAuthor("");
      await fetchResearches(); // Refresh the list after successful submission
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add research");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique authors and sort them alphabetically
  const uniqueAuthors = [...new Set(researches.map((r) => r.author?.name || r.author))].sort();

  return {
    researches,
    title,
    setTitle,
    summary,
    setSummary,
    author,
    setAuthor,
    handleSubmit,
    uniqueAuthors,
    loading,
    error,
    fetchResearches, // Export fetch function for manual refreshes
  };
};

export default useResearchData;