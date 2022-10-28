import * as React from "react";
import { AnalyticsWrapper } from "~/components/Analytics";

import Link from "next/link";

import "~/styles/global.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="antialiased bg-white">
      <head>
        <title>Hacker News Clone</title>
      </head>
      <body className="text-neutral-900">
        <header className="bg-neutral-800 text-white text-md sticky top-0 shadow-sm ">
          <nav className="py-4 px-6 max-w-4xl w-full flex gap-6 mx-auto">
            <h1 className="font-extrabold">
              <Link href="/" prefetch={false}>
                The <span className="text-orange-300">Orange</span> Site
              </Link>
            </h1>
            <Link href="/new" prefetch={false}>
              new
            </Link>
            <Link href="/ask" prefetch={false}>
              ask
            </Link>
            <Link href="/show" prefetch={false}>
              show
            </Link>
            <Link href="/jobs" prefetch={false}>
              jobs
            </Link>
          </nav>
          <span className="block bg-gradient-to-r from-orange-400 to-pink-600 h-1 w-full"></span>
        </header>
        <section className="bg-neutral-100 px-9 py-6">
          <div className="max-w-4xl mx-auto w-full">{children}</div>
        </section>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
