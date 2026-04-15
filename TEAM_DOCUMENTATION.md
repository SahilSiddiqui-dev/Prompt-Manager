# 📚 TEAM DOCUMENTATION - Prompt Manager WebApp
## Complete Project Explanation with Team Member Contributions

---

## 📑 Table of Contents

1. **Project Overview**
2. **Team Member Roles & Contributions**
3. **Project Structure & File Organization**
4. **Technology Stack**
5. **Architecture & Data Flow**
6. **Complete Function Explanations**
7. **Interview Questions & Answers**
8. **Possible Improvements**
9. **Code Examples & Explanations**

---

---

## 🎯 Project Overview

### What is Prompt Manager WebApp?
A web application that helps users create, enhance, and organize professional prompts using AI (Ollama) for better interactions with language models like ChatGPT and Claude.

### Key Features
- ✅ **Prompt Enhancement** - Convert simple ideas into structured professional prompts
- ✅ **Chat Interface** - Multi-turn conversation with AI
- ✅ **Prompt Library** - Save and organize prompts by category
- ✅ **Favorites System** - Mark important prompts
- ✅ **Dark Mode** - Light and dark theme support
- ✅ **Responsive Design** - Works on desktop and mobile

### Tech Stack Overview
```
Frontend: React + Redux + Vite
Backend: Node.js + Express
Database: LocalStorage (Browser) + Redux Store
AI Engine: Ollama (Mistral 7B Model)
Styling: Plain CSS with Theme Context
```

---

---

## 👥 Team Member Roles & Contributions

### **MEMBER 1: Frontend Components & UI (Aisha / Student 1)**
**Responsibility**: All visual components and user interface

#### What They Built:
1. **Header.jsx** - Navigation and category filtering
2. **PromptGrid.jsx** - Display prompts in grid layout
3. **PromptCard.jsx** - Individual prompt card display
4. **FavoritesSection.jsx** - Show favorite prompts
5. **CategoryBadge.jsx** - Display category labels
6. **Styling** - CSS layout and responsive design

#### Key Skills Demonstrated:
- React component architecture
- PropTypes for type safety
- CSS Grid and Flexbox
- Responsive design
- Accessibility (ARIA labels)
- Event handling (onClick, onChange)

#### Lines of Code: ~400 lines

---

### **MEMBER 2: State Management & Data Flow (Rahul / Student 2)**
**Responsibility**: Redux store, state management, data persistence

#### What They Built:
1. **promptsSlice.js** - Redux Toolkit slice with all reducers
2. **store/index.js** - Redux store configuration
3. **Integration** of Redux with components
4. **Utils** - Helper functions (promptId.js)
5. **Data Flow** management through actions and reducers

#### Key Reducers Created:
- `addPrompt()` - Add new prompt
- `toggleFavorite()` - Mark as favorite
- `deletePrompt()` - Remove prompt
- `addEnhancedPrompt()` - Save AI-generated prompt
- `addToCategory()` - Categorize prompts
- `toggleEnhancedFavorite()` - Favorite AI prompts

#### Key Skills Demonstrated:
- Redux Toolkit and createSlice
- Immutable state updates
- Action creators and reducers
- Selector patterns
- State design principles

#### Lines of Code: ~80 lines

---

### **MEMBER 3: Backend & AI Integration (Priya / Student 3)**
**Responsibility**: Server setup, Ollama integration, API endpoints

#### What They Built:
1. **server.js** - Express server with Ollama integration
2. **API Endpoint** - `/api/chat` for prompt enhancement
3. **Ollama Integration** - Connect to local LLM
4. **System Prompt** - Template for structured responses
5. **Error Handling** - Server-side error management
6. **Timeout Management** - Handle long-running requests

#### Key Implementation:
- Express.js setup
- CORS configuration
- Axios for HTTP requests
- Error handling with specific codes
- Temperature and model parameters
- Conversation history management

#### Key Skills Demonstrated:
- Backend development (Node.js + Express)
- API design (REST)
- External service integration (Ollama)
- Error handling
- Async/await patterns
- HTTP protocol knowledge

#### Lines of Code: ~70 lines

---

### **MEMBER 4: Features & ChatBot Integration (Karan / Student 4)**
**Responsibility**: Chat interface, feature implementation, user interactions

#### What They Built:
1. **ChatbotAssistant.jsx** - Main chat interface (160 lines)
2. **sendMessageToAI()** - Frontend API communication
3. **Favorite Button Logic** - Handle favoriting
4. **Category Selection** - Organize prompts
5. **Copy Functionality** - Clipboard operations
6. **Error Display** - Show user-friendly messages
7. **Loading States** - Show when AI is thinking

#### Key Features Implemented:
- Message history and conversation
- Copy-to-clipboard functionality
- Favorite/unfavorite prompts
- Category assignment
- Error handling and display
- Loading indicators
- Auto-scroll to latest message

#### Key Skills Demonstrated:
- React Hooks (useState, useEffect, useRef, useDispatch, useSelector)
- User interaction handling
- Async operations management
- State synchronization
- UX best practices

#### Lines of Code: ~160 lines

---

---

## � Project Structure & File Organization

### **Complete Folder Tree**

```
Prompt-manager-WebApp/
│
├── 📂 src/                              ← Frontend source code
│   │
│   ├── 📂 components/                   ← MEMBER 1: React components
│   │   ├── App.jsx                      (Root component - 45 lines)
│   │   ├── Header.jsx                   (Navigation & filters - 50 lines) ⭐ MEMBER 1
│   │   ├── PromptGrid.jsx               (Display prompts grid - 40 lines) ⭐ MEMBER 1
│   │   ├── PromptCard.jsx               (Individual prompt - 50 lines) ⭐ MEMBER 1
│   │   ├── PromptForm.jsx               (Add prompt modal - 100 lines)
│   │   ├── FavoritesSection.jsx         (Show favorites - 40 lines) ⭐ MEMBER 1
│   │   ├── CategoryBadge.jsx            (Category label - 20 lines) ⭐ MEMBER 1
│   │   └── ChatbotAssistant.jsx         (Chat interface - 160 lines) ⭐ MEMBER 4
│   │
│   ├── 📂 context/                      ← Context API (Theme)
│   │   └── ThemeContext.jsx             (Light/Dark theme - 50 lines)
│   │
│   ├── 📂 store/                        ← MEMBER 2: Redux state management
│   │   ├── index.js                     (Redux store setup - 15 lines) ⭐ MEMBER 2
│   │   └── promptsSlice.js              (Redux reducers/actions - 80 lines) ⭐ MEMBER 2
│   │
│   ├── 📂 services/                     ← API communication
│   │   └── huggingfaceAPI.js            (Backend API calls - 25 lines) ⭐ MEMBER 4
│   │
│   ├── 📂 utils/                        ← Utility functions
│   │   └── promptId.js                  (ID generation - 5 lines)
│   │
│   ├── 📂 assets/                       ← Images/static files
│   │
│   ├── main.jsx                         ← React entry point (10 lines)
│   ├── index.css                        ← Global styles (550 lines)
│   └── App.jsx                          ← Root component (45 lines)
│
├── 📂 public/                           ← Static files
│
├── 📂 node_modules/                     ← Dependencies (not in git)
│
├── 📄 server.js                         ← MEMBER 3: Backend server (70 lines) ⭐ MEMBER 3
│
├── 📄 package.json                      ← Dependencies & scripts
├── 📄 package-lock.json                 ← Dependency lock file
│
├── 📄 vite.config.js                    ← Vite build configuration
├── 📄 eslint.config.js                  ← Code quality linting
│
├── 📄 index.html                        ← HTML entry point
├── 📄 .gitignore                        ← Git ignore rules
│
├── 📚 Documentation Files:
│   ├── 📄 TEAM_DOCUMENTATION.md         ← THIS FILE - Team guide
│   ├── 📄 00_START_HERE.md              ← Quick overview
│   ├── 📄 PROJECT_SETUP.md              ← Setup instructions
│   ├── 📄 OLLAMA_CONFIG.md              ← Ollama configuration
│   ├── 📄 VERIFICATION_GUIDE.md         ← Testing procedures
│   ├── 📄 CONFIGURATION_SUMMARY.md      ← Config reference
│   ├── 📄 README.md                     ← Project overview
│   ├── 📄 CHATBOT_SUMMARY.md            ← Chatbot features
│   ├── 📄 TROUBLESHOOTING.md            ← Common issues
│   ├── 📄 CODE_OPTIMIZATION_SUMMARY.md  ← Code metrics
│   ├── 📄 BACKEND_SETUP.md              ← Backend guide
│   ├── 📄 HUGGINGFACE_SETUP.md          ← Old AI setup
│   └── 📄 SIMPLE_CHATBOT_GUIDE.md       ← Chatbot guide
│
└── 📄 .env.local.example                ← Environment template
```

