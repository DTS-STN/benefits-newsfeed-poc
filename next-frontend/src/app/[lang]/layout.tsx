import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useTranslation } from "@/app/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benefit Navigator Newsfeed",
  description: "Benefit Navigator Newsfeed",
};

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};

export default async function RootLayout({
  children,
  params: { lang },
}: LayoutProps) {
  const { t } = await useTranslation(lang, "common");
  return (
    <html lang={lang}>
      <title>{t("title")}</title>
      <body className={inter.className}>
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
      </body>
    </html>
  );
}
