import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="bg-slate-900  px-6 lg:px-8 py-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="w-full flex items-center justify-between ">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderLogo() {
  return (
    <Link href="/">
      <div className="hidden lg:flex">
        <Image
          src="/images/logo.png"
          alt="Saltukbey Konagi Logo"
          width={85}
          height={100}
          priority
        />
      </div>
    </Link>
  );
}
