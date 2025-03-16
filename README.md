# Globetrotter - Full-Stack Gaming Web App

Globetrotter is a full-stack web application where users guess destinations from cryptic clues. The game includes AI-powered dataset expansion, interactive UI/UX, and a friend challenge feature.

## 🚀 Tech Stack

### **Frontend**
- **Framework:** Next.js (React)
- **Styling:** TailwindCSS
- **State Management:** React Hooks
- **Deployment:** Vercel

### **Backend**
- **Server:** Node.js with Express
- **Database:** MongoDB Atlas
- **API Routes:** Next.js API Routes (or Express)
- **AI Integration:** OpenAI API for dataset expansion & clue generation
- **Storage:** Cloudinary (for invite images)
- **Deployment:** Railway/Render

---
## 📦 Setup & Installation

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v18+ recommended)
- **MongoDB Atlas Account** (or a local MongoDB instance)
- **Vercel CLI** (for frontend deployment)
- **Railway/Render Account** (for backend deployment)

### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/yourusername/globetrotter-game.git
 cd globetrotter-game
```

### **2️⃣ Setup the Backend**
```sh
cd backend
npm install
```

#### **Configure Environment Variables**
Create a `.env` file in the `backend` directory and add:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_URL=your_cloudinary_url
```

#### **Run the Backend**
```sh
npm start
```
or (for development mode with live reload)
```sh
npm run dev
```

---

### **3️⃣ Setup the Frontend**
```sh
cd ../frontend
npm install
```

#### **Configure Environment Variables**
Create a `.env.local` file in the `frontend` directory and add:
```sh
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### **Run the Frontend**
```sh
npm run dev
```

Your app will be available at `http://localhost:3000`

---
## 🎮 Features
- AI-powered destination and clue generation
- Interactive UI/UX with animations
- Backend API with scalable storage


---
## 🛠 Troubleshooting
If you face issues, try:
```sh
rm -rf node_modules package-lock.json && npm install
```
For database connection issues, check `MONGO_URI` in `.env`.

---
## 📜 License
MIT License. Feel free to contribute!

---
## ✨ Contributors
- Mohammed Saheel - Developer
- Open for contributions! Feel free to submit a PR.

---
Now you're all set! 🚀 Happy coding!

