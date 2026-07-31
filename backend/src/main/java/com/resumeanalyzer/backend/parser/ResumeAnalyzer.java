package com.resumeanalyzer.backend.parser;

import com.resumeanalyzer.backend.dto.ResumeAnalysisResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class ResumeAnalyzer {

    public ResumeAnalysisResponse analyze(String text) {

        ResumeAnalysisResponse response = new ResumeAnalysisResponse();

        // Email
        Pattern emailPattern = Pattern.compile(
                "[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+");
        Matcher emailMatcher = emailPattern.matcher(text);

        if (emailMatcher.find()) {
            response.setEmail(emailMatcher.group());
        }

        // Phone
        Pattern phonePattern = Pattern.compile(
                "(\\+91[- ]?)?[6-9]\\d{9}");
        Matcher phoneMatcher = phonePattern.matcher(text);

        if (phoneMatcher.find()) {
            response.setPhone(phoneMatcher.group());
        }

        // Name (first line)
        String[] lines = text.split("\\R");

        if (lines.length > 0) {

         String firstLine = lines[0];

     // Remove phone number
        firstLine = firstLine.replaceAll("(\\+91[- ]?)?[6-9]\\d{9}", "");

    // Remove non-letter characters except spaces
        firstLine = firstLine.replaceAll("[^A-Za-z ]", "");

            response.setName(firstLine.trim());
        }

        // Education
        if (text.contains("Bachelor of Technology")) {
            response.setEducation("Bachelor of Technology");
        }

        // Skills
        String[] keywords = {
                "Java",
                "Python",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Spring Boot",
                "MySQL",
                "SQL",
                "Salesforce",
                "Apex",
                "SOQL",
                "REST API",
                "GitHub"
        };

        List<String> skills = new ArrayList<>();

        for (String skill : keywords) {
            if (text.toLowerCase().contains(skill.toLowerCase())) {
                skills.add(skill);
            }
        }

        response.setSkills(skills);

        return response;
    }
}