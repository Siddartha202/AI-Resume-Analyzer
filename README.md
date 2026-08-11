# 🤖 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes against a given job description and provides an ATS (Applicant Tracking System) compatibility score, matched skills, missing skills, and resume improvement suggestions.

## 🚀 Live Demo

Frontend: https://ai-resume-analyzer-my7nw92yt-vijetha.vercel.app/

Backend: https://ai-resume-analyzer-production-0f76.up.railway.app/

## ✨ Features

- 📄 Upload resumes in PDF format
- 📝 Enter a job description
- 📊 Calculate ATS compatibility score
- ✅ Identify matched skills
- ❌ Identify missing skills
- 💡 Generate resume improvement suggestions
- 💾 Store analyzed resume information
- 📜 View resume analysis history
- 🌐 Fully deployed application

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- Axios
- React Router
- React Toastify

### Backend
- Java
- Spring Boot
- REST APIs
- Spring Data JPA
- Hibernate
- Maven

### Database
- MySQL
- Aiven Cloud

### Deployment
- Vercel – Frontend
- Railway – Backend
- Aiven – Database

## 🏗️ Project Architecture

```text
User
  │
  ▼
React + Vite Frontend
  │
  │ Axios REST API
  ▼
Spring Boot Backend
  │
  ├── Resume Upload
  ├── PDF Text Extraction
  ├── ATS Analysis
  ├── Skill Matching
  └── Suggestions
  │
  ▼
MySQL Database
