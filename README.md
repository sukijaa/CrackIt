<div align="center">
  
  <br />
<a href="https://crack-it-sage.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/-Live_Demo-34D399?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>
  <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/-Vapi_AI-5dfeca?style=for-the-badge&logo=voice&logoColor=white" alt="Vapi AI" />


  <h2>🎤 CrackIt – AI-Powered Mock Interview Platform</h2>

  <p>
    Practice real-time interviews with AI voice agents, get instant feedback, and improve your skills!
  </p>
</div>

---

## 📑 Table of Contents

1. [📌 Introduction](#introduction)
2. [⚙️ Tech Stack](#tech-stack)
3. [🚀 Features](#features)
4. [🚀 Quick Start](#quick-start)
5. [🧠 Prompts & Logic](#prompts)
---

## 📌 Introduction<a name="introduction"></a>

**CrackIt** is a web-based mock interview platform where users can:

- Create interviews based on role, experience level, and tech stack
- Conduct AI voice interviews powered by Vapi
- Receive structured feedback using Google Gemini AI
- Track past interviews and performance

Built with **Next.js**, **Firebase**, and **Vapi**, this project showcases how to integrate voice AI with modern frontend frameworks.

---

## ⚙️ Tech Stack<a name="tech-stack"></a>

- ✅ **Next.js** – Frontend & API routes  
- 🎨 **Tailwind CSS** – Styling  
- 🔥 **Firebase** – Auth and storage  
- 🗣️ **Vapi AI** – Voice assistant integration  
- 🧠 **Google Gemini AI** – Interview generation & feedback  


---

## 🚀 Features<a name="features"></a>

- 🧑‍💼 **Role-Based Interviews** – Choose job role, stack & level
- 🤖 **Voice AI Interview** – Vapi handles the questioning
- 📝 **Instant Feedback** – Google Gemini rates & analyzes your answers
- 📊 **Performance Breakdown** – Communication, knowledge, problem-solving, etc.
- 📱 **Responsive Design** – Mobile-friendly and clean UI
- 🗂️ **Dashboard** – Track and manage all your interviews

---

## 🤸 Quick Start<a name="quick-start"></a>

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Vapi account](https://vapi.ai/)
- [Firebase project](https://firebase.google.com/)
- [Gemini API key](https://aistudio.google.com/app/apikey)

---

### 🚧 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/crackit.git
cd crackit

# Install dependencies
npm install
```
⚙️ Environment Variables

Create a .env.local file and fill in:
```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
▶️ Run the app
```bash
npm run dev
```

Go to http://localhost:3000 in your browser to use the app.

🧠 Prompts & AI Logic <a name="prompts"></a>
✨ Question Generator Prompt
```bash
`Prepare questions for a ${role} interview at ${level} level.
Tech stack: ${techstack}
Focus: ${type} (Behavioral or Technical)
Number of questions: ${amount}

Return ONLY the questions as an array like:
["Question 1", "Question 2"]`
```
📊 Feedback Prompt
```bash
"You are an AI interviewer. Analyze the transcript below.

Provide:
1. Total score out of 100
2. Category breakdown (communication, tech knowledge, problem-solving, etc.)
3. Strengths
4. Areas for improvement

Be honest, detailed, and constructive."
```

