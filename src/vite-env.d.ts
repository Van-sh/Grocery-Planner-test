/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_GOOGLE_LOGIN_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
