"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  const grecaptcha: {
    enterprise: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  };
}
interface Props {
  action: string;
  register?: React.Ref<HTMLInputElement>;
  setValue?: (name: "recaptchaToken", value: string) => void;
}

export function Recaptcha({ action, register, setValue }: Props) {
  const executeRecaptcha = () => {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_ID,
            {
              action,
            }
          );
          const tokenInput = document.getElementById(
            "recaptcha-token"
          ) as HTMLInputElement;
          if (tokenInput) tokenInput.value = token;
          if (typeof setValue === "function") {
            setValue("recaptchaToken", token);
          }
        } catch (e) {
          console.error("Recaptcha error", e);
        }
      });
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_ID}`}
        strategy="afterInteractive"
        onLoad={executeRecaptcha}
      />
      <input
        type="hidden"
        name="recaptchaToken"
        id="recaptcha-token"
        ref={register}
      />
    </>
  );
}
