// Cloudflare Worker URL - Reemplazar con tu URL del worker desplegado
export const WORKER_URL = import.meta.env.VITE_WORKER_URL || 'https://kado-contact.tu-worker.workers.dev';

// Cloudflare Turnstile Site Key - Reemplazar con tu site key
export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAAXXXXXXXXXXXXXXX';
