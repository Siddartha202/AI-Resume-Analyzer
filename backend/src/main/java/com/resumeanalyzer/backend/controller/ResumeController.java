package com.resumeanalyzer.backend.controller;

import java.time.LocalDateTime;
import com.resumeanalyzer.backend.entity.Resume;
import com.resumeanalyzer.backend.service.ResumeService;
import com.resumeanalyzer.backend.storage.FileStorageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.resumeanalyzer.backend.parser.PdfParser;
import com.resumeanalyzer.backend.dto.ResumeAnalysisResponse;
import com.resumeanalyzer.backend.parser.ResumeAnalyzer;
import com.resumeanalyzer.backend.dto.ATSResponse;
import com.resumeanalyzer.backend.parser.ATSAnalyzer;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/resumes")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://ai-resume-analyzer-six-alpha.vercel.app"
})
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    private PdfParser pdfParser;

    @Autowired
    private ResumeAnalyzer resumeAnalyzer;

    @Autowired
    private ATSAnalyzer atsAnalyzer;

    // Save resume details
    @PostMapping
    public Resume saveResume(@RequestBody Resume resume) {
        return resumeService.saveResume(resume);
    }

    // Get all resumes
    @GetMapping
    public List<Resume> getAllResumes() {
        return resumeService.getAllResumes();
    }

    // Get resume by ID
    @GetMapping("/{id}")
    public Optional<Resume> getResume(@PathVariable Long id) {
        return resumeService.getResumeById(id);
    }

    // Delete resume
    @DeleteMapping("/{id}")
    public void deleteResume(@PathVariable Long id) {
        resumeService.deleteResume(id);
    }

    // Upload resume file
    @PostMapping("/upload")
public ResumeAnalysisResponse uploadResume(
        @RequestParam("file") MultipartFile file) throws IOException {

    String filePath = fileStorageService.saveFile(file);

    String text = pdfParser.extractText(filePath);

    return resumeAnalyzer.analyze(text);
}
    @PostMapping("/ats")
public ATSResponse calculateATS(
        @RequestParam("file") MultipartFile file,
        @RequestParam("jobDescription") String jobDescription)
        throws IOException {

    // Save uploaded file
    String filePath = fileStorageService.saveFile(file);

    // Extract resume text
    String resumeText = pdfParser.extractText(filePath);

    // Analyze ATS
    ATSResponse response = atsAnalyzer.analyze(resumeText, jobDescription);

    // Save analysis to database
    Resume resume = new Resume();
    resume.setFileName(file.getOriginalFilename());
    resume.setAtsScore((double) response.getAtsScore());
    resume.setSuggestions(String.join(", ", response.getSuggestions()));
    resume.setAnalyzedAt(LocalDateTime.now());

    resumeService.saveResume(resume);

    return response;
}
}