# 🤖 Hugging Face Chatbot Setup Guide

## What's New

Your Prompt Manager has been upgraded with a **Hugging Face-powered AI Chatbot Assistant**! This guide will help you set it up and use it.

---

## 📋 Setup Instructions

### 1. **Configure Hugging Face API Key**

If you haven't already:

1. **Get your API key:**
   - Go to [Hugging Face Settings → Tokens](https://huggingface.co/settings/tokens)
   - Create a new token (select "Fine-grained" and give it access to inference)
   - Copy the token

2. **Create `.env.local` file** in your project root:
   ```bash
   cp .env.example .env.local
   ```

3. **Add your API key** to `.env.local`:
   ```
   VITE_HUGGINGFACE_API_KEY=hf_your_actual_token_here
   ```

### 2. **Dependencies Already Installed**
The required package `axios` has been installed. Check `package.json` to confirm:
```json
"axios": "^x.x.x"
```

### 3. **Start the Development Server**
```bash
npm run dev
```

---

## 🎯 Features

### **Generate Professional Prompt Tab**
- **Input:** Describe your prompt idea in simple terms
- **Output:** AI transforms it into a polished, professional prompt
- **Save:** Add generated prompts to your library with category and favorite status

### **Chat Tab**
- **Conversation:** Have a multi-turn conversation with the AI
- **Context-aware:** AI remembers previous messages in the conversation
- **Flexible:** Ask anything about prompts, ideas, or get writing help

---

## 💡 How It Works

### **Architecture**

```
┌─────────────────────────────────────┐
│    ChatbotAssistant Component       │
│  (src/components/ChatbotAssistant)  │
└──────────────┬──────────────────────┘
               │
       ┌───────┴───────┐
       │               │
    Generate Tab    Chat Tab
       │               │
       └───────┬───────┘
               │
       ┌───────▼──────────────┐
       │ HF API Service       │
       │ (huggingfaceAPI.js)  │
       └───────┬──────────────┘
               │
       ┌───────▼──────────────────┐
       │ Hugging Face API         │
       │ (Llama 2 7B Chat Model)  │
       └──────────────────────────┘
```

### **File Structure**

```
src/
├── components/
│   ├── ChatbotAssistant.jsx      ✨ NEW - Main chatbot component
│   ├── PromptCard.jsx
│   ├── PromptForm.jsx
│   └── Header.jsx
├── services/
│   └── huggingfaceAPI.js         ✨ NEW - HF API integration
├── store/
│   ├── index.js
│   └── promptsSlice.js
├── App.jsx                       ✅ UPDATED - Uses ChatbotAssistant
├── index.css                     ✅ UPDATED - Chatbot styles
└── main.jsx
```

---

## 🚀 Usage Examples

### **Generate a Professional Prompt**

1. Click the **"Generate Prompt"** tab
2. Enter your idea:
   ```
   I want a prompt to help me write better technical documentation
   ```
3. Click **"Generate Professional Prompt"**
4. AI generates a detailed prompt automatically
5. Edit the title if needed
6. Click **"Add to Library"** to save

### **Chat with AI**

1. Click the **"Chat"** tab
2. Ask questions like:
   - "How do I organize my prompts effectively?"
   - "What makes a good prompt for code reviews?"
   - "Help me brainstorm content ideas"
3. AI responds based on conversation context
4. Continue chatting naturally

---

## ⚙️ API Configuration

### **Current Model**
- **Model:** `meta-llama/Llama-2-7b-chat-hf`
- **Provider:** Hugging Face Inference API
- **Type:** Free tier available with rate limits

### **To Change the Model**

Edit `src/services/huggingfaceAPI.js`:

```javascript
// Change this line:
const HF_API_URL = 'https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf';

// To use a different model:
const HF_API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1';
```

**Popular models:**
- `meta-llama/Llama-2-7b-chat-hf` (Current - fast & reliable)
- `mistralai/Mistral-7B-Instruct-v0.1` (Faster)
- `meta-llama/Llama-2-13b-chat-hf` (More capable, slower)
- `tiiuae/falcon-7b-instruct` (Efficient)

---

## 🛠️ Troubleshooting

### **"API key not configured" Error**
- ✅ Ensure `.env.local` exists in project root
- ✅ Verify `VITE_HUGGINGFACE_API_KEY` is set correctly
- ✅ Restart the dev server after adding the key

### **"Model is loading" Error**
- This means the model on Hugging Face is spinning up
- Give it 30-60 seconds and try again
- This is normal for free tier

### **"Invalid API key" Error**
- ✅ Double-check your token at [HF Settings](https://huggingface.co/settings/tokens)
- ✅ Make sure you copied the entire token
- ✅ Tokens starting with `hf_` are correct

### **Slow Responses**
- Free tier may have rate limits
- Consider using a faster model (Mistral, Falcon)
- Or use a paid HF Pro subscription

---

## 🎨 Customization

### **UI Theme**
The chatbot respects your app's theme (light/dark mode). Edit `src/index.css` to customize colors:

```css
.chatbot-section {
  /* Customize styling here */
}

.message--user {
  /* User message styling */
}

.message--assistant {
  /* AI response styling */
}
```

### **Prompt Generation System**
Edit the prompt template in `src/services/huggingfaceAPI.js`:

```javascript
const systemPrompt = `You are a professional prompt engineer...`;
```

---

## 📊 Component API

### **ChatbotAssistant**

**State:**
- `basicPrompt` - User's prompt idea
- `generatedPrompt` - AI-generated professional prompt
- `messages` - Chat history
- `loading` - Loading state
- `error` - Error messages
- `activeTab` - Current tab ("generate" or "chat")

**Key Functions:**
- `handleGeneratePrompt()` - Calls HF API to generate prompt
- `handleSendMessage()` - Sends chat message
- `handleAddPrompt()` - Saves prompt to Redux store

### **huggingfaceAPI Service**

**Functions:**
```javascript
// Generate professional prompt
generatePromptWithHF(basicPrompt) → Promise<string>

// Send chat message
sendMessageToHF(message, conversationHistory) → Promise<string>
```

---

## 🔐 Security Notes

1. **Never commit `.env.local`** - Add to `.gitignore` (should already be there)
2. **API keys in browser** - They're exposed in client apps
   - This is acceptable for demo/personal apps
   - For production, use a backend proxy
3. **Rate limiting** - Free tier HF has limits (~20 calls/hour)

---

## 📝 What Changed

### **New Files**
- `src/components/ChatbotAssistant.jsx` - Main chatbot component
- `src/services/huggingfaceAPI.js` - HF API integration
- `.env.example` - Configuration template

### **Updated Files**
- `src/App.jsx` - Now uses ChatbotAssistant instead of PromptAssistant
- `src/index.css` - Added chatbot styling
- `package.json` - Added axios dependency

### **Deleted/Unused**
- `PromptAssistant.jsx` - Replaced by ChatbotAssistant (you can delete)

---

## 🎉 Next Steps

1. ✅ Add your HF API key to `.env.local`
2. ✅ Restart dev server
3. ✅ Test the "Generate Prompt" tab
4. ✅ Test the "Chat" tab
5. ✅ Create and save your first AI-generated prompt!

---

## 💬 Need Help?

- **Hugging Face Docs:** https://huggingface.co/docs
- **API Reference:** https://huggingface.co/docs/api-inference
- **Model Browser:** https://huggingface.co/models

Enjoy your AI-powered Prompt Manager! 🚀
