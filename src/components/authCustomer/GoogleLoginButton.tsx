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
            },
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

export function GoogleSignInButton({
  onIdToken,
  text = "signin_with",
}: GoogleSignInButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(onIdToken);

  useEffect(() => {
    callbackRef.current = onIdToken;
  }, [onIdToken]);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || !buttonRef.current) {
      return;
    }

    let cancelled = false;

    const renderButton = () => {
      if (
        cancelled ||
        !window.google?.accounts?.id ||
        !buttonRef.current
      ) {
        return;
      }

      const container = buttonRef.current;

      container.innerHTML = "";

      const width = Math.min(container.clientWidth, 356);

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (response) => {
          callbackRef.current(response.credential);
        },
      });

      window.google.accounts.id.renderButton(container, {
        theme: "outline",
        size: "large",
        width,
        text,
      });
    };

    if (window.google?.accounts?.id) {

      requestAnimationFrame(renderButton);

      return () => {
        cancelled = true;
      };
    }

    const existingScript =
      document.querySelector<HTMLScriptElement>(
        `script[src="${GSI_SCRIPT_SRC}"]`,
      );

    if (existingScript) {
      existingScript.addEventListener("load", renderButton);

      return () => {
        cancelled = true;
        existingScript.removeEventListener(
          "load",
          renderButton,
        );
      };
    }

    // Load Google Identity Services
    const script = document.createElement("script");

    script.src = GSI_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = renderButton;

    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <div
      ref={buttonRef}
      style={{
        width: "100%",
        maxWidth: 356,
        margin: "0 auto",
        overflow: "hidden",
      }}
    />
  );
}