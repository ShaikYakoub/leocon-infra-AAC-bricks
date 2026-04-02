import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1c1410] border-t border-white/8 pt-20 pb-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6 text-left w-full">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/footer-logo.png"
                alt="LEOCON Footer Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="text-left">
              <span className="text-white font-black text-xl tracking-tight block">
                LEOCON INFRA
              </span>
              <span className="block text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                Premium AAC Blocks
              </span>
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed mb-6 max-w-sm text-left">
            Manufacturer of premium Autoclaved Aerated Concrete blocks
            engineered for modern India. Stronger structures. Greener buildings.
          </p>
          <div className="flex flex-col gap-2 mb-6 items-start w-full">
            <a
              href="https://wa.me/7239922999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 hover:bg-orange-500/25 text-orange-400 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.082a.75.75 0 0 0 .92.92l5.226-1.474A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.964-1.363l-.356-.212-3.695 1.043 1.043-3.695-.212-.356A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Chat With Us
            </a>
          </div>
        </div>
        <div className="col-span-2 w-full">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 text-left">
                Quick Links
              </h4>
              <ul className="space-y-3 text-left">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products" },
                  { label: "About", href: "/about" },
                  { label: "Process", href: "/process" },
                  { label: "Calculator", href: "/#calculator" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-stone-500 hover:text-orange-400 text-sm transition-colors duration-200 block ml-0"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 text-left">
                Contact
              </h4>
              <address className="not-italic text-stone-500 text-sm leading-loose text-left ml-0">
                Plot-22
                <br />
                APIIC Mydukur
                <br />
                Andhra Pradesh
                <br />
                India.
              </address>
              <div className="mt-6 space-y-2 text-left ml-0">
                <a
                  href="tel:+917239922999"
                  className="flex items-center gap-2 text-stone-500 hover:text-orange-400 text-sm transition-colors duration-200 justify-start"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.89a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  7239922999
                </a>
                <a
                  href="tel:+917239944999"
                  className="flex items-center gap-2 text-stone-500 hover:text-orange-400 text-sm transition-colors duration-200 justify-start"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.89a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  7239944999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
        <p className="text-stone-600 text-xs text-center">
          &copy; {new Date().getFullYear()} LEOCON INFRA. All rights reserved.
        </p>
        <p className="text-white text-xs text-center flex items-center justify-center gap-1">
          A Website by{" "}
          <a
            href="https://maverickstechnovations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
            style={{ lineHeight: 0 }}
          >
            <Image
              src="/maverick-logo.avif"
              alt="Maverick Technovations Logo"
              width={128}
              height={128}
              className="inline-block align-middle ml-2"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}
