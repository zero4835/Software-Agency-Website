import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="min-h-full flex gap-8 items-cneter justify-center bg-black text-white p-20">
    <Image src="/assets/logo.png" width={18} height={18} alt="Logo" />
    <Link href="/terms">Terms</Link>
    <Link href="/privacy">Privacy Policy</Link>
  </footer>
);

export default Footer;
