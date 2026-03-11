import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://leoconinfra.com";
const siteName = "LEOCON INFRA";
const description =
  "Premium Autoclaved Aerated Concrete (AAC) blocks engineered for faster construction, lower costs, and sustainable building. India's trusted AAC manufacturer in Kadapa, Andhra Pradesh.";

export const metadata: Metadata = {
  title: "LEOCON INFRA – Premium AAC Blocks | Kadapa, AP",
  description,
  keywords: [
    "AAC blocks",
    "Autoclaved Aerated Concrete blocks",
    "lightweight building blocks",
    "LEOCON Infra",
    "Kadapa AAC blocks",
    "sustainable construction materials",
    "fire-resistant blocks",
    "eco-friendly building materials",
    "AAC manufacturer India",
    "construction materials Andhra Pradesh",
  ],
  icons: {
    icon: "/footer-logo.png",
  },
  openGraph: {
    title: "LEOCON INFRA – Premium AAC Blocks | Faster & Greener Construction",
    description,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LEOCON INFRA Premium AAC Blocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEOCON INFRA – Premium AAC Blocks",
    description,
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LEOCON INFRA",
    url: "https://leoconinfra.com",
    logo: "https://leoconinfra.com/logo.png",
    description:
      "Premium Autoclaved Aerated Concrete (AAC) blocks manufacturer in Kadapa, Andhra Pradesh, India",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot-22, APIIC Mydukur",
      addressLocality: "Kadapa",
      addressRegion: "Andhra Pradesh",
      postalCode: "516301",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: "+917239922999",
      url: "https://wa.me/7239922999",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#f8f7f4] text-[#1a1a1a]">{children}</body>
    </html>
  );
}
