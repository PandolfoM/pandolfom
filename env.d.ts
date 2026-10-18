declare namespace NodeJS {
  interface ProcessEnv {
    // Cloudflare Turnstile site key for the contact form. The secret lives in
    // MJP Hub, whose /api/emails/send checks the token.
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
  }
}
