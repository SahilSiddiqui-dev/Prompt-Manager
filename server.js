import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3001;
const OLLAMA_URL = 'http://localhost:11434/api/generate';

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    const systemPrompt = `Transform user requests into professional, role-based prompts with:
1. ACT AS [Role] - Define AI persona
2. TASK - Clear instructions
3. REQUIREMENTS - Quality standards
4. FORMAT - Output structure
5. CONTEXT - Important details

Return ONLY the enhanced prompt, ready for ChatGPT or Claude.`;
    
    let conversationText = systemPrompt + '\n\nRequest to enhance:\n';
    if (history && Array.isArray(history)) {
      history.forEach(msg => {
        conversationText += msg.role === 'user' ? `User: ${msg.content}\n` : `Enhanced: ${msg.content}\n`;
      });
    }
    conversationText += `User: ${message}\nEnhanced:`;

    const response = await axios.post(
      OLLAMA_URL,
      {
        model: 'mistral',
        prompt: conversationText,
        stream: false,
        temperature: 0.4,
      },
      { timeout: 180000 }
    );

    res.json({ response: response.data.response?.trim() || 'Please provide a prompt to enhance.' });
  } catch (error) {
    if (error.message.includes('ECONNREFUSED')) {
      return res.status(503).json({ 
        error: 'Ollama not running. Run: ollama serve' 
      });
    }
    if (error.code === 'ECONNABORTED') {
      return res.status(408).json({ error: 'Request timeout. Try again.' });
    }

    res.status(500).json({ error: error.message || 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
