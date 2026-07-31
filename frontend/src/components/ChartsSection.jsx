import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function ChartsSection({ matchedCount, missingCount, atsScore }) {
  const pieData = [
    { name: "Matched", value: matchedCount },
    { name: "Missing", value: missingCount },
  ];

  const barData = [
    {
      name: "ATS Score",
      score: atsScore,
    },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

      {/* Pie Chart */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-6">
          Skills Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-6">
          ATS Score
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Bar
              dataKey="score"
              fill="#3b82f6"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default ChartsSection;