import React, { useEffect, useState } from "react";
import axios from "axios";

const useResearchData = () => {
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

  return {
    researches,
    title,
    setTitle,
    summary,
    setSummary,
    author,
    setAuthor,
    handleSubmit,
    uniqueAuthors
  };
};

export default useResearchData;