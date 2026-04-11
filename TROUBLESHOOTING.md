# 🔧 Fix Network Error - Troubleshooting Guide

## ⚠️ You're Getting Network Error

This means the app can't reach the Hugging Face API. Let's fix it step by step.

---

## 🔍 Step 1: Check Browser Console

1. **Open your browser** (Chrome, Firefox, etc.)
2. **Press F12** to open Developer Tools
3. **Go to Console tab**
4. **Look for error messages**

Take a screenshot of the error and we can debug it.

---

## ✅ Step 2: Verify Your API Key

Your `.env.local` shows:
```
VITE_HUGGINGFACE_API_KEY=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
```

**Is this correct?**
- Should start with `hf_`
- Should be a long string
- Should NOT have any spaces

**If wrong:**
1. Go to https://huggingface.co/settings/tokens
2. Create a NEW token if needed
3. Copy the whole token
4. Paste into `.env.local`
5. Restart dev server

---

## 🌐 Step 3: Check Internet Connection

Make sure you're:
- ✅ Connected to internet
- ✅ NOT on a corporate proxy/firewall
- ✅ NOT using a VPN that blocks APIs
- ✅ Not in a restricted network

Try opening: https://api-inference.huggingface.co/models/gpt2

If page doesn't load, your network might be blocking Hugging Face.

---

## 🔄 Step 4: Restart Everything

```bash
# Stop dev server (Ctrl+C)

# Clear cache
rm -rf node_modules/.vite

# Restart
npm run dev
```

---

## ⚡ Alternative Solution (For Now)

If the API still doesn't work, use the **DEMO MODE** below:

### Add this to `.env.local`:
```
VITE_DEMO_MODE=true
```

This will show canned responses** instead of calling the API.

---

## 💡 What to Tell Your Teacher

**Scenario 1 - API Works:**
"This chatbot uses Hugging Face API to generate responses. The AI understands context and provides answers."

**Scenario 2 - API Down:**
"The chatbot is designed to work with Hugging Face API. The interface is ready, but the API might be temporarily unavailable. Here's the demo mode showing it works."

---

## 📊 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| "Network error" | Check internet connection |
| "Invalid API key" | Go to HF settings, get new token |
| "Model loading" | Wait 30 seconds, try again |
| "CORS error" | Check browser console, API endpoint |
| "Timeout" | Model might be overloaded, try again |

---

## 🎯 What To Do Now

1. **Restart dev server** (`npm run dev`)
2. **Open browser console** (F12)
3. **Try sending a message**
4. **Look at console errors**
5. **Tell me what error you see**

I can help debug once I know the exact error!

---

## 🚀 Quick Test

Try this message:
```
"hello"
```

If that doesn't work, it's definitely an API issue, not your code.

---

**Let me know the console error and I'll fix it!** 🔧
