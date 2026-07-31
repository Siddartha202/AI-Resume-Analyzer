package com.resumeanalyzer.backend.parser;

import com.resumeanalyzer.backend.dto.ATSResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ATSAnalyzer {

    public ATSResponse analyze(String resumeText, String jobDescription) {

        ATSResponse response = new ATSResponse();

        String[] keywords = {
                "Java",
                "Spring Boot",
                "MySQL",
                "SQL",
                "Python",
                "React",
                "HTML",
                "CSS",
                "JavaScript",
                "REST API",
                "Git",
                "GitHub",
                "Docker",
                "AWS",
                "JUnit",
                "Salesforce",
                "Apex",
                "SOQL"
        };

        List<String> matched = new ArrayList<>();
        List<String> missing = new ArrayList<>();
        List<String> suggestions = new ArrayList<>();

        String resume = resumeText.toLowerCase();
        String jd = jobDescription.toLowerCase();

        int totalRequired = 0;
        int matchedCount = 0;

        for (String skill : keywords) {

            if (jd.contains(skill.toLowerCase())) {

                totalRequired++;

                if (resume.contains(skill.toLowerCase())) {
                    matched.add(skill);
                    matchedCount++;
                } else {
                    missing.add(skill);
                    suggestions.add("Add " + skill + " to your resume if you have experience with it.");
                }
            }
        }

        int score = totalRequired == 0 ? 0 : (matchedCount * 100) / totalRequired;

        response.setAtsScore(score);
        response.setMatchedSkills(matched);
        response.setMissingSkills(missing);
        response.setSuggestions(suggestions);

        return response;
    }
}
