import "@/app/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Benefit Newsfeed | (FR) Benefit Newsfeed</title>
      </head>
      <body className="w-full h-[100vh]">{children}</body>
    </html>
  );
}