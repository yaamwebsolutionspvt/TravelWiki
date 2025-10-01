import React, { useEffect, useRef } from 'react';

export default function EmailObfuscated({ user = '', domain = '', tld = '', className = '', asLink = false, label = null }) {
  const anchorRef = useRef(null);
  const text = label || `${user}[at]${domain}[dot]${tld}`;

  useEffect(() => {
    if (asLink && anchorRef.current) {
      const real = `${user}@${domain}.${tld}`;
      anchorRef.current.href = `mailto:${real}`;
      anchorRef.current.textContent = label || real;
    }
  }, [asLink, user, domain, tld, label]);

  if (asLink) {
    return <a ref={anchorRef} className={className} aria-label="Email" rel="nofollow noopener noreferrer">{text}</a>;
  }
  return <span className={className} aria-label="Email">{text}</span>;
}


