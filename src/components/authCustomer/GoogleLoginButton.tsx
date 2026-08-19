"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              width?: number;
              text?: "signin_with" | "signup_with" | "continue_with";
            }
          ) => void;
        };
      };
    };
  }
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GSI_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

type GoogleSignInButtonProps = {
  onIdToken: (idToken: string) => void;
  text?: "signin_with" | "signup_with";
};

export function GoogleSignInButton({ onIdToken, text = "signin_with" }: GoogleSignInButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) {
      console.error("NEXT_PUBLIC_GOOGLE_CLIENT_ID belum diset di .env.local");
      return;
    }

    function renderButton() {
      if (!window.google || !buttonRef.current) return;

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID!,
        callback: (response) => onIdToken(response.credential),
      });

      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        width: 356,
        text,
      });
    }

    // Script GSI cuma perlu dimuat sekali — kalau udah ada (dari halaman lain
    // yang sempat kepanggil sebelumnya), langsung render tanpa nunggu load lagi.
    if (window.google?.accounts?.id) {
      renderButton();
      return;
    }

    const existingScript = document.querySelector(`script[src="${GSI_SCRIPT_SRC}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", renderButton);
      return () => existingScript.removeEventListener("load", renderButton);
    }

    const script = document.createElement("script");
    script.src = GSI_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = renderButton;
    document.body.appendChild(script);
  }, [onIdToken, text]);

  return <div ref={buttonRef} />;
}
