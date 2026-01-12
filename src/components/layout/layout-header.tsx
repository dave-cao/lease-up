import { Bell, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <span className="text-sm font-semibold tracking-tight">L</span>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Lease Up</span>
            <span className="text-xs text-muted-foreground">
              Tenant Management
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center justify-end">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-9 pl-9"
              placeholder="Search tenants, contacts, leases..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
