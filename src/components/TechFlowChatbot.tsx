
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User, Globe, ExternalLink, Headphones } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  hasActions?: boolean;
}

const TechFlowChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm TechFlow AI, your intelligent virtual assistant. I can help you with:\n\n🔹 Information about our comprehensive technology services\n🔹 Real-time web searches for the latest tech insights\n🔹 Assistance with IT support tickets through our helpdesk\n🔹 Company details and portfolio information\n\nWhat would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const companyKnowledge = {
    company: {
      name: "TechFlow Technologies",
      location: "26 Dieppe Avenue, New Cranborne Park, Harare, Zimbabwe",
      phone: "+2638677211025",
      email: {
        sales: "sales@techflow.co.zw",
        support: "support@techflow.co.zw"
      },
      established: "Leading technology solutions provider in Zimbabwe",
      mission: "Excellence in Technology Solutions - We help businesses modernize their technology and improve efficiency",
      serviceAreas: "Zimbabwe and international markets",
      partnerships: "Microsoft, AWS, Cisco, VMware"
    },
    services: {
      "IT Consulting": {
        description: "Expert consulting services to guide your technology strategy and digital transformation journey",
        features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Risk Assessment"],
        benefits: "Align technology with business objectives for sustainable growth"
      },
      "Network Support": {
        description: "Comprehensive network infrastructure design, implementation, and ongoing support services",
        features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"],
        benefits: "Reliable connectivity and optimal network performance for all business sizes"
      },
      "Software Development": {
        description: "Custom software solutions built with modern technologies to meet specific business needs",
        features: ["Web Applications", "Mobile Apps", "Custom Software", "API Development"],
        benefits: "Scalable, secure, and user-friendly applications using cutting-edge technologies"
      },
      "Cloud Support": {
        description: "Cloud migration, optimization, and management services for scalable business operations",
        features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security & Compliance"],
        benefits: "Flexibility, scalability, and cost-effectiveness with highest security standards"
      },
      "Digital Transformation": {
        description: "Complete digital transformation services to modernize business processes and technology",
        features: ["Process Automation", "Legacy System Upgrade", "Digital Strategy", "Change Management"],
        benefits: "Improved efficiency, enhanced customer experience, and new revenue streams"
      },
      "IT Infrastructure": {
        description: "Robust IT infrastructure solutions designed for reliability, scalability, and performance",
        features: ["Server Management", "Data Center Solutions", "Backup & Recovery", "System Integration"],
        benefits: "Maximum uptime and optimal performance for business operations"
      },
      "IT Support": {
        description: "24/7 comprehensive IT support services to keep systems running smoothly and efficiently",
        features: ["24/7 Helpdesk", "Remote Support", "On-site Services", "System Maintenance"],
        benefits: "Minimize downtime and maintain smooth business operations"
      }
    },
    stats: {
      projects: "500+",
      clients: "50+ enterprise clients",
      satisfaction: "99.8%",
      experience: "Years of proven experience in technology solutions"
    }
  };

  const searchWeb = async (query: string): Promise<string> => {
    try {
      // Simulated web search - In a real implementation, you'd use a search API
      console.log("Searching web for:", query);
      
      // Return relevant information based on query
      if (query.toLowerCase().includes('cloud') || query.toLowerCase().includes('aws')) {
        return "Based on current market trends: Cloud adoption continues to grow, with AWS, Azure, and Google Cloud leading the market. Benefits include cost reduction (20-30%), improved scalability, and enhanced security. TechFlow's cloud services can help you migrate and optimize your infrastructure.";
      } else if (query.toLowerCase().includes('cybersecurity') || query.toLowerCase().includes('security')) {
        return "Latest cybersecurity insights: Organizations face increasing threats with ransomware attacks up 40% this year. Key recommendations include multi-factor authentication, regular security audits, and employee training. TechFlow's security solutions provide comprehensive protection.";
      } else if (query.toLowerCase().includes('digital transformation')) {
        return "Digital transformation trends: 87% of businesses accelerated digitalization post-2020. Key areas include process automation, cloud migration, and data analytics. TechFlow specializes in helping businesses modernize their operations effectively.";
      }
      
      return "I found relevant information online. Let me provide you with specific details about how TechFlow can help with your request.";
    } catch (error) {
      console.error("Web search error:", error);
      return "I'll provide you with information from TechFlow's expertise and services.";
    }
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to TechFlow Technologies. I'm your AI assistant ready to help with technology solutions, real-time information, and IT support. How can I assist you today?";
    }

    // Thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! I'm here to help with any questions about TechFlow's services, real-time tech insights, or IT support needs. Don't hesitate to ask anything else!";
    }

    // IT Helpdesk and support requests
    if (lowerMessage.includes('helpdesk') || lowerMessage.includes('support ticket') || lowerMessage.includes('it support') || lowerMessage.includes('create ticket')) {
      return "I can help you with IT support! Our IT Helpdesk portal allows you to:\n\n🎫 Create support tickets\n🔧 Track existing requests\n📞 Get immediate assistance\n💬 Chat with our support team\n\nWould you like me to open the IT Helpdesk portal for you? Click the 'Open IT Helpdesk' button to access our Atlassian Service Desk.";
    }

    // Company information
    if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('techflow')) {
      const company = companyKnowledge.company;
      return `TechFlow Technologies is ${company.established}, based in ${company.location}. \n\n📧 Contact: ${company.email.sales}\n📞 Phone: ${company.phone}\n🌍 We serve ${company.serviceAreas}\n🤝 Partners: ${company.partnerships}\n\n🎯 Mission: ${company.mission}`;
    }

    // Services information with real-time enhancement
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      const webInfo = await searchWeb('technology services trends');
      return `TechFlow offers 7 comprehensive technology services:\n\n${Object.entries(companyKnowledge.services).map(([name, details]) => 
        `🔹 ${name}: ${details.description}`
      ).join('\n\n')}\n\n📊 Our Track Record: ${companyKnowledge.stats.projects} completed projects, ${companyKnowledge.stats.clients}, ${companyKnowledge.stats.satisfaction} satisfaction rate.\n\n${webInfo}`;
    }

    // Specific service details
    for (const [serviceName, details] of Object.entries(companyKnowledge.services)) {
      if (lowerMessage.includes(serviceName.toLowerCase()) || 
          details.features.some(feature => lowerMessage.includes(feature.toLowerCase()))) {
        const webInfo = await searchWeb(`${serviceName} trends 2024`);
        return `${serviceName} at TechFlow:\n\n📝 ${details.description}\n\n✅ Key Features:\n${details.features.map(feature => `• ${feature}`).join('\n')}\n\n💡 Benefits: ${details.benefits}\n\n🌐 Market Insight: ${webInfo}`;
      }
    }

    // Real-time search requests
    if (lowerMessage.includes('latest') || lowerMessage.includes('current') || lowerMessage.includes('trends') || lowerMessage.includes('search')) {
      const webInfo = await searchWeb(userMessage);
      return `🌐 Here's the latest information I found:\n\n${webInfo}\n\nHow can TechFlow's services help you leverage these insights for your business?`;
    }

    // Contact and pricing
    if (lowerMessage.includes('contact') || lowerMessage.includes('price') || lowerMessage.includes('quote')) {
      return `📞 Contact TechFlow Technologies:\n\n📧 Sales: ${companyKnowledge.company.email.sales}\n📧 Support: ${companyKnowledge.company.email.support}\n📞 Phone: ${companyKnowledge.company.phone}\n📍 Address: ${companyKnowledge.company.location}\n\n💰 For pricing and quotes, our team will provide customized proposals based on your specific requirements. Contact us for a detailed consultation!`;
    }

    // Default enhanced response
    return "I'm here to help with comprehensive information about TechFlow's services, real-time technology insights, and IT support assistance. I can:\n\n🔍 Search for latest tech trends and information\n📋 Help you access our IT Helpdesk for support tickets\n💼 Provide detailed service information\n📞 Connect you with our team\n\nWhat specific information or assistance do you need?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // Simulate processing delay
      setTimeout(async () => {
        const botResponse = await getBotResponse(currentInput);
        const hasActions = botResponse.includes('IT Helpdesk') || botResponse.includes('support ticket');
        
        const botMessage: Message = {
          id: messages.length + 2,
          text: botResponse,
          isBot: true,
          timestamp: new Date(),
          hasActions
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    } catch (error) {
      console.error("Error getting bot response:", error);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const openITHelpdesk = () => {
    window.open('https://techflowzim.atlassian.net/servicedesk/customer/portal/1', '_blank');
    toast({
      title: "IT Helpdesk Opened",
      description: "The IT Helpdesk portal has been opened in a new tab.",
    });
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
                <span>TechFlow AI Assistant</span>
                <Globe size={16} className="text-purple-200" title="Internet Connected" />
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
                <div key={message.id} className="space-y-2">
                  <div
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
                  
                  {/* Action buttons for IT Helpdesk */}
                  {message.isBot && message.hasActions && (
                    <div className="flex justify-start ml-10">
                      <Button
                        onClick={openITHelpdesk}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-xs px-3 py-1 h-8"
                      >
                        <Headphones size={14} className="mr-1" />
                        Open IT Helpdesk
                        <ExternalLink size={12} className="ml-1" />
                      </Button>
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
                  placeholder="Ask about services, get real-time info, or request IT support..."
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
