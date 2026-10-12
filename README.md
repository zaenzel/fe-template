# FE Template

Template frontend siap pakai untuk proyek baru: **Next.js 16 (App Router) · React 19 · TypeScript
strict · Tailwind CSS v4 · TanStack Query · Zustand · React Hook Form + Zod**, dengan struktur
folder feature-based, aturan arsitektur yang dijaga ESLint, dan dokumentasi untuk developer
maupun AI agent.

## Mulai cepat

```bash
# 1. Salin template ke proyek baru (tanpa riwayat git template)
cp -r ~/coding/fe-template ~/coding/nama-proyek-baru
cd ~/coding/nama-proyek-baru
rm -rf .git node_modules .next && git init -b main

# 2. Install & jalankan
pnpm install
cp .env.example .env.local
pnpm dev
```

Buka http://localhost:3000 lalu klik **Lihat contoh fitur**. Contoh `products` berjalan dengan mock
API bawaan, jadi tidak perlu backend.

> Alternatif: push repo ini ke GitHub, centang **Template repository** di Settings, lalu buat
> proyek baru lewat tombol **Use this template**.

Setelah menyalin, ubah `name` di `package.json` dan `NEXT_PUBLIC_APP_NAME` di `.env.local`.

## Perintah

| Perintah         | Fungsi                       |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Dev server                   |
| `pnpm build`     | Production build             |
| `pnpm lint`      | ESLint + aturan arsitektur   |
| `pnpm typecheck` | Generate route types + `tsc` |
| `pnpm test`      | Unit/komponen test (Vitest)  |
| `pnpm test:e2e`  | E2E (Playwright)             |
| `pnpm check`     | lint + typecheck + test      |
| `pnpm format`    | Prettier                     |

E2E pertama kali: `pnpm exec playwright install chromium`.

## Struktur singkat

```
src/
├── app/          routing saja (page tipis)
├── features/     logika bisnis per domain — contoh: features/products
├── components/   ui/ (primitive), common/ (generik), layout/
├── hooks/        hook generik
├── lib/          api-client, query-client, utils
├── config/       env (tervalidasi), site config
├── providers/    provider global
├── types/        tipe global
├── styles/       design token Tailwind
└── mocks/        data mock (hapus saat backend asli siap)
```

Alur data: **komponen → hook (TanStack Query) → fungsi API → api-client**. Komponen tidak pernah
memanggil HTTP langsung — ESLint akan menolaknya.

## Dokumentasi

| File                       | Isi                                                      |
| -------------------------- | -------------------------------------------------------- |
| `AGENTS.md`                | Aturan wajib, peta folder, perintah — **baca pertama**   |
| `docs/architecture.md`     | Lapisan, arah import, alur data, server vs client, state |
| `docs/conventions.md`      | Gaya kode, form, styling, testing, commit                |
| `docs/adding-a-feature.md` | Langkah membuat fitur baru + cara menghapus contoh       |

### Untuk AI agent

- `AGENTS.md` dibaca otomatis oleh Codex, Cursor, Copilot, dan agent lain yang mendukung standar ini.
- `CLAUDE.md` (Claude Code) dan `GEMINI.md` (Gemini CLI) meng-import `AGENTS.md`, jadi aturan
  cukup ditulis di satu tempat.
- `.claude/skills/new-feature/` adalah skill Claude Code untuk membuat fitur baru sesuai pola repo.

## Yang sudah disiapkan

- Validasi env dengan Zod (`src/config/env.ts`) — app gagal start jika env salah.
- `api-client` dengan normalisasi error ke `ApiError` dan titik untuk token auth / handling 401.
- QueryClient dengan default yang masuk akal (tanpa retry untuk 4xx).
- Komponen dasar gaya shadcn/ui; tambah komponen lain dengan `pnpm dlx shadcn@latest add <nama>`.
- Husky + lint-staged (lint & format saat commit) dan commitlint (Conventional Commits).
- GitHub Actions: lint, format, typecheck, test, build.
- Pengaturan VS Code + ekstensi yang direkomendasikan.

## Menyambungkan ke backend asli

1. Set `NEXT_PUBLIC_API_URL` di `.env.local` ke URL backend.
2. Sesuaikan `src/types/api.ts` (bentuk pagination & error) dan interceptor di
   `src/lib/api-client.ts` (token, 401).
3. Hapus `src/mocks/` dan `src/app/api/products/`.
