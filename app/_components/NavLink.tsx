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
        "inline-block rounded-lg px-2 py-1 text-xs text-zinc-100 hover:bg-zinc-400 hover:text-zinc-900 transition",
        pathName === href && "bg-zinc-300 text-slate-900"
      )}
    >
      {children}
    </Link>
  );
}
