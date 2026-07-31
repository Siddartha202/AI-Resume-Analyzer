import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const totalResumes = history.length;

  const averageATS =
    history.length > 0
      ? (
          history.reduce(
            (sum, resume) => sum + (resume.atsScore || 0),
            0
          ) / history.length
        ).toFixed(1)
      : 0;

  const highestATS =
    history.length > 0
      ? Math.max(...history.map((resume) => resume.atsScore || 0))
      : 0;

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get("/resumes");
      setHistory(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load resume history.");
    }
  };

  const deleteResume = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/resumes/${id}`);

      toast.success("Resume deleted successfully!");

      fetchHistory();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete resume.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white px-6 py-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Resume Analysis History
        </h1>

        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">

          <input
            type="text"
            placeholder="🔍 Search by file name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[450px] h-11 px-4 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-40 h-11 px-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="latest">Latest</option>
            <option value="highest">Highest ATS</option>
            <option value="lowest">Lowest ATS</option>
          </select>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-800 rounded-xl shadow-lg p-5 text-center">
            <h2 className="text-lg font-semibold text-gray-300">
              Total Resumes
            </h2>

            <p className="text-3xl font-bold text-blue-400 mt-3">
              {totalResumes}
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl shadow-lg p-5 text-center">
            <h2 className="text-lg font-semibold text-gray-300">
              Average ATS
            </h2>

            <p className="text-3xl font-bold text-green-400 mt-3">
              {averageATS}%
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl shadow-lg p-5 text-center">
            <h2 className="text-lg font-semibold text-gray-300">
              Highest ATS
            </h2>

            <p className="text-3xl font-bold text-yellow-400 mt-3">
              {highestATS}%
            </p>
          </div>

        </div>

        {/* History Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg">

          <table className="w-full border border-slate-700">

            <thead className="bg-slate-800">
              <tr>
                <th className="p-4 border border-slate-700">File Name</th>
                <th className="p-4 border border-slate-700">ATS Score</th>
                <th className="p-4 border border-slate-700">Analyzed At</th>
                <th className="p-4 border border-slate-700">Action</th>
              </tr>
            </thead>

            <tbody>

              {history
                .filter((resume) =>
                  resume.fileName
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  if (sortBy === "highest") {
                    return b.atsScore - a.atsScore;
                  }

                  if (sortBy === "lowest") {
                    return a.atsScore - b.atsScore;
                  }

                  return (
                    new Date(b.analyzedAt) -
                    new Date(a.analyzedAt)
                  );
                })
                .map((resume) => (
                  <tr
                    key={resume.id}
                    className="text-center hover:bg-slate-800 transition"
                  >
                    <td className="p-4 border border-slate-700">
                      {resume.fileName}
                    </td>

                    <td className="p-4 border border-slate-700 font-semibold text-green-400">
                      {resume.atsScore}%
                    </td>

                    <td className="p-4 border border-slate-700">
                      {resume.analyzedAt
                        ? new Date(resume.analyzedAt).toLocaleString()
                        : "-"}
                    </td>

                    <td className="p-4 border border-slate-700">
                      <button
                        onClick={() => deleteResume(resume.id)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default History;