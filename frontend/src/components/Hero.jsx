import { FaFileUpload, FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex items-center justify-center px-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Land Your
            <span className="text-blue-500"> Dream Job </span>
            with AI
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Upload your resume and receive an ATS score,
            skill gap analysis, and AI-powered suggestions
            to improve your chances of getting hired.
          </p>

          <button
            className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-3 text-lg transition"
          >
            <FaFileUpload />
            Upload Resume
          </button>

        </div>

        {/* Right Section */}

        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">

          <h2 className="text-2xl font-semibold mb-6">
            What You'll Get
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              ATS Compatibility Score
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Skill Gap Analysis
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Resume Improvement Suggestions
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Job Match Percentage
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;