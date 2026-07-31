import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSScoreCard({ score }) {
  let status = "";

  if (score >= 80) {
    status = "Excellent Match";
  } else if (score >= 60) {
    status = "Good Match";
  } else if (score >= 40) {
    status = "Average Match";
  } else {
    status = "Needs Improvement";
  }

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        ATS Score
      </h2>

      <div className="w-48 h-48 mx-auto">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: "#22c55e",
            trailColor: "#334155",
          })}
        />
      </div>

      <p className="text-center text-xl text-gray-300 mt-6">
        {status}
      </p>
    </div>
  );
}

export default ATSScoreCard;