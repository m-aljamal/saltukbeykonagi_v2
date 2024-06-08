import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "inline-block rounded-lg px-2 py-1 text-sm text-white/70 hover:bg-white hover:text-slate-900 transition",
        pathName === href && "bg-white text-slate-900"
      )}
    >
      {children}
    </Link>
  );
}
