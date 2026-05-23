import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonic India DJ | Professional DJ Sound Service",
  description:
    "Professional DJ Sound for Every Celebration. Premium audio excellence for Indian weddings and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-full">
        {children}
      </body>
    </html>
  );
}
