import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const numbers = [
    { label: 'Sales & Support', number: '263779822400', display: '0779 822 400' },
    { label: 'ISP & Connectivity', number: '263772800790', display: '0772 800 790' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-whatsapp to-whatsapp-dark px-4 py-3 text-white">
            <p className="font-semibold text-sm">Chat with TechFlow</p>
            <p className="text-xs opacity-90">Choose a department</p>
          </div>
          <div className="divide-y divide-border">
            {numbers.map((n) => (
              <a
                key={n.number}
                href={`https://wa.me/${n.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-whatsapp/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.display}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-25"></div>
        <div className="relative flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-whatsapp-dark">
          <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;