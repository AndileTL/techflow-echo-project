import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/263779822400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-25"></div>
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-whatsapp-dark">
          <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Chat with us!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;