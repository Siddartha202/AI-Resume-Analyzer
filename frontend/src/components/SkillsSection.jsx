function SkillsSection({ matchedSkills, missingSkills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

      {/* Matched Skills */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          ✅ Matched Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {matchedSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Missing Skills */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          ❌ Missing Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {missingSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full border border-red-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SkillsSection;
