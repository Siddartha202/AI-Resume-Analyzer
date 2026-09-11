# 🤖 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes against a given job description and provides an ATS (Applicant Tracking System) compatibility score, matched skills, missing skills, and resume improvement suggestions.

## 🚀 Live Demo

### 🌐 Frontend

ai-resume-analyzer-six-alpha.vercel.app

### ⚙️ Backend API

https://ai-resume-analyzer-qs8m.onrender.com/

> The frontend application is deployed on Vercel and the Spring Boot backend is deployed on Render.

## ✨ Features

- 📄 Upload resumes in PDF format
- 📝 Enter a job description
- 📊 Calculate ATS compatibility score
- ✅ Identify matched skills
- ❌ Identify missing skills
- 💡 Generate resume improvement suggestions
- 🔐 User registration and login
- 💾 Store analyzed resume information
- 📜 View resume analysis history
- 🌐 Fully deployed application
- ☁️ Cloud-hosted MySQL database
- 🔗 REST API integration between frontend and backend

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
- Spring Data JPA
- Hibernate
- REST APIs
- Maven
- Apache PDFBox / PDF parsing
- ATS Analysis
- Resume Analysis

### Database

- MySQL
- Aiven Cloud

### Deployment

- Vercel – Frontend
- Render – Backend
- Aiven – Database

## 🏗️ Project Architecture

```text
                         User
                           │
                           ▼
                ┌─────────────────────┐
                │   React + Vite      │
                │      Frontend       │
                │      Vercel         │
                └──────────┬──────────┘
                           │
                           │ Axios REST API
                           ▼
                ┌─────────────────────┐
                │    Spring Boot      │
                │      Backend        │
                │       Render        │
                └──────────┬──────────┘
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
       Resume Upload   ATS Analysis   Authentication
             │             │             │
             ▼             ▼             ▼
       PDF Extraction  Skill Matching  Login/Register
                           │
                           ▼
                ┌─────────────────────┐
                │    MySQL Database   │
                │       Aiven         │
                └─────────────────────┘
