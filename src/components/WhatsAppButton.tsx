import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import WhatsAppLeadFlow from './WhatsAppLeadFlow';

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="relative group"
          aria-label="Chat on WhatsApp"
        >
          <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-25" />
          <div className="relative flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-whatsapp-dark">
            <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
          </div>
        </button>
      </div>
      <WhatsAppLeadFlow open={open} onOpenChange={setOpen} />
    </>
  );
};

export default WhatsAppButton;