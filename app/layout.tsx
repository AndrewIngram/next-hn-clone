import * as React from "react";

import Link from "next/link";

import "~/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased bg-white">
      <head>
        <title>Hacker News Clone</title>
      </head>
      <body className="text-neutral-900">
        <header className="bg-neutral-800 text-white text-md sticky top-0 shadow-sm ">
          <nav className="py-4 px-6 max-w-4xl w-full flex gap-6 mx-auto">
            <h1 className="font-extrabold">
              <Link href="/">The Orange Site</Link>
            </h1>
            <Link href="/new">new</Link>
            <Link href="/ask">ask</Link>
            <Link href="/show">show</Link>
            <Link href="/jobs">jobs</Link>
          </nav>
          <span className="block bg-gradient-to-r from-orange-400 to-pink-600 h-1 w-full"></span>
        </header>
        <section className="bg-neutral-100 px-9 py-6">
          <div className="max-w-4xl mx-auto w-full">{children}</div>
        </section>
      </body>
    </html>
  );
}