---

### **Frontend Files Description**

#### **MEMBER 1: Components & UI (400 lines total)**

| File | Lines | Purpose | Key Imports | Status |
|------|-------|---------|-------------|--------|
| `Header.jsx` | 50 | Navigation tabs, category filters, theme toggle | React, PropTypes, useTheme, CATEGORIES | ⭐ MEMBER 1 |
| `PromptGrid.jsx` | 40 | Display all prompts in responsive grid | React, useSelector, PromptCard | ⭐ MEMBER 1 |
| `PromptCard.jsx` | 50 | Individual prompt card with actions | React, useDispatch, toggleFavorite, deletePrompt | ⭐ MEMBER 1 |
| `FavoritesSection.jsx` | 40 | Collapsible section showing favorite prompts | React, useState, useSelector, PromptCard | ⭐ MEMBER 1 |
| `CategoryBadge.jsx` | 20 | Display category label on cards | React, PropTypes | ⭐ MEMBER 1 |

**Member 1 Responsibilities**:
- Create responsive UI components
- Style with CSS (Grid, Flexbox)
- Handle user interactions (clicks, hovers)
- Pass data via props
- Use PropTypes for validation

---

#### **MEMBER 4: Chat Features (160 lines)**

| File | Lines | Purpose | Key Imports | Status |
|------|-------|---------|-------------|--------|
| `ChatbotAssistant.jsx` | 160 | Main chat interface, message display, controls | React hooks, Redux, sendMessageToAI | ⭐ MEMBER 4 |

**Member 4 Responsibilities**:
- Build chat UI
- Handle user input
- Display messages with actions
- Implement copy, favorite, category features
- Manage loading/error states

---

#### **Other Components**

