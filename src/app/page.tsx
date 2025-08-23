// app/page.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";

// --- Types
interface FeaturedItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface CategoryItem {
  name: string;
  items: string[];
}

export default function HomePage() {
  const featured: FeaturedItem[] = useMemo(
    () => [
      {
        title: "Testimonial Card",
        description:
          "Compact social proof module with avatar, name, role, and quote.",
        href: "/testimonial-card", // <-- adjust to your route
        badge: "New",
      },
      {
        title: "Blog Card",
        description:
          "Image-forward article preview with badges, title and excerpt.",
        href: "/blog-card", // <-- adjust to your route
      },
      {
        title: "Newsletter Section",
        description: "Email capture with validation and success toast.",
        href: "/newsletter", // placeholder for future page
      },
      {
        title: "404 View",
        description: "Friendly error state with primary CTA and shortcuts.",
        href: "/404-demo", // placeholder
      },
    ],
    []
  );

  const categories: CategoryItem[] = useMemo(
    () => [
      {
        name: "Content",
        items: ["Blog Cards", "Testimonial Cards", "About Page", "FAQ"],
      },
      {
        name: "Forms",
        items: ["Newsletter", "Login / Sign Up", "Cookie Consent", "Contact"],
      },
      {
        name: "Commerce",
        items: ["Product Details", "Cart", "Checkout", "Order History"],
      },
      {
        name: "Utility",
        items: ["404", "Empty States", "Pagination", "Toasts"],
      },
    ],
    []
  );

  return (
    <main className="min-h-dvh bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              UI Components Showcase
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Robust, beautiful, modern UI for the real world
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A living collection of production-ready views and components. Built
              with Next.js and Tailwind, focused on reusability, accessibility,
              and clean, scalable code.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#featured"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Explore Components
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                About this Project
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 -z-10 blur-3xl"
        >
          <div className="mx-auto h-64 w-[60rem] rounded-full bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-sky-200 opacity-60" />
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Featured Components
            </h2>
            <p className="mt-1 text-slate-600">
              A rotating selection from the library.
            </p>
          </div>
          <Link
            href="#categories"
            className="hidden rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
          >
            Browse by category
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group block rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  {item.badge ? (
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600">
                  <span className="mr-1 transition group-hover:translate-x-0.5">View demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h9.19L9.22 5.53a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {cat.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((i) => (
                  <li key={i}>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                About this project
              </h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                This is a curated, growing library of UI components and views I
                build to demonstrate front‑end craftsmanship: reusable patterns,
                strong UX, accessibility, and performance-minded code. Each page
                includes an isolated demo and a breakdown of the component’s
                responsibilities and design decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Tech</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                <li>Next.js (App Router)</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Accessible, composable components</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} • UI Components Showcase
          </p>
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/"
              className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50"
            >
              GitHub
            </Link>
            <Link
              href="/"
              className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
