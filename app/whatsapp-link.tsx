import type { AnchorHTMLAttributes, ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "./site-config";

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function WhatsAppLink({ children, ...props }: WhatsAppLinkProps) {
  return (
    <a
      href={siteConfig.whatsapp.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      className="whatsapp-float"
      aria-label="Consultar por WhatsApp"
      title="Consultar por WhatsApp"
    >
      <MessageCircle size={27} aria-hidden="true" />
      <span>WhatsApp</span>
    </WhatsAppLink>
  );
}