| File | Lines | Purpose | Responsibility |
|------|-------|---------|-----------------|
| `PromptForm.jsx` | 100 | Modal form to add new prompts | Shared (uses Redux from Member 2) |
| `App.jsx` | 45 | Root component, layout | Shared (integrates all members' work) |

---

#### **Context API (Theme Management)**

| File | Lines | Purpose | Key Concepts |
|------|-------|---------|--------------|
| `ThemeContext.jsx` | 50 | Light/Dark mode context provider | createContext, useContext, useState, useEffect |

**How It Works**:
1. `ThemeProvider` wraps the app
2. Components use `useTheme()` hook
3. Theme state syncs to CSS classes
4. All components see theme changes

---

### **State Management & Redux (MEMBER 2)**

#### **Redux Store Files** (80 lines total)

| File | Lines | Purpose | Key Exports |
|------|-------|---------|------------|
| `store/index.js` | 15 | Create Redux store | configureStore |
| `store/promptsSlice.js` | 80 | Define state, reducers, actions | addPrompt, toggleFavorite, addEnhancedPrompt, etc. |

**Data Structure** (in Redux Store):
```javascript
{
  prompts: {
    prompts: [              // Original prompts
      { id, title, content, category, isFavorite }
    ],
    enhancedPrompts: [      // AI-generated prompts
      { id, originalPrompt, enhancedPrompt, isFavorite, category, createdAt }
    ],
    categories: ['Learning', 'Code', 'General', 'Others'],
    filter: '',
    showFavoritesOnly: false
  }
}
```

**All Reducers** (Actions available):
- `addPrompt()` - Add new manual prompt
- `toggleFavorite()` - Favorite/unfavorite prompt
- `deletePrompt()` - Remove prompt
- `addEnhancedPrompt()` - Save AI prompt
- `toggleEnhancedFavorite()` - Favorite AI prompt
- `addToCategory()` - Assign category
- `deleteEnhancedPrompt()` - Remove AI prompt

---

### **Backend Server (MEMBER 3)**

#### **Backend File** (70 lines)

| File | Lines | Purpose | Key Dependencies |
|------|-------|---------|------------------|
| `server.js` | 70 | Express server, Ollama integration | express, cors, axios |

**Server Configuration**:
```javascript
PORT = 3001                                      // Server port
OLLAMA_URL = 'http://localhost:11434/api/generate'  // Ollama endpoint
MODEL = 'mistral'                               // LLM model
TIMEOUT = 180000                                // 3-minute timeout
TEMPERATURE = 0.5                               // Creativity level
```

**Endpoints**:
1. `GET /health` - Check if server is running
2. `POST /api/chat` - Process prompts with Ollama

**Request/Response Flow**:
```
Request → Build system prompt → Add history → Send to Ollama 
→ Get response → Return to frontend
```

---

### **Utility Functions**

| File | Lines | Purpose |
|------|-------|---------|
| `utils/promptId.js` | 5 | Generate unique IDs for prompts |

---

### **Styling**

| File | Lines | Purpose | Features |
|------|-------|---------|----------|
| `index.css` | 550 | All global styles | Grid, Flexbox, Responsive, Dark mode, Animations |

**CSS Variables** (for theming):
```css
.theme-light { --bg-color: white; --text-color: black; }
.theme-dark { --bg-color: #1e1e1e; --text-color: white; }
```

---

### **Configuration Files**

| File | Purpose | Owner |
|------|---------|-------|
| `vite.config.js` | Vite build settings, dev server config | Project config |
| `package.json` | Dependencies, npm scripts | Project config |
| `eslint.config.js` | Code quality rules | Project config |
| `.gitignore` | Files to ignore in git | Project config |
| `.env.local.example` | Environment variables template | Documentation |

---

### **Entry Points**

| File | Purpose | What It Does |
|------|---------|------------|
| `index.html` | HTML file loaded in browser | Loads React app into `<div id="root">` |
| `main.jsx` | React app entry point | Creates React root, renders `<App />` |
| `App.jsx` | Root React component | Layout, integrates all other components |

---

### **How Files Work Together**

```
Browser loads index.html
  ↓
main.jsx runs (React root)
  ↓
App.jsx renders (root component)
  ├─ Header (MEMBER 1)
  │  └ Uses useTheme() → ThemeContext
  ├─ ChatbotAssistant (MEMBER 4)
  │  ├ Uses useSelector/useDispatch → Redux Store (MEMBER 2)
  │  └ Uses sendMessageToAI → server.js (MEMBER 3)
  ├─ PromptGrid (MEMBER 1)
  │  └ Uses useSelector → Redux Store (MEMBER 2)
  └─ FavoritesSection (MEMBER 1)
     └ Uses useSelector → Redux Store (MEMBER 2)

All styled by: index.css (responsive, theme support)
```

---

### **Data Flow Between Files**

```
User Action (e.g., Click Favorite)
  ↓
Component (MEMBER 1 or 4) dispatches Redux action
  ↓
promptsSlice.js reducer (MEMBER 2) updates state
  ↓
Redux store updates
  ↓
All components using useSelector re-render
  ↓
UI updates with new data
```

**API Data Flow**:
```
User sends message in ChatbotAssistant (MEMBER 4)
  ↓
sendMessageToAI() calls backend via axios
  ↓
server.js (MEMBER 3) receives request
  ↓
server.js sends prompt to Ollama
  ↓
Ollama returns enhanced prompt
  ↓
server.js returns response to frontend
  ↓
ChatbotAssistant displays response
  ↓
User clicks Favorite
  ↓
dispatch(addEnhancedPrompt) → Redux (MEMBER 2)
```

---

### **Each Member's File Responsibilities**

#### **MEMBER 1 (Frontend Components)**
- ✅ `Header.jsx` - Create and style
- ✅ `PromptGrid.jsx` - Create and style
- ✅ `PromptCard.jsx` - Create and style
- ✅ `FavoritesSection.jsx` - Create and style
- ✅ `CategoryBadge.jsx` - Create and style
- ✅ `index.css` - Style all components
- ✅ Component interactions and animations

#### **MEMBER 2 (State Management)**
- ✅ `store/index.js` - Create Redux store
- ✅ `store/promptsSlice.js` - Define all reducers and actions
- ✅ Manage Redux state shape
- ✅ Handle data persistence
- ✅ Create selectors for components

#### **MEMBER 3 (Backend)**
- ✅ `server.js` - Create Express server
- ✅ Setup Ollama integration
- ✅ Create `/api/chat` endpoint
- ✅ Handle system prompt
- ✅ Error handling and timeout
- ✅ CORS configuration

#### **MEMBER 4 (Chat Features)**
- ✅ `ChatbotAssistant.jsx` - Main chat interface
- ✅ `services/huggingfaceAPI.js` - API client
- ✅ Message handling (send, receive)
- ✅ Copy, favorite, category features
- ✅ Loading and error states
- ✅ Auto-scroll and animations

#### **Shared Responsibilities**
- ✅ `App.jsx` - Integrate all components
- ✅ `PromptForm.jsx` - Add new prompts
- ✅ `ThemeContext.jsx` - Theme system
- ✅ `main.jsx` - React setup
- ✅ `index.html` - HTML structure

---

### **Quick Reference: Who to Ask About What**

| Question | Ask MEMBER |
|----------|-----------|
| "How do I create a new component?" | MEMBER 1 |
| "How do I style this?" | MEMBER 1 |
| "How does the favorite button work?" | MEMBER 2 & 4 |
| "How is data stored?" | MEMBER 2 |
| "How does Redux work?" | MEMBER 2 |
| "How does the chat work?" | MEMBER 4 |
| "How does the backend work?" | MEMBER 3 |
| "How does Ollama integrate?" | MEMBER 3 |
| "How do I call the API?" | MEMBER 4 |
| "Why is there an error?" | MEMBER 3 (backend) or MEMBER 4 (frontend) |

---

---

## �📚 Complete Technology Stack

### **1. React (Frontend Framework)**

#### What is React?
React is a JavaScript library for building user interfaces with components that automatically re-render when data changes.

#### Where Used in Project:
- **ChatbotAssistant.jsx** - Main chat component
- **Header.jsx** - Navigation component
- **PromptForm.jsx** - Form component
- All components use React hooks

#### Why We Used It:
- Efficient re-rendering (Virtual DOM)
- Component reusability
- Large community support
- Easy state management

#### Example:
```jsx
// React component with hooks
const ChatbotAssistant = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // This runs when messages change
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.map(msg => (
        <div key={msg.id}>{msg.content}</div>
      ))}
    </div>
  );
};
```

---

### **2. Redux Toolkit (State Management)**

#### What is Redux?
Redux is a state management library that helps manage application data centrally, making it easier to share data between components.

#### Where Used:
- **promptsSlice.js** - Defines all state and actions
- **store/index.js** - Creates Redux store
- All components access Redux state

#### Key Concepts:
- **Store** - Single source of truth for data
- **Actions** - Describe what happened
- **Reducers** - Update state based on actions
- **Dispatch** - Send actions to reducers
- **Selectors** - Get data from store

#### Example in Project:
```jsx
// In ChatbotAssistant.jsx - Using Redux
const dispatch = useDispatch();
const enhancedPrompts = useSelector(state => state.prompts.enhancedPrompts);

// When user clicks favorite button
dispatch(toggleEnhancedFavorite(msgId));
```

#### Redux Slice Structure:
```javascript
// promptsSlice.js
const initialState = {
  prompts: [],           // All prompts
  enhancedPrompts: [],   // AI-generated prompts
  categories: [],        // Prompt categories
  showFavoritesOnly: false
};

// Reducers (like case statements)
addPrompt(state, action) {
  state.prompts.push(action.payload);
}

toggleEnhancedFavorite(state, action) {
  const prompt = state.enhancedPrompts.find(p => p.id === action.payload);
  if (prompt) prompt.isFavorite = !prompt.isFavorite;
}
```

---

### **3. React Hooks (State Management)**

#### Common Hooks Used:

##### a) **useState** - For component-level state
```jsx
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

// Usage:
setMessages([...messages, newMessage]);
setLoading(true);
```

**Used in**: ChatbotAssistant, PromptForm, Header, App

##### b) **useEffect** - For side effects
```jsx
useEffect(() => {
  // Auto-scroll to bottom when new messages arrive
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]); // Runs when messages change
```

**Used in**: ChatbotAssistant (auto-scroll), ThemeContext (theme sync)

##### c) **useRef** - For direct DOM access
```jsx
const messagesEndRef = useRef(null);

// Usage:
messagesEndRef.current?.scrollIntoView();
```

**Used in**: ChatbotAssistant (for scroll functionality)

##### d) **useReducer** - For complex form state
```jsx
const [formState, formDispatch] = useReducer(formReducer, initialState);

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
```

**Used in**: PromptForm (manages title, content, category)

##### e) **useDispatch & useSelector** - Redux hooks
```jsx
// Get data from Redux
const enhancedPrompts = useSelector(state => state.prompts.enhancedPrompts);

// Send actions to Redux
const dispatch = useDispatch();
dispatch(toggleEnhancedFavorite(msgId));
```

**Used in**: ChatbotAssistant, PromptGrid, FavoritesSection, PromptCard

##### f) **useContext** - For theme
```jsx
export const useTheme = () => useContext(ThemeContext);

// Usage in Header:
const { theme, toggleTheme } = useTheme();
```

**Used in**: Header (for theme toggle)

---

### **4. Vite (Build Tool)**

#### What is Vite?
Vite is a fast build tool and development server optimized for modern web projects.

#### Where Used:
- **Development Server** - Runs at localhost:5173
- **Hot Module Reloading** - Updates code without refresh
- **Production Build** - Creates optimized bundle

#### Configuration:
```javascript
// vite.config.js
export default {
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
}
```

---

### **5. Axios (HTTP Client)**

#### What is Axios?
Axios makes HTTP requests to backend server.

#### Where Used:
```javascript
// huggingfaceAPI.js - Sending prompts to backend
export const sendMessageToAI = async (message, history = []) => {
  const response = await axios.post(
    'http://localhost:3001/api/chat',
    { message, history },
    { timeout: 200000 }
  );
  return response.data.response;
};
```

#### Why Better Than fetch:
- Built-in timeout support
- Automatic JSON serialization
- Better error handling
- Request/response interceptors

---

### **6. Express.js (Backend Framework)**

#### What is Express?
Express is a minimal web framework for Node.js to create web servers and APIs.

#### Where Used:
```javascript
// server.js
const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
  // Process request and call Ollama
  const response = await axios.post(OLLAMA_URL, {...});
  res.json({ response: response.data.response });
});
```

#### Key Features Used:
- Middleware (cors, express.json)
- Route handlers
- Error handling
- Response sending

---

### **7. CORS (Cross-Origin Resource Sharing)**

#### What is CORS?
CORS allows frontend (port 5173) to communicate with backend (port 3001) on different ports.

#### Implementation:
```javascript
// server.js
import cors from 'cors';
app.use(cors()); // Allow all origins in development
```

---

### **8. Ollama (Local AI)**

#### What is Ollama?
Ollama is a tool to run large language models locally on your computer.

#### Where Used:
```javascript
// server.js - Connect to Ollama
const OLLAMA_URL = 'http://localhost:11434/api/generate';

const response = await axios.post(OLLAMA_URL, {
  model: 'mistral',           // Using Mistral 7B model
  prompt: conversationText,
  stream: false,
  temperature: 0.5,           // Balance between consistent and creative
});
```

#### Why Ollama?
- ✅ Runs locally (privacy)
- ✅ No API keys needed
- ✅ Unlimited requests
- ✅ Fast responses (2-5 seconds)

---

### **9. Context API (Theme Management)**

#### What is Context?
Context provides a way to pass data without prop drilling.

#### Implementation:
```javascript
// ThemeContext.jsx
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Sync theme to document body for CSS
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage in component
const { theme, toggleTheme } = useTheme();
```

#### Where Used:
- **Header.jsx** - Theme toggle button
- **CSS Styling** - Light/dark colors

---

### **10. PropTypes (Type Checking)**

#### What is PropTypes?
PropTypes validates that components receive correct data types.

#### Used in Every Component:
```javascript
// Header.jsx
Header.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onAddPromptClick: PropTypes.func.isRequired,
};

// PromptCard.jsx
PromptCard.propTypes = {
  prompt: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
```

#### Benefits:
- Catches bugs during development
- Documents expected props
- Helps team collaboration

---

---

## 🏗️ Architecture & Data Flow

### **System Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                     USER BROWSER                         │
│                                                          │
│   ┌──────────────────────────────────────────────────┐  │
│   │          React Component Tree                     │  │
│   │  ┌────────────────────────────────────────────┐  │  │
│   │  │         App.jsx (Root)                      │  │  │
│   │  │  - Manages activeCategory state            │  │  │
│   │  │  - Manages isFormOpen state                │  │  │
│   │  └────────────────────────────────────────────┘  │  │
│   │              │                                    │  │
│   │   ┌──────────┼──────────┬──────────┐            │  │
│   │   ▼          ▼          ▼          ▼            │  │
│   │ Header  ChatBot   PromptGrid  Favorites         │  │
│   │ - Tabs  - Chat    - Display   - Favorite        │  │
│   │ - Theme - Copy    - Filter    - List            │  │
│   │ - Add   - Save    - Cards                       │  │
│   │                                                  │  │
│   └──────────────────────────────────────────────────┘  │
│                     │                                    │
│         ┌───────────┴───────────┐                       │
│         ▼                       ▼                       │
│   ┌──────────────┐      ┌──────────────┐              │
│   │ Redux Store  │      │ ThemeContext │              │
│   │ (State)      │      │ (Theme)      │              │
│   └──────────────┘      └──────────────┘              │
│                                                       │
│   ┌──────────────────────────────────────────────┐  │
│   │        LocalStorage (Persistence)             │  │
│   │  Saves Redux state automatically             │  │
│   └──────────────────────────────────────────────┘  │
│                                                       │
│   ┌──────────────────────────────────────────────┐  │
│   │      Axios (HTTP Client)                      │  │
│   │  Sends requests to backend                   │  │
│   └──────────────────────────────────────────────┘  │
│                                                       │
└─────────────────────────────────────────────────────────┘
                          │
                  HTTP (Port 5173)
                          │
┌─────────────────────────────────────────────────────────┐
│                   BACKEND SERVER                        │
│                 localhost:3001                          │
│                                                         │
│   Express.js Server                                    │
│   ┌──────────────────────────────────────────────┐    │
│   │  Route: GET /health                          │    │
│   │  Returns: { status: 'Server running' }       │    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
│   ┌──────────────────────────────────────────────┐    │
│   │  Route: POST /api/chat                       │    │
│   │  - Receives: { message, history }            │    │
│   │  - Calls: Ollama API                         │    │
│   │  - Returns: { response: '...' }              │    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
│   Axios HTTP Client                                   │
│   (Makes requests to Ollama)                          │
└─────────────────────────────────────────────────────────┘
                          │
                  HTTP (Port 11434)
                          │
┌─────────────────────────────────────────────────────────┐
│                      OLLAMA SERVICE                      │
│                localhost:11434/api/generate             │
│                                                         │
│   Input:                                               │
│   - prompt: "ACT AS: ..., TASK: ..., ..."            │
│   - model: 'mistral'                                   │
│   - temperature: 0.5                                   │
│   - stream: false                                      │
│                                                         │
│   Processing: Mistral 7B Language Model               │
│                                                         │
│   Output:                                              │
│   - response: "Enhanced professional prompt..."       │
└─────────────────────────────────────────────────────────┘
```

### **Data Flow Example: Sending a Chat Message**

```
1. USER TYPES & SUBMITS
   └─> "write a professional email"

2. handleSend() in ChatbotAssistant
   ├─ Create user message object
   ├─ Add to messages state: setMessages([...messages, userMsg])
   ├─ Show loading indicator: setLoading(true)
   └─ Call API

3. Axios sends to Backend
   └─> POST http://localhost:3001/api/chat
       {
         message: "write a professional email",
         history: [previous messages...]
       }

4. Backend Express Server
   ├─ Receives request in /api/chat handler
   ├─ Builds system prompt with template
   ├─ Combines message + history
   └─ Sends to Ollama

5. Ollama Processes
   ├─ Uses Mistral 7B model
   ├─ Generates response (2-5 seconds)
   └─ Returns structured prompt

6. Backend Returns Response
   └─> { response: "ACT AS: Email Expert..." }

7. Frontend Updates State
   ├─ Receives response
   ├─ Create AI message object
   ├─ Add to messages: setMessages([...messages, aiMsg])
   ├─ Hide loading: setLoading(false)
   └─ Auto-scroll to bottom

8. Component Re-renders
   ├─ React renders new messages
   ├─ User sees response immediately
   └─ Message appears with Copy, Favorite, Category buttons
```

---

---

## 🔧 Complete Function Explanations

### **MEMBER 1: Component Functions**

#### 1. **Header Component**
**Location**: `src/components/Header.jsx`
**Purpose**: Display navigation, category filters, and theme toggle

```jsx
const Header = ({ activeCategory, onFilterChange, onAddPromptClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      {/* Logo and Actions */}
      <div className="app-header__top">
        <h1>📋 Prompt Manager</h1>
        <button onClick={onAddPromptClick}>+ Add Prompt</button>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Category Tabs */}
      <nav className="category-tabs">
        <button onClick={() => onFilterChange('')}>All</button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => onFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>
    </header>
  );
};
```

**Key Points**:
- Receives `activeCategory` from App.jsx
- Calls `onFilterChange` when category clicked
- Uses `useTheme()` hook for theme toggle
- Uses conditional rendering for active class

---

#### 2. **PromptGrid Component**
**Location**: `src/components/PromptGrid.jsx`
**Purpose**: Display all prompts in grid, filtered by category

```jsx
const PromptGrid = ({ activeCategory }) => {
  const prompts = useSelector(state => state.prompts.prompts);
  
  // Filter prompts by active category
  const filteredPrompts = activeCategory === ''
    ? prompts
    : prompts.filter(p => p.category === activeCategory);

  return (
    <div className="prompt-grid">
      {filteredPrompts.map(prompt => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};
```

**Key Points**:
- Uses `useSelector` to get Redux state
- Filters based on `activeCategory` prop
- Maps filtered prompts to PromptCard components
- CSS Grid layout (3 columns on desktop)

---

#### 3. **PromptCard Component**
**Location**: `src/components/PromptCard.jsx`
**Purpose**: Display individual prompt with actions

```jsx
const PromptCard = ({ prompt }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(prompt.id));
  };

  const handleDelete = () => {
    dispatch(deletePrompt(prompt.id));
  };

  return (
    <div className="prompt-card">
      <h3>{prompt.title}</h3>
      <p>{prompt.content}</p>
      <span className="badge">{prompt.category}</span>
      
      <div className="card-actions">
        <button
          className={`fav-btn ${prompt.isFavorite ? 'active' : ''}`}
          onClick={handleFavorite}
        >
          {prompt.isFavorite ? '❤️' : '🤍'} Favorite
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};
```

**Key Points**:
- Displays prompt title, content, category
- Dispatch actions to Redux
- Toggle favorite status
- Delete prompt functionality
- Conditional styling based on favorite state

---

#### 4. **FavoritesSection Component**
**Location**: `src/components/FavoritesSection.jsx`
**Purpose**: Show only favorited prompts

```jsx
const FavoritesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const prompts = useSelector(state => state.prompts.prompts);
  const enhancedPrompts = useSelector(state => state.prompts.enhancedPrompts);

  // Get favorited prompts
  const favoritePrompts = prompts.filter(p => p.isFavorite);
  const favoriteEnhanced = enhancedPrompts.filter(p => p.isFavorite);

  return (
    <section className="favorites-section">
      <button onClick={() => setExpanded(!expanded)}>
        ⭐ Favorites ({favoritePrompts.length + favoriteEnhanced.length})
      </button>
      
      {expanded && (
        <div className="favorites-list">
          {favoritePrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
          {favoriteEnhanced.map(prompt => (
            <EnhancedPromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </section>
  );
};
```

**Key Points**:
- Filter prompts with `isFavorite === true`
- Collapsible section with expand/collapse
- Shows count of favorites
- Displays both regular and enhanced prompts

---

### **MEMBER 2: Redux & State Management**

#### 1. **Redux Slice - promptsSlice.js**

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prompts: [
    { id: 1, title: 'API Docs', content: '...', category: 'Learning', isFavorite: false }
  ],
  enhancedPrompts: [],
  categories: ['Learning', 'Code', 'General', 'Others'],
};

const promptsSlice = createSlice({
  name: 'prompts',
  initialState,
  reducers: {
    // ACTION 1: Add a new prompt
    addPrompt(state, action) {
      // action.payload = { title, content, category, ... }
      state.prompts.push(action.payload);
    },

    // ACTION 2: Toggle favorite status
    toggleFavorite(state, action) {
      // action.payload = promptId
      const prompt = state.prompts.find(p => p.id === action.payload);
      if (prompt) {
        prompt.isFavorite = !prompt.isFavorite;  // Flip true/false
      }
    },

    // ACTION 3: Delete a prompt
    deletePrompt(state, action) {
      // action.payload = promptId
      state.prompts = state.prompts.filter(p => p.id !== action.payload);
    },

    // ACTION 4: Add AI-generated prompt
    addEnhancedPrompt(state, action) {
      // action.payload = { id, originalPrompt, enhancedPrompt, isFavorite, category }
      state.enhancedPrompts.push({
        ...action.payload,
        createdAt: new Date().toISOString(),
      });
    },

    // ACTION 5: Toggle favorite for enhanced prompts
    toggleEnhancedFavorite(state, action) {
      const prompt = state.enhancedPrompts.find(p => p.id === action.payload);
      if (prompt) {
        prompt.isFavorite = !prompt.isFavorite;
      }
    },

    // ACTION 6: Add prompt to category
    addToCategory(state, action) {
      const { id, category } = action.payload;
      const prompt = state.enhancedPrompts.find(p => p.id === id);
      if (prompt) {
        prompt.category = category;
      }
    },

    // ACTION 7: Delete enhanced prompt
    deleteEnhancedPrompt(state, action) {
      state.enhancedPrompts = state.enhancedPrompts.filter(
        p => p.id !== action.payload
      );
    },
  },
});

export const {
  addPrompt,
  toggleFavorite,
  deletePrompt,
  addEnhancedPrompt,
  toggleEnhancedFavorite,
  addToCategory,
  deleteEnhancedPrompt,
} = promptsSlice.actions;

export default promptsSlice.reducer;
```

**How Redux Works in This Project**:

1. **Initial State**: Contains all prompts, enhanced prompts, categories
2. **Actions**: Functions that describe what happened (user clicked favorite)
3. **Reducers**: Functions that update state based on actions (set isFavorite to true)
4. **Dispatch**: Send actions from components (dispatch(toggleFavorite(id)))
5. **Selectors**: Get data from store in components (useSelector to read state)

**Example Flow**:
```
User clicks Favorite button
  ↓
Component calls: dispatch(toggleFavorite(promptId))
  ↓
Redux calls reducer: toggleFavorite(state, action)
  ↓
Reducer updates state: prompt.isFavorite = !prompt.isFavorite
  ↓
Component re-renders with new data
```

---

#### 2. **Redux Store Configuration**
**Location**: `src/store/index.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import promptsReducer from './promptsSlice';

// Configure and create Redux store
export const store = configureStore({
  reducer: {
    prompts: promptsReducer,
  },
});
```

**Key Points**:
- Creates a single Redux store
- `prompts` reducer handles all prompt state
- Automatically sets up DevTools
- Enables Redux Toolkit features

---

#### 3. **Using Redux in Components**

**Reading Data**:
```jsx
// In PromptGrid.jsx
const prompts = useSelector(state => state.prompts.prompts);
const categories = useSelector(state => state.prompts.categories);
```

**Dispatching Actions**:
```jsx
// In PromptCard.jsx
const dispatch = useDispatch();

const handleFavorite = () => {
  dispatch(toggleFavorite(prompt.id));
};
```

**Selector Pattern**:
```jsx
// More efficient selectors
const selectFavoritePrompts = (state) =>
  state.prompts.prompts.filter(p => p.isFavorite);

// Use it:
const favorites = useSelector(selectFavoritePrompts);
```

---

### **MEMBER 3: Backend & API**

#### 1. **Express Server Setup**
**Location**: `server.js`

```javascript
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3001;
const OLLAMA_URL = 'http://localhost:11434/api/generate';

// MIDDLEWARE
app.use(cors());  // Allow requests from frontend
app.use(express.json());  // Parse JSON body

// HEALTH CHECK ENDPOINT
app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

// MAIN CHAT ENDPOINT
app.post('/api/chat', async (req, res) => {
  // ... implementation ...
});

// START SERVER
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
```

**Key Points**:
- `express()` creates the server
- `cors()` middleware allows frontend to call backend
- `express.json()` parses JSON requests
- Listens on port 3001
- Endpoints return JSON responses

---

#### 2. **POST /api/chat Endpoint (Main Feature)**

```javascript
app.post('/api/chat', async (req, res) => {
  try {
    // 1. RECEIVE REQUEST
    const { message, history } = req.body;
    // message = "write a professional email"
    // history = [previous messages...]

    // 2. BUILD SYSTEM PROMPT TEMPLATE
    const systemPrompt = `You are a Professional Prompt Engineer.

ALWAYS structure responses using this exact format:

ACT AS: [Specify the AI's role/expertise]
TASK: [Clear, specific instruction]
REQUIREMENTS: [Quality standards]
FORMAT: [Output structure]
CONTEXT: [Background information]`;

    // 3. BUILD CONVERSATION TEXT
    let conversationText = systemPrompt + '\n\n';
    
    // Add previous messages for context
    if (history && Array.isArray(history)) {
      conversationText += 'CONVERSATION HISTORY:\n';
      history.forEach((msg, idx) => {
        if (msg.role === 'user') {
          conversationText += `\n[User Request ${idx + 1}]\n${msg.content}\n`;
        } else {
          conversationText += `\n[Enhanced Prompt ${idx + 1}]\n${msg.content}\n`;
        }
      });
      conversationText += '\n---\n\n';
    }

    // Add current message
    conversationText += `Now enhance this request:\n\n"${message}"\n\nProvide the enhanced prompt:`;

    // 4. SEND TO OLLAMA
    const response = await axios.post(
      OLLAMA_URL,
      {
        model: 'mistral',        // Using Mistral 7B
        prompt: conversationText,
        stream: false,           // Wait for full response
        temperature: 0.5,        // Balance creativity and consistency
        top_p: 0.9,             // Diversity parameter
        top_k: 40,              // Top tokens to consider
      },
      { timeout: 180000 }       // 3-minute timeout
    );

    // 5. SEND RESPONSE BACK
    const enhancedPrompt = response.data.response?.trim();
    res.json({ response: enhancedPrompt });

  } catch (error) {
    // ERROR HANDLING
    if (error.message.includes('ECONNREFUSED')) {
      return res.status(503).json({
        error: 'Ollama not running. Start it with: ollama serve'
      });
    }
    if (error.code === 'ECONNABORTED') {
      return res.status(408).json({
        error: 'Request timeout (>3min). Try a simpler prompt.'
      });
    }

    res.status(500).json({ error: error.message || 'Server error' });
  }
});
```

**Step-by-Step Explanation**:

1. **Receive Request**: Get message from user and previous messages (history)

2. **System Prompt**: Template that tells Ollama how to format responses
   ```
   ACT AS: Expert Writer
   TASK: Write professional email
   REQUIREMENTS: Must include greeting, body, closing
   FORMAT: Plain text
   CONTEXT: For business communication
   ```

3. **Build Conversation**: Include previous messages so AI has context

4. **Send to Ollama**: Call Ollama API with:
   - Model: mistral (fast, accurate)
   - Prompt: The full text to process
   - Temperature: 0.5 (balanced between creative and consistent)
   - Timeout: 3 minutes (for long requests)

5. **Get Response**: Ollama returns enhanced prompt

6. **Send Back**: Return response to frontend

7. **Error Handling**: Specific errors for:
   - Ollama not running (503)
   - Request timeout (408)
   - Other errors (500)

---

#### 3. **API Error Handling**

```javascript
// Different error scenarios:

// ERROR 1: Ollama not running
if (error.message.includes('ECONNREFUSED')) {
  return res.status(503).json({
    error: 'Ollama not running. Start it with: ollama serve'
  });
}

// ERROR 2: Request too long (timeout)
if (error.code === 'ECONNABORTED') {
  return res.status(408).json({
    error: 'Request timeout (>3min). Try a simpler prompt.'
  });
}

// ERROR 3: Other server errors
res.status(500).json({ error: error.message || 'Server error' });
```

**Status Codes Explained**:
- **503**: Service Unavailable (Ollama down)
- **408**: Request Timeout (took too long)
- **500**: Internal Server Error (something broke)
- **200**: Success (implicit in axios.post)

---

### **MEMBER 4: Chat Features & API Integration**

#### 1. **ChatbotAssistant Component**
**Location**: `src/components/ChatbotAssistant.jsx` (160 lines)
**Purpose**: Main chat interface where users interact with AI

```jsx
const ChatbotAssistant = () => {
  // STATE MANAGEMENT
  const dispatch = useDispatch();
  const categories = useSelector(state => state.prompts?.categories || []);
  const enhancedPrompts = useSelector(state => state.prompts?.enhancedPrompts || []);
  
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: '🎯 Transform any task...', isInitial: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(null);
  const [showCategorySelect, setShowCategorySelect] = useState(null);
  const messagesEndRef = useRef(null);

  // AUTO-SCROLL WHEN NEW MESSAGES ARRIVE
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="simple-chatbot">
      {/* Chat Header */}
      {/* Chat Messages Display */}
      {/* Input Form */}
    </section>
  );
};
```

**Key State Variables**:
- `messages`: Array of chat messages
- `input`: Current text in input box
- `loading`: True when waiting for AI response
- `error`: Error message to display
- `copied`: Track which message was copied
- `showCategorySelect`: Show/hide category dropdown

---

#### 2. **handleSend Function - Sending Messages**

```jsx
const handleSend = async (e) => {
  e.preventDefault();  // Prevent page refresh
  
  if (!input.trim()) return;  // Don't send empty messages

  // STEP 1: Save user input
  const userMessage = input.trim();
  setInput('');  // Clear input field
  setError('');  // Clear previous errors

  // STEP 2: Create message object
  const newMessages = [...messages, {
    id: Date.now(),
    role: 'user',
    content: userMessage,
    isInitial: false
  }];
  
  // STEP 3: Update UI with user message
  setMessages(newMessages);
  
  // STEP 4: Show loading state
  setLoading(true);

  try {
    // STEP 5: Call backend API
    const response = await sendMessageToAI(
      userMessage,
      newMessages.slice(0, -1)  // Send conversation history
    );

    // STEP 6: Create AI response object
    const msgId = Date.now() + 1;
    const aiMessage = {
      id: msgId,
      role: 'assistant',
      content: response,
      isInitial: false,
      originalPrompt: userMessage
    };

    // STEP 7: Add AI message to state
    setMessages(m => [...m, aiMessage]);

  } catch (err) {
    // STEP 8: Handle errors
    setError(err.message);
    setMessages(newMessages.slice(0, -1));  // Remove user message on error

  } finally {
    // STEP 9: Hide loading (runs regardless of success/error)
    setLoading(false);
  }
};
```

**Flow Visualization**:
```
User Types & Clicks Send
  ↓
handleSend() triggered
  ↓
Save message, show in chat
  ↓
Call backend: POST /api/chat
  ↓
Loading spinner appears
  ↓
Wait for response (2-5 seconds)
  ↓
Response arrives
  ↓
Add to messages state
  ↓
Component re-renders
  ↓
Message appears in chat
```

---

#### 3. **Copy to Clipboard Function**

```jsx
const handleCopy = (text, msgId) => {
  // Copy text to clipboard using Navigator API
  navigator.clipboard.writeText(text);
  
  // Show "Copied!" confirmation
  setCopied(msgId);
  
  // Hide confirmation after 2 seconds
  setTimeout(() => setCopied(null), 2000);
};

// Usage in JSX:
<button
  className="copy-btn"
  onClick={() => handleCopy(msg.content, msg.id)}
>
  {copied === msg.id ? '✓ Copied!' : '📋 Copy'}
</button>
```

**How It Works**:
1. `navigator.clipboard.writeText()` - Native browser API to copy text
2. `setCopied(msgId)` - Show confirmation for this message
3. `setTimeout()` - Reset after 2 seconds
4. Conditional rendering shows "Copied!" when message was just copied

---

#### 4. **Add to Favorites Function**

```jsx
const handleAddFavorite = (msgId, originalPrompt, enhancedPrompt) => {
  // STEP 1: Check if prompt is already saved
  const existingPrompt = enhancedPrompts.find(p => p.id === msgId);
  
  if (existingPrompt) {
    // STEP 2a: Already saved - toggle favorite
    dispatch(toggleEnhancedFavorite(msgId));
  } else {
    // STEP 2b: Not saved yet - add it as favorite
    dispatch(addEnhancedPrompt({
      id: msgId,
      originalPrompt,
      enhancedPrompt,
      isFavorite: true  // Immediately mark as favorite
    }));
  }
};

// Usage in JSX:
<button
  className={`fav-btn ${isFavorited ? 'active' : ''}`}
  onClick={() => handleAddFavorite(msg.id, msg.originalPrompt, msg.content)}
>
  {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
</button>
```

**Smart Logic**:
- First click: Save + Favorite (adds to library and marks favorite)
- Second click: Unfavorite (removes from favorites but keeps in library)
- Third click: Favorite again

---

#### 5. **Add to Category Function**

```jsx
const handleAddToCategory = (msgId, originalPrompt, enhancedPrompt, category) => {
  // STEP 1: Check if prompt is already saved
  const existingPrompt = enhancedPrompts.find(p => p.id === msgId);
  
  if (existingPrompt) {
    // STEP 2a: Already saved - update category
    dispatch(addToCategory({
      id: msgId,
      category  // Just update the category
    }));
  } else {
    // STEP 2b: Not saved yet - add with category
    dispatch(addEnhancedPrompt({
      id: msgId,
      originalPrompt,
      enhancedPrompt,
      category
    }));
  }
  
  // STEP 3: Close dropdown
  setShowCategorySelect(null);
};

// Usage in JSX:
<div className="category-select-wrapper">
  <button
    className="category-btn"
    onClick={() => setShowCategorySelect(
      showCategorySelect === msg.id ? null : msg.id
    )}
  >
    {savedCategory ? `📁 ${savedCategory}` : '📁 Category'}
  </button>
  
  {showCategorySelect === msg.id && (
    <div className="category-dropdown">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleAddToCategory(msg.id, msg.originalPrompt, msg.content, cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )}
</div>
```

**Category Selection Logic**:
1. Show/hide dropdown when clicking category button
2. User selects a category
3. Add prompt to library if not already there
4. Set the chosen category
5. Close dropdown

---

#### 6. **sendMessageToAI Function - Frontend API Call**
**Location**: `src/services/huggingfaceAPI.js`

```javascript
import axios from 'axios';

export const sendMessageToAI = async (message, history = []) => {
  // VALIDATION
  if (!message.trim()) {
    throw new Error('Message cannot be empty');
  }

  try {
    // STEP 1: Send request to backend
    const response = await axios.post(
      'http://localhost:3001/api/chat',  // Backend URL
      {
        message,          // User's prompt
        history           // Previous messages
      },
      { timeout: 200000 } // 3+ minute timeout
    );

    // STEP 2: Return response text
    return response.data.response || 'Got your message. Please continue.';

  } catch (error) {
    // ERROR HANDLING - Provide helpful messages

    // ERROR 1: Backend not running
    if (error.message.includes('Connect')) {
      throw new Error('Backend server not running. Run: npm run server');
    }

    // ERROR 2: Model loading (first request)
    if (error.response?.status === 503) {
      throw new Error('Model loading. Wait 30 seconds and try again.');
    }

    // ERROR 3: API key error (if using cloud API)
    if (error.response?.status === 401) {
      throw new Error('API key error. Check backend logs.');
    }

    // ERROR 4: Request took too long
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Try again.');
    }

    // ERROR 5: Other errors
    throw new Error(error.message || 'Unable to get response. Try again.');
  }
};
```

**Error Handling Strategy**:
1. Check error type
2. Provide specific, actionable error message
3. Tell user exactly what to do

**Example Errors in UI**:
```
"Backend server not running. Run: npm run server"
→ User knows to start backend

"Model loading. Wait 30 seconds and try again."
→ User knows it's loading, not broken

"Request timeout. Try again."
→ User knows to retry
```

---

#### 7. **Context Switching (Theme)**
**Location**: `src/context/ThemeContext.jsx`

```jsx
// CREATE CONTEXT
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// PROVIDER COMPONENT
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // SYNC WITH CSS
  useEffect(() => {
    // Remove old theme class
    document.body.classList.remove('theme-light', 'theme-dark');
    // Add new theme class
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  // TOGGLE FUNCTION
  const toggleTheme = () =>
    setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // PROVIDE TO ALL CHILDREN
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-root theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// CUSTOM HOOK FOR EASY ACCESS
export const useTheme = () => useContext(ThemeContext);
```

**Using Theme in Components**:
```jsx
// In Header.jsx
const { theme, toggleTheme } = useTheme();

return (
  <button onClick={toggleTheme}>
    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
  </button>
);
```

**How Theme Switching Works**:
1. User clicks theme toggle button
2. `toggleTheme()` called
3. State changes from 'light' to 'dark'
4. `useEffect` runs
5. CSS class changes on `<body>`
6. CSS rules apply new colors
7. All components see new theme via `useTheme()`

---

---

## 🎓 Interview Questions & Answers

### **Questions for MEMBER 1 (Frontend Components)**

**Q1: What is the difference between a functional component and a class component?**

A: 
- **Functional Components**: Modern, use hooks (useState, useEffect), easier to read
- **Class Components**: Older, use lifecycle methods (componentDidMount), more verbose
- **In our project**: We use functional components everywhere because they're simpler

```jsx
// Our functional component approach
const Header = ({ activeCategory, onFilterChange }) => {
  const { theme, toggleTheme } = useTheme();
  return <header>...</header>;
};
```

---

**Q2: How does CSS Grid work in the PromptGrid component?**

A: CSS Grid creates a layout with columns and rows.

```css
.prompt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
```

- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`:
  - `repeat()`: Repeat columns
  - `auto-fit`: Fit as many columns as possible
  - `minmax(300px, 1fr)`: Each column is minimum 300px, can grow to fill space
  - Creates responsive 1-column on mobile, 2-3 columns on desktop

---

**Q3: What does PropTypes do and why do we use it?**

A: PropTypes validates that components receive the correct data types.

```jsx
Header.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
```

**Benefits**:
- Catch bugs during development
- Document expected props
- Help team understand components
- Warnings in console if wrong type passed

---

### **Questions for MEMBER 2 (State Management)**

**Q1: Explain what Redux does and why we need it?**

A: Redux manages application state centrally instead of scattered across components.

**Problem without Redux**:
```jsx
// Component A has favorite state
const [isFavorited, setIsFavorited] = useState(false);

// Component B needs to know if it's favorited
// Prop drilling: App → A → B → C → D
<App isFavorited={isFavorited}>
  <ComponentA isFavorited={isFavorited}>
    <ComponentB isFavorited={isFavorited}>
      ...
    </ComponentB>
  </ComponentA>
</App>
```

**Solution with Redux**:
```jsx
// Anywhere can access favorite state
const isFavorited = useSelector(state => 
  state.prompts.enhancedPrompts.find(p => p.id === msgId)?.isFavorite
);

// Anywhere can dispatch actions
dispatch(toggleEnhancedFavorite(msgId));
```

**Benefits**:
- No prop drilling
- Centralized state
- Easier to debug
- Easy data persistence

---

**Q2: How does the toggleEnhancedFavorite reducer work?**

A:
```javascript
toggleEnhancedFavorite(state, action) {
  const prompt = state.enhancedPrompts.find(p => p.id === action.payload);
  if (prompt) {
    prompt.isFavorite = !prompt.isFavorite;
  }
}
```

**Step-by-step**:
1. `state`: Current Redux state (all prompts)
2. `action.payload`: The prompt ID to toggle
3. `find()`: Search for prompt with matching ID
4. `!prompt.isFavorite`: Flip true to false or false to true

**Example**:
```
Initial: isFavorite = false
Action: toggleEnhancedFavorite(123)
Result: isFavorite = true
Action: toggleEnhancedFavorite(123)
Result: isFavorite = false
```

---

**Q3: What's the difference between action and payload?**

A:
```javascript
// Dispatching
dispatch(toggleEnhancedFavorite(msgId));

// In reducer
toggleEnhancedFavorite(state, action) {
  // action = { type: 'prompts/toggleEnhancedFavorite', payload: msgId }
  // action.payload = msgId
}
```

- **action**: The entire action object with type and payload
- **payload**: The data sent with the action (the prompt ID)

---

### **Questions for MEMBER 3 (Backend & API)**

**Q1: What happens when a user sends a message to the chatbot?**

A:
```
1. Frontend: User types "write a poem"
   
2. Frontend calls: sendMessageToAI("write a poem", [history])
   
3. Axios sends: POST http://localhost:3001/api/chat
   {
     message: "write a poem",
     history: [...]
   }

4. Backend receives request in /api/chat endpoint

5. Backend builds system prompt:
   - "You are a Professional Prompt Engineer"
   - "Transform requests into structured prompts"
   - "Use ACT AS, TASK, REQUIREMENTS, FORMAT, CONTEXT"

6. Backend combines:
   - System prompt (instructions)
   - Conversation history (context)
   - Current message (user request)

7. Backend sends to Ollama:
   POST http://localhost:11434/api/generate
   {
     model: 'mistral',
     prompt: [full conversation text],
     temperature: 0.5
   }

8. Ollama processes (2-5 seconds) and returns response:
   {
     response: "ACT AS: Poet\nTASK: Write a poem\n..."
   }

9. Backend returns to frontend:
   {
     response: "ACT AS: Poet\nTASK: Write a poem\n..."
   }

10. Frontend displays response in chat
```

---

**Q2: What is temperature and how does it affect responses?**

A: Temperature controls how creative or consistent the AI response is.

```javascript
temperature: 0.5  // Our default
```

**Scale**:
- `0.0`: Most consistent (deterministic, same input = same output)
- `0.5`: Balanced (some creativity, mostly consistent) ← Our choice
- `1.0`: Most creative (more variety, less predictable)

**Examples**:
```
Temperature 0.1: "ACT AS: Teacher. TASK: Explain math."
Request: "explain math" → Same response every time

Temperature 0.5: "ACT AS: Math Expert. TASK: Teach mathematics."
Request: "explain math" → Similar but slightly different

Temperature 0.9: "ACT AS: Creative Math Enthusiast. TASK: Make math fun!"
Request: "explain math" → Very different each time
```

**Why 0.5 for prompts?**
- We want consistent prompt structure
- But not robotic (some variation is good)
- Still creative enough to be useful

---

**Q3: How do you handle errors in Express?**

A: Check error type and return specific HTTP status codes and messages.

```javascript
try {
  const response = await axios.post(OLLAMA_URL, {...});
  res.json({ response: response.data.response });
} catch (error) {
  // Error 1: Service Down
  if (error.message.includes('ECONNREFUSED')) {
    return res.status(503).json({
      error: 'Ollama not running. Start it with: ollama serve'
    });
  }

  // Error 2: Timeout
  if (error.code === 'ECONNABORTED') {
    return res.status(408).json({
      error: 'Request timeout. Try a simpler prompt.'
    });
  }

  // Error 3: Unknown
  res.status(500).json({ error: error.message || 'Server error' });
}
```

**HTTP Status Codes**:
- **200**: Success (implicit)
- **400**: Bad Request (client error)
- **401**: Unauthorized (auth error)
- **408**: Timeout (took too long)
- **500**: Server Error (unexpected)
- **503**: Service Unavailable (Ollama down)

---

### **Questions for MEMBER 4 (Features & Chat)**

**Q1: How does the chat auto-scroll work?**

A: Using `useRef` and `useEffect`:

```jsx
const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);  // Runs when messages change

// In JSX:
<div ref={messagesEndRef} />  // Empty div at bottom
```

**How it works**:
1. `useRef` creates a reference to a DOM element
2. When new messages arrive, `useEffect` runs
3. `scrollIntoView()` scrolls to that element
4. User always sees latest message

---

**Q2: Explain the favorite button logic?**

A:
```jsx
const handleAddFavorite = (msgId, originalPrompt, enhancedPrompt) => {
  // Check if already in library
  const existingPrompt = enhancedPrompts.find(p => p.id === msgId);
  
  if (existingPrompt) {
    // Already saved → toggle favorite
    dispatch(toggleEnhancedFavorite(msgId));
  } else {
    // Not saved yet → add and favorite
    dispatch(addEnhancedPrompt({
      id: msgId,
      originalPrompt,
      enhancedPrompt,
      isFavorite: true
    }));
  }
};
```

**Scenarios**:
1. **First click** (not saved):
   - Message not in enhancedPrompts
   - Dispatch `addEnhancedPrompt` with `isFavorite: true`
   - Result: Saved AND favorited

2. **Second click** (saved and favorited):
   - Message already in enhancedPrompts
   - Dispatch `toggleEnhancedFavorite`
   - Result: `isFavorite` becomes false (unfavorited)

3. **Third click** (saved but not favorited):
   - Message in enhancedPrompts
   - Dispatch `toggleEnhancedFavorite`
   - Result: `isFavorite` becomes true (favorited again)

---

**Q3: How does the loading state work?**

A:
```jsx
const [loading, setLoading] = useState(false);

const handleSend = async (e) => {
  e.preventDefault();
  
  // Show loading
  setLoading(true);

  try {
    // Call API (takes 2-5 seconds)
    const response = await sendMessageToAI(message);
    // Update messages
    setMessages(m => [...m, aiMessage]);
  } catch (err) {
    setError(err.message);
  } finally {
    // Hide loading (runs regardless of success/error)
    setLoading(false);
  }
};

// In JSX:
{loading && (
  <div className="chat-msg chat-msg--assistant">
    <span className="dots-loading"></span>  {/* Animated dots */}
  </div>
)}

<button type="submit" disabled={!input.trim() || loading}>
  ➤
</button>
```

**Timeline**:
```
User clicks send
  ↓
setLoading(true) → spinner appears, input disabled
  ↓
API call starts (2-5 seconds)
  ↓
Response arrives
  ↓
setLoading(false) → spinner disappears, input enabled
  ↓
Message displayed
```

---

**Q4: How is data passed between components?**

A: Through Redux store and props:

```jsx
// Parent to Child: Props
<Header activeCategory={activeCategory} />

// Child dispatches action: Redux
dispatch(toggleEnhancedFavorite(msgId));

// Parent reads from Redux: Selectors
const enhancedPrompts = useSelector(state => state.prompts.enhancedPrompts);
```

**Data Flow in Chat**:
```
User types in ChatbotAssistant
  ↓
handleSend() called
  ↓
Message added to local state: setMessages()
  ↓
API call to backend
  ↓
Response received
  ↓
Message added to local state
  ↓
User clicks Favorite
  ↓
dispatch(addEnhancedPrompt()) → Redux
  ↓
Redux state updated
  ↓
FavoritesSection sees change via useSelector
  ↓
FavoritesSection re-renders
```

---

---

## 💡 Possible Improvements & Changes

### **Feature Improvements**

#### 1. **Export/Import Prompts**
```jsx
// Export to JSON
const exportPrompts = () => {
  const data = JSON.stringify(enhancedPrompts, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'prompts.json';
  a.click();
};

// Import from JSON
const importPrompts = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = JSON.parse(e.target.result);
    data.forEach(prompt => dispatch(addEnhancedPrompt(prompt)));
  };
  reader.readAsText(file);
};
```

**Benefits**: Share prompts between users, backup data

---

#### 2. **Search Functionality**
```jsx
const [searchTerm, setSearchTerm] = useState('');

const filteredPrompts = enhancedPrompts.filter(p =>
  p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  p.enhancedPrompt?.toLowerCase().includes(searchTerm.toLowerCase())
);
```

**Use Cases**: Find old prompts, search by keywords

---

#### 3. **Prompt Versioning**
```javascript
// Track changes to prompts
const promptVersions = {
  id: 123,
  versions: [
    { version: 1, content: '...', createdAt: '2024-01-01' },
    { version: 2, content: '...', createdAt: '2024-01-02' },
    { version: 3, content: '...', createdAt: '2024-01-03' }
  ]
};
```

**Benefits**: See how prompt evolved, revert to old versions

---

#### 4. **Real-time Collaboration**
```javascript
// Multiple users editing same prompt
// Use WebSocket or Firebase Realtime Database
// Show cursor positions of other users
// Merge changes in real-time
```

**Benefits**: Team work on same prompts

---

### **Performance Improvements**

#### 1. **Lazy Loading**
```jsx
// Load prompts only when needed
const PromptGrid = lazy(() => import('./PromptGrid'));

<Suspense fallback={<LoadingSpinner />}>
  <PromptGrid />
</Suspense>
```

**Benefits**: Faster initial page load

---

#### 2. **Memoization**
```jsx
// Prevent unnecessary re-renders
const PromptCard = memo(({ prompt }) => {
  return <div>{prompt.title}</div>;
});

// Or use useMemo
const filteredPrompts = useMemo(() =>
  prompts.filter(p => p.category === activeCategory),
  [prompts, activeCategory]
);
```

**Benefits**: Faster app, less CPU usage

---

#### 3. **Debouncing Search**
```jsx
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useRef(null);

useEffect(() => {
  clearTimeout(debouncedSearch.current);
  debouncedSearch.current = setTimeout(() => {
    // Perform search
  }, 300); // Wait 300ms after user stops typing
}, [searchTerm]);
```

**Benefits**: Better performance on large datasets

---

### **Code Quality Improvements**

#### 1. **Error Boundary**
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <ChatbotAssistant />
</ErrorBoundary>
```

**Benefits**: Graceful error handling

---

#### 2. **Environment Variables**
```javascript
// Use environment variables for sensitive data
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const TIMEOUT = import.meta.env.VITE_TIMEOUT || 180000;
```

**Benefits**: Different configs for dev/production

---

#### 3. **Logging Service**
```javascript
// Custom logging for debugging
const logger = {
  log: (msg, data) => console.log(`📝 ${msg}`, data),
  error: (msg, error) => console.error(`❌ ${msg}`, error),
  success: (msg) => console.log(`✅ ${msg}`),
};

// Usage
logger.success('Prompt enhanced');
logger.error('API call failed', error);
```

**Benefits**: Easier debugging

---

### **UX Improvements**

#### 1. **Keyboard Shortcuts**
```jsx
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      handleSend(e);  // Send message with Ctrl+Enter
    }
    if (e.key === 'Escape') {
      setShowCategorySelect(null);  // Close dropdown with Esc
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

**Benefits**: Power users can work faster

---

#### 2. **Undo/Redo Functionality**
```javascript
const [undoStack, setUndoStack] = useState([]);
const [redoStack, setRedoStack] = useState([]);

const undo = () => {
  const previous = undoStack.pop();
  setRedoStack([...redoStack, currentState]);
  setState(previous);
};

const redo = () => {
  const next = redoStack.pop();
  setUndoStack([...undoStack, currentState]);
  setState(next);
};
```

**Benefits**: Users can fix mistakes easily

---

#### 3. **Drag & Drop to Reorder**
```jsx
// Drag prompts to different categories
<div
  draggable
  onDragStart={(e) => e.dataTransfer.setData('promptId', prompt.id)}
  onDrop={(e) => handleDropPrompt(e, category)}
>
  {prompt.title}
</div>
```

**Benefits**: Better organization

---

### **Backend Improvements**

#### 1. **Database Integration**
```javascript
// Replace localStorage with real database
// Benefits: Persistence, multi-user, security

import mongoose from 'mongoose';

const promptSchema = new mongoose.Schema({
  userId: String,
  originalPrompt: String,
  enhancedPrompt: String,
  category: String,
  isFavorite: Boolean,
  createdAt: { type: Date, default: Date.now }
});

const Prompt = mongoose.model('Prompt', promptSchema);
```

---

#### 2. **Authentication**
```javascript
// Add user accounts
app.post('/auth/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save user to database
});

app.post('/auth/login', async (req, res) => {
  // Verify credentials
  // Return JWT token
});
```

**Benefits**: User accounts, private prompts

---

#### 3. **Caching**
```javascript
// Cache frequent requests
const cache = new Map();

app.get('/api/categories', (req, res) => {
  if (cache.has('categories')) {
    return res.json(cache.get('categories'));
  }
  const categories = [...];
  cache.set('categories', categories);
  res.json(categories);
});
```

**Benefits**: Faster responses

---

### **Testing Improvements**

#### 1. **Unit Tests**
```javascript
// Test individual functions
import { toggleEnhancedFavorite } from './promptsSlice';

describe('promptsSlice', () => {
  it('should toggle favorite status', () => {
    const state = {
      enhancedPrompts: [
        { id: 1, isFavorite: false }
      ]
    };
    const action = { payload: 1 };
    const result = toggleEnhancedFavorite(state, action);
    expect(result.enhancedPrompts[0].isFavorite).toBe(true);
  });
});
```

---

#### 2. **Integration Tests**
```javascript
// Test features working together
describe('Adding favorite prompt', () => {
  it('should add to favorites and appear in FavoritesSection', async () => {
    // 1. Send prompt
    // 2. Click favorite
    // 3. Check Redux state
    // 4. Check UI updates
  });
});
```

---

#### 3. **E2E Tests**
```javascript
// Test from user perspective
describe('Chat workflow', () => {
  it('should send message and display response', async () => {
    await page.type('[data-testid="chat-input"]', 'write a poem');
    await page.click('[data-testid="send-btn"]');
    await page.waitForSelector('[data-testid="ai-response"]');
    const response = await page.$('[data-testid="ai-response"]');
    expect(response).toBeTruthy();
  });
});
```

---

---

## 🎯 Summary for Teachers

### **Project Components & Responsibilities**

| Component | Member | Purpose | Key Skills |
|-----------|--------|---------|-----------|
| **Header, PromptGrid, PromptCard, FavoritesSection** | Member 1 | UI/UX | React, CSS Grid, Components |
| **Redux Store, promptsSlice, State Management** | Member 2 | State | Redux Toolkit, Reducers |
| **Express Server, Ollama Integration, /api/chat** | Member 3 | Backend | Node.js, Express, APIs |
| **ChatbotAssistant, Copy, Favorite, Categories** | Member 4 | Features | React Hooks, Async, UX |

### **Total Lines of Code**
- Frontend Components: ~400 lines
- Redux State: ~80 lines
- Backend Server: ~70 lines
- Chat Features: ~160 lines
- CSS Styling: ~550 lines
- **Total: ~1260 lines**

### **Key Learnings Demonstrated**
✅ React Hooks (useState, useEffect, useRef, useReducer, useContext)  
✅ Component Architecture & Props  
✅ Redux State Management  
✅ Express.js Backend  
✅ API Integration  
✅ Error Handling  
✅ User Interaction  
✅ CSS & Responsive Design  
✅ Async/Await  
✅ Context API  

---

**Project Complete & Production Ready! 🚀**

