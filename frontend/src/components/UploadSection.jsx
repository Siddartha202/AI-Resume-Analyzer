import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import api from "../services/api";
import ATSScoreCard from "./ATSScoreCard";
import StatsCards from "./StatsCards";
import SkillsSection from "./SkillsSection";
import SuggestionsSection from "./SuggestionsSection";
import ChartsSection from "./ChartsSection";
import { generatePDF } from "../utils/pdfGenerator";
import { toast } from "react-toastify";

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    console.log("Analyze button clicked");

    if (!selectedFile) {
      toast.error("Please select a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      toast.warning("Please enter a Job Description.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("jobDescription", jobDescription);

    try {
      setLoading(true);

      console.log("Sending request...");
      console.log("Selected File:", formData.get("file"));
      console.log("Job Description:", formData.get("jobDescription"));

      const response = await api.post("/resumes/ats", formData);

      console.log("Response received:");
      console.log(response.data);

      toast.success("Resume analyzed successfully!");
        
      setResult(response.data);
    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      } else if (error.request) {
        console.log("No response received from backend.");
        console.log(error.request);
      } else {
        console.log("Error:", error.message);
      }

     toast.error("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">
          Upload Your Resume
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Upload your resume in PDF or DOCX format and let AI analyze it.
        </p>

        <div className="mt-10 border-2 border-dashed border-blue-500 rounded-2xl p-12 text-center bg-slate-950">
          <FaCloudUploadAlt className="text-6xl text-blue-500 mx-auto" />

          <p className="text-gray-300 mt-6">
            Drag & Drop Resume Here
          </p>

          <p className="text-gray-500 mt-2">OR</p>

          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <label
            htmlFor="resumeUpload"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white cursor-pointer transition"
          >
            Choose Resume
          </label>

          {selectedFile && (
            <div className="mt-8 bg-slate-800 rounded-xl p-6">
              <p className="text-green-400 text-lg font-semibold">
                ✅ File Selected Successfully
              </p>

              <p className="text-white mt-3">
                📄 <strong>{selectedFile.name}</strong>
              </p>

              <p className="text-gray-400 mt-2">
                📏 Size: {(selectedFile.size / 1024).toFixed(2)} KB
              </p>

              <textarea
                rows={6}
                placeholder="Paste Job Description here..."
                className="w-full mt-6 bg-slate-900 text-white rounded-lg p-4 border border-gray-700"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing Resume..." : "Analyze Resume"}
              </button>

              {loading && (
                <div className="flex flex-col items-center mt-6">
                  <div className="animate-spin h-12 w-12 border-4 border-gray-700 border-t-blue-500 rounded-full"></div>

                  <p className="mt-3 text-gray-300">
                    Analyzing your resume...
                  </p>
                </div>
              )}

              {result && (
                <div className="mt-10">
                  <ATSScoreCard score={result.atsScore} />

                  <StatsCards
                    matchedCount={result.matchedSkills.length}
                    missingCount={result.missingSkills.length}
                    suggestionCount={result.suggestions.length}
                  />

                  <ChartsSection
                    matchedCount={result.matchedSkills.length}
                    missingCount={result.missingSkills.length}
                    atsScore={result.atsScore}
                  />

                  <SkillsSection
                    matchedSkills={result.matchedSkills}
                    missingSkills={result.missingSkills}
                  />

                  <SuggestionsSection
                    suggestions={result.suggestions}
                  />

                  <div className="text-center mt-8">
                    <button
                      onClick={() => generatePDF(result)}
                      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition"
                    >
                      Download PDF Report
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <p className="mt-8 text-gray-500">
            Supported Files:
            <span className="text-white"> PDF, DOCX</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default UploadSection;