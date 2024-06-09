"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { NavLink } from "./NavLink";

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";

const links = [
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

export function Header() {
  return (
    <header className="py-2 bg-zinc-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Image src="/images/logo.png" width={60} height={65} alt="logo" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8 -mr-1 md:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <Transition>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {links.map((link) => (
              <MobileNavLink key={link.href} href={link.href}>
                {link.text}
              </MobileNavLink>
            ))}
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
}
