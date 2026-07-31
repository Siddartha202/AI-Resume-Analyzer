function StatsCards({
  matchedCount,
  missingCount,
  suggestionCount,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

      {/* Skills Found */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
        <h3 className="text-lg font-semibold text-white">
          Skills Found
        </h3>

        <p className="text-5xl font-bold text-green-400 mt-4">
          {matchedCount}
        </p>
      </div>

      {/* Missing Skills */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
        <h3 className="text-lg font-semibold text-white">
          Missing Skills
        </h3>

        <p className="text-5xl font-bold text-red-400 mt-4">
          {missingCount}
        </p>
      </div>

      {/* Suggestions */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
        <h3 className="text-lg font-semibold text-white">
          Suggestions
        </h3>

        <p className="text-5xl font-bold text-yellow-400 mt-4">
          {suggestionCount}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;