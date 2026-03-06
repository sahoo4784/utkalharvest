import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20from%20Utkal%20Harvest"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle size={28} className="text-primary-foreground" fill="white" />
  </a>
);

export default WhatsAppButton;
