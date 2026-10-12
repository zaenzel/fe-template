import { env } from './env';

export const siteConfig = {
  name: env.NEXT_PUBLIC_APP_NAME,
  description: 'Frontend template: Next.js, TypeScript, Tailwind, TanStack Query.',
  nav: [
    { label: 'Beranda', href: '/' },
    { label: 'Produk', href: '/products' },
  ],
} as const;
