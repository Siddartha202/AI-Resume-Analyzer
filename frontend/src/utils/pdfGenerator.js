import jsPDF from "jspdf";

export function generatePDF(result) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("AI Resume Analyzer Report", 20, 20);

  doc.setFontSize(14);
  doc.text(`ATS Score: ${result.atsScore}%`, 20, 35);

  let y = 50;

  doc.setFontSize(16);
  doc.text("Matched Skills", 20, y);

  y += 10;

  result.matchedSkills.forEach((skill) => {
    doc.setFontSize(12);
    doc.text(`• ${skill}`, 25, y);
    y += 8;
  });

  y += 5;

  doc.setFontSize(16);
  doc.text("Missing Skills", 20, y);

  y += 10;

  result.missingSkills.forEach((skill) => {
    doc.setFontSize(12);
    doc.text(`• ${skill}`, 25, y);
    y += 8;
  });

  y += 5;

  doc.setFontSize(16);
  doc.text("Suggestions", 20, y);

  y += 10;

  result.suggestions.forEach((item) => {
    doc.setFontSize(12);
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  doc.save("ATS_Report.pdf");
}