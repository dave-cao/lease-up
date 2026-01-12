import Link from "next/link";
import { cn } from "@/lib/utils";

type NavItem = { label: string; active?: boolean; href: string };

export function SidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
            item.active
              ? "bg-primary text-primary-foreground font-medium"
              : "hover:bg-accent hover:text-accent-foreground text-muted-foreground font-normal"
          )}
        >
          <span>{item.label}</span>
          {item.active ? (
            <span className="text-[10px] opacity-70">⌘</span>
          ) : null}
        </Link>
      ))}
    </nav>
  );
}
