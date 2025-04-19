import { useState, useEffect, useRef } from 'react';

export default function SuperServerAIChatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("Hey! Help me understand how SuperServerAI works.");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Pre-defined responses for common questions
  const botResponses = {
    default: "I don't have information about that. Try asking about deploying apps, our features, or pricing.",
    greeting: "Hello! I'm SuperServerAI's assistant. How can I help you today?",
    features: "SuperServerAI offers one-click deployments for web apps, automatic scaling, managed databases, and simple environment configuration. We support various frameworks including React, Laravel, Vue, and more.",
    pricing: "SuperServerAI pricing starts at $15/month for basic deployments. We also offer a Pro plan at $49/month with more resources and a Team plan at $99/month.",
    deploy: "Deploying with SuperServerAI is simple! You can connect your GitHub repo or upload your code directly. We'll automatically detect your framework and suggest optimal configurations.",
    frameworks: "We support many popular frameworks including React, Vue, Angular, Laravel, Express, Django, and more. Each comes with optimized deployment settings.",
    database: "We offer managed MySQL, PostgreSQL, and MongoDB databases. They're automatically backed up daily and can be scaled as needed.",
    support: "We provide 24/7 support via chat and email. Pro and Team plans also include priority support with faster response times.",
    starter: "SuperServerAI is a modern deployment platform that makes hosting your web applications simple and efficient. We handle all the infrastructure complexities so you can focus on your code. You can deploy React, Laravel, Vue, or any other popular framework with just a few clicks. Our platform automatically scales based on your traffic needs and provides managed database options. Need help getting started? Just ask me about features, pricing, or how to deploy your first app!"
  };

  // Function to determine bot response based on user input
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('how') && input.includes('work')) {
      return botResponses.starter;
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return botResponses.greeting;
    } else if (input.includes('feature') || input.includes('what can') || input.includes('capabilities')) {
      return botResponses.features;
    } else if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return botResponses.pricing;
    } else if (input.includes('deploy') || input.includes('host') || input.includes('launch')) {
      return botResponses.deploy;
    } else if (input.includes('framework') || input.includes('language') || input.includes('tech')) {
      return botResponses.frameworks;
    } else if (input.includes('database') || input.includes('db') || input.includes('data store')) {
      return botResponses.database;
    } else if (input.includes('help') || input.includes('support') || input.includes('contact')) {
      return botResponses.support;
    } else {
      return botResponses.default;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
    
    // Clear input field
    setInputValue('');
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input field on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-primary p-4 text-white flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <h1 className="font-bold">SuperServerAI</h1>
        </div>
        <div className="text-sm">Connected</div>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`p-3 rounded-xl max-w-xs ${
                message.sender === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-gray-800 p-3 rounded-xl rounded-bl-none border border-gray-200 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-sm">Press Enter to start a conversation</p>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200 flex">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button 
          type="submit" 
          className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" transform="rotate(180,10,10)" />
          </svg>
        </button>
      </form>
    </div>
  );
}