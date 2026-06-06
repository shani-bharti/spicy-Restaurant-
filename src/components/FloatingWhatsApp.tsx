import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const whatsappNum = '+919177235000';
  const rawMsg = "Hello Spicy Family Restaurant management, I'm visiting your website and want to inquire about table booking availability / catering details today.";
  const encodedMsg = encodeURIComponent(rawMsg);
  const flowUrl = `https://wa.me/${whatsappNum}?text=${encodedMsg}`;

  return (
    <motion.a
      id="floating-whatsapp-widget"
      href={flowUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-30 flex items-center space-x-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-2xl transition-all border border-emerald-500 hover:bg-emerald-500 cursor-pointer"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      animate={{
        boxShadow: [
          '0 4px 20px rgba(16, 185, 129, 0.2)',
          '0 4px 25px rgba(16, 185, 129, 0.4)',
          '0 4px 20px rgba(16, 185, 129, 0.2)',
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
      }}
    >
      <MessageSquare className="h-5 w-5 fill-white/10" />
      <span className="text-xs font-bold font-sans tracking-wide">Chat with Spicy</span>
    </motion.a>
  );
}
