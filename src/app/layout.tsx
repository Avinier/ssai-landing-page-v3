import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Vercel Clone | Build and deploy the best web experiences",
  description: "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: ["vercel", "nextjs", "react", "frontend", "cloud", "platform", "infrastructure", "deployment"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vercel-clone.same-app.com/",
    title: "Vercel Clone | Build and deploy the best web experiences",
    description: "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.",
    siteName: "Vercel Clone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vercel Clone | Build and deploy the best web experiences",
    description: "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ClientBody>
          <Header />
          <main className="min-h-[calc(100vh-80px)]">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
