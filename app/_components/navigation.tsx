"use client";

import { useState } from "react";
import NavButton from "./NavButton";
import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const mainLinks = [
  {
    text: "Ana Sayfa",
    href: "/",
  },
  {
    text: "Odalar",
    href: "/odalar",
  },
  {
    text: "Galeri",
    href: "/galeri",
  },

  {
    text: "İletişim",
    href: "/iletisim",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);
  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none
                focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30
                transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {mainLinks.map((link) => (
              <Button
                key={link.href}
                variant={link.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(link.href)}
                className="w-full justify-start"
              >
                {link.text}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <div className="hidden lg:flex items-center gap-x-8 overflow-x-auto">
      {mainLinks.map((link) => (
        <NavButton
          key={link.href}
          text={link.text}
          href={link.href}
          isActive={pathname === link.href}
        />
      ))}
    </div>
  );
}
