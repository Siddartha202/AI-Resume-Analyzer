function SuggestionsSection({ suggestions }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        💡 AI Suggestions
      </h2>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-slate-700 p-4 rounded-xl border-l-4 border-yellow-400"
          >
            <p className="text-gray-200">
              {suggestion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestionsSection;