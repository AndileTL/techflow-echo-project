
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const TechFlowChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm TechFlow AI, your virtual assistant. I'm here to help you with information about our services, portfolio, and how we can assist your business. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const knowledgeBase = {
    services: {
      keywords: ['service', 'services', 'what do you do', 'help', 'offer', 'provide'],
      response: "TechFlow offers 7 comprehensive technology services: IT Consulting, Network Support, Software Development, Cloud Support, Digital Transformation, IT Infrastructure, and IT Support. We help businesses modernize their technology and improve efficiency. Which service interests you most?"
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'reach', 'call', 'office', 'address'],
      response: "You can reach us at:\n📞 Phone: +2638677211025\n📧 Email: sales@techflow.co.zw or support@techflow.co.zw\n📍 Address: 26 Dieppe Avenue, New Cranborne Park, Harare, Zimbabwe\n\nWe serve clients both locally in Zimbabwe and internationally!"
    },
    portfolio: {
      keywords: ['portfolio', 'projects', 'work', 'examples', 'experience', 'clients'],
      response: "We've completed 500+ projects for 50+ enterprise clients with 99.8% satisfaction rate. Our portfolio includes ERP systems, cloud migrations, banking security upgrades, digital transformations, data centers, and IT support optimization. We work with major partners like Microsoft, AWS, Cisco, and VMware."
    },
    international: {
      keywords: ['international', 'global', 'worldwide', 'countries', 'outside zimbabwe'],
      response: "Yes! TechFlow proudly serves clients both in Zimbabwe and internationally. We provide world-class technology solutions globally and have experience working with international clients across various time zones and requirements."
    },
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'quote', 'estimate', 'budget'],
      response: "Our pricing varies based on project scope and requirements. We offer competitive rates and flexible engagement models. For a detailed quote, please contact us at +2638677211025 or sales@techflow.co.zw. We'll be happy to discuss your specific needs and provide a customized proposal."
    },
    cloud: {
      keywords: ['cloud', 'aws', 'migration', 'infrastructure'],
      response: "Our Cloud Support services include cloud migration, infrastructure management, cost optimization, and security & compliance. We're experienced with AWS, Azure, and Google Cloud platforms. We help businesses reduce IT costs while improving scalability and security."
    },
    software: {
      keywords: ['software', 'development', 'app', 'application', 'web', 'mobile'],
      response: "We develop custom software solutions including web applications, mobile apps, enterprise software, and APIs. Our team uses modern technologies like React, Node.js, and mobile platforms to create solutions that streamline your business processes and improve efficiency."
    },
    support: {
      keywords: ['support', 'help', 'maintenance', '24/7', 'assistance'],
      response: "We provide 24/7 comprehensive IT support including helpdesk support, remote assistance, on-site services, and system maintenance. Our goal is to minimize downtime and keep your systems running smoothly so you can focus on your business."
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to TechFlow Technologies. I'm here to help you learn about our services and how we can support your business. What would you like to know?";
    }

    // Check for thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about TechFlow's services or how we can help your business?";
    }

    // Check knowledge base
    for (const [category, info] of Object.entries(knowledgeBase)) {
      if (info.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return info.response;
      }
    }

    // Default response
    return "I'd be happy to help you with information about TechFlow's services, portfolio, contact details, or pricing. You can also ask about our international services, cloud solutions, software development, or IT support. What specific information are you looking for?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full p-4 h-14 w-14"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-96 shadow-2xl bg-white border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bot size={20} />
                <span>Chat with TechFlow AI</span>
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 ${
                    message.isBot ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about TechFlow services..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-2"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TechFlowChatbot;
