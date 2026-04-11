# 🚀 How to Run - Backend + Frontend

## Problem Fixed ✅

The **CORS error** was happening because the browser was directly calling the Hugging Face API. Browser security blocks requests to different domains.

## Solution 🎯

Now we have:
1. **Backend server** (Node.js) - Handles API calls to Hugging Face
2. **Frontend app** (React) - Sends requests to backend (no CORS issue)

---

## 🏃 How to Run

### **Option 1: Run Both Together** (Recommended)

```bash
npm run dev-full
```

This starts:
- Backend server on `http://localhost:3001`
- Frontend on `http://localhost:5173`

### **Option 2: Run Separately**

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

---

## ✅ What to Expect

1. **Backend starts first** - Look for:
   ```
   ✅ Backend server running on http://localhost:3001
   📌 API endpoint: POST http://localhost:3001/api/chat
   ```

2. **Frontend starts** - Your React app loads

3. **Chat works!** - Type message → Backend calls Hugging Face → Response appears

---

## 📊 How It Works Now

```
Browser (React)
     ↓ (localhost:5173)
Local Backend Server (Express)
     ↓ (No CORS issue - server to server)
Hugging Face API
     ↓
Response back to user
```

---

## 🧪 Test It

1. Start both servers: `npm run dev-full`
2. Go to: `http://localhost:5173`
3. Type: "hello"
4. Click Send
5. Should get a response! ✅

---

## 🐛 Troubleshooting

### **"Backend not running" Error**
```bash
# Make sure you ran:
npm run server
# Or use:
npm run dev-full
```

### **Port 3001 Already in Use**
```bash
# Kill the process using port 3001
# Then run again:
npm run server
```

### **Still Getting API Error**
- Check backend console for errors
- Verify `.env.local` has correct API key
- Restart both servers

---

## 📁 New Files

- `server.js` - Backend API server
- `package.json` - Updated with server script & dependencies

---

## 🎓 For Your Teacher

"This is a full-stack application:
- **Frontend**: React chatbot (UI)
- **Backend**: Express.js (handles API calls)
- **API**: Hugging Face (AI responses)

The backend solves the CORS issue by proxying the API calls."

---

**Try it now: `npm run dev-full`** 🚀
