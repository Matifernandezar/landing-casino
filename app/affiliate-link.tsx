import type { AnchorHTMLAttributes, ReactNode } from "react";
import { affiliateRel, siteConfig } from "./site-config";

type AffiliateLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function AffiliateLink({ children, ...props }: AffiliateLinkProps) {
  return (
    <a
      href={siteConfig.featuredOperator.url}
      target="_blank"
      rel={affiliateRel}
      {...props}
    >
      {children}
    </a>
  );
}
