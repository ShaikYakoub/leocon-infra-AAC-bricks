import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEOCON INFRA – Premium AAC Blocks | Kadapa, AP",
  description:
    "LEOCON INFRA manufactures premium Autoclaved Aerated Concrete (AAC) blocks. Lightweight, fire-resistant, eco-friendly, and cost-saving building solutions. Located in APIIC Mydukur, Kadapa, Andhra Pradesh.",
  keywords: [
    "AAC blocks",
    "Autoclaved Aerated Concrete",
    "lightweight blocks",
    "Leocon Infra",
    "Kadapa",
    "building materials",
    "construction",
  ],
  themeColor: "#ea580c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8f7f4] text-[#1a1a1a]">{children}</body>
    </html>
  );
}
