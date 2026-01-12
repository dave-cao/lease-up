// app/page.tsx (Next.js App Router) or pages/index.tsx (Pages Router)
// TailwindCSS required.

import React from "react";

type NavItem = { label: string; href?: string; active?: boolean };
type Stat = { label: string; value: string; sub?: string };
type Amendment = {
  type: string;
  description: string;
  term: string;
  dates: string;
  status: "Active" | "Superseded";
};
type Contact = {
  name: string;
  role: string;
  tag?: string;
  initials: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {action ? <div className="shrink-0">{action}</div> : null}
      </header>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function IconButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
      type="button"
    >
      {children}
    </button>
  );
}

function MiniStat({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-xs text-slate-500">{stat.label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">
        {stat.value}
      </div>
      {stat.sub ? (
        <div className="mt-0.5 text-xs text-slate-500">{stat.sub}</div>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const nav: NavItem[] = [
    { label: "Summary", active: true },
    { label: "Amendments" },
    { label: "Spaces" },
    { label: "Financial" },
    { label: "Retail" },
    { label: "Lease Provisions" },
    { label: "Other Information" },
  ];

  const kpis: Stat[] = [
    { label: "Contracted Area", value: "1,766", sub: "sq ft" },
    { label: "Rent / sf", value: "$1,072.72", sub: "annualized" },
    { label: "Receivables", value: "$4,256.06", sub: "open balance" },
    { label: "Sales YTD", value: "$808.3K", sub: "USD" },
    { label: "Avg Sales", value: "$75.53K", sub: "USD" },
  ];

  const amendments: Amendment[] = [
    {
      type: "Renewal",
      description: "3rd Renewal",
      term: "46 Months",
      dates: "08/24/2024 – 08/11/2028",
      status: "Active",
    },
    {
      type: "Renewal",
      description: "2nd Renewal",
      term: "36 Months",
      dates: "08/24/2021 – 08/11/2024",
      status: "Superseded",
    },
    {
      type: "Modification",
      description: "Deferred Rent",
      term: "36 Months",
      dates: "09/24/2019 – 09/11/2021",
      status: "Superseded",
    },
    {
      type: "Renewal",
      description: "1st Renewal",
      term: "36 Months",
      dates: "09/24/2016 – 09/11/2019",
      status: "Superseded",
    },
    {
      type: "Original",
      description: "Original Term",
      term: "36 Months",
      dates: "08/01/2013 – 08/11/2016",
      status: "Superseded",
    },
  ];

  const contacts: Contact[] = [
    {
      initials: "RH",
      name: "Ruben Honsock",
      role: "Primary Billing",
      tag: "PRIMARY",
    },
    {
      initials: "RL",
      name: "Ryan Leon",
      role: "Tenant RM Leading BOW",
      tag: "SALES",
    },
    {
      initials: "SB",
      name: "Seon Becken",
      role: "Tenant Portal Private",
      tag: "OFFICE",
    },
    {
      initials: "VV",
      name: "Victorie Victorio",
      role: "Lease Administrator",
      tag: "OFFICE",
    },
    {
      initials: "SC",
      name: "Sophie Carven",
      role: "Tenant Portal Maintainer",
      tag: "OFFICE",
    },
  ];

  return (
    <div className="min-h-dvh bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white">
              <span className="text-sm font-semibold">V</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">
                Tenant Dashboard
              </div>
              <div className="text-xs text-slate-500">
                Home / Tenants / A-Game
              </div>
            </div>
          </div>

          <div className="ml-auto flex w-full max-w-xl items-center gap-2">
            <div className="relative w-full">
              <input
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pl-9 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Search tenants, contacts, leases..."
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                {/* magnifying glass */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <IconButton label="Notifications">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 17H9m8-5V9a5 5 0 10-10 0v3l-2 2h14l-2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </IconButton>
              <IconButton label="Settings">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19.4 15a7.8 7.8 0 000-6l2-1.5-2-3.5-2.3 1a8 8 0 00-5.2-3l-.4-2.5H10l-.4 2.5a8 8 0 00-5.2 3l-2.3-1-2 3.5L2.1 9a7.8 7.8 0 000 6L.1 16.5l2 3.5 2.3-1a8 8 0 005.2 3l.4 2.5h4l.4-2.5a8 8 0 005.2-3l2.3 1 2-3.5L19.4 15z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    opacity="0.25"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-[72px] lg:h-[calc(100dvh-88px)]">
          <div className="px-2 pb-3">
            <div className="text-xs font-medium text-slate-500">Tenant</div>
            <div className="mt-1 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  A-Game
                </div>
                <div className="text-xs text-slate-500">
                  Feiment Plaza • Unit 22
                </div>
              </div>
              <Pill>Current</Pill>
            </div>
          </div>

          <nav className="mt-2 space-y-1">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href ?? "#"}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                  item.active
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                <span>{item.label}</span>
                {item.active ? (
                  <span className="text-xs text-slate-200">⌘</span>
                ) : null}
              </a>
            ))}
          </nav>

          <div className="mt-4 border-t border-slate-200 pt-3">
            <button className="w-full rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
              New Action
            </button>
            <p className="mt-2 px-1 text-xs text-slate-500">
              Quick-create tasks, work orders, notes, or emails for this tenant.
            </p>
          </div>
        </aside>

        {/* Main */}
        <main className="space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {kpis.map((s) => (
              <MiniStat key={s.label} stat={s} />
            ))}
          </div>

          {/* Top panels */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Card
              title="Tenant Overview"
              action={
                <div className="flex items-center gap-2">
                  <IconButton label="Add">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton label="Edit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 20h4l10.5-10.5a2.8 2.8 0 10-4-4L4 16v4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                </div>
              }
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-medium text-slate-500">
                    Property
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    Feiment Plaza
                  </div>
                  <div className="text-xs text-slate-500">
                    comet23 • Unit 22
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">NAICS</div>
                      <div className="text-sm font-medium text-slate-900">
                        Hobby Toy & Game Stores
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        Sales Category
                      </div>
                      <div className="text-sm font-medium text-slate-900">
                        Electronics & Appliances
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">Lease Type</div>
                      <div className="text-sm font-medium text-slate-900">
                        Retail • Net
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">Status</div>
                      <Pill>Current</Pill>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-500">
                        Primary Contact
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">
                        Ruben Honsock
                      </div>
                      <div className="text-xs text-slate-500">Billing</div>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-semibold text-slate-900 shadow-sm">
                      RH
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 shadow-sm hover:bg-slate-50">
                      ✉️ yordi.demos+ruben.honsock@gmail.com
                    </button>
                    <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 shadow-sm hover:bg-slate-50">
                      📞 None
                    </button>
                    <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
                      Open Contact Actions
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              title="Tenant Summary"
              action={
                <div className="flex items-center gap-2">
                  <Pill>Lease State: Good</Pill>
                  <IconButton label="More">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 12h.01M12 12h.01M18 12h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </IconButton>
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Start Date</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    09/01/2015
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">End Date</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    08/31/2026
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Term</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    156 Months
                  </div>
                  <div className="text-xs text-slate-500">
                    (36 months from today)
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-xs text-slate-500">Open Work Orders</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    0
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-200">
                      ✓
                    </span>
                    Lease State Good
                  </div>
                  <p className="mt-2 text-sm text-emerald-900/80">
                    No active compliance issues. Monitoring renewals and sales
                    threshold.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-amber-200">
                      !
                    </span>
                    Possible Renew Risk
                  </div>
                  <p className="mt-2 text-sm text-amber-900/80">
                    Review renewal window and evaluate collection status.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom panels */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
            <Card
              title="Amendments"
              action={
                <a
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  href="#"
                >
                  See all
                </a>
              }
            >
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-xs text-slate-500">
                    <tr className="border-b border-slate-200">
                      <th className="py-2 pr-4 font-medium">Type</th>
                      <th className="py-2 pr-4 font-medium">Description</th>
                      <th className="py-2 pr-4 font-medium">Term</th>
                      <th className="py-2 pr-4 font-medium">Dates</th>
                      <th className="py-2 pr-1 font-medium text-right">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {amendments.map((a, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-3 pr-4">
                          <span className="font-medium text-slate-900">
                            {a.type}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-slate-700">
                          {a.description}
                        </td>
                        <td className="py-3 pr-4 text-slate-700">{a.term}</td>
                        <td className="py-3 pr-4 text-slate-500">{a.dates}</td>
                        <td className="py-3 pr-1 text-right">
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                              a.status === "Active"
                                ? "bg-emerald-100 text-emerald-900"
                                : "bg-slate-100 text-slate-700"
                            )}
                          >
                            {a.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card
              title="Contacts"
              action={
                <a
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  href="#"
                >
                  See all
                </a>
              }
            >
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-50"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                      {c.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-sm font-semibold text-slate-900">
                          {c.name}
                        </div>
                        {c.tag ? <Pill>{c.tag}</Pill> : null}
                      </div>
                      <div className="truncate text-xs text-slate-500">
                        {c.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <IconButton label="Email">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 6h16v12H4V6z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 7l8 6 8-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </IconButton>
                      <IconButton label="Call">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 3h3l2 5-2 1c1 3 3 5 6 6l1-2 5 2v3c0 1-1 2-2 2C10 20 4 14 4 5c0-1 1-2 2-2z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
