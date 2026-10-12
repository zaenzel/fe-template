import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">{siteConfig.name}</h1>
      <p className="max-w-xl text-muted-foreground">
        Template frontend dengan struktur feature-based. Buka contoh fitur Produk untuk melihat alur
        lengkap: komponen → hook → fungsi API → api-client.
      </p>
      <div>
        <Link href="/products" className={buttonVariants()}>
          Lihat contoh fitur
        </Link>
      </div>
    </section>
  );
}
